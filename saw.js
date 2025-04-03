import control from "./control.js";
import Block from "./block.js";
const saw = document.createElement("canvas");
const saw2 = document.createElement("canvas");
saw.width = 1600;
saw.height = 900;
saw.id = "saw";
saw2.width = 1600;
saw2.height = 900;
saw2.id = "saw2";
document.body.append(saw);
document.body.append(saw2);
const ctx = saw.getContext("2d");
const ctx2 = saw2.getContext("2d");
const Saw = {
  num: 0,
  position: [],
  state: 1,
  async draw() {
    let lst = control.convert(this.position[0], this.position[1]);
    switch (this.state) {
      case 1:
        {
          const img = new Image();
          img.src = "./34.png";
          await new Promise((resolve) => {
            img.onload = resolve;
          });
          ctx.drawImage(img, 0, 0, 1890, 1417, lst[0], lst[1] - 31, 80, 50);
        }
        break;
      case 2: {
        const img = new Image();
        img.src = "./34.png";
        await new Promise((resolve) => {
          img.onload = resolve;
        });
        ctx.save();
        ctx.transform(1, 1.36, 0, 1, lst[0], lst[1]);
        ctx.drawImage(img, 0, 0, 1890, 1417, 0, -31, 30, 50);
        ctx.restore();
      }
    }
  },
  async draw2() {
    let lst = control.convert(this.position[0], this.position[1]);
    switch (this.state) {
      case 1:
        {
          const img = new Image();
          img.src = "./34.png";
          await new Promise((resolve) => {
            img.onload = resolve;
          });
          ctx2.drawImage(img, 0, 0, 1890, 1417, lst[0], lst[1] - 31, 80, 50);
        }
        break;
      case 2: {
        const img = new Image();
        img.src = "./34.png";
        await new Promise((resolve) => {
          img.onload = resolve;
        });
        ctx2.save();
        ctx2.transform(1, 1.36, 0, 1, lst[0], lst[1]);
        ctx2.drawImage(img, 0, 0, 1890, 1417, 0, -31, 30, 50);
        ctx2.restore();
      }
    }
  },
  move() {
    if (
      (this.state == 1 && this.position[1] > 1) ||
      (this.state == 2 && this.position[0] < 14)
    ) {
      loop();
      setTimeout(fade, 2000);
    }
  },
  clear() {
    ctx.clearRect(0, 0, 1600, 900);
  },
  clear2() {
    ctx2.clearRect(0, 0, 1600, 900);
  },
};
var h = 0;
async function loop() {
  let lst = control.convert(Saw.position[0], Saw.position[1]);
  const img = new Image();
  img.src = "./34.png";
  await new Promise((resolve) => {
    img.onload = resolve;
  });
  const img2 = new Image();
  img2.src = Block.texture;
  await new Promise((resolve) => {
    img2.onload = resolve;
  });
  Saw.clear();
  switch (Saw.state) {
    case 1:
      {
        ctx.save();
        ctx.transform(1, 1.36, 0, 1, lst[0] - 24 - 0.75 * h, lst[1] - 32 - h);
        ctx.filter = "brightness(0.5)";
        ctx.drawImage(img2, 0, -80, 24, 80);
        ctx.restore();
        ctx.save();
        ctx.transform(
          1.2,
          0,
          0.785,
          1,
          lst[0] - 24 - 0.75 * h,
          lst[1] - 112 - h
        );
        ctx.filter = "brightness(1.5)";
        ctx.drawImage(img2, 0, 0, 66, 31.8);
        ctx.restore();
        ctx.save();
        ctx.translate(lst[0] - 0.75 * h, lst[1] - 80 - h);
        ctx.drawImage(img2, 0, 0, 80, 80);
        ctx.restore();
        ctx.drawImage(
          img,
          0,
          0,
          1890,
          1417,
          lst[0] - 0.75 * h,
          lst[1] - 31 - h,
          80,
          50
        );
        ctx.save();
        ctx.transform(1, 1.36, 0, 1, lst[0], lst[1]);
        ctx.filter = "brightness(0.5)";
        ctx.drawImage(img2, 0, -80, 24, 80);
        ctx.restore();
        ctx.save();
        ctx.transform(1.2, 0, 0.785, 1, lst[0], lst[1] - 80);
        ctx.filter = "brightness(1.5)";
        ctx.drawImage(img2, 0, 0, 66, 31.8);
        ctx.restore();
        ctx.save();
        ctx.translate(lst[0] + 24, lst[1] - 48);
        ctx.drawImage(img2, 0, 0, 80, 80);
        ctx.restore();
        if (h < 32) {
          h += 0.1;
          requestAnimationFrame(loop);
        } else {
          h = 0;
        }
      }
      break;
    case 2: {
      ctx.save();
      ctx.transform(1, 1.36, 0, 1, lst[0] + h, lst[1]);
      ctx.filter = "brightness(0.5)";
      ctx.drawImage(img2, 0, -80, 24, 80);
      ctx.restore();
      ctx.save();
      ctx.transform(1.2, 0, 0.785, 1, lst[0] + h, lst[1] - 80);
      ctx.filter = "brightness(1.5)";
      ctx.drawImage(img2, 0, 0, 66, 31.8);
      ctx.restore();
      ctx.save();
      ctx.translate(lst[0] + 24 + h, lst[1] - 48);
      ctx.drawImage(img2, 0, 0, 80, 80);
      ctx.restore();
      ctx.save();
      ctx.transform(1, 1.36, 0, 1, lst[0] + h, lst[1]);
      ctx.drawImage(img, 0, 0, 1890, 1417, 0, -31, 30, 50);
      ctx.restore();
      ctx.save();
      ctx.transform(1, 1.36, 0, 1, lst[0] - 80, lst[1]);
      ctx.filter = "brightness(0.5)";
      ctx.drawImage(img2, 0, -80, 24, 80);
      ctx.restore();
      ctx.save();
      ctx.transform(1.2, 0, 0.785, 1, lst[0] - 80, lst[1] - 80);
      ctx.filter = "brightness(1.5)";
      ctx.drawImage(img2, 0, 0, 66, 31.8);
      ctx.restore();
      ctx.save();
      ctx.translate(lst[0] - 56, lst[1] - 48);
      ctx.drawImage(img2, 0, 0, 80, 80);
      ctx.restore();
      if (h < 80) {
        h += 0.4;
        requestAnimationFrame(loop);
      } else {
        h = 0;
      }
    }
  }
}
var k = 0;
async function fade() {
  let lst = control.convert(Saw.position[0], Saw.position[1]);
  const img = new Image();
  img.src = "./34.png";
  await new Promise((resolve) => {
    img.onload = resolve;
  });
  Saw.clear();
  switch (Saw.state) {
    case 1:
      {
        ctx.drawImage(
          img,
          0,
          0,
          1890,
          1410 - k,
          lst[0] - 24,
          lst[1] - 31 + k * 0.0177 - 32,
          80,
          50 - k * 0.0355
        );
      }
      break;
    case 2: {
      ctx.save();
      ctx.transform(1, 1.36, 0, 1, lst[0] + 80, lst[1] + k * 0.0177);
      ctx.drawImage(img, 0, 0, 1890, 1410 - k, 0, -31, 30, 50 - k * 0.0355);
      ctx.restore();
    }
  }
  if (k < 1410) {
    k += 10;
    requestAnimationFrame(fade);
  } else {
    k = 0;
  }
}
export default Saw;
