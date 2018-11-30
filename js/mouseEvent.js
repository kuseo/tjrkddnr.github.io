function init(){
    var canvas = document.getElementById("canvas");
    canvas.addEventListener("mousedown", getPosition, false);
}

function getPosition(event){
    var x = new Number();
    var y = new Number();
    var canvas = document.getElementById("canvas");

    if (event.x != undefined && event.y != undefined) {
        x = event.x;
        y = event.y;
    } else {
        console.log('Error');
    }
    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;

    alert("x : "+ x + "y : " + y);
}
