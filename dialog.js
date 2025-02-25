import control from "./control.js";
const dialog = document.createElement("canvas");
dialog.width = 1600;
dialog.height = 900;
dialog.id = "dialog";
document.body.append(dialog);
const ctx = dialog.getContext("2d");
const Dialog = {
  mem: 0,
  type: 1,
  async menu() {
    const img1 = new Image();
    img1.src = "12.png";
    await new Promise((resolve) => {
      img1.onload = resolve;
    });
    const img2 = new Image();
    img2.src = "13.png";
    await new Promise((resolve) => {
      img2.onload = resolve;
    });
    const img3 = new Image();
    img3.src = "14.png";
    await new Promise((resolve) => {
      img3.onload = resolve;
    });
    const img4 = new Image();
    img4.src = "15.png";
    await new Promise((resolve) => {
      img4.onload = resolve;
    });
    ctx.roundRect(400, 120, 800, 600, 100);
    let a = ctx.createRadialGradient(1100, 170, 0, 1100, 170, 950);
    a.addColorStop(0, "#54FF9F");
    a.addColorStop(0.5, "#76EE00");
    a.addColorStop(1, "#00CD00");
    ctx.fillStyle = a;
    ctx.fill();
    ctx.strokeStyle = "#00C5CD";
    ctx.lineWidth = 10;
    ctx.stroke();
    ctx.beginPath();
    ctx.roundRect(500, 340, 600, 100, 30);
    ctx.fillStyle = "#7FFFD4";
    ctx.fill();
    ctx.strokeStyle = "#F0FFF0";
    ctx.lineWidth = 8;
    ctx.stroke();
    ctx.beginPath();
    ctx.roundRect(500, 470, 600, 100, 30);
    ctx.fillStyle = "#7FFFD4";
    ctx.fill();
    ctx.strokeStyle = "#F0FFF0";
    ctx.lineWidth = 8;
    ctx.stroke();
    ctx.beginPath();
    ctx.roundRect(500, 600, 600, 100, 30);
    ctx.fillStyle = "#7FFFD4";
    ctx.fill();
    ctx.strokeStyle = "#F0FFF0";
    ctx.lineWidth = 8;
    ctx.stroke();
    ctx.drawImage(img1, 0, 0, 351, 220, 550, 130, 500, 200);
    ctx.drawImage(img2, 0, 0, 317, 109, 560, 340, 470, 100);
    ctx.drawImage(img3, 0, 0, 418, 120, 540, 470, 520, 100);
    ctx.drawImage(img4, 0, 0, 425, 111, 540, 600, 520, 100);
  },
  async win() {
    const img1 = new Image();
    img1.src = "9.png";
    await new Promise((resolve) => {
      img1.onload = resolve;
    });
    const img2 = new Image();
    img2.src = "11.png";
    await new Promise((resolve) => {
      img2.onload = resolve;
    });
    const img3 = new Image();
    img3.src = "10.png";
    await new Promise((resolve) => {
      img3.onload = resolve;
    });
    ctx.beginPath();
    ctx.roundRect(400, 120, 800, 600, 100);
    let a = ctx.createRadialGradient(1100, 170, 0, 1100, 170, 950);
    a.addColorStop(0, "#54FF9F");
    a.addColorStop(0.5, "#76EE00");
    a.addColorStop(1, "#00CD00");
    ctx.fillStyle = a;
    ctx.fill();
    ctx.strokeStyle = "#00C5CD";
    ctx.lineWidth = 10;
    ctx.stroke();
    ctx.beginPath();
    ctx.roundRect(500, 320, 600, 150, 30);
    ctx.fillStyle = "#7FFFD4";
    ctx.fill();
    ctx.strokeStyle = "#F0FFF0";
    ctx.lineWidth = 8;
    ctx.stroke();
    ctx.beginPath();
    ctx.roundRect(500, 520, 600, 150, 30);
    ctx.fillStyle = "#7FFFD4";
    ctx.fill();
    ctx.strokeStyle = "#F0FFF0";
    ctx.lineWidth = 8;
    ctx.stroke();
    ctx.drawImage(img1, 0, 0, 365, 241, 550, 130, 500, 230);
    ctx.drawImage(img2, 0, 0, 317, 109, 560, 325, 470, 140);
    ctx.drawImage(img3, 0, 0, 738, 209, 540, 520, 520, 160);
  },
  async main() {
    const img1 = new Image();
    img1.src = "16.png";
    await new Promise((resolve) => {
      img1.onload = resolve;
    });
    const img2 = new Image();
    img2.src = "17.png";
    await new Promise((resolve) => {
      img2.onload = resolve;
    });
    const img3 = new Image();
    img3.src = "18.png";
    await new Promise((resolve) => {
      img3.onload = resolve;
    });
    const img4 = new Image();
    img4.src = "19.png";
    await new Promise((resolve) => {
      img4.onload = resolve;
    });
    ctx.roundRect(400, 120, 800, 600, 100);
    let a = ctx.createRadialGradient(1100, 170, 0, 1100, 170, 950);
    a.addColorStop(0, "#54FF9F");
    a.addColorStop(0.5, "#76EE00");
    a.addColorStop(1, "#00CD00");
    ctx.fillStyle = a;
    ctx.fill();
    ctx.strokeStyle = "#00C5CD";
    ctx.lineWidth = 10;
    ctx.stroke();
    ctx.beginPath();
    ctx.roundRect(500, 340, 600, 100, 30);
    ctx.fillStyle = "#7FFFD4";
    ctx.fill();
    ctx.strokeStyle = "#F0FFF0";
    ctx.lineWidth = 8;
    ctx.stroke();
    ctx.beginPath();
    ctx.roundRect(500, 470, 600, 100, 30);
    ctx.fillStyle = "#7FFFD4";
    ctx.fill();
    ctx.strokeStyle = "#F0FFF0";
    ctx.lineWidth = 8;
    ctx.stroke();
    ctx.beginPath();
    ctx.roundRect(500, 600, 600, 100, 30);
    ctx.fillStyle = "#7FFFD4";
    ctx.fill();
    ctx.strokeStyle = "#F0FFF0";
    ctx.lineWidth = 8;
    ctx.stroke();
    ctx.drawImage(img1, 0, 0, 530, 233, 550, 130, 500, 200);
    ctx.drawImage(img2, 0, 0, 364, 171, 590, 340, 410, 100);
    ctx.drawImage(img3, 0, 0, 730, 180, 540, 470, 520, 100);
    ctx.drawImage(img4, 0, 0, 912, 202, 520, 590, 550, 120);
  },
  async win2() {
    const img1 = new Image();
    img1.src = "9.png";
    await new Promise((resolve) => {
      img1.onload = resolve;
    });
    const img2 = new Image();
    img2.src = "11.png";
    await new Promise((resolve) => {
      img2.onload = resolve;
    });
    const img3 = new Image();
    img3.src = "20.png";
    await new Promise((resolve) => {
      img3.onload = resolve;
    });
    ctx.beginPath();
    ctx.roundRect(400, 120, 800, 600, 100);
    let a = ctx.createRadialGradient(1100, 170, 0, 1100, 170, 950);
    a.addColorStop(0, "#54FF9F");
    a.addColorStop(0.5, "#76EE00");
    a.addColorStop(1, "#00CD00");
    ctx.fillStyle = a;
    ctx.fill();
    ctx.strokeStyle = "#00C5CD";
    ctx.lineWidth = 10;
    ctx.stroke();
    ctx.beginPath();
    ctx.roundRect(500, 320, 600, 150, 30);
    ctx.fillStyle = "#7FFFD4";
    ctx.fill();
    ctx.strokeStyle = "#F0FFF0";
    ctx.lineWidth = 8;
    ctx.stroke();
    ctx.beginPath();
    ctx.roundRect(500, 520, 600, 150, 30);
    ctx.fillStyle = "#7FFFD4";
    ctx.fill();
    ctx.strokeStyle = "#F0FFF0";
    ctx.lineWidth = 8;
    ctx.stroke();
    ctx.drawImage(img1, 0, 0, 365, 241, 550, 130, 500, 230);
    ctx.drawImage(img2, 0, 0, 317, 109, 560, 325, 470, 140);
    ctx.drawImage(img3, 0, 0, 322, 112, 540, 520, 520, 160);
  },
  async lose() {
    const img1 = new Image();
    img1.src = "22.png";
    await new Promise((resolve) => {
      img1.onload = resolve;
    });
    const img2 = new Image();
    img2.src = "11.png";
    await new Promise((resolve) => {
      img2.onload = resolve;
    });
    const img3 = new Image();
    img3.src = "15.png";
    await new Promise((resolve) => {
      img3.onload = resolve;
    });
    ctx.beginPath();
    ctx.roundRect(400, 120, 800, 600, 100);
    let a = ctx.createRadialGradient(1100, 170, 0, 1100, 170, 950);
    a.addColorStop(0, "#54FF9F");
    a.addColorStop(0.5, "#76EE00");
    a.addColorStop(1, "#00CD00");
    ctx.fillStyle = a;
    ctx.fill();
    ctx.strokeStyle = "#00C5CD";
    ctx.lineWidth = 10;
    ctx.stroke();
    ctx.beginPath();
    ctx.roundRect(500, 320, 600, 150, 30);
    ctx.fillStyle = "#7FFFD4";
    ctx.fill();
    ctx.strokeStyle = "#F0FFF0";
    ctx.lineWidth = 8;
    ctx.stroke();
    ctx.beginPath();
    ctx.roundRect(500, 520, 600, 150, 30);
    ctx.fillStyle = "#7FFFD4";
    ctx.fill();
    ctx.strokeStyle = "#F0FFF0";
    ctx.lineWidth = 8;
    ctx.stroke();
    ctx.drawImage(img1, 0, 0, 219, 109, 550, 120, 500, 220);
    ctx.drawImage(img2, 0, 0, 317, 109, 560, 325, 470, 140);
    ctx.drawImage(img3, 0, 0, 425, 111, 540, 520, 520, 160);
  },
  clear() {
    ctx.clearRect(0, 0, 1600, 900);
  },
};
Dialog.main();
export default Dialog;
