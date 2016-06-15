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

	ctx.beginPath();
	ctx.moveTo(10, 10);
	ctx.lineTo(30, 10);
	ctx.lineTo(30, 30);
	ctx.lineTo(10, 30);
	ctx.lineTo(10, 10);

	ctx.lineWidth = 5;
	ctx.stroke();

	drawRect(ctx, 50, 10, 20, 20, 'red', 5, 'green');

	for(var i = 0; i < 30; i++) {
		drawRect(ctx, 200 + i * 10, 0 + i * 10, 600 - i * 20, 600 - i * 20, 'white', 5, 'black');
	}
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