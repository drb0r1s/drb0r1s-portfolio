import { headerData } from "../../functions/data.js";

export default function headerScript() {
    const header = document.querySelector("header");
    
    let headerType;
    let isClicked = false;
    checkHeaderType();
    headerOverflow();

    window.addEventListener("resize", () => {
        checkHeaderType();
        headerOverflow();
    });

    window.addEventListener("scroll", () => {
        if(window.scrollY >= 100) header.id = "active-header";
        
        else {
            header.id = "";
            
            const menuButton = document.querySelector(".header-mobile-button");
            const mobileMenu = document.querySelector(".mobile-menu");
            
            if(mobileMenu !== null) {
                menuButton.id = "";
                mobileMenu.id = "";
                isClicked = false;
            }
        }
    });

    function checkHeaderType() {
        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        
        const newHeaderType = isMobile ? "mobile" : "classic";
        if(newHeaderType === headerType) return;

        if(isMobile) {
            mobileHeader();
            headerType = "mobile";
        }

        else {
            classicHeader();
            headerType = "classic";
        }
    }
    
    function classicHeader() {
        headerCleanup("div");
        
        const nav = document.createElement("nav");
        header.appendChild(nav);

        addButtons(nav);
    }
    
    function mobileHeader() {
        headerCleanup("nav");
        
        const menuButton = document.createElement("div");
        menuButton.setAttribute("class", "header-mobile-button");
        header.appendChild(menuButton);

        const body = document.querySelector("body");

        const mobileMenu = document.createElement("div");
        mobileMenu.setAttribute("class", "mobile-menu");
        body.appendChild(mobileMenu);

        const logo = document.createElement("img");
        logo.setAttribute("src", "../../images/drb0r1s-black-logo.png");
        logo.setAttribute("alt", "B O R I S");
        mobileMenu.appendChild(logo);

        const nav = document.createElement("nav");
        mobileMenu.appendChild(nav);

        addButtons(nav);

        menuButton.onclick = () => {
            if(menuButton === null) return;
        
            if(isClicked) {
                menuButton.id = "";
                mobileMenu.id = "";
                isClicked = false;
            }

            else {
                menuButton.id = "active-header-mobile-button";
                mobileMenu.id = "active-mobile-menu";
                isClicked = true;
            }
        }
    }

    function addButtons(nav) {
        headerData.forEach((section) => {
            const newSection = document.createElement("a");
            newSection.setAttribute("href", `#${section}`);
            newSection.innerHTML = section;
            nav.appendChild(newSection);
        });
    }

    function headerCleanup(target) {
        const headerChildren = [...header.children];
        
        const mobileMenu = document.querySelector(".mobile-menu");
        if(target === "div" && mobileMenu !== null) mobileMenu.remove();

        headerChildren.forEach((child) => {
            if(child.tagName.toLowerCase() === target) child.remove();
        });
    }

    function headerOverflow() {
        const mobileMenu = document.querySelector(".mobile-menu");
        
        if(mobileMenu !== null) {
            if(mobileMenu.scrollHeight > mobileMenu.clientHeight) {
                mobileMenu.style.overflowY = "scroll";
                mobileMenu.style.justifyContent = "flex-start";
            }

            else {
                mobileMenu.style.overflowY = "visible";
                mobileMenu.style.justifyContent = "center";
            }
        }
    }
}