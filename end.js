import control from "./control.js";
const end = document.createElement("canvas");
end.width = 1600;
end.height = 900;
end.id = "end";
document.body.append(end);
const ctx = end.getContext("2d");
const End = {
  num: 0,
  position: [0, 0],
  draw() {
    let lst = control.convert(this.position[0], this.position[1]);
    let gra = ctx.createLinearGradient(lst[0], lst[1], lst[0], lst[1] + 92);
    gra.addColorStop(0, "#222");
    gra.addColorStop(1, "#aaa");
    ctx.fillStyle = gra;
    ctx.beginPath();
    ctx.moveTo(lst[0] + 24, lst[1] + 32);
    ctx.lineTo(lst[0], lst[1]);
    ctx.lineTo(lst[0] + 80, lst[1]);
    ctx.lineTo(lst[0] + 80, lst[1] + 32);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(lst[0] + 80, lst[1] + 32);
    ctx.lineTo(lst[0] + 80, lst[1]);
    ctx.lineTo(lst[0] + 104, lst[1] + 32);
    gra.addColorStop(0, "#000");
    gra.addColorStop(1, "#888");
    ctx.fill();
  },
  clear() {
    ctx.clearRect(0, 0, 1600, 900);
  },
};
export default End;
