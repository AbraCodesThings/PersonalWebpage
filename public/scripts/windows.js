var window_index = 0;

export function create_test_window(){
    let desktop_element = document.getElementById("desktop");
    const window = document.createElement("div");
    window.setAttribute("id", `window_${window_index}`);
    window.setAttribute("class", "draggable_window")   
    window.innerHTML = //this could be a component
        `
            <div id="window_${window_index}_header" class="draggable_window_header">
                <span>Test Window</span>
                <span class="button_close">x</span>
            </div>
            <div class="window_content">
                <h1>THIS IS A TEST.</h1>
                <p>If this window appears, it means that this is, indeed, a test.<p>
                <small>A test of patience, it is.</small>
            </div>
        `
    desktop_element.appendChild(window);
    //TODO: add events
    let close_button = document.querySelector(`div#window_${window_index}_header span.button_close`);
    close_button.onclick = function() {
        window.remove();
    }
    dragElement(window);
    window_index++;
}

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    document.getElementById(elmnt.id + "_header").onmousedown = dragMouseDown


    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// create_test_window()