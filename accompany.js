import control from "./control.js";
import color from "./color.js";
import { drawbridge } from "./game.js";
import Block from "./block.js";
import Wall from "./wall.js";
import { wallocate } from "./wall.js";
import Sblock from "./strangeblock.js";
import Saw from "./saw.js";
const acc = document.createElement("canvas");
acc.width = 1600;
acc.height = 900;
acc.id = "accompany";
document.body.append(acc);
export const ctx = acc.getContext("2d");
const Accompany = {
  switch: 0,
  who: 0,
  accompany(lst) {
    if (!control.process) {
      if (lst[0] >= 0 && lst[0] < 14 && lst[1] >= 0 && lst[1] < 19) {
        switch (this.who) {
          case 1:
            {
              if (control.center[lst[0]][lst[1]]) {
                acdraw1("#CD2626", lst);
              } else {
                acdraw1("#ADFF2F", lst);
              }
              ctx.beginPath();
              ctx.roundRect(4, 824, 72, 72, 10);
              ctx.strokeStyle = "black";
              ctx.setLineDash([10, 15]);
              ctx.lineWidth = 1;
              ctx.stroke();
            }
            break;
          case 2:
            {
              if (drawbridge(lst)) {
                if (control.center[lst[0]][lst[1]]) {
                  acdraw2("#CD2626", lst);
                } else {
                  acdraw2("#ADFF2F", lst);
                }
              } else {
                acdraw2("#CD2626", lst);
              }
              ctx.beginPath();
              ctx.roundRect(84, 824, 72, 72, 10);
              ctx.strokeStyle = "black";
              ctx.setLineDash([10, 15]);
              ctx.lineWidth = 1;
              ctx.stroke();
            }
            break;
          case 3:
            {
              if (
                control.center[lst[0]][lst[1]] >= 1 &&
                control.center[lst[0]][lst[1]] < 2
              ) {
                acdraw3("#ADFF2F", lst);
              } else {
                acdraw3("#CD2626", lst);
              }
              ctx.roundRect(164, 824, 72, 72, 10);
              ctx.strokeStyle = "black";
              ctx.setLineDash([10, 15]);
              ctx.lineWidth = 1;
              ctx.stroke();
            }
            break;
          case 4:
            {
              if (
                control.center[lst[0]][lst[1]] >= 1 &&
                control.center[lst[0]][lst[1]] < 2
              ) {
                acdraw4("#ADFF2F", lst);
              } else {
                acdraw4("#CD2626", lst);
              }
              ctx.roundRect(244, 824, 72, 72, 10);
              ctx.strokeStyle = "black";
              ctx.setLineDash([10, 15]);
              ctx.lineWidth = 1;
              ctx.stroke();
            }
            break;
          case 5:
            {
              if (
                lst[0] > 0 &&
                lst[1] > 0 &&
                control.center[lst[0]][lst[1]] == 0 &&
                ((control.center[lst[0] - 1][lst[1]] >= 1 &&
                  control.center[lst[0] - 1][lst[1]] < 2) ||
                  (control.center[lst[0] - 1][lst[1]] >= 3 &&
                    control.center[lst[0] - 1][lst[1]] < 4) ||
                  (control.center[lst[0] - 1][lst[1]] >= 4 &&
                    control.center[lst[0] - 1][lst[1]] < 5) ||
                  (control.center[lst[0] - 1][lst[1]] >= 7 &&
                    control.center[lst[0] - 1][lst[1]] < 8)) &&
                ((control.center[lst[0] + 1][lst[1]] >= 1 &&
                  control.center[lst[0] + 1][lst[1]] < 2) ||
                  (control.center[lst[0] + 1][lst[1]] >= 3 &&
                    control.center[lst[0] + 1][lst[1]] < 4) ||
                  (control.center[lst[0] + 1][lst[1]] >= 4 &&
                    control.center[lst[0] + 1][lst[1]] < 5) ||
                  (control.center[lst[0] + 1][lst[1]] >= 7 &&
                    control.center[lst[0] + 1][lst[1]] < 8)) &&
                ((control.center[lst[0]][lst[1] - 1] >= 1 &&
                  control.center[lst[0]][lst[1] - 1] < 2) ||
                  (control.center[lst[0]][lst[1] - 1] >= 3 &&
                    control.center[lst[0]][lst[1]] - 1 < 4) ||
                  (control.center[lst[0]][lst[1] - 1] >= 4 &&
                    control.center[lst[0]][lst[1] - 1] < 5) ||
                  (control.center[lst[0]][lst[1] - 1] >= 7 &&
                    control.center[lst[0]][lst[1] - 1] < 8)) &&
                ((control.center[lst[0]][lst[1] + 1] >= 1 &&
                  control.center[lst[0]][lst[1] + 1] < 2) ||
                  (control.center[lst[0]][lst[1] + 1] >= 3 &&
                    control.center[lst[0]][lst[1] + 1] < 4) ||
                  (control.center[lst[0]][lst[1] + 1] >= 4 &&
                    control.center[lst[0]][lst[1] + 1] < 5) ||
                  (control.center[lst[0]][lst[1] + 1] >= 7 &&
                    control.center[lst[0]][lst[1] + 1] < 8))
              ) {
                acdraw5("#ADFF2F", lst);
              } else {
                acdraw5("#CD2626", lst);
              }
              ctx.roundRect(324, 824, 72, 72, 10);
              ctx.strokeStyle = "black";
              ctx.setLineDash([10, 15]);
              ctx.lineWidth = 1;
              ctx.stroke();
            }

            break;
          case 6:
            {
              switch (Block.state) {
                case 1:
                  {
                    if (
                      (control.center[lst[0]][lst[1]] == 1 ||
                        control.center[lst[0]][lst[1]] == 1.25 ||
                        control.center[lst[0]][lst[1]] == 1.5 ||
                        control.center[lst[0]][lst[1]] == 1.75) &&
                      (control.center[lst[0] + 1][lst[1]] == 1 ||
                        control.center[lst[0] + 1][lst[1]] == 1.25)
                    ) {
                      acdraw6(1, "#ADFF2F", lst);
                    } else {
                      acdraw6(1, "#CD2626", lst);
                    }
                  }
                  break;
                case 2:
                  {
                    if (
                      control.center[lst[0]][lst[1]] == 1 ||
                      control.center[lst[0]][lst[1]] == 1.25 ||
                      control.center[lst[0]][lst[1]] == 1.5 ||
                      control.center[lst[0]][lst[1]] == 1.75
                    ) {
                      acdraw6(2, "#ADFF2F", lst);
                    } else {
                      acdraw6(2, "#CD2626", lst);
                    }
                  }
                  break;
                case 3:
                  {
                    if (
                      (control.center[lst[0]][lst[1]] == 1 ||
                        control.center[lst[0]][lst[1]] == 1.25 ||
                        control.center[lst[0]][lst[1]] == 1.5 ||
                        control.center[lst[0]][lst[1]] == 1.75) &&
                      (control.center[lst[0]][lst[1] + 1] == 1 ||
                        control.center[lst[0]][lst[1] + 1] == 1.5)
                    ) {
                      acdraw6(3, "#ADFF2F", lst);
                    } else {
                      acdraw6(3, "#CD2626", lst);
                    }
                  }
                  break;
              }
              ctx.roundRect(404, 824, 72, 72, 10);
              ctx.strokeStyle = "black";
              ctx.setLineDash([10, 15]);
              ctx.lineWidth = 1;
              ctx.stroke();
            }
            break;
          case 7:
            {
              if (control.center[lst[0]][lst[1]]) {
                acdraw1("#CD2626", lst);
              } else {
                acdraw1("#ADFF2F", lst);
              }
              ctx.beginPath();
              ctx.roundRect(484, 824, 72, 72, 10);
              ctx.strokeStyle = "black";
              ctx.setLineDash([10, 15]);
              ctx.lineWidth = 1;
              ctx.stroke();
            }
            break;
          case 8:
            {
              if (Wall.type == 1) {
                if (lst[1] == 0) {
                  acdraw8("#CD2626", lst);
                } else if (
                  control.center[lst[0]][lst[1]] != 0 &&
                  control.center[lst[0]][lst[1]] != 2 &&
                  control.center[lst[0]][lst[1] - 1] != 0 &&
                  control.center[lst[0]][lst[1] - 1] != 2 &&
                  (control.center[lst[0]][lst[1]] * 4) % 4 != 1 &&
                  (control.center[lst[0]][lst[1]] * 4) % 4 != 3
                ) {
                  if (
                    Block.state == 3 &&
                    Block.position[0] == lst[0] &&
                    Block.position[1] == lst[1] - 1
                  ) {
                    acdraw8("#CD2626", lst);
                  } else {
                    acdraw8("#ADFF2F", lst);
                  }
                } else {
                  acdraw8("#CD2626", lst);
                }
              } else if (Wall.type == 2) {
                if (lst[0] == 0) {
                  acdraw8("#CD2626", lst);
                } else if (
                  control.center[lst[0]][lst[1]] != 0 &&
                  control.center[lst[0]][lst[1]] != 2 &&
                  control.center[lst[0] - 1][lst[1]] != 0 &&
                  control.center[lst[0] - 1][lst[1]] != 2 &&
                  (control.center[lst[0]][lst[1]] * 4) % 4 != 2 &&
                  (control.center[lst[0]][lst[1]] * 4) % 4 != 3
                ) {
                  if (
                    Block.state == 1 &&
                    Block.position[0] == lst[0] - 1 &&
                    Block.position[1] == lst[1]
                  ) {
                    acdraw8("#CD2626", lst);
                  } else {
                    acdraw8("#ADFF2F", lst);
                  }
                } else {
                  acdraw8("#CD2626", lst);
                }
                ctx.beginPath();
                ctx.roundRect(564, 824, 72, 72, 10);
                ctx.strokeStyle = "black";
                ctx.setLineDash([10, 15]);
                ctx.lineWidth = 1;
                ctx.stroke();
              }
            }
            break;
          case 11:
            {
              switch (Sblock.state) {
                case 1:
                  {
                    if (
                      (control.center[lst[0]][lst[1]] == 1 ||
                        control.center[lst[0]][lst[1]] == 1.25 ||
                        control.center[lst[0]][lst[1]] == 1.5 ||
                        control.center[lst[0]][lst[1]] == 1.75) &&
                      (control.center[lst[0] + 1][lst[1]] == 1 ||
                        control.center[lst[0] + 1][lst[1]] == 1.25)
                    ) {
                      acdraw11(1, "#ADFF2F", lst);
                    } else {
                      acdraw11(1, "#CD2626", lst);
                    }
                  }
                  break;
                case 2:
                  {
                    if (
                      control.center[lst[0]][lst[1]] == 1 ||
                      control.center[lst[0]][lst[1]] == 1.25 ||
                      control.center[lst[0]][lst[1]] == 1.5 ||
                      control.center[lst[0]][lst[1]] == 1.75
                    ) {
                      acdraw11(2, "#ADFF2F", lst);
                    } else {
                      acdraw11(2, "#CD2626", lst);
                    }
                  }
                  break;
                case 3:
                  {
                    if (
                      (control.center[lst[0]][lst[1]] == 1 ||
                        control.center[lst[0]][lst[1]] == 1.25 ||
                        control.center[lst[0]][lst[1]] == 1.5 ||
                        control.center[lst[0]][lst[1]] == 1.75) &&
                      (control.center[lst[0]][lst[1] + 1] == 1 ||
                        control.center[lst[0]][lst[1] + 1] == 1.5)
                    ) {
                      acdraw11(3, "#ADFF2F", lst);
                    } else {
                      acdraw11(3, "#CD2626", lst);
                    }
                  }
                  break;
                case 4:
                  {
                    if (
                      (control.center[lst[0]][lst[1]] == 1 ||
                        control.center[lst[0]][lst[1]] == 1.25 ||
                        control.center[lst[0]][lst[1]] == 1.5 ||
                        control.center[lst[0]][lst[1]] == 1.75) &&
                      (control.center[lst[0]][lst[1] + 1] == 1 ||
                        control.center[lst[0]][lst[1] + 1] == 1.5)
                    ) {
                      acdraw11(4, "#ADFF2F", lst);
                    } else {
                      acdraw11(4, "#CD2626", lst);
                    }
                  }
                  break;
                case 5:
                  {
                    if (
                      (control.center[lst[0]][lst[1]] == 1 ||
                        control.center[lst[0]][lst[1]] == 1.25 ||
                        control.center[lst[0]][lst[1]] == 1.5 ||
                        control.center[lst[0]][lst[1]] == 1.75) &&
                      (control.center[lst[0] + 1][lst[1]] == 1 ||
                        control.center[lst[0] + 1][lst[1]] == 1.25)
                    ) {
                      acdraw11(5, "#ADFF2F", lst);
                    } else {
                      acdraw11(5, "#CD2626", lst);
                    }
                  }
                  break;
              }
            }
            break;
          case 12:
            {
              if (Saw.state == 1) {
                if (lst[1] <= 1) {
                  acdraw12(1, lst);
                } else if (
                  control.center[lst[0]][lst[1]] != 0 &&
                  control.center[lst[0]][lst[1]] != 2 &&
                  control.center[lst[0]][lst[1] - 1] != 0 &&
                  control.center[lst[0]][lst[1] - 1] != 2 &&
                  control.center[lst[0]][lst[1] - 2] != 0 &&
                  control.center[lst[0]][lst[1] - 2] != 2 &&
                  (control.center[lst[0]][lst[1]] * 4) % 4 != 1 &&
                  (control.center[lst[0]][lst[1]] * 4) % 4 != 3 &&
                  (control.center[lst[0]][lst[1] - 1] * 4) % 4 != 1 &&
                  (control.center[lst[0]][lst[1] - 1] * 4) % 4 != 3
                ) {
                  if (
                    Block.state == 3 &&
                    Block.position[0] == lst[0] &&
                    Block.position[1] == lst[1] - 1
                  ) {
                    acdraw12(1, lst);
                  } else {
                    acdraw12(2, lst);
                  }
                } else {
                  acdraw12(1, lst);
                }
              } else if (Saw.state == 2) {
                if (lst[0] >= 12) {
                  acdraw12(1, lst);
                } else if (
                  control.center[lst[0]][lst[1]] != 0 &&
                  control.center[lst[0]][lst[1]] != 2 &&
                  control.center[lst[0] - 1][lst[1]] != 0 &&
                  control.center[lst[0] - 1][lst[1]] != 2 &&
                  control.center[lst[0] + 1][lst[1]] != 0 &&
                  control.center[lst[0] + 1][lst[1]] != 2 &&
                  (control.center[lst[0]][lst[1]] * 4) % 4 != 2 &&
                  (control.center[lst[0]][lst[1]] * 4) % 4 != 3 &&
                  (control.center[lst[0] + 1][lst[1]] * 4) % 4 != 2 &&
                  (control.center[lst[0] + 1][lst[1]] * 4) % 4 != 3
                ) {
                  if (
                    Block.state == 1 &&
                    Block.position[0] == lst[0] - 1 &&
                    Block.position[1] == lst[1]
                  ) {
                    acdraw12(1, lst);
                  } else {
                    acdraw12(2, lst);
                  }
                } else {
                  acdraw12(1, lst);
                }
                ctx.beginPath();
                ctx.roundRect(724, 824, 72, 72, 10);
                ctx.strokeStyle = "black";
                ctx.setLineDash([10, 15]);
                ctx.lineWidth = 1;
                ctx.stroke();
              }
            }
            break;
        }
      } else {
        switch (this.who) {
          case 1:
            {
              acdraw1("#CD2626", lst);
              ctx.beginPath();
              ctx.roundRect(4, 824, 72, 72, 10);
              ctx.strokeStyle = "black";
              ctx.setLineDash([10, 15]);
              ctx.lineWidth = 1;
              ctx.stroke();
            }
            break;
          case 2:
            {
              acdraw2("#CD2626", lst);
              ctx.beginPath();
              ctx.roundRect(84, 824, 72, 72, 10);
              ctx.strokeStyle = "black";
              ctx.setLineDash([10, 15]);
              ctx.lineWidth = 1;
              ctx.stroke();
            }
            break;
          case 3:
            {
              acdraw3("#CD2626", lst);
              ctx.roundRect(164, 824, 72, 72, 10);
              ctx.strokeStyle = "black";
              ctx.setLineDash([10, 15]);
              ctx.lineWidth = 1;
              ctx.stroke();
            }
            break;
          case 4:
            {
              acdraw4("#CD2626", lst);
              ctx.roundRect(244, 824, 72, 72, 10);
              ctx.strokeStyle = "black";
              ctx.setLineDash([10, 15]);
              ctx.lineWidth = 1;
              ctx.stroke();
            }
            break;
          case 5:
            {
              acdraw5("#CD2626", lst);
              ctx.roundRect(324, 824, 72, 72, 10);
              ctx.strokeStyle = "black";
              ctx.setLineDash([10, 15]);
              ctx.lineWidth = 1;
              ctx.stroke();
            }
            break;
          case 6:
            {
              switch (Block.state) {
                case 1:
                  acdraw6(1, "#CD2626", lst);
                  break;
                case 2:
                  acdraw6(2, "#CD2626", lst);
                  break;
                case 3:
                  acdraw6(3, "#CD2626", lst);
                  break;
              }
              ctx.roundRect(404, 824, 72, 72, 10);
              ctx.strokeStyle = "black";
              ctx.setLineDash([10, 15]);
              ctx.lineWidth = 1;
              ctx.stroke();
            }
            break;
          case 7:
            {
              acdraw1("#CD2626", lst);
              ctx.beginPath();
              ctx.roundRect(484, 824, 72, 72, 10);
              ctx.strokeStyle = "black";
              ctx.setLineDash([10, 15]);
              ctx.lineWidth = 1;
              ctx.stroke();
            }
            break;
          case 8:
            {
              acdraw8("#CD2626", lst);
              ctx.beginPath();
              ctx.roundRect(564, 824, 72, 72, 10);
              ctx.strokeStyle = "black";
              ctx.setLineDash([10, 15]);
              ctx.lineWidth = 1;
              ctx.stroke();
            }
            break;
          case 11:
            {
              switch (Sblock.state) {
                case 1:
                  acdraw11(1, "#CD2626", lst);
                  break;
                case 2:
                  acdraw11(2, "#CD2626", lst);
                  break;
                case 3:
                  acdraw11(3, "#CD2626", lst);
                  break;
                case 4:
                  acdraw11(4, "#CD2626", lst);
                  break;
                case 5:
                  acdraw11(5, "#CD2626", lst);
                  break;
              }
              ctx.roundRect(644, 824, 72, 72, 10);
              ctx.strokeStyle = "black";
              ctx.setLineDash([10, 15]);
              ctx.lineWidth = 1;
              ctx.stroke();
            }
            break;
          case 12: {
            acdraw12(1, lst);
            ctx.beginPath();
            ctx.roundRect(724, 824, 72, 72, 10);
            ctx.strokeStyle = "black";
            ctx.setLineDash([10, 15]);
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    } else if (control.process == 2) {
      if (control.center[lst[0]][lst[1]] == 2) {
        acdraw2("#ADFF2F", lst);
      }
    }
  },
  set(t) {
    acc.style.zIndex = t;
  },
  clear() {
    ctx.clearRect(0, 0, 1600, 900);
  },
};
function acdraw1(colour, lst) {
  let ls = control.convert(lst[0], lst[1]);
  ctx.clearRect(0, 0, 1600, 900);
  ctx.save();
  ctx.fillStyle = color.getDarkColor(colour, 0.3);
  ctx.transform(1, 1.36, 0, 1, ls[0], ls[1]);
  ctx.fillRect(0, 0, 24, 30);
  ctx.restore();
  ctx.save();
  ctx.fillStyle = color.getLightColor(colour, 0.3);
  ctx.transform(1.2, 0, 0.785, 1, ls[0], ls[1]);
  ctx.fillRect(0, 0, 67, 31.8);
  ctx.restore();
  ctx.save();
  ctx.fillStyle = colour;
  ctx.translate(ls[0] + 24, ls[1] + 32);
  ctx.fillRect(0, 0, 80, 30);
  ctx.restore();
}
function acdraw2(colour, lst) {
  let ls = control.convert(lst[0], lst[1]);
  ctx.clearRect(0, 0, 1600, 900);
  ctx.save();
  ctx.fillStyle = color.getDarkColor(colour, 0.3);
  ctx.transform(1, 1.36, 0, 1, ls[0], ls[1]);
  ctx.fillRect(0, 0, 24, 10);
  ctx.restore();
  ctx.save();
  ctx.fillStyle = color.getLightColor(colour, 0.3);
  ctx.transform(1.2, 0, 0.785, 1, ls[0], ls[1]);
  ctx.fillRect(0, 0, 67, 31.8);
  ctx.restore();
  ctx.save();
  ctx.fillStyle = colour;
  ctx.translate(ls[0] + 24, ls[1] + 32);
  ctx.fillRect(0, 0, 80, 10);
  ctx.restore();
}
function acdraw3(colour, lst) {
  ctx.clearRect(0, 0, 1600, 900);
  let ls = control.convert(lst[0], lst[1]);
  ctx.beginPath();
  ctx.ellipse(ls[0] + 52, ls[1] + 12, 18, 10, 0, 0, 2 * Math.PI);
  ctx.fillStyle = colour;
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(ls[0] + 52, ls[1] + 15, 18, 10, 0, 0.45, Math.PI - 0.45);
  ctx.lineCap = "round";
  ctx.strokeStyle = color.getDarkColor(colour, 0.3);
  ctx.lineWidth = 6;
  ctx.stroke();
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.moveTo(ls[0] + 33.5, ls[1] + 13);
  ctx.lineTo(ls[0] + 33.5, ls[1] + 18);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(ls[0] + 70.5, ls[1] + 13);
  ctx.lineTo(ls[0] + 70.5, ls[1] + 18);
  ctx.stroke();
}
function acdraw4(colour, lst) {
  ctx.clearRect(0, 0, 1600, 900);
  let ls = control.convert(lst[0], lst[1]);
  ctx.lineWidth = 3;
  ctx.strokeStyle = color.getDarkColor(colour, 0.3);
  ctx.beginPath();
  ctx.moveTo(ls[0] + 34, ls[1] + 12);
  ctx.lineTo(ls[0] + 68, ls[1] + 24);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(ls[0] + 44, ls[1] + 24);
  ctx.lineTo(ls[0] + 62, ls[1] + 12);
  ctx.stroke();
  ctx.strokeStyle = colour;
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(ls[0] + 35, ls[1] + 8);
  ctx.lineTo(ls[0] + 69, ls[1] + 20);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(ls[0] + 43, ls[1] + 20);
  ctx.lineTo(ls[0] + 61, ls[1] + 8);
  ctx.stroke();
}
function acdraw5(colour, lst) {
  ctx.clearRect(0, 0, 1600, 900);
  let ls = control.convert(lst[0], lst[1]);
  let gra = ctx.createLinearGradient(ls[0], ls[1], ls[0], ls[1] + 92);
  gra.addColorStop(0, color.getDarkColor(colour, 0.2));
  gra.addColorStop(1, color.getLightColor(colour, 0.2));
  ctx.fillStyle = gra;
  ctx.beginPath();
  ctx.moveTo(ls[0], ls[1] + 60);
  ctx.lineTo(ls[0], ls[1]);
  ctx.lineTo(ls[0] + 80, ls[1]);
  ctx.lineTo(ls[0] + 80, ls[1] + 60);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(ls[0] + 80, ls[1] + 60);
  ctx.lineTo(ls[0] + 80, ls[1]);
  ctx.lineTo(ls[0] + 104, ls[1] + 32);
  ctx.lineTo(ls[0] + 104, ls[1] + 92);
  gra.addColorStop(0, color.getDarkColor(colour, 0.4));
  gra.addColorStop(1, color.getLightColor(colour, 0.3));
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(ls[0], ls[1] + 60);
  ctx.lineTo(ls[0], ls[1]);
  ctx.lineTo(ls[0] + 24, ls[1] + 32);
  ctx.lineTo(ls[0] + 24, ls[1] + 92);
  gra.addColorStop(0, color.getDarkColor(colour, 0.2));
  gra.addColorStop(1, color.getLightColor(colour, 0.2));
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(ls[0] + 24, ls[1] + 92);
  ctx.lineTo(ls[0] + 24, ls[1] + 32);
  ctx.lineTo(ls[0] + 104, ls[1] + 32);
  ctx.lineTo(ls[0] + 104, ls[1] + 92);
  gra.addColorStop(0, color.getDarkColor(colour, 0.4));
  gra.addColorStop(1, color.getLightColor(colour, 0.3));
  ctx.fill();
}
function acdraw6(state, colour, lst) {
  ctx.clearRect(0, 0, 1600, 900);
  let ls = control.convert(lst[0], lst[1]);
  switch (state) {
    case 1:
      {
        if (!colour.startsWith("#")) {
          colour = color.colorNameToHex(this.colour);
        }
        ctx.save();
        ctx.fillStyle = color.getDarkColor(colour, 0.4);
        ctx.transform(1, 1.36, 0, 1, ls[0], ls[1]);
        ctx.fillRect(0, -80, 24, 80);
        ctx.restore();
        ctx.save();
        ctx.fillStyle = color.getLightColor(colour, 0.4);
        ctx.transform(1.2, 0, 0.785, 1, ls[0], ls[1] - 80);
        ctx.fillRect(0, 0, 131, 31.8);
        ctx.restore();
        ctx.save();
        ctx.fillStyle = colour;
        ctx.translate(ls[0] + 24, ls[1] - 48);
        ctx.fillRect(0, 0, 160, 80);
        ctx.restore();
      }
      break;
    case 2:
      {
        if (!colour.startsWith("#")) {
          colour = color.colorNameToHex(colour);
        }
        ctx.save();
        ctx.fillStyle = color.getDarkColor(colour, 0.4);
        ctx.transform(1, 1.36, 0, 1, ls[0], ls[1]);
        ctx.fillRect(0, -160, 24, 160);
        ctx.restore();
        ctx.save();
        ctx.fillStyle = color.getLightColor(colour, 0.4);
        ctx.transform(1.2, 0, 0.785, 1, ls[0], ls[1] - 160);
        ctx.fillRect(0, 0, 66, 31.8);
        ctx.restore();
        ctx.save();
        ctx.fillStyle = colour;
        ctx.translate(ls[0] + 24, ls[1] - 128);
        ctx.fillRect(0, 0, 80, 160);
        ctx.restore();
      }
      break;
    case 3:
      {
        if (!colour.startsWith("#")) {
          colour = color.colorNameToHex(colour);
        }
        ctx.save();
        ctx.fillStyle = color.getDarkColor(colour, 0.4);
        ctx.transform(1, 1.36, 0, 1, ls[0], ls[1]);
        ctx.fillRect(0, -80, 48, 80);
        ctx.restore();
        ctx.save();
        ctx.fillStyle = color.getLightColor(colour, 0.4);
        ctx.transform(1.2, 0, 0.75, 1, ls[0], ls[1] - 80);
        ctx.fillRect(0, 0, 66, 66);
        ctx.restore();
        ctx.save();
        ctx.fillStyle = colour;
        ctx.translate(ls[0] + 48, ls[1] - 16);
        ctx.fillRect(0, 0, 80, 80);
        ctx.restore();
      }
      break;
  }
}
function acdraw8(colour, lst) {
  ctx.clearRect(0, 0, 1600, 900);
  if (Wall.type == 1) {
    let ls = control.convert(lst[0], lst[1]);
    ctx.beginPath();
    ctx.globalAlpha = 0.7;
    ctx.fillStyle = colour;
    ctx.fillRect(ls[0], ls[1] - 70, 80, 70);
    ctx.moveTo(ls[0], ls[1]);
    ctx.lineTo(ls[0], ls[1] - 70);
    ctx.lineTo(ls[0] + 80, ls[1] - 70);
    ctx.strokeStyle = colour;
    ctx.lineWidth = 5;
    ctx.stroke();
  }
  if (Wall.type == 2) {
    let ls = control.convert(lst[0], lst[1]);
    ctx.beginPath();
    ctx.fillStyle = "colour";
    ctx.globalAlpha = 0.7;
    ctx.moveTo(ls[0], ls[1]);
    ctx.lineTo(ls[0], ls[1] - 70);
    ctx.lineTo(ls[0] + 24, ls[1] - 38);
    ctx.lineTo(ls[0] + 24, ls[1] + 32);
    ctx.strokeStyle = "colour";
    ctx.lineWidth = 5;
    ctx.fill();
    ctx.stroke();
  }
}
function acdraw11(state, colour, lst) {
  ctx.clearRect(0, 0, 1600, 900);
  let ls = control.convert(lst[0], lst[1]);
  switch (state) {
    case 1:
      {
        if (!colour.startsWith("#")) {
          colour = color.colorNameToHex(this.colour);
        }
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(ls[0] + 80, ls[1] - 80);
        ctx.lineTo(ls[0] + 30, ls[1] - 18);
        ctx.lineTo(ls[0] + 104, ls[1] - 48);
        ctx.closePath();
        ctx.fillStyle = color.getLightColor(colour, 0.2);
        ctx.fill();
        ctx.restore();
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(ls[0] + 104, ls[1] - 48);
        ctx.lineTo(ls[0] + 30, ls[1] - 18);
        ctx.lineTo(ls[0] + 104, ls[1] + 32);
        ctx.closePath();
        ctx.fillStyle = color.getDarkColor(colour, 0.4);
        ctx.fill();
        ctx.restore();
        ctx.save();
        ctx.beginPath();
        ctx.transform(1.2, 0, 0.785, 1, ls[0] + 80, ls[1] - 80);
        ctx.fillStyle = color.getLightColor(colour, 0.4);
        ctx.fillRect(0, 0, 65, 31.8);
        ctx.restore();
        ctx.save();
        ctx.beginPath();
        ctx.translate(ls[0] + 104, ls[1] - 48);
        ctx.fillStyle = color.getDarkColor(colour, 0.3);
        ctx.fillRect(0, 0, 80, 80);
        ctx.restore();
      }
      break;
    case 2:
      {
        if (!colour.startsWith("#")) {
          colour = color.colorNameToHex(colour);
        }
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(ls[0], ls[1] - 80);
        ctx.lineTo(ls[0] + 53, ls[1] - 128);
        ctx.lineTo(ls[0] + 24, ls[1] - 48);
        ctx.closePath();
        ctx.fillStyle = color.getDarkColor(colour, 0.2);
        ctx.fill();
        ctx.restore();
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(ls[0] + 24, ls[1] - 48);
        ctx.lineTo(ls[0] + 53, ls[1] - 128);
        ctx.lineTo(ls[0] + 104, ls[1] - 48);
        ctx.closePath();
        ctx.fillStyle = color.getLightColor(colour, 0.3);
        ctx.fill();
        ctx.restore();
        ctx.save();
        ctx.transform(1, 1.36, 0, 1, ls[0], ls[1] + 80);
        ctx.fillStyle = color.getDarkColor(colour, 0.3);
        ctx.fillRect(0, -160, 24, 80);
        ctx.restore();
        ctx.save();
        ctx.translate(ls[0] + 24, ls[1] - 48);
        ctx.fillStyle = color.getLightColor(colour, 0.2);
        ctx.fillRect(0, 0, 80, 80);
        ctx.restore();
      }
      break;
    case 3:
      {
        if (!colour.startsWith("#")) {
          colour = color.colorNameToHex(colour);
        }
        ctx.save();
        ctx.transform(1, 1.36, 0, 1, ls[0], ls[1]);
        ctx.fillStyle = color.getDarkColor(colour, 0.3);
        ctx.fillRect(0, -80, 24, 80);
        ctx.restore();
        ctx.save();
        ctx.transform(1.2, 0, 0.75, 1, ls[0], ls[1] - 80);
        ctx.fillStyle = color.getLightColor(colour, 0.3);
        ctx.fillRect(0, 0, 66, 33);
        ctx.restore();
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(ls[0] + 24, ls[1] - 48);
        ctx.lineTo(ls[0] + 80, ls[1] + 10);
        ctx.lineTo(ls[0] + 24, ls[1] + 32);
        ctx.closePath();
        ctx.fillStyle = color.getDarkColor(colour, 0.2);
        ctx.fill();
        ctx.restore();
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(ls[0] + 24, ls[1] - 48);
        ctx.lineTo(ls[0] + 80, ls[1] + 10);
        ctx.lineTo(ls[0] + 104, ls[1] - 48);
        ctx.closePath();
        ctx.fillStyle = color.getLightColor(colour, 0.2);
        ctx.fill();
        ctx.restore();
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(ls[0] + 24, ls[1] + 32);
        ctx.lineTo(ls[0] + 80, ls[1] + 10);
        ctx.lineTo(ls[0] + 104, ls[1] + 32);
        ctx.closePath();
        ctx.fillStyle = color.getDarkColor(colour, 0.4);
        ctx.fill();
        ctx.restore();
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(ls[0] + 104, ls[1] - 48);
        ctx.lineTo(ls[0] + 80, ls[1] + 10);
        ctx.lineTo(ls[0] + 104, ls[1] + 32);
        ctx.closePath();
        ctx.fillStyle = color.getLightColor(colour, 0.1);
        ctx.fill();
        ctx.restore();
      }
      break;
    case 4:
      {
        if (!colour.startsWith("#")) {
          colour = color.colorNameToHex(colour);
        }
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(ls[0] + 104, ls[1] - 48);
        ctx.lineTo(ls[0] + 40, ls[1] - 60);
        ctx.lineTo(ls[0] + 24, ls[1] - 48);
        ctx.closePath();
        ctx.fillStyle = color.getDarkColor(colour, 0.3);
        ctx.fill();
        ctx.restore();
        ctx.save();
        ctx.transform(1, 1.36, 0, 1, ls[0] + 24, ls[1] + 32);
        ctx.fillStyle = color.getLightColor(colour, 0.2);
        ctx.fillRect(0, -80, 24, 80);
        ctx.restore();
        ctx.save();
        ctx.transform(1.2, 0, 0.75, 1, ls[0] + 24, ls[1] - 48);
        ctx.fillStyle = color.getLightColor(colour, 0.1);
        ctx.fillRect(0, 0, 66, 33);
        ctx.restore();
        ctx.save();
        ctx.translate(ls[0] + 48, ls[1] - 16);
        ctx.fillStyle = color.getDarkColor(colour, 0.1);
        ctx.fillRect(0, 0, 80, 80);
        ctx.restore();
      }
      break;
    case 5: {
      if (!colour.startsWith("#")) {
        colour = color.colorNameToHex(colour);
      }
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(ls[0] + 80, ls[1] - 80);
      ctx.lineTo(ls[0] + 150, ls[1] - 20);
      ctx.lineTo(ls[0] + 104, ls[1] - 48);
      ctx.closePath();
      ctx.fillStyle = color.getLightColor(colour, 0.1);
      ctx.fill();
      ctx.restore();
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(ls[0] + 104, ls[1] - 48);
      ctx.lineTo(ls[0] + 150, ls[1] - 20);
      ctx.lineTo(ls[0] + 104, ls[1] + 32);
      ctx.closePath();
      ctx.fillStyle = color.getDarkColor(colour, 0.1);
      ctx.fill();
      ctx.restore();
      ctx.save();
      ctx.transform(1, 1.36, 0, 1, ls[0], ls[1]);
      ctx.fillStyle = color.getDarkColor(colour, 0.3);
      ctx.fillRect(0, -80, 24, 80);
      ctx.restore();
      ctx.save();
      ctx.transform(1.2, 0, 0.75, 1, ls[0], ls[1] - 80);
      ctx.fillStyle = color.getLightColor(colour, 0.2);
      ctx.fillRect(0, 0, 66, 33);
      ctx.restore();
      ctx.save();
      ctx.translate(ls[0] + 24, ls[1] - 48);
      ctx.fillStyle = color.getLightColor(colour, 0.1);
      ctx.fillRect(0, 0, 80, 80);
      ctx.restore();
    }
  }
}
async function acdraw12(a, lst) {
  let ls = control.convert(lst[0], lst[1]);
  ctx.clearRect(0, 0, 1600, 900);
  if (a == 1) {
    switch (Saw.state) {
      case 1:
        {
          const img = new Image();
          img.src = "./35.png";
          await new Promise((resolve) => {
            img.onload = resolve;
          });
          ctx.drawImage(img, 0, 0, 1890, 1417, ls[0] - 4, ls[1] - 38, 80, 50);
        }
        break;
      case 2: {
        const img = new Image();
        img.src = "./35.png";
        await new Promise((resolve) => {
          img.onload = resolve;
        });
        ctx.save();
        ctx.transform(1, 1.36, 0, 1, ls[0], ls[1] - 6);
        ctx.drawImage(img, 0, 0, 1890, 1417, 0, -31, 30, 50);
        ctx.restore();
      }
    }
  } else if (a == 2) {
    switch (Saw.state) {
      case 1:
        {
          const img = new Image();
          img.src = "./36.png";
          await new Promise((resolve) => {
            img.onload = resolve;
          });
          ctx.drawImage(img, 0, 0, 1890, 1417, ls[0] - 4, ls[1] - 38, 80, 50);
        }
        break;
      case 2: {
        const img = new Image();
        img.src = "./36.png";
        await new Promise((resolve) => {
          img.onload = resolve;
        });
        ctx.save();
        ctx.transform(1, 1.36, 0, 1, ls[0], ls[1] - 6);
        ctx.drawImage(img, 0, 0, 1890, 1417, 0, -31, 30, 50);
        ctx.restore();
      }
    }
  }
}
export default Accompany;
