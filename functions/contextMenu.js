import * as cMenu from "./contextMenuFunctions.js";

export default function contextMenu(data, specialClass) {
    const { createMenu, setMenuPosition, cancelMenu, isMobileContextMenu } = cMenu;
    
    window.addEventListener("contextmenu", (event) => {
        event.preventDefault();

        const menu = document.querySelector(".context-menu");

        if(menu === null) createMenu(event, data, specialClass);
        else setMenuPosition(event, menu);

        window.addEventListener("click", cancelMenu);
        window.addEventListener("resize", isMobileContextMenu);
    });
}