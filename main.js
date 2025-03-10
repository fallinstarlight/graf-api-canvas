var b1 = document.getElementById("1");
var b2 = document.getElementById("2");
var b3 = document.getElementById("3");
var b4 = document.getElementById("4");
var b5 = document.getElementById("5");
var b6 = document.getElementById("6");
var b7 = document.getElementById("7");

const canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#F081C4";
ctx.strokeStyle = "#F081C4";


b1.addEventListener("click", function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(50, 50, 400, 200);
    ctx.clearRect(75, 75, 350, 150);
    ctx.strokeRect(85, 85, 330, 130);
});

b2.addEventListener("click", function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(75, 200);
    ctx.lineTo(425, 200);
    ctx.lineTo(250, 75);
    ctx.fill();
});

b3.addEventListener("click", function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(250, 150, 100, 0, Math.PI * 2, true);
    ctx.moveTo(250, 150);
    ctx.arc(250, 150, 70, 0, Math.PI, true);
    ctx.lineTo(250, 150);
    ctx.moveTo(225, 200);
    ctx.arc(210, 200, 15, 0, Math.PI * 2, true);
    ctx.moveTo(305, 200);
    ctx.arc(290, 200, 15, 0, Math.PI * 2, true);
    ctx.stroke();
});

b4.addEventListener("click", function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //sup izq
    ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(105, 25);
    ctx.lineTo(25, 105);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(125, 125);
    ctx.lineTo(125, 45);
    ctx.lineTo(45, 125);
    ctx.closePath();
    ctx.stroke();

    //sup der
    ctx.beginPath();
    ctx.moveTo(475, 25);
    ctx.lineTo(395, 25);
    ctx.lineTo(475, 105);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(375, 125);
    ctx.lineTo(375, 45);
    ctx.lineTo(455, 125);
    ctx.closePath();
    ctx.stroke();

    //inf izq
    ctx.beginPath();
    ctx.moveTo(25, 275);
    ctx.lineTo(25, 195);
    ctx.lineTo(105, 275);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(125, 175);
    ctx.lineTo(125, 255);
    ctx.lineTo(45, 175);
    ctx.closePath();
    ctx.stroke();

    //inf der
    ctx.beginPath();
    ctx.moveTo(475, 275);
    ctx.lineTo(475, 195);
    ctx.lineTo(395, 275);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(375, 175);
    ctx.lineTo(375, 255);
    ctx.lineTo(455, 175);
    ctx.closePath();
    ctx.stroke();
})

b5.addEventListener("click", function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
            ctx.beginPath();
            const x = 200 + j * 50; // Coordenada x
            const y = 80 + i * 50; // Coordenada y
            const radius = 20; // Radio del Arco
            const startAngle = 3/4 * Math.PI; // Punto inicial del Círculo
            const endAngle = Math.PI + (Math.PI * j) / 2; // Punto final del Círculo
            const counterclockwise = i % 2 !== 0; // En el sentido de las agujas del reloj o en sentido contrario

            ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

            if (i > 1) {
                ctx.fill();
            } else {
                ctx.stroke();
            }
        }
    }
});

b6.addEventListener("click", function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();

    ctx.moveTo(200, 130); 
    ctx.bezierCurveTo(200, 124, 190, 100, 150, 100);
    ctx.bezierCurveTo(90, 100, 90, 175, 90, 175);
    ctx.bezierCurveTo(90, 210, 140, 254, 200, 290);
    ctx.bezierCurveTo(260, 254, 310, 210, 310, 175);
    ctx.bezierCurveTo(310, 175, 310, 100, 250, 100); 
    ctx.bezierCurveTo(220, 100, 200, 124, 200, 130);
    ctx.fill();
});

b7.addEventListener("click", function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    roundedRect(ctx, 12, 12, 150, 150, 15);
    roundedRect(ctx, 19, 19, 150, 150, 9);
    roundedRect(ctx, 53, 53, 49, 33, 10);
    roundedRect(ctx, 53, 119, 49, 16, 6);
    roundedRect(ctx, 135, 53, 49, 33, 10);
    roundedRect(ctx, 135, 119, 25, 49, 10);

    ctx.beginPath();
    ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
    ctx.lineTo(31, 37);
    ctx.fill();

    for (let i = 0; i < 8; i++) {
      ctx.fillRect(51 + i * 16, 35, 4, 4);
    }

    for (i = 0; i < 6; i++) {
      ctx.fillRect(115, 51 + i * 16, 4, 4);
    }

    for (i = 0; i < 8; i++) {
      ctx.fillRect(51 + i * 16, 99, 4, 4);
    }

    ctx.beginPath();
    ctx.moveTo(83, 116);
    ctx.lineTo(83, 102);
    ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
    ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
    ctx.lineTo(111, 116);
    ctx.lineTo(106.333, 111.333);
    ctx.lineTo(101.666, 116);
    ctx.lineTo(97, 111.333);
    ctx.lineTo(92.333, 116);
    ctx.lineTo(87.666, 111.333);
    ctx.lineTo(83, 116);
    ctx.fill();

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.moveTo(91, 96);
    ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
    ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
    ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
    ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
    ctx.moveTo(103, 96);
    ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
    ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
    ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
    ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
    ctx.fill();

    ctx.fillStyle = "#F081C4";
    ctx.beginPath();
    ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
    ctx.fill();
});

function roundedRect(ctx, x, y, width, height, radius) {

    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.arcTo(x, y + height, x + radius, y + height, radius);
    ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
    ctx.arcTo(x + width, y, x + width - radius, y, radius);
    ctx.arcTo(x, y, x, y + radius, radius);
    ctx.stroke();
  }
