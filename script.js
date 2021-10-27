box1 = document.getElementsByClassName("box1")[0];

var locationX;
var locationY;

var mouseX;
var mouseY;

focus = false;

box1.addEventListener("mousedown", (e) => {
    focus = true;
    locationX = e.x - box1.getBoundingClientRect().left;
    locationY = e.y - box1.getBoundingClientRect().top;
});

window.addEventListener("mouseup", (e) => {
    focus = false;
});

window.addEventListener("mousemove", (e) => {
    mouseX = e.x;
    mouseY = e.y;
    update();
})


function update() {
    if(focus === true){
        box1.style.top = mouseY - locationY + "px";
        box1.style.left = mouseX - locationX + "px";
    }
}
