import control from "./control.js";
const wall = document.createElement("canvas");
wall.width = 1600;
wall.height = 900;
wall.id = "wall";
document.body.append(wall);
export const ctx = wall.getContext("2d");
const wall2 = document.createElement("canvas");
wall2.width = 1600;
wall2.height = 900;
wall2.id = "wall2";
document.body.append(wall2);
export const ctx2 = wall2.getContext("2d");
const Wall = {
  position: [1, 0],
  type: 0,
  draw1() {
    let lst = control.convert(this.position[0], this.position[1]);
    ctx.beginPath();
    ctx.globalAlpha = 0.7;
    ctx.fillStyle = "#C0FF3E";
    ctx.fillRect(lst[0], lst[1] - 70, 80, 70);
    ctx.moveTo(lst[0], lst[1]);
    ctx.lineTo(lst[0], lst[1] - 70);
    ctx.lineTo(lst[0] + 80, lst[1] - 70);
    ctx.strokeStyle = "#C0FF3E";
    ctx.lineWidth = 5;
    ctx.stroke();
  },
  draw2() {
    let lst = control.convert(this.position[0], this.position[1]);
    ctx.beginPath();
    ctx.fillStyle = "#C0FF3E";
    ctx.globalAlpha = 0.7;
    ctx.moveTo(lst[0], lst[1]);
    ctx.lineTo(lst[0], lst[1] - 70);
    ctx.lineTo(lst[0] + 24, lst[1] - 38);
    ctx.lineTo(lst[0] + 24, lst[1] + 32);
    ctx.strokeStyle = "#C0FF3E";
    ctx.lineWidth = 5;
    ctx.fill();
    ctx.stroke();
  },
  draw3() {
    let lst = control.convert(this.position[0], this.position[1]);
    ctx2.beginPath();
    ctx2.globalAlpha = 0.7;
    ctx2.fillStyle = "#C0FF3E";
    ctx2.fillRect(lst[0], lst[1] - 70, 80, 70);
    ctx2.moveTo(lst[0], lst[1]);
    ctx2.lineTo(lst[0], lst[1] - 70);
    ctx2.lineTo(lst[0] + 80, lst[1] - 70);
    ctx2.strokeStyle = "#C0FF3E";
    ctx2.lineWidth = 5;
    ctx2.stroke();
  },
  draw4() {
    let lst = control.convert(this.position[0], this.position[1]);
    ctx2.beginPath();
    ctx2.fillStyle = "#C0FF3E";
    ctx2.globalAlpha = 0.7;
    ctx2.moveTo(lst[0], lst[1]);
    ctx2.lineTo(lst[0], lst[1] - 70);
    ctx2.lineTo(lst[0] + 24, lst[1] - 38);
    ctx2.lineTo(lst[0] + 24, lst[1] + 32);
    ctx2.strokeStyle = "#C0FF3E";
    ctx2.lineWidth = 5;
    ctx2.fill();
    ctx2.stroke();
  },
  clear() {
    ctx.clearRect(0, 0, 1600, 900);
  },
  clear2() {
    ctx2.clearRect(0, 0, 1600, 900);
  },
};
export default Wall;
export function wallocate(a, b) {
  let y = Math.floor((b - 160 + 16) / 32);
  let x = Math.floor((a - 24 * y + 40) / 80);
  if ((b - 160 + 16) / 32 - y > (a - 24 * y + 40) / 80 - x) {
    y = Math.floor((b - 160) / 32);
    x = Math.floor((a - 24 * y + 40) / 80);
  } else {
    y = Math.floor((b - 160 + 16) / 32);
    x = Math.floor((a - 24 * y) / 80);
  }
  return [x, y];
}
