import * as Windows from "./windows.js";

Windows.create_test_window();

//testing

const start_button = document.querySelector("#start_button");
start_button.onclick = function () {
    // alert("entra");
    Windows.create_test_window();
}

