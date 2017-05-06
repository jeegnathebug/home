var g = {};

window.onload = init;

function init() {

    // Get the link that opens the modal
    g.popupLink = document.getElementById("popupLink");

    // Get the close button for the modal
    g.btnClose = document.getElementsByClassName("btnClose")[0];

    // Get the modal itself
    g.modal = document.getElementById("modal");

    // open
    addEvent(g.popupLink, "click", open);
    // close
    addEvent(g.btnClose, "click", close);
    // close from anywhere
    addEvent(window, "click", clickClose);
    
    // Add year to footer
    $('#year').html = new Date().getFullYear();
}

function open() {
    g.modal.style.display = "block";
}

function close() {
    g.modal.style.display = "none";
}

function clickClose(e) {
    // Get event
    var evt = e || window.event;
    // Get element that triggered event
    var target = evt.target || evt.srcElement;

    if (target == g.modal) {
        g.modal.style.display = "none";
    }
}
