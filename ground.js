import control from "./control.js";
import color from "./color.js";
const grd = document.createElement("canvas");
grd.width = 1600;
grd.height = 900;
grd.id = "ground";
document.body.append(grd);
export const ctx = grd.getContext("2d");
const Ground = {
  position: [0, 0],
  color: "#CD853F",
  color2: "#F0FFF0",
  texture: null,
  async draw() {
    let lst = control.convert(this.position[0], this.position[1]);
    if (this.texture) {
      const img = new Image();
      img.src = this.texture;
      await new Promise((resolve) => {
        img.onload = resolve;
      });
      ctx.save();
      ctx.transform(1, 1.36, 0, 1, lst[0], lst[1]);
      ctx.filter = "brightness(0.5)";
      ctx.drawImage(img, 0, 0, 24, 30);
      ctx.restore();
      ctx.save();
      ctx.transform(1.2, 0, 0.785, 1, lst[0], lst[1]);
      ctx.filter = "brightness(1.5)";
      ctx.drawImage(img, 0, 0, 67, 31.8);
      ctx.restore();
      ctx.save();
      ctx.translate(lst[0] + 24, lst[1] + 32);
      ctx.drawImage(img, 0, 0, 80, 30);
      ctx.restore();
    } else {
      if (!this.color.startsWith("#")) {
        this.color = colorNameToHex(this.color);
      }
      ctx.beginPath();
      ctx.fillStyle = color.getDarkColor(this.color, 0.3);
      ctx.moveTo(lst[0], lst[1]);
      ctx.lineTo(lst[0], lst[1] + 30);
      ctx.lineTo(lst[0] + 24, lst[1] + 62);
      ctx.lineTo(lst[0] + 24, lst[1] + 32);
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.fillStyle = color.getLightColor(this.color, 0.3);
      ctx.moveTo(lst[0], lst[1]);
      ctx.lineTo(lst[0] + 24, lst[1] + 32);
      ctx.lineTo(lst[0] + 104, lst[1] + 32);
      ctx.lineTo(lst[0] + 80, lst[1]);
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.moveTo(lst[0] + 24, lst[1] + 32);
      ctx.lineTo(lst[0] + 24, lst[1] + 62);
      ctx.lineTo(lst[0] + 104, lst[1] + 62);
      ctx.lineTo(lst[0] + 104, lst[1] + 32);
      ctx.fill();
      ctx.stroke();
    }
  },
  async draw2() {
    let lst = control.convert(this.position[0], this.position[1]);
    if (this.texture) {
      const img = new Image();
      img.src = this.texture;
      await new Promise((resolve) => {
        img.onload = resolve;
      });
      ctx.save();
      ctx.transform(1, 1.36, 0, 1, lst[0], lst[1]);
      ctx.filter = "brightness(0.5)";
      ctx.drawImage(img, 0, 0, 24, 30);
      ctx.restore();
      ctx.save();
      ctx.transform(1.2, 0, 0.785, 1, lst[0], lst[1]);
      ctx.filter = "brightness(1.5)";
      ctx.drawImage(img, 0, 0, 67, 31.8);
      ctx.restore();
      ctx.save();
      ctx.translate(lst[0] + 24, lst[1] + 32);
      ctx.drawImage(img, 0, 0, 80, 30);
      ctx.restore();
    } else {
      if (!this.color2.startsWith("#")) {
        this.color2 = colorNameToHex(this.color2);
      }
      ctx.beginPath();
      ctx.fillStyle = color.getDarkColor(this.color2, 0.3);
      ctx.moveTo(lst[0], lst[1]);
      ctx.lineTo(lst[0], lst[1] + 30);
      ctx.lineTo(lst[0] + 24, lst[1] + 62);
      ctx.lineTo(lst[0] + 24, lst[1] + 32);
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.fillStyle = color.getLightColor(this.color2, 0.3);
      ctx.moveTo(lst[0], lst[1]);
      ctx.lineTo(lst[0] + 24, lst[1] + 32);
      ctx.lineTo(lst[0] + 104, lst[1] + 32);
      ctx.lineTo(lst[0] + 80, lst[1]);
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.fillStyle = this.color2;
      ctx.moveTo(lst[0] + 24, lst[1] + 32);
      ctx.lineTo(lst[0] + 24, lst[1] + 62);
      ctx.lineTo(lst[0] + 104, lst[1] + 62);
      ctx.lineTo(lst[0] + 104, lst[1] + 32);
      ctx.fill();
      ctx.stroke();
    }
  },
  clear() {
    ctx.clearRect(0, 0, 1600, 900);
  },
};
export default Ground;
