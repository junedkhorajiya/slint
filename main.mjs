import * as slint from "slint-ui";
let ui = slint.loadFile("./src/index.slint");
let index = new ui.index();

await index.run();