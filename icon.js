const icon = document.createElement("canvas");
icon.id = "icon";
icon.width = 1600;
icon.height = 900;
document.body.append(icon);
export const ctx = icon.getContext("2d");
function frame(x, y) {
  ctx.beginPath();
  ctx.roundRect(x, y, 80, 80, 5);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.beginPath();
  ctx.roundRect(x, y, 80, 80, 10);
  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;
  ctx.stroke();
}
async function init1(x) {
  frame(0, 820 + x);
  frame(80, 820 + x);
  frame(160, 820 + x);
  frame(240, 820 + x);
  frame(320, 820 + x);
  frame(400, 820 + x);
  frame(480, 820 + x);
  frame(560, 820 + x);
  frame(640, 820 + x);
  var img = new Image();
  img.src = "3.png";
  await new Promise((resolve) => {
    img.onload = resolve;
  });
  ctx.drawImage(img, 0, 0, 159, 100, 10, 830 + x, 60, 38);

  var img = new Image();
  img.src = "4.png";
  await new Promise((resolve) => {
    img.onload = resolve;
  });
  ctx.drawImage(img, 0, 0, 164, 75, 90, 830 + x, 60, 38);

  var img = new Image();
  img.src = "5.png";
  await new Promise((resolve) => {
    img.onload = resolve;
  });
  ctx.drawImage(img, 0, 0, 83, 72, 167, 830 + x, 60, 50);

  var img = new Image();
  img.src = "6.png";
  await new Promise((resolve) => {
    img.onload = resolve;
  });
  ctx.drawImage(img, 0, 0, 74, 58, 250, 835 + x, 60, 40);

  var img = new Image();
  img.src = "7.png";
  await new Promise((resolve) => {
    img.onload = resolve;
  });
  ctx.drawImage(img, 0, 0, 181, 155, 330, 820 + x, 60, 50);

  var img = new Image();
  img.src = "8.png";
  await new Promise((resolve) => {
    img.onload = resolve;
  });
  ctx.drawImage(img, 0, 0, 166, 296, 425, 825 + x, 30, 50);
  var img = new Image();
  img.src = "21.png";
  await new Promise((resolve) => {
    img.onload = resolve;
  });
  ctx.drawImage(img, 0, 0, 175, 125, 486, 825 + x, 68, 50);
  var img = new Image();
  img.src = "23.png";
  await new Promise((resolve) => {
    img.onload = resolve;
  });
  ctx.drawImage(img, 0, 0, 70, 186, 581, 825 + x, 40, 55);
  var img = new Image();
  img.src = "21.png";
  await new Promise((resolve) => {
    img.onload = resolve;
  });
  ctx.drawImage(img, 0, 0, 175, 125, 486, 825 + x, 68, 50);
  var img = new Image();
  img.src = "33.png";
  await new Promise((resolve) => {
    img.onload = resolve;
  });
  ctx.drawImage(img, 0, 0, 192, 264, 661, 825 + x, 40, 55);
}
function init3(x) {
  ctx.beginPath();
  ctx.font = "15px Georgia";
  ctx.fillStyle = "#9370DB";
  ctx.fillText("地板", 22, 890 + x);
  ctx.fillText("桥", 115, 890 + x);
  ctx.fillText("按钮1", 185, 890 + x);
  ctx.fillText("按钮2", 260, 890 + x);
  ctx.fillText("终点", 345, 890 + x);
  ctx.fillText("石块", 425, 890 + x);
  ctx.fillText("陷阱地板", 488, 890 + x);
  ctx.fillText("墙", 588, 892 + x);
  ctx.fillText("残缺方块", 650, 892 + x);
}
function init2(x) {
  ctx.beginPath();
  ctx.roundRect(1350, -x, 130, 70, 20);
  ctx.fillStyle = "#98F5FF";
  ctx.fill();
  ctx.font = "30px Georgia";
  ctx.fillStyle = "#9370DB";
  ctx.fillText("开始", 1385, 45 - x);
  ctx.beginPath();
  ctx.arc(1380, 40 - x, 20, Math.PI / 2, Math.PI);
  ctx.lineCap = "round";
  ctx.lineWidth = 4;
  ctx.strokeStyle = "white";
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(1450, 30 - x, 20, 0, -Math.PI / 2, 1);
  ctx.lineCap = "round";
  ctx.lineWidth = 4;
  ctx.strokeStyle = "white";
  ctx.stroke();
}
export function init4() {
  ctx.beginPath();
  ctx.roundRect(1490, 0, 90, 90, 20);
  ctx.fillStyle = "#98F5FF";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(1518, 62, 20, Math.PI / 2, Math.PI);
  ctx.lineCap = "round";
  ctx.lineWidth = 3;
  ctx.strokeStyle = "white";
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(1553, 27, 20, 0, -Math.PI / 2, 1);
  ctx.lineCap = "round";
  ctx.lineWidth = 3;
  ctx.strokeStyle = "white";
  ctx.stroke();
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(1510, 23, 7, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(1510, 43, 7, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(1510, 63, 7, 0, 2 * Math.PI);
  ctx.fill();
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(1527, 23);
  ctx.lineTo(1560, 23);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(1527, 43);
  ctx.lineTo(1560, 43);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(1527, 63);
  ctx.lineTo(1560, 63);
  ctx.stroke();
}
export function init() {
  init2(0);
  init1(0);
  init3(0);
  init4();
}
var x = 0;
export function leave() {
  ctx.clearRect(0, 0, 1600, 900);
  x += 2;
  init1(x);
  init3(x);
  init2(x);
  init4();
  if (x <= 80) requestAnimationFrame(leave);
}
export function clx() {
  ctx.clearRect(0, 0, 1600, 900);
}
