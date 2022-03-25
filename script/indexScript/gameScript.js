export default function gameScript() {
    if(localStorage.getItem("HIGH_SCORE") === null) localStorage.setItem("HIGH_SCORE", 0);
    
    const gameStarter = document.getElementById("game-starter");
    gameStarter.addEventListener("click", prepareGame);

    const gameInfo = document.querySelector(".game-info");
    const canvas = document.getElementById("game-canvas");

    const breakpoints = {
        xxs: "(max-width: 319px)",
        xs: "(min-width: 320px) and (max-width: 480px)",
        sm: "(min-width: 481px) and (max-width: 768px)",
        md: "(min-width: 769px) and (max-width: 1024px)",
        lg: "(min-width: 1025px) and (max-width: 1200px)",
        xl: "(min-width: 1201px) and (max-width: 1699px)",
        xxl: "(min-width: 1700px)"
    };

    const infoText = "Press <span>W, A, D</span> or <span>Arrow Up, Left, Right</span> to move.";
    const mobileInfoText = "<span>Click</span> to jump.";

    const defaultValues = {
        width: "900",
        blocks: { player: 100, error: 80 },
        playerX: 1,
        errorMoveValue: 15,
        gameInfoText: infoText
    };

    const canvasValues = {
        xxs: {
            width: "230",
            blocks: { player: 75, error: 60 },
            playerX: 5,
            errorMoveValue: 6,
            gameInfoText: mobileInfoText
        },

        xs: {
            width: "310",
            blocks: { player: 75, error: 60 },
            playerX: 4,
            errorMoveValue: 7,
            gameInfoText: mobileInfoText
        },

        sm: {
            width: "450",
            playerX: 4,
            errorMoveValue: 7,
            gameInfoText: mobileInfoText
        },

        md: {
            width: "700"
        }
    };

    let breakpoint;
    let canvasValue;

    setBreakpoints();
    window.addEventListener("resize", setBreakpoints);

    function setBreakpoints() {
        Object.values(breakpoints).forEach((value, index) => {
            if(window.matchMedia(value).matches) breakpoint = Object.keys(breakpoints)[index];
        });

        let isDefault = true;

        Object.keys(canvasValues).forEach((value, index) => {
            if(value === breakpoint) {
                const currentBreakpoint = Object.values(canvasValues)[index];
                const currentBreakpointKeys = Object.keys(currentBreakpoint);
                const defaultProps = Object.keys(defaultValues);
                
                let newObject = currentBreakpoint;
                let falseProps = {};

                defaultProps.forEach((prop, index) => {
                    let isPropFalse = true;
                    
                    for(let i = 0; i < currentBreakpointKeys.length; i++) {
                        if(prop === currentBreakpointKeys[i]) isPropFalse = false;
                    }

                    if(isPropFalse) falseProps = {...falseProps, [prop]: Object.values(defaultValues)[index]};
                });

                newObject = {...newObject, ...falseProps};
                
                canvasValue = newObject;
                isDefault = false;
            }
        });

        if(isDefault) canvasValue = defaultValues;

        canvas.height = "300";
        canvas.width = canvasValue.width;
    }

    const ctx = canvas.getContext("2d");

    function prepareGame() {
        gameStarter.style.opacity = "0";
        gameStarter.removeEventListener("click", prepareGame);
        
        startGame();

        setTimeout(() => {
            gameStarter.remove();
        }, 500);
    }

    function startGame() {
        const keys = [
            "ArrowUp", "ArrowRight", "ArrowLeft",
            "w", "d", "a"
        ];

        let activeKeys = [];
        let prevKey;
        let isClicked = false;

        let player;
        let background;

        const getPlayer = new Image();
        getPlayer.src =  "../images/10-b-white-logo.png";

        const getBackground = new Image();
        getBackground.src = "../images/game-bg.jpg";
        
        getPlayer.onload = () => {
            player = new Player(getPlayer);
            background = new Background(getBackground);
            start();
        }

        const errorList = [
            "../images/game-error-1.png", "../images/game-error-2.png", "../images/game-error-3.png",
            "../images/game-error-4.png"
        ];

        const errorImages = [];
        
        for(let i = 0; i < errorList.length; i++) {
            const getError = new Image();
            getError.src = errorList[i];

            getError.onload = () => {
                errorImages.push(getError);
            }
        }

        let activeErrors = [];
        let score = 0;
        let gameStarted = false;
        let isGameOver = false;

        setInterval(() => {
            if(gameStarted) activeErrors.push(new Error(errorImages[Math.floor(Math.random() * errorImages.length)]));
        }, Math.floor(Math.random() * (3500 - 1500) + 1500));

        function start() {
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            background.draw();
            background.move(activeKeys);
            
            player.draw();
            player.move(activeKeys);
            
            if(gameStarted) {
                gameInfo.classList.remove("active-game-info");
                
                activeErrors = activeErrors.filter((error) => !error.delete);
                
                activeErrors.forEach((error) => {
                    error.draw();
                    error.move();
                
                    if(
                        error.x > player.x &&
                        error.x < player.x + player.playerWidth * (player.player.width / player.player.height) &&
                        error.y + (error.block - error.errorHeight) < player.y + player.playerHeight
                    ) isGameOver = true;
    
                    if(error.x < 0 && !error.delete) score++;
                });
            }

            else {
                gameInfo.classList.add("active-game-info");
                
                setTimeout(() => {
                    gameInfo.innerHTML = canvasValue.gameInfoText;
                }, 300);
            }

            ctx.fillStyle = "white";
            ctx.font = "30px monospace";
            ctx.fillText(`Score: ${score}`, 20, 30);
            ctx.fillText(`HI: ${localStorage.getItem("HIGH_SCORE")}`, 20, 60);

            if(!isGameOver) requestAnimationFrame(start);
            else gameOver();
        }

        function gameOver() {
            const gameOverScreen = document.querySelector(".game-over-screen");
            const gameOverScreenContent = document.querySelector(".game-over-screen-content");

            const gameOverScore = document.querySelector(".scoreboard strong");
            const gameOverHI = document.querySelector(".scoreboard p");
            
            gameOverScore.innerHTML = `score: ${score}`;

            if(localStorage.getItem("HIGH_SCORE") < score) {
                localStorage.setItem("HIGH_SCORE", score);
                gameOverHI.innerHTML = `high score: ${score}`;
            }
            
            else gameOverHI.innerHTML = `high score: ${localStorage.getItem("HIGH_SCORE")}`;

            gameOverScreen.style.display = "flex";

            setTimeout(() => {
                gameOverScreen.classList.add("active-game-over-screen");

                setTimeout(() => {
                    gameOverScreenContent.style.opacity = "1";
                }, 300);
            }, 100);

            const gameOverButton = document.querySelector(".game-over-screen button");
            
            gameOverButton.onclick = () => {
                gameOverScreenContent.style.opacity = "0";
                
                setTimeout(() => {
                    gameOverScreen.classList.remove("active-game-over-screen");
                    
                    setTimeout(() => {
                        gameOverScreen.style.display = "none";
                    }, 300);
                    
                    restart();
                }, 300);
            }
        }

        function restart() {
            let isRestarted = true;
            
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            background.draw();
            background.reset();
            
            player.draw();
            player.reset();
            
            activeErrors.forEach((error) => {
                error.draw();
                error.reset();
            
                if(
                    error.x !== error.defaultX ||
                    error.y !== error.defaultY
                ) isRestarted = false;
            });

            if(
                player.x !== player.defaultX ||
                player.y !== player.defaultY
            ) isRestarted = false;

            if(isRestarted) startGame();
            else requestAnimationFrame(restart);
        }
        
        window.addEventListener("keydown", (event) => {
            if(keys.indexOf(event.key) === -1) return;
            
            event.preventDefault();

            if(!gameStarted) gameStarted = true;

            if(prevKey === event.key) return;
            prevKey = event.key;
            
            if(
                event.key === "ArrowUp" ||
                event.key === "w"
            ) setTimeout(() => removeKey("ArrowUp"), 300);

            if(
                (event.key === "ArrowRight" ||
                event.key === "d") &&
                activeKeys.indexOf("left") > - 1
            ) removeKey("ArrowLeft");

            if(
                (event.key === "ArrowLeft" ||
                event.key === "a") &&
                activeKeys.indexOf("right") > - 1
            ) removeKey("ArrowRight");
            
            checkKey(translateKey(event.key));
        });

        window.addEventListener("keyup", (event) => {
            removeKey(event.key);
            prevKey = "";
        });

        canvas.addEventListener("click", () => {
            if(isClicked || activeKeys.indexOf("up") > -1) return;
            isClicked = true;

            if(!gameStarted) gameStarted = true;

            checkKey(translateKey("ArrowUp"));
            
            setTimeout(() => {
                removeKey("ArrowUp");
                setTimeout(() => { isClicked = false }, 300);
            }, 300);
        });

        function checkKey(key) {
            if(activeKeys.indexOf(key) > -1) return;
            else activeKeys.push(key);
        }

        function translateKey(key) {
            if(key[0] === "A") return key.replace("Arrow", "").toLowerCase();
            
            else {
                switch(key) {
                    case "w": return "up";
                    case "d": return "right";
                    case "a": return "left";
                    default: return key;
                }
            }
        }

        function removeKey(key) {
            return activeKeys = activeKeys.filter((activeKey) => activeKey !== translateKey(key));
        }
    }

    class Player {
        constructor(player) {
            this.height = canvas.height;
            this.width = canvas.width;
            this.block = canvasValue.blocks.player;
            this.player = player;
            this.playerWidth = this.block;
            this.playerHeight = this.block * this.player.height / this.player.width;
            this.x = this.block / canvasValue.playerX;
            this.y = this.height - this.playerHeight;
            this.defaultX = this.block / canvasValue.playerX;
            this.defaultY = this.height - this.playerHeight;
            this.moveValue = 10;
        }

        draw() {
            ctx.drawImage(
                this.player, this.x, this.y,
                this.playerWidth, this.playerHeight
            );
        }

        move(keys) {
            if(keys.indexOf("up") > -1) { if(this.y > 0) this.y -= this.moveValue }
            else { if(this.y < this.defaultY) this.y += this.moveValue }

            if(keys.indexOf("right") > - 1) { if(this.x < this.width - this.block) this.x += this.moveValue}
            if(keys.indexOf("left") > -1) { if(this.x > 0) this.x -= this.moveValue }
        }

        reset() {
            if(this.x !== this.defaultX) {
                if(this.x > this.defaultX) this.x -= this.moveValue;
                else this.x += this.moveValue;
            }

            if(this.y !== this.defaultY) {
                if(this.y > this.defaultY) this.y -= this.moveValue;
                else this.y += this.moveValue;
            }
        }
    }

    class Error {
        constructor(error) {
            this.height = canvas.height;
            this.width = canvas.width;
            this.block = canvasValue.blocks.error;
            this.error = error;
            this.errorWidth = this.block;
            this.errorHeight = this.block * this.error.height / this.error.width;
            this.x = this.width + this.errorWidth;
            this.y = this.height - this.errorHeight - 10;
            this.defaultX = this.width + this.errorWidth;
            this.defaultY = this.height - this.errorHeight - 10;
            this.moveValue = Math.floor(Math.random() * (canvasValue.errorMoveValue - 5) + 5);
            this.delete = false;
        }

        draw() {
            ctx.drawImage(
                this.error, this.x, this.y,
                this.errorWidth, this.errorHeight
            );
        }

        move() {
            this.x -= this.moveValue;
            if(this.x + this.errorWidth < 0) this.delete = true;
        }

        reset() {
            if(this.x !== this.defaultX) {
                if(this.x > this.defaultX) this.x -= this.moveValue;
                else this.x += this.moveValue;
            }

            if(this.y !== this.defaultY) {
                if(this.y > this.defaultY) this.y -= this.moveValue;
                else this.y += this.moveValue;
            }
        }
    }

    class Background {
        constructor(bg) {
            this.height = canvas.height;
            this.width = canvas.width;
            this.bg = bg;
            this.bgWidth = 1920;
            this.bgHeight = 1080;
            this.bgMoveUnit = 60;
            this.x = this.bgWidth / -2;
            this.y = (this.bgHeight - this.height) * -1;
            this.defaultX = this.bgWidth / -2;
            this.defaultY = (this.bgHeight - this.height) * -1;
            this.moveValue = 5;
        }

        draw() {
            ctx.drawImage(
                this.bg, this.x - this.bgWidth + this.bgMoveUnit, this.y,
                this.bgWidth, this.bgHeight
            );
            
            ctx.drawImage(
                this.bg, this.x, this.y,
                this.bgWidth, this.bgHeight
            );

            ctx.drawImage(
                this.bg, this.x + this.bgWidth - this.bgMoveUnit, this.y,
                this.bgWidth, this.bgHeight
            );
        }

        move(keys) {
            if(keys.indexOf("up") > -1) this.y += this.moveValue;
            else { if(this.y !== (this.bgHeight - this.height) * -1) this.y -= this.moveValue }
            
            if(
                this.x < (this.bgWidth - this.bgMoveUnit) * -1 ||
                this.x > this.bgWidth + this.bgMoveUnit
            ) this.x = 0;

            if(keys.indexOf("right") > - 1) this.x -= this.moveValue;
            if(keys.indexOf("left") > - 1) this.x += this.moveValue;
        }

        reset() {
            if(this.x !== this.defaultX) {
                if(this.x > this.defaultX) this.x -= this.moveValue;
                else this.x += this.moveValue;
            }

            if(this.y !== this.defaultY) {
                if(this.y > this.defaultY) this.y -= this.moveValue;
                else this.y += this.moveValue;
            }
        }
    }
}