import loadingScript from "../../functions/loadingScript.js";
import headerScript from "./headerScript.js";
import mainScript from "./mainScript.js";
import skillsScript from "./skillsScript.js";
import projectsScript from "./projectsScript.js";
import contactScript from "./contactScript.js";
import gameScript from "./gameScript.js";
import menuObserver from "./menuObserver.js";
import contextMenu from "../../functions/contextMenu.js";

import { contextMenuData } from "../../functions/data.js";

window.addEventListener("load", () => {
    loadingScript();
    headerScript();
    mainScript();
    skillsScript();
    projectsScript();
    contactScript();
    gameScript();
    menuObserver();
    contextMenu(contextMenuData);
});