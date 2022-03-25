const body = document.querySelector("body");

export function createMenu(event, data, specialClass) {
    const createContextMenu = document.createElement("div");
    createContextMenu.setAttribute("class", specialClass ? `context-menu ${specialClass}` : "context-menu");
    createContextMenu.style.left = event.pageX + "px";
    createContextMenu.style.top = event.pageY + "px";
    body.appendChild(createContextMenu);

    data.forEach((field) => {
        const contextMenuField = document.createElement("div");
        contextMenuField.setAttribute("class", `context-menu-section context-menu-${field.field}`);
        createContextMenu.appendChild(contextMenuField);

        field.buttons.forEach((button) => {
            const isButton = typeof button === "object";
            
            const contextMenuFieldButton = document.createElement(isButton ? "button" : "a");

            if(isButton) {
                contextMenuFieldButton.innerHTML = button.name;
                contextMenuFieldButton.onclick = button.function;
            }

            else {
                contextMenuFieldButton.innerHTML = button;
                contextMenuFieldButton.setAttribute("href", `#${button}`);
            }

            contextMenuField.appendChild(contextMenuFieldButton);
        });
    });

    setMenuPosition(event, createContextMenu);
    isMobileContextMenu();

    setTimeout(() => {
        createContextMenu.id = "active-context-menu";

        setTimeout(() => {
            const sectionsArray = [...createContextMenu.children];
            
            sectionsArray.forEach((child) => {
                if(!child.classList.contains("active-context-menu-section")) child.classList.add("active-context-menu-section");
            });
        }, 300);
    }, 100);
}

export function setMenuPosition(event, thisMenu) {
    const bodyWidth = parseInt(getComputedStyle(body).getPropertyValue("width"));
    const bodyHeight = parseInt(getComputedStyle(body).getPropertyValue("height"));

    const menuWidth = parseInt(getComputedStyle(thisMenu).getPropertyValue("max-width"));
    const menuHeight = parseInt(getComputedStyle(thisMenu).getPropertyValue("max-height"));

    let isPositionValid = { left: true, top: true };
    
    if(menuWidth + event.clientX > bodyWidth) {
        const calcLeft = menuWidth + event.clientX - bodyWidth;
        
        thisMenu.style.left = event.clientX - calcLeft + "px";
        isPositionValid.left = false;
    }

    if(menuHeight + event.pageY > bodyHeight) {
        const calcTop = menuHeight + event.pageY - bodyHeight;

        thisMenu.style.top = event.clientY - calcTop + "px";
        isPositionValid.top = false;
    }

    if(isPositionValid.left) thisMenu.style.left = event.clientX + "px";
    if(isPositionValid.top) thisMenu.style.top = event.clientY + "px";
}

export function cancelMenu(event) {
    const newMenu = document.querySelector(".context-menu");

    if(
        !event.target.classList.contains("context-menu") &&
        newMenu !== null
    ) {
        window.removeEventListener("click", cancelMenu);
        
        const sectionsArray = [...newMenu.children];
        
        sectionsArray.forEach((child) => {
            if(child.classList.contains("active-context-menu-section")) child.classList.remove("active-context-menu-section");
        });
        
        setTimeout(() => {
            newMenu.id = "";
            setTimeout(() => newMenu.remove(), 300);
        }, 300);
    }
}

export function isMobileContextMenu() {
    const newMenu = document.querySelector(".context-menu");

    if(newMenu !== null) {
        window.removeEventListener("resize", isMobileContextMenu);
    
        const breakpoint = "(max-width: 768px)";
        if(window.matchMedia(breakpoint).matches) newMenu.classList.add("mobile-context-menu");
    }
}