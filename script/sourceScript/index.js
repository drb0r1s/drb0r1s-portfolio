import loadingScript from "../../functions/loadingScript.js";
import sourceParallax from "./sourceParallax.js";
import contextMenu from "../../functions/contextMenu.js";

import { otherContextMenuData } from "../../functions/data.js";

window.addEventListener("load", () => {
    loadingScript();
    sourceParallax();
    contextMenu(otherContextMenuData, "other-context-menu");
});