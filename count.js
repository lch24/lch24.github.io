import control from "./control.js";
const count = document.createElement("canvas");
count.width = 1600;
count.height = 900;
count.id = "count";
document.body.append(count);
const ctx = count.getContext("2d");
const Count = {
  number: 0,
  draw() {
    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("您已经走了", 1200, 50);
    ctx.fillText("步", 1300, 90);
    ctx.fillStyle = "yellow";
    ctx.fillText(this.number, 1250, 90);
  },
  clear() {
    ctx.clearRect(0, 0, 1600, 900);
  },
};
export default Count;
