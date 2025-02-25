import control from "./control.js";
const cegg = document.createElement("canvas");
cegg.width = 1600;
cegg.height = 900;
cegg.id = "coloregg";
document.body.append(cegg);
export const ctx = cegg.getContext("2d");
const test = document.createElement("canvas");
test.width = 1600;
test.height = 900;
test.id = "test";
document.body.append(test);
export const ctx2 = test.getContext("2d");
const Cegg = {
  position: [1, 1],
  num: 0,
  draw() {
    let lst = control.convert(this.position[0], this.position[1]);
    ctx.beginPath();
    ctx.ellipse(lst[0] + 52, lst[1] + 12, 18, 10, 0, 0, 2 * Math.PI);
    let clr = ctx.createLinearGradient(
      lst[0] + 52,
      lst[1],
      lst[0] + 52,
      lst[1] + 32
    );
    clr.addColorStop(0.1, "red");
    clr.addColorStop(0.2, "orange");
    clr.addColorStop(0.3, "yellow");
    clr.addColorStop(0.5, "green");
    clr.addColorStop(0.7, "blue");
    ctx.fillStyle = clr;
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(lst[0] + 52, lst[1] + 15, 18, 10, 0, 0.45, Math.PI - 0.45);
    ctx.lineCap = "round";
    ctx.strokeStyle = "purple";
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
  async pop() {
    switch (this.num) {
      case 1:
        {
          var img = new Image();
          img.src = "30.jpg";
          await new Promise((resolve) => {
            img.onload = resolve;
          });
          ctx2.drawImage(img, 0, 0, 3000, 2131, 275, 50, 1050, 700);
          let ans = document.createElement("input");
          let p = document.createElement("p");
          ans.className = "answer";
          p.className = "p";
          document.body.append(ans);
          document.body.append(p);
          p.innerHTML = "请输入该电路图的名称";
          ans.addEventListener("input", function () {
            if (this.value == "741运放") {
              Cegg.clear2();
              ans.remove();
              p.remove();
              control.process = 4;
            }
          });
        }
        break;
      case 2:
        {
          var img = new Image();
          img.src = "31.png";
          await new Promise((resolve) => {
            img.onload = resolve;
          });
          ctx2.drawImage(img, 0, 0, 491, 345, 275, 50, 1050, 700);
          let ans = document.createElement("input");
          let p = document.createElement("p");
          ans.className = "answer";
          p.className = "p";
          document.body.append(ans);
          document.body.append(p);
          p.innerHTML = "请输入保留4位有效数字的结果";
          ans.addEventListener("input", function () {
            if (this.value == "0.2722") {
              Cegg.clear2();
              ans.remove();
              p.remove();
              control.process = 4;
            }
          });
        }
        break;
      case 3:
        {
          var img = new Image();
          img.src = "32.png";
          await new Promise((resolve) => {
            img.onload = resolve;
          });
          ctx2.drawImage(img, 0, 0, 1675, 901, 275, 50, 1050, 700);
          let ans = document.createElement("input");
          let p = document.createElement("p");
          ans.className = "answer";
          p.className = "p";
          document.body.append(ans);
          document.body.append(p);
          p.innerHTML = "请输入图中电路的功能";
          ans.addEventListener("input", function () {
            if (this.value == "乘法") {
              Cegg.clear2();
              ans.remove();
              p.remove();
              control.process = 4;
            }
          });
        }
        break;
    }
  },
  clear() {
    ctx.clearRect(0, 0, 1600, 900);
  },
  clear2() {
    ctx2.clearRect(0, 0, 1600, 900);
  },
};
export default Cegg;
