var window_index = 0;

function create_test_window(){
    let desktop_element = document.getElementById("desktop");
    const window = document.createElement("div");
    window.setAttribute("id", `window_${window_index}`);
    window.setAttribute("class", "draggable_window")   
    window.innerHTML = //this could be a component
        `<div id="window_${window_index}_header" class="draggable_window_header">Test Window</div>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>`
    desktop_element.appendChild(window);
    //TODO: add events
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

create_test_window()