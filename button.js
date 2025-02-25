import control from "./control.js";
const but = document.createElement("canvas");
but.width = 1600;
but.height = 900;
but.id = "button";
document.body.append(but);
export const ctx = but.getContext("2d");
const Button = {
  position: [0, 0],
  bridge: [],
  draw1() {
    let lst = control.convert(this.position[0], this.position[1]);
    ctx.beginPath();
    ctx.ellipse(lst[0] + 52, lst[1] + 12, 18, 10, 0, 0, 2 * Math.PI);
    ctx.fillStyle = "#98F5FF";
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(lst[0] + 52, lst[1] + 15, 18, 10, 0, 0.45, Math.PI - 0.45);
    ctx.lineCap = "round";
    ctx.strokeStyle = "#4169E1";
    ctx.lineWidth = 6;
    ctx.stroke();
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.moveTo(lst[0] + 33.5, lst[1] + 13);
    ctx.lineTo(lst[0] + 33.5, lst[1] + 18);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(lst[0] + 70.5, lst[1] + 13);
    ctx.lineTo(lst[0] + 70.5, lst[1] + 18);
    ctx.stroke();
  },
  draw2() {
    let lst = control.convert(this.position[0], this.position[1]);
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#4169E1";
    ctx.beginPath();
    ctx.moveTo(lst[0] + 34, lst[1] + 12);
    ctx.lineTo(lst[0] + 68, lst[1] + 24);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(lst[0] + 44, lst[1] + 24);
    ctx.lineTo(lst[0] + 62, lst[1] + 12);
    ctx.stroke();
    ctx.strokeStyle = "#98F5FF";
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(lst[0] + 35, lst[1] + 8);
    ctx.lineTo(lst[0] + 69, lst[1] + 20);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(lst[0] + 43, lst[1] + 20);
    ctx.lineTo(lst[0] + 61, lst[1] + 8);
    ctx.stroke();
  },
  clear() {
    ctx.clearRect(0, 0, 1600, 900);
  },
};
export default Button;
