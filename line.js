import control from "./control.js";
const line = document.createElement("canvas");
line.width = 1600;
line.height = 900;
line.id = "line";
document.body.append(line);
let ctx = line.getContext("2d");
export function drawline() {
  for (let i = 0; i < 15; i++) {
    let lst1 = control.convert(i, 0);
    let lst2 = control.convert(i, 19);
    ctx.moveTo(lst1[0], lst1[1]);
    ctx.lineTo(lst2[0], lst2[1]);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.setLineDash([10, 15]);
    ctx.stroke();
  }
  for (let i = 0; i < 20; i++) {
    let lst1 = control.convert(0, i);
    let lst2 = control.convert(14, i);
    ctx.moveTo(lst1[0], lst1[1]);
    ctx.lineTo(lst2[0], lst2[1]);
    ctx.stroke();
  }
}
export function clear() {
  ctx.clearRect(0, 0, 1600, 900);
}
