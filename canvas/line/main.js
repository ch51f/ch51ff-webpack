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
	ctx.moveTo(100, 100);
	ctx.lineTo(300, 300);
	ctx.lineTo(100, 500);

	ctx.lineWidth = 5;
	ctx.strokeStyle = "red";
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(350, 100);
	ctx.lineTo(550, 300);
	ctx.lineTo(350, 500);
	ctx.closePath();

	ctx.lineWidth = 5;
	ctx.strokeStyle = "blue";
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(600, 100);
	ctx.lineTo(800, 300);
	ctx.lineTo(600, 500);
	ctx.lineTo(600, 100);

	ctx.lineWidth = 5;
	ctx.strokeStyle = "green";
	ctx.stroke();
}