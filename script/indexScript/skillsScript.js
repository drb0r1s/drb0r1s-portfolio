import { skillsData } from "../../functions/data.js";

export default function skillsScript() {
    const keyboard = document.querySelector(".keyboard");
    
    skillsData.forEach((skill, index) => {
        const newButton = document.createElement("button");
        newButton.setAttribute("id", `keyboard-${skill.skill}`);
        keyboard.appendChild(newButton);

        const format = index === skillsData.length - 1 || index === skillsData.length - 2 ? "png" : "svg";

        const buttonImg = document.createElement("img");
        buttonImg.setAttribute("src", `../images/skills-${skill.skill}.${format}`);
        buttonImg.setAttribute("alt", skill.skill.toUpperCase());
        newButton.appendChild(buttonImg);
    });

    setButtons();
    
    function setButtons() {
        const keyboardButtons = document.querySelectorAll(".keyboard button");

        for(let i = 0; i < keyboardButtons.length; i++) {
            keyboardButtons[i].addEventListener("click", () => {
                const buttonSkill = keyboardButtons[i].id.replace("keyboard-", "");
                let skillInfo;

                skillsData.forEach((skill) => {
                    if(buttonSkill === skill.skill) return skillInfo = {...skill};
                });

                const { skill, text, link, lineContent } = skillInfo;
                setScreen(buttonSkill, text, link, lineContent);

                if(buttonSkill === skill) {
                    keyboardButtons.forEach((button) => {
                        button.classList.remove("active-keyboard-button");
                    });

                    keyboardButtons[i].classList.add("active-keyboard-button");
                }
            });
        }
    }
}

function setScreen(title, content, link, lineContent) {
    const screen = document.querySelector(".screen");
    
    const skillsLineP = document.querySelector(".skills .work-line p");
    skillsLineP.innerText = lineContent;
    skillsLineP.classList.add("skills-line-p");
    
    if(Object.values(screen.classList).indexOf("active-screen") === -1) {
        screen.classList.add("active-screen");
            
        setTimeout(() => {
            const screenH3 = document.querySelector(".screen h3");
            screenH3.remove();
                
            const createScreenStrong = document.createElement("strong");
            createScreenStrong.innerHTML = title;
            screen.appendChild(createScreenStrong);

            const createScreenP = document.createElement("p");
            createScreenP.innerHTML = content;
            screen.appendChild(createScreenP);

            const createScreenA = document.createElement("a");
            createScreenA.innerHTML = "learn more";
            createScreenA.setAttribute("href", link);
            screen.appendChild(createScreenA);

            setTimeout(() => setScreenContent(
                createScreenStrong, createScreenP, createScreenA
            ), 100);
        }, 300);
    }

    else {
        const screenStrong = document.querySelector(".screen strong");
        const screenP = document.querySelector(".screen p");
        const screenA = document.querySelector(".screen a");
        
        screenStrong.innerHTML = title;
        screenP.innerHTML = content;
        screenA.setAttribute("href", link);

        setTimeout(() => setScreenContent(screenStrong, screenP, screenA), 100);
    }

    function setScreenContent(strong, p, a) {
        strong.classList.add("active-screen-content");
        p.classList.add("active-screen-content");
        a.classList.add("active-screen-content");
    }
}