import control from "./control.js";
const teach = document.createElement("canvas");
teach.width = 1600;
teach.height = 900;
teach.id = "teach";
document.body.append(teach);
export const ctx = teach.getContext("2d");
const Teach = {
  num: 0,
  async draw() {
    switch (this.num) {
      case 1:
        {
          var img = new Image();
          img.src = "24.png";
          await new Promise((resolve) => {
            img.onload = resolve;
          });
          ctx.drawImage(img, 0, 0, 1572, 955, 0, 0, 1600, 900);
        }
        break;
      case 2:
        {
          var img = new Image();
          img.src = "25.png";
          await new Promise((resolve) => {
            img.onload = resolve;
          });
          ctx.drawImage(img, 0, 0, 2336, 1331, 0, 0, 1600, 900);
        }
        break;
      case 3:
        {
          var img = new Image();
          img.src = "26.png";
          await new Promise((resolve) => {
            img.onload = resolve;
          });
          ctx.drawImage(img, 0, 0, 1069, 597, 0, 0, 1600, 900);
        }
        break;
      case 4:
        {
          var img = new Image();
          img.src = "27.png";
          await new Promise((resolve) => {
            img.onload = resolve;
          });
          ctx.drawImage(img, 0, 0, 977, 518, 0, 0, 1600, 900);
        }
        break;
      case 5:
        {
          var img = new Image();
          img.src = "28.png";
          await new Promise((resolve) => {
            img.onload = resolve;
          });
          ctx.drawImage(img, 0, 0, 1761, 1092, 0, 0, 1600, 900);
        }
        break;
      case 6:
        {
          var img = new Image();
          img.src = "29.png";
          await new Promise((resolve) => {
            img.onload = resolve;
          });
          ctx.drawImage(img, 0, 0, 1761, 1092, 0, 0, 1600, 900);
        }
        break;
    }
    if (this.num < 6) {
      ctx.beginPath();
      ctx.roundRect(710, 800, 180, 60, 20);
      ctx.fillStyle = "#98F5FF";
      ctx.fill();
      ctx.font = "35px Georgia";
      ctx.fillStyle = "#9370DB";
      ctx.fillText("下 一 页", 738, 844);
      ctx.fillStyle = "white";
      ctx.fillText(`${this.num}/6`, 772, 885);
    } else if (this.num == 6) {
      ctx.beginPath();
      ctx.roundRect(710, 800, 180, 60, 20);
      ctx.fillStyle = "#98F5FF";
      ctx.fill();
      ctx.font = "35px Georgia";
      ctx.fillStyle = "#9370DB";
      ctx.fillText("学 会 了", 738, 844);
      ctx.fillStyle = "white";
      ctx.fillText(`${this.num}/6`, 772, 885);
    }
  },
  clear() {
    ctx.clearRect(0, 0, 1600, 900);
  },
};
//Teach.draw();
export default Teach;
