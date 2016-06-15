window.onload = function() {
	var cv = document.createElement("canvas");
	cv.innerHTML = "你的浏览器居然不支持Canvas？！赶快换一个吧！！"
	cv.height = 600;
	cv.width = 800;
	cv.style.border = "1px solid #aaa";
	cv.style.margin = "50px auto";
	cv.style.display = "block";
	document.body.appendChild(cv);

	var ctx = cv.getContext('2d');

	ctx.lineWidth = 20;
	ctx.strokeStyle = '#1BAAAA';

	ctx.beginPath();
	ctx.moveTo(20, 20);
	ctx.lineTo(280, 20);
	ctx.lineCap = "butt";
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(20, 50);
	ctx.lineTo(280, 50);
	ctx.lineCap = "round";
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(20, 80);
	ctx.lineTo(280, 80);
	ctx.lineCap = "square";
	ctx.stroke();

	ctx.lineWidth = 2;
	ctx.strokeStyle = "black";

	ctx.beginPath();
	ctx.moveTo(10, 0);
	ctx.lineTo(10, 100);
	ctx.moveTo(290, 0);
	ctx.lineTo(290, 100);
	ctx.moveTo(20, 0);
	ctx.lineTo(20, 100);
	ctx.moveTo(280, 0);
	ctx.lineTo(280, 100);
	ctx.stroke();

	ctx.lineWidth = 20;

	ctx.beginPath();
	ctx.moveTo(320,  10);
	ctx.lineTo(370, 60);
	ctx.lineTo(320, 110);
	ctx.lineJoin = 'miter';
	ctx.strokeStyle = "red";
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(380,  10);
	ctx.lineTo(430, 60);
	ctx.lineTo(380, 110);
	ctx.lineJoin = 'bevel';
	ctx.strokeStyle = "blue";
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(440,  10);
	ctx.lineTo(490, 60);
	ctx.lineTo(440, 110);
	ctx.lineJoin = 'round';
	ctx.strokeStyle = "black";
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(50, 100);
	ctx.lineTo(750, 200);
	ctx.lineTo(50, 300);
	ctx.strokeStyle = 'red';
	ctx.lineJoin = 'miter';
	ctx.lineWidth = 5;
	ctx.miterLimit = 50;
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(50, 300);
	ctx.lineTo(750, 400);
	ctx.lineTo(50, 500);
	ctx.strokeStyle = 'red';
	ctx.lineJoin = 'miter';
	ctx.lineWidth = 5;
	ctx.miterLimit = 10;
	ctx.stroke();
}

function drawRect(ctx, x, y, width, height, fillColor, strokeWidth, strokeColor) {
	ctx.beginPath();
	ctx.rect(x, y, width, height);
	ctx.closePath();

	ctx.lineWidth = strokeWidth;
	ctx.fillStyle = fillColor;
	ctx.strokeStyle= strokeColor;

	ctx.fill();
	ctx.stroke();
}

function strokeRect(ctx, x, y, width, height, strokeWidth, strokeColor) {
	ctx.beginPath();
	ctx.rect(x, y, width, height);
	ctx.closePath();

	ctx.lineWidth = strokeWidth;
	ctx.strokeStyle= strokeColor;

	ctx.stroke();
}

function fillRect(ctx, x, y, width, height, fillColor) {
	ctx.beginPath();
	ctx.rect(x, y, width, height);
	ctx.closePath();

	ctx.fillStyle = fillColor;

	ctx.fill();
}