import loadingScript from "../../functions/loadingScript.js";
import errorStatus from "./errorStatus.js";
import contextMenu from "../../functions/contextMenu.js";

import { otherContextMenuData } from "../../functions/data.js";

window.addEventListener("load", () => {
    loadingScript();
    errorStatus();
    contextMenu(otherContextMenuData, "other-context-menu");
});