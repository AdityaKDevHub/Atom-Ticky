let canvas = document.getElementById('canvas');
let canvas_ele = canvas.getContext('2d');

let radius = canvas.height / 2;
canvas_ele.translate(radius, radius);

radius = radius * 0.90;

setInterval(create, 1000);
create();

function create() {
	draw_face(canvas_ele, radius);
    nums(canvas_ele, radius);
    time(canvas_ele, radius);
}

function draw_face(canvas_ele, radius) {
    canvas_ele.arc(0, 0, radius, 0, 2 * Math.PI);
    canvas_ele.fillStyle = "lightgoldenrodyellow";
    canvas_ele.fill();

	let grad_clr;
    canvas_ele.beginPath();
    canvas_ele.arc(0, 0, radius, 0, 2 * Math.PI);
    canvas_ele.fillStyle = 'lightgrey';
    canvas_ele.fill();

    //Border Circle  
    grad_clr = canvas_ele.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    grad_clr.addColorStop(0, 'darkcyan');
    grad_clr.addColorStop(0.25, 'white');
    grad_clr.addColorStop(1, 'darkcyan');
    canvas_ele.strokeStyle = grad_clr;
    canvas_ele.lineWidth = radius * 0.1;

    //Mid Circle
    canvas_ele.stroke();
    canvas_ele.beginPath();
    canvas_ele.arc(0, 0, radius*0.1, 0, 2 * Math.PI);
    canvas_ele.fillStyle = 'blue';
    canvas_ele.fill();
}

//Numbers
function nums(canvas_ele, radius) {
    let angle;
    let num;

    canvas_ele.font = radius * 0.15 + "px algerian";
    canvas_ele.textBaseline = "middle";
    canvas_ele.textAlign = "center";

    for (num = 1; num < 13; num++) {
        angle = num * Math.PI / 6;
        canvas_ele.rotate(angle);
        canvas_ele.translate(0, -radius * 0.85);
        canvas_ele.rotate(-angle);
        canvas_ele.fillText(num.toString(), 0, 0);
        canvas_ele.rotate(angle);
        canvas_ele.translate(0, radius * 0.85);
        canvas_ele.rotate(-angle);
    }
}

//Get Time
function time(canvas_ele, radius) {
    let current_time = new Date();

    let second = current_time.getSeconds();
    let minute = current_time.getMinutes();
    let hour = current_time.getHours();

    //Second hand
    second = (second * Math.PI / 30);
    hands(canvas_ele, second, radius * 0.9, radius * 0.02);

    //Minute hand
    minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
    hands(canvas_ele, minute, radius * 0.77, radius * 0.05);

    //Hour hand
    hour = hour % 12;
    hour = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60)) + (second * Math.PI / (360 * 60));
    hands(canvas_ele, hour, radius * 0.5, radius * 0.05);
}

//Draw Hands
function hands(canvas_ele, pos, length, width) {
    canvas_ele.beginPath();
    canvas_ele.lineWidth = width;
    canvas_ele.lineCap = "round";
    canvas_ele.moveTo(0, 0);
    canvas_ele.rotate(pos);
    canvas_ele.lineTo(0, -length);
    canvas_ele.stroke();
    canvas_ele.rotate(-pos);
}

//Greet when clicked
function greet() {
    alert("Hi! I am a proof of concept, made by Aditya VN Kadiyala")
}