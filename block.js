import control from "./control.js";
import color from "./color.js";
const blc = document.createElement("canvas");
blc.width = 1600;
blc.height = 900;
blc.id = "block";
document.body.append(blc);
const ctx = blc.getContext("2d");
const Block = {
  num: 0,
  state: 1,
  split: 0,
  position: [],
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
  async draws1() {
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
      ctx.drawImage(img, 0, 0, 66, 31.8);
      ctx.restore();
      ctx.save();
      ctx.translate(lst[0] + 24, lst[1] - 48);
      ctx.drawImage(img, 0, 0, 80, 80);
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
      ctx.fillRect(0, 0, 66, 31.8);
      ctx.restore();
      ctx.save();
      ctx.fillStyle = this.colour;
      ctx.translate(lst[0] + 24, lst[1] - 48);
      ctx.fillRect(0, 0, 80, 80);
      ctx.restore();
    }
    if (this.texture) {
      const img = new Image();
      img.src = this.texture;
      await new Promise((resolve) => {
        img.onload = resolve;
      });
      ctx.save();
      ctx.transform(1, 1.36, 0, 1, lst[0] + 160, lst[1]);
      ctx.filter = "brightness(0.5)";
      ctx.drawImage(img, 0, -80, 24, 80);
      ctx.restore();
      ctx.save();
      ctx.transform(1.2, 0, 0.785, 1, lst[0] + 160, lst[1] - 80);
      ctx.filter = "brightness(1.5)";
      ctx.drawImage(img, 0, 0, 66, 31.8);
      ctx.restore();
      ctx.save();
      ctx.translate(lst[0] + 184, lst[1] - 48);
      ctx.drawImage(img, 0, 0, 80, 80);
      ctx.restore();
    } else {
      if (!this.colour.startsWith("#")) {
        this.colour = color.colorNameToHex(this.colour);
      }
      ctx.save();
      ctx.fillStyle = color.getDarkColor(this.colour, 0.4);
      ctx.transform(1, 1.36, 0, 1, lst[0] + 160, lst[1]);
      ctx.fillRect(0, -80, 24, 80);
      ctx.restore();
      ctx.save();
      ctx.fillStyle = color.getLightColor(this.colour, 0.4);
      ctx.transform(1.2, 0, 0.785, 1, lst[0] + 160, lst[1] - 80);
      ctx.fillRect(0, 0, 66, 31.8);
      ctx.restore();
      ctx.save();
      ctx.fillStyle = this.colour;
      ctx.translate(lst[0] + 184, lst[1] - 48);
      ctx.fillRect(0, 0, 80, 80);
      ctx.restore();
    }
  },
  async draws2() {
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
      ctx.drawImage(img, 0, 0, 66, 31.8);
      ctx.restore();
      ctx.save();
      ctx.translate(lst[0] + 24, lst[1] - 48);
      ctx.drawImage(img, 0, 0, 80, 80);
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
      ctx.fillRect(0, 0, 66, 31.8);
      ctx.restore();
      ctx.save();
      ctx.fillStyle = this.colour;
      ctx.translate(lst[0] + 24, lst[1] - 48);
      ctx.fillRect(0, 0, 80, 80);
      ctx.restore();
    }
    if (this.texture) {
      const img = new Image();
      img.src = this.texture;
      await new Promise((resolve) => {
        img.onload = resolve;
      });
      ctx.save();
      ctx.transform(1, 1.36, 0, 1, lst[0], lst[1] - 160);
      ctx.filter = "brightness(0.5)";
      ctx.drawImage(img, 0, -80, 24, 80);
      ctx.restore();
      ctx.save();
      ctx.transform(1.2, 0, 0.785, 1, lst[0], lst[1] - 240);
      ctx.filter = "brightness(1.5)";
      ctx.drawImage(img, 0, 0, 66, 31.8);
      ctx.restore();
      ctx.save();
      ctx.translate(lst[0] + 24, lst[1] - 208);
      ctx.drawImage(img, 0, 0, 80, 80);
      ctx.restore();
    } else {
      if (!this.colour.startsWith("#")) {
        this.colour = color.colorNameToHex(this.colour);
      }
      ctx.save();
      ctx.fillStyle = color.getDarkColor(this.colour, 0.4);
      ctx.transform(1, 1.36, 0, 1, lst[0], lst[1] - 160);
      ctx.fillRect(0, -80, 24, 80);
      ctx.restore();
      ctx.save();
      ctx.fillStyle = color.getLightColor(this.colour, 0.4);
      ctx.transform(1.2, 0, 0.785, 1, lst[0], lst[1] - 240);
      ctx.fillRect(0, 0, 66, 31.8);
      ctx.restore();
      ctx.save();
      ctx.fillStyle = this.colour;
      ctx.translate(lst[0] + 24, lst[1] - 208);
      ctx.fillRect(0, 0, 80, 80);
      ctx.restore();
    }
  },
  async draws3() {
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
      ctx.transform(1.2, 0, 0.75, 1, lst[0], lst[1] - 80);
      ctx.filter = "brightness(1.5)";
      ctx.drawImage(img, 0, 0, 66, 33);
      ctx.restore();
      ctx.save();
      ctx.translate(lst[0] + 24, lst[1] - 48);
      ctx.drawImage(img, 0, 0, 80, 80);
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
      ctx.transform(1.2, 0, 0.75, 1, lst[0], lst[1] - 80);
      ctx.fillRect(0, 0, 66, 33);
      ctx.restore();
      ctx.save();
      ctx.fillStyle = this.colour;
      ctx.translate(lst[0] + 24, lst[1] - 48);
      ctx.fillRect(0, 0, 80, 80);
      ctx.restore();
    }
    if (this.texture) {
      const img = new Image();
      img.src = this.texture;
      await new Promise((resolve) => {
        img.onload = resolve;
      });
      ctx.save();
      ctx.transform(1, 1.36, 0, 1, lst[0] + 48, lst[1] + 64);
      ctx.filter = "brightness(0.5)";
      ctx.drawImage(img, 0, -80, 24, 80);
      ctx.restore();
      ctx.save();
      ctx.transform(1.2, 0, 0.75, 1, lst[0] + 48, lst[1] - 16);
      ctx.filter = "brightness(1.5)";
      ctx.drawImage(img, 0, 0, 66, 33);
      ctx.restore();
      ctx.save();
      ctx.translate(lst[0] + 72, lst[1] + 16);
      ctx.drawImage(img, 0, 0, 80, 80);
      ctx.restore();
    } else {
      if (!this.colour.startsWith("#")) {
        this.colour = color.colorNameToHex(this.colour);
      }
      ctx.save();
      ctx.fillStyle = color.getDarkColor(this.colour, 0.4);
      ctx.transform(1, 1.36, 0, 1, lst[0] + 48, lst[1] + 64);
      ctx.fillRect(0, -80, 24, 80);
      ctx.restore();
      ctx.save();
      ctx.fillStyle = color.getLightColor(this.colour, 0.4);
      ctx.transform(1.2, 0, 0.75, 1, lst[0] + 48, lst[1] - 16);
      ctx.fillRect(0, 0, 66, 33);
      ctx.restore();
      ctx.save();
      ctx.fillStyle = this.colour;
      ctx.translate(lst[0] + 48, lst[1] + 16);
      ctx.fillRect(0, 0, 80, 80);
      ctx.restore();
    }
  },
  clear() {
    ctx.clearRect(0, 0, 1600, 900);
  },
};
export default Block;
