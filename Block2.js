import control from "./control.js";
import color from "./color.js";
const blc2 = document.createElement("canvas");
blc2.width = 1600;
blc2.height = 900;
blc2.id = "block2";
document.body.append(blc2);
const ctx = blc2.getContext("2d");
const Block2 = {
  num: 0,
  state: 1,
  position: [0, 0],
  colour: "#00EE00",
  texture: "2.png",
  async draw1() {
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
      ctx.drawImage(img, 0, -80, 24, 80);
      ctx.restore();
      ctx.save();
      ctx.transform(1.2, 0, 0.785, 1, lst[0], lst[1] - 80);
      ctx.filter = "brightness(1.5)";
      ctx.drawImage(img, 0, 0, 131, 31.8);
      ctx.restore();
      ctx.save();
      ctx.translate(lst[0] + 24, lst[1] - 48);
      ctx.drawImage(img, 0, 0, 160, 80);
      ctx.restore();
    } else {
      if (!this.colour.startsWith("#")) {
        this.colour = color.colorNameToHex(this.colour);
      }
      ctx.save();
      ctx.fillStyle = color.getDarkColor(this.colour, 0.4);
      ctx.transform(1, 1.36, 0, 1, lst[0], lst[1]);
      ctx.fillRect(0, -80, 24, 80);
      ctx.restore();
      ctx.save();
      ctx.fillStyle = color.getLightColor(this.colour, 0.4);
      ctx.transform(1.2, 0, 0.785, 1, lst[0], lst[1] - 80);
      ctx.fillRect(0, 0, 131, 31.8);
      ctx.restore();
      ctx.save();
      ctx.fillStyle = this.colour;
      ctx.translate(lst[0] + 24, lst[1] - 48);
      ctx.fillRect(0, 0, 160, 80);
      ctx.restore();
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
      ctx.drawImage(img, 0, -160, 24, 160);
      ctx.restore();
      ctx.save();
      ctx.transform(1.2, 0, 0.785, 1, lst[0], lst[1] - 160);
      ctx.filter = "brightness(1.5)";
      ctx.drawImage(img, 0, 0, 66, 31.8);
      ctx.restore();
      ctx.save();
      ctx.translate(lst[0] + 24, lst[1] - 128);
      ctx.drawImage(img, 0, 0, 80, 160);
      ctx.restore();
    } else {
      if (!this.colour.startsWith("#")) {
        this.colour = color.colorNameToHex(this.colour);
      }
      ctx.save();
      ctx.fillStyle = color.getDarkColor(this.colour, 0.4);
      ctx.transform(1, 1.36, 0, 1, lst[0], lst[1]);
      ctx.fillRect(0, -160, 24, 160);
      ctx.restore();
      ctx.save();
      ctx.fillStyle = color.getLightColor(this.colour, 0.4);
      ctx.transform(1.2, 0, 0.785, 1, lst[0], lst[1] - 160);
      ctx.fillRect(0, 0, 66, 31.8);
      ctx.restore();
      ctx.save();
      ctx.fillStyle = this.colour;
      ctx.translate(lst[0] + 24, lst[1] - 128);
      ctx.fillRect(0, 0, 80, 160);
      ctx.restore();
    }
  },
  async draw3() {
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
      ctx.drawImage(img, 0, -80, 48, 80);
      ctx.restore();
      ctx.save();
      ctx.transform(1.2, 0, 0.75, 1, lst[0], lst[1] - 80);
      ctx.filter = "brightness(1.5)";
      ctx.drawImage(img, 0, 0, 66, 66);
      ctx.restore();
      ctx.save();
      ctx.translate(lst[0] + 48, lst[1] - 16);
      ctx.drawImage(img, 0, 0, 80, 80);
      ctx.restore();
    } else {
      if (!this.colour.startsWith("#")) {
        this.colour = color.colorNameToHex(this.colour);
      }
      ctx.save();
      ctx.fillStyle = color.getDarkColor(this.colour, 0.4);
      ctx.transform(1, 1.36, 0, 1, lst[0], lst[1]);
      ctx.fillRect(0, -80, 48, 80);
      ctx.restore();
      ctx.save();
      ctx.fillStyle = color.getLightColor(this.colour, 0.4);
      ctx.transform(1.2, 0, 0.75, 1, lst[0], lst[1] - 80);
      ctx.fillRect(0, 0, 66, 66);
      ctx.restore();
      ctx.save();
      ctx.fillStyle = this.colour;
      ctx.translate(lst[0] + 48, lst[1] - 16);
      ctx.fillRect(0, 0, 80, 80);
      ctx.restore();
    }
  },
  clear() {
    ctx.clearRect(0, 0, 1600, 900);
  },
};
export default Block2;
