import control from "./control.js";
import Ground from "./ground.js";
import Accompany from "./accompany.js";
import Bridge from "./bridge.js";
import { ctx } from "./accompany.js";
import Button from "./button.js";
import End from "./end.js";
import Block from "./block.js";
import { leave, clx } from "./icon.js";
import { clear } from "./line.js";
import { ctx1 } from "./bridge.js";
import color from "./color.js";
import Dialog from "./dialog.js";
import { init } from "./icon.js";
import { drawline } from "./line.js";
import Play from "./play.js";
import Wall from "./wall.js";
import { wallocate } from "./wall.js";
import Teach from "./teach.js";
import Cegg from "./coloregg.js";
import Block2 from "./Block2.js";
import Sblock from "./strangeblock.js";
import Saw from "./saw.js";
window.onclick = function (e) {
  if (control.process == 0) {
    let lst = control.locate(e.x - 48, e.y);
    if (lst[0] >= 0 && lst[0] < 14 && lst[1] >= 0 && lst[1] < 19) {
      console.log(control.center);
      switch (control.choice) {
        case 0:
          break;
        case 1:
          {
            if (control.center[lst[0]][lst[1]]) {
              break;
            } else {
              control.center[lst[0]][lst[1]] = 1;
              Accompany.clear();
              drawground(lst);
            }
          }
          break;
        case 2:
          {
            if (control.center[lst[0]][lst[1]]) {
              break;
            } else {
              if (drawbridge(lst)) {
                control.center[lst[0]][lst[1]] = 2;
                Accompany.clear();
                Bridge.position = lst;
                Bridge.draw();
              }
            }
          }
          break;
        case 3:
          {
            if (
              control.center[lst[0]][lst[1]] == 1 &&
              control.center[lst[0]][lst[1]] < 2
            ) {
              control.center[lst[0]][lst[1]] = 3;
              Bridge.button.push(lst);
              Button.position = lst;
              Button.draw1();
              window.alert("请选择一个桥,否则该按钮将不起作用");
              control.process = 2;
            }
          }
          break;
        case 4:
          {
            if (
              control.center[lst[0]][lst[1]] >= 1 &&
              control.center[lst[0]][lst[1]] < 2
            ) {
              control.center[lst[0]][lst[1]] = 4;
              Bridge.button.push(lst);
              Button.position = lst;
              Button.draw2();
              window.alert("请选择一个桥,否则该按钮将不起作用");
              control.process = 2;
            }
          }
          break;
        case 5:
          {
            if (
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
              End.position = lst;
              End.draw();
              End.num = 1;
              control.center[lst[0]][lst[1]] = 5;
              control.choice = 0;
              Accompany.clear();
            }
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
                    if (!Block.num) {
                      Block.position = lst;
                      Block.draw1();
                      Block.num = 1;
                      Block.state = 1;
                      control.choice = 0;
                      Accompany.clear();
                    } else if (Block.num == 1) {
                      Block2.position = lst;
                      if (Block2.position[1] < Block.position[1]) {
                        var a = document.getElementById("block2");
                        a.style.zIndex = 38;
                      } else {
                        var a = document.getElementById("block");
                        a.style.zIndex = 38;
                      }
                      Block2.draw1();
                      Block2.num = 1;
                      Block2.state = 1;
                      control.choice = 0;
                      Accompany.clear();
                    }
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
                    if (!Block.num) {
                      Block.position = lst;
                      Block.draw2();
                      Block.num = 1;
                      Block.state = 2;
                      control.choice = 0;
                      Accompany.clear();
                    } else if (Block.num == 1) {
                      Block2.position = lst;
                      if (Block2.position[1] < Block.position[1]) {
                        var a = document.getElementById("block2");
                        a.style.zIndex = 38;
                      } else {
                        var a = document.getElementById("block");
                        a.style.zIndex = 38;
                      }
                      Block2.draw2();
                      Block2.num = 1;
                      Block2.state = 2;
                      control.choice = 0;
                      Accompany.clear();
                    }
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
                    if (!Block.num) {
                      Block.position = lst;
                      Block.draw3();
                      Block.num = 1;
                      Block.state = 3;
                      control.choice = 0;
                      Accompany.clear();
                    } else if (Block.num == 1) {
                      Block2.position = lst;
                      if (Block2.position[1] < Block.position[1]) {
                        var a = document.getElementById("block2");
                        a.style.zIndex = 38;
                      } else {
                        var a = document.getElementById("block");
                        a.style.zIndex = 38;
                      }
                      Block2.draw3();
                      Block2.num = 1;
                      Block2.state = 3;
                      control.choice = 0;
                      Accompany.clear();
                    }
                  }
                }
                break;
            }
            Wall.clear();
            Wall.clear2();
            for (let i = 0; i < 14; i++) {
              for (let j = 0; j < 19; j++) {
                if (
                  (control.center[i][j] * 4) % 4 == 1 ||
                  (control.center[i][j] * 4) % 4 == 3
                ) {
                  Wall.position = [i, j];
                  if (
                    j >
                    (Block.state == 3
                      ? Block.position[1] + 1
                      : Block.position[1])
                  ) {
                    Wall.draw1();
                  } else {
                    if (i < Block.position[0]) {
                      Wall.draw1();
                    } else {
                      Wall.draw3();
                    }
                  }
                } else if (
                  (control.center[i][j] * 4) % 4 == 2 ||
                  (control.center[i][j] * 4) % 4 == 3
                ) {
                  Wall.position = [i, j];
                  if (i <= Block.position[0]) {
                    Wall.draw2();
                  } else {
                    if (j > Block.position[1]) {
                      Wall.draw2();
                    } else {
                      Wall.draw4();
                    }
                  }
                }
              }
            }
            if (Saw.num) {
              Saw.clear();
              Saw.clear2();
              if (Saw.state == 1) {
                if (
                  Saw.position[1] >
                  (Block.state == 3 ? Block.position[1] + 1 : Block.position[1])
                ) {
                  Saw.draw2();
                } else {
                  if (Saw.position[0] < Block.position[0]) {
                    Saw.draw2();
                  } else {
                    Saw.draw();
                  }
                }
              } else {
                if (Saw.position[0] < Block.position[0]) {
                  Saw.draw2();
                } else {
                  if (
                    Saw.position[1] >
                    (Block.state == 3
                      ? Block.position[1] + 1
                      : Block.position[1])
                  ) {
                    Saw.draw2();
                  } else {
                    Saw.draw();
                  }
                }
              }
            }
          }
          break;
        case 7:
          {
            if (control.center[lst[0]][lst[1]]) {
              break;
            } else {
              control.center[lst[0]][lst[1]] = 7;
              Accompany.clear();
              drawground(lst);
            }
          }
          break;
        case 8:
          {
            let lst = wallocate(e.x - 48, e.y);
            Wall.position = lst;
            let ls = control.convert(lst[0], lst[1]);
            if (Math.abs(e.x - 48 - ls[0]) < 2 * Math.abs(e.y - ls[1])) {
              Wall.type = 2;
            } else {
              Wall.type = 1;
            }
            if (Wall.type == 1) {
              if (lst[1] == 0) {
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
                } else {
                  if (
                    lst[1] >
                    (Block.state == 3
                      ? Block.position[1] + 1
                      : Block.position[1])
                  ) {
                    Wall.draw1();
                  } else {
                    if (lst[0] < Block.position[0]) {
                      Wall.draw1();
                    } else {
                      Wall.draw3();
                    }
                  }
                  control.center[lst[0]][lst[1]] += 0.25;
                }
              }
            } else if (Wall.type == 2) {
              if (lst[0] == 0) {
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
                } else {
                  if (lst[0] <= Block.position[0]) {
                    Wall.draw2();
                  } else {
                    if (lst[1] > Block.position[1]) {
                      Wall.draw2();
                    } else {
                      Wall.draw4();
                    }
                  }
                  control.center[lst[0]][lst[1]] += 0.5;
                }
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
                    if (!Sblock.num) {
                      Sblock.position = lst;
                      Sblock.draw1();
                      Sblock.num = 1;
                      Sblock.state = 1;
                      control.choice = 0;
                      Accompany.clear();
                    }
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
                    if (!Sblock.num) {
                      Sblock.position = lst;
                      Sblock.draw2();
                      Sblock.num = 1;
                      Sblock.state = 2;
                      control.choice = 0;
                      Accompany.clear();
                    }
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
                    if (!Sblock.num) {
                      Sblock.position = lst;
                      Sblock.draw3();
                      Sblock.num = 1;
                      Sblock.state = 3;
                      control.choice = 0;
                      Accompany.clear();
                    }
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
                    if (!Sblock.num) {
                      Sblock.position = lst;
                      Sblock.draw4();
                      Sblock.num = 1;
                      Sblock.state = 4;
                      control.choice = 0;
                      Accompany.clear();
                    }
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
                    if (!Sblock.num) {
                      Sblock.position = lst;
                      Sblock.draw5();
                      Sblock.num = 1;
                      Sblock.state = 5;
                      control.choice = 0;
                      Accompany.clear();
                    }
                  }
                }
                break;
            }

            Wall.clear();
            Wall.clear2();
            for (let i = 0; i < 14; i++) {
              for (let j = 0; j < 19; j++) {
                if (
                  (control.center[i][j] * 4) % 4 == 1 ||
                  (control.center[i][j] * 4) % 4 == 3
                ) {
                  Wall.position = [i, j];
                  if (
                    j >
                    (Sblock.state == 3 || Sblock.state == 4
                      ? Sblock.position[1] + 1
                      : Sblock.position[1])
                  ) {
                    Wall.draw1();
                  } else {
                    if (i < Sblock.position[0]) {
                      Wall.draw1();
                    } else {
                      Wall.draw3();
                    }
                  }
                } else if (
                  (control.center[i][j] * 4) % 4 == 2 ||
                  (control.center[i][j] * 4) % 4 == 3
                ) {
                  Wall.position = [i, j];
                  if (i <= Sblock.position[0]) {
                    Wall.draw2();
                  } else {
                    if (j > Sblock.position[1]) {
                      Wall.draw2();
                    } else {
                      Wall.draw4();
                    }
                  }
                }
              }
            }
          }
          break;
        case 12: {
          let lst = wallocate(e.x - 48, e.y);
          Saw.position = lst;
          let ls = control.convert(lst[0], lst[1]);
          if (Math.abs(e.x - 48 - ls[0]) < 2 * Math.abs(e.y - ls[1])) {
            Saw.state = 2;
          } else {
            Saw.state = 1;
          }
          if (Saw.state == 1) {
            if (lst[1] <= 1) {
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
              } else {
                if (
                  lst[1] >
                  (Block.state == 3 ? Block.position[1] + 1 : Block.position[1])
                ) {
                  Saw.draw2();
                } else {
                  if (lst[0] < Block.position[0]) {
                    Saw.draw2();
                  } else {
                    Saw.draw();
                  }
                }
                Saw.num = 1;
                control.choice = 0;
                Accompany.who = 0;
                Accompany.clear();
              }
            }
          } else if (Saw.state == 2) {
            if (lst[0] == 0 || lst[0] >= 12) {
            } else if (
              control.center[lst[0]][lst[1]] != 0 &&
              control.center[lst[0]][lst[1]] != 2 &&
              control.center[lst[0] - 1][lst[1]] != 0 &&
              control.center[lst[0] - 1][lst[1]] != 2 &&
              control.center[lst[0] + 1][lst[1]] != 0 &&
              control.center[lst[0] + 1][lst[1]] != 2 &&
              (control.center[lst[0]][lst[1]] * 4) % 4 != 2 &&
              (control.center[lst[0]][lst[1]] * 4) % 4 != 3 &&
              (control.center[lst[0]][lst[1] + 1] * 4) % 4 != 2 &&
              (control.center[lst[0]][lst[1] + 1] * 4) % 4 != 3
            ) {
              if (
                Block.state == 1 &&
                Block.position[0] == lst[0] - 1 &&
                Block.position[1] == lst[1]
              ) {
              } else {
                if (lst[0] <= Block.position[0]) {
                  Saw.draw2();
                } else {
                  if (lst[1] > Block.position[1]) {
                    Saw.draw2();
                  } else {
                    Saw.draw();
                  }
                }
                Saw.num = 1;
                control.choice = 0;
                Accompany.who = 0;
                Accompany.clear();
              }
            }
            ctx.beginPath();
            ctx.roundRect(724, 824, 72, 72, 10);
            ctx.strokeStyle = "black";
            ctx.setLineDash([10, 15]);
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    } else {
      if ((e.x > 50) & (e.x < 146) && e.y < 898 && e.y > 822) {
        control.choice = 1;
        Accompany.who = 1;
        Accompany.switch = 1;
        ctx.beginPath();
        ctx.roundRect(4, 824, 72, 72, 10);
        ctx.strokeStyle = "black";
        ctx.setLineDash([10, 15]);
        ctx.lineWidth = 1;
        ctx.stroke();
      } else if ((e.x > 130) & (e.x < 226) && e.y < 898 && e.y > 822) {
        control.choice = 2;
        Accompany.who = 2;
        Accompany.switch = 1;
        ctx.beginPath();
        ctx.roundRect(84, 824, 72, 72, 10);
        ctx.strokeStyle = "black";
        ctx.setLineDash([10, 15]);
        ctx.lineWidth = 1;
        ctx.stroke();
      } else if ((e.x > 210) & (e.x < 306) && e.y < 898 && e.y > 822) {
        control.choice = 3;
        Accompany.who = 3;
        Accompany.switch = 1;
        ctx.beginPath();
        ctx.roundRect(164, 824, 72, 72, 10);
        ctx.strokeStyle = "black";
        ctx.setLineDash([10, 15]);
        ctx.lineWidth = 1;
        ctx.stroke();
      } else if ((e.x > 290) & (e.x < 386) && e.y < 898 && e.y > 822) {
        control.choice = 4;
        Accompany.who = 4;
        Accompany.switch = 1;
        ctx.beginPath();
        ctx.roundRect(244, 824, 72, 72, 10);
        ctx.strokeStyle = "black";
        ctx.setLineDash([10, 15]);
        ctx.lineWidth = 1;
        ctx.stroke();
        5;
      } else if ((e.x > 370) & (e.x < 466) && e.y < 898 && e.y > 822) {
        control.choice = 5;
        Accompany.who = 5;
        Accompany.switch = 1;
        ctx.beginPath();
        ctx.roundRect(324, 824, 72, 72, 10);
        ctx.strokeStyle = "black";
        ctx.setLineDash([10, 15]);
        ctx.lineWidth = 1;
        ctx.stroke();
      } else if ((e.x > 450) & (e.x < 546) && e.y < 898 && e.y > 822) {
        if (Block2.num < 1) {
          control.choice = 6;
          Accompany.who = 6;
          Accompany.switch = 1;
          ctx.beginPath();
          ctx.roundRect(404, 824, 72, 72, 10);
          ctx.strokeStyle = "black";
          ctx.setLineDash([10, 15]);
          ctx.lineWidth = 1;
          ctx.stroke();
        } else {
          window.alert("一张地图不能多于两个石块");
        }
      } else if ((e.x > 530) & (e.x < 626) && e.y < 898 && e.y > 822) {
        control.choice = 7;
        Accompany.who = 7;
        Accompany.switch = 1;
        ctx.beginPath();
        ctx.roundRect(484, 824, 72, 72, 10);
        ctx.strokeStyle = "black";
        ctx.setLineDash([10, 15]);
        ctx.lineWidth = 1;
        ctx.stroke();
      } else if ((e.x > 610) & (e.x < 706) && e.y < 898 && e.y > 822) {
        control.choice = 8;
        Accompany.who = 8;
        Accompany.switch = 1;
        ctx.beginPath();
        ctx.roundRect(564, 824, 72, 72, 10);
        ctx.strokeStyle = "black";
        ctx.setLineDash([10, 15]);
        ctx.lineWidth = 1;
        ctx.stroke();
      } else if ((e.x > 690) & (e.x < 786) && e.y < 898 && e.y > 822) {
        control.choice = 11;
        Accompany.who = 11;
        Accompany.switch = 1;
        ctx.beginPath();
        ctx.roundRect(644, 824, 72, 72, 10);
        ctx.strokeStyle = "black";
        ctx.setLineDash([10, 15]);
        ctx.lineWidth = 1;
        ctx.stroke();
      } else if ((e.x > 770) & (e.x < 866) && e.y < 898 && e.y > 822) {
        if (!Saw.num) {
          control.choice = 12;
          Accompany.who = 12;
          Accompany.switch = 1;
          ctx.beginPath();
          ctx.roundRect(724, 824, 72, 72, 10);
          ctx.strokeStyle = "black";
          ctx.setLineDash([10, 15]);
          ctx.lineWidth = 1;
          ctx.stroke();
        } else {
          window.alert("一张地图最多有一个锯子");
        }
      } else if ((e.x > 1400) & (e.x < 1526) && e.y < 68 && e.y > 2) {
        if (End.num >= Block.num + Sblock.num + Block2.num) {
          Accompany.clear();
          control.choice = 0;
          Accompany.who = 0;
          control.process = 1;
          console.log(control.center);
          leave();
          clear();
          for (let i = 0; i < 14; i++) {
            for (let j = 0; j < 19; j++) {
              if (control.center[i][j] == 2) {
                control.center[i][j] = 0;
              }
            }
          }
          Bridge.clear();
        } else {
          window.alert("一张地图终点数必须多于石块数");
        }
      } else if ((e.x > 1540) & (e.x < 1636) && e.y < 68 && e.y > 2) {
        Accompany.clear();
        Dialog.mem = control.process;
        control.process = 3;
        Dialog.menu();
        Dialog.type = 2;
      }
    }
  } else if (control.process == 1) {
    if ((e.x > 1540) & (e.x < 1636) && e.y < 68 && e.y > 2) {
      Dialog.mem = control.process;
      control.process = 3;
      Dialog.menu();
      Dialog.type = 2;
    }
  } else if (control.process == 2) {
    let lst = control.locate(e.x - 48, e.y);
    if (lst[0] >= 0 && lst[0] < 14 && lst[1] >= 0 && lst[1] < 19) {
      if (control.center[lst[0]][lst[1]] == 2) {
        control.process = 0;
        control.choice = 0;
        window.alert("连接成功");
        Button.bridge.push(lst);
        Accompany.clear();
      }
    } else {
      if ((e.x > 50) & (e.x < 146) && e.y < 898 && e.y > 822) {
        control.process = 0;
        control.choice = 1;
        Accompany.who = 1;
        Accompany.switch = 1;
        ctx.beginPath();
        ctx.roundRect(4, 824, 72, 72, 10);
        ctx.strokeStyle = "black";
        ctx.setLineDash([10, 15]);
        ctx.lineWidth = 1;
        ctx.stroke();
      } else if ((e.x > 130) & (e.x < 226) && e.y < 898 && e.y > 822) {
        control.process = 0;
        control.choice = 2;
        Accompany.who = 2;
        Accompany.switch = 1;
        ctx.beginPath();
        ctx.roundRect(84, 824, 72, 72, 10);
        ctx.strokeStyle = "black";
        ctx.setLineDash([10, 15]);
        ctx.lineWidth = 1;
        ctx.stroke();
      } else if ((e.x > 210) & (e.x < 306) && e.y < 898 && e.y > 822) {
        control.process = 0;
        control.choice = 3;
        Accompany.who = 3;
        Accompany.switch = 1;
        ctx.beginPath();
        ctx.roundRect(164, 824, 72, 72, 10);
        ctx.strokeStyle = "black";
        ctx.setLineDash([10, 15]);
        ctx.lineWidth = 1;
        ctx.stroke();
      } else if ((e.x > 290) & (e.x < 386) && e.y < 898 && e.y > 822) {
        control.process = 0;
        control.choice = 4;
        Accompany.who = 4;
        Accompany.switch = 1;
        ctx.beginPath();
        ctx.roundRect(244, 824, 72, 72, 10);
        ctx.strokeStyle = "black";
        ctx.setLineDash([10, 15]);
        ctx.lineWidth = 1;
        ctx.stroke();
      } else if ((e.x > 370) & (e.x < 466) && e.y < 898 && e.y > 822) {
        if (!End.num) {
          control.process = 0;
          control.choice = 5;
          Accompany.who = 5;
          Accompany.switch = 1;
          ctx.beginPath();
          ctx.roundRect(324, 824, 72, 72, 10);
          ctx.strokeStyle = "black";
          ctx.setLineDash([10, 15]);
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      } else if ((e.x > 450) & (e.x < 546) && e.y < 898 && e.y > 822) {
        if (!Block.num) {
          control.process = 0;
          control.choice = 6;
          Accompany.who = 6;
          Accompany.switch = 1;
          ctx.beginPath();
          ctx.roundRect(404, 824, 72, 72, 10);
          ctx.strokeStyle = "black";
          ctx.setLineDash([10, 15]);
          ctx.lineWidth = 1;
          ctx.stroke();
        } else {
          window.alert("一张地图有且仅有一个石块");
        }
      } else if ((e.x > 530) & (e.x < 626) && e.y < 898 && e.y > 822) {
        control.process = 0;
        control.choice = 7;
        Accompany.who = 7;
        Accompany.switch = 1;
        ctx.beginPath();
        ctx.roundRect(484, 824, 72, 72, 10);
        ctx.strokeStyle = "black";
        ctx.setLineDash([10, 15]);
        ctx.lineWidth = 1;
        ctx.stroke();
      } else if ((e.x > 610) & (e.x < 706) && e.y < 898 && e.y > 822) {
        control.process = 0;
        control.choice = 8;
        Accompany.who = 8;
        Accompany.switch = 1;
        ctx.beginPath();
        ctx.roundRect(564, 824, 72, 72, 10);
        ctx.strokeStyle = "black";
        ctx.setLineDash([10, 15]);
        ctx.lineWidth = 1;
        ctx.stroke();
      } else if ((e.x > 1400) & (e.x < 1526) && e.y < 68 && e.y > 2) {
        if (End.num && Block.num) {
          Accompany.clear();
          control.choice = 0;
          Accompany.who = 0;
          control.process = 1;
          leave();
          clear();
          for (let i = 0; i < 14; i++) {
            for (let j = 0; j < 19; j++) {
              if (control.center[i][j] == 2) {
                control.center[i][j] = 0;
              }
            }
          }
          Bridge.clear();
        } else {
          window.alert("一张地图必须有一个终点和一个石块");
        }
      } else if ((e.x > 1540) & (e.x < 1636) && e.y < 68 && e.y > 2) {
        Accompany.clear();
        Dialog.mem = control.process;
        control.process = 3;
        Dialog.menu();
        Dialog.type = 2;
      }
    }
  } else if (control.process == 3) {
    switch (Dialog.type) {
      case 1:
        {
          if (e.x > 550 && e.x < 1146 && e.y > 342 && e.y < 438) {
            clear();
            Cegg.clear();
            control.choice = 0;
            control.process = 0;
            Accompany.clear();
            Block.clear();
            Bridge.clear();
            Button.clear();
            Dialog.clear();
            End.clear();
            Ground.clear();
            Ground.position = [];
            End.num = 0;
            End.position = [];
            Block.num = 0;
            Accompany.who = 0;
            Block.position = [];
            Bridge.position = [];
            Bridge.button = [];
            Button.position = [];
            Button.bridge = [];
            Wall.clear(900);
            Wall.clear2(900);
            Saw.clear();
            Saw.clear2();
            Saw.position = [];
            Saw.num = 0;
            Sblock.num = 0;
            Sblock.clear();
            Sblock.position = [];
            clx();
            for (let i = 0; i < 14; i++) {
              for (let j = 0; j < 20; j++) {
                control.center[i][j] = 0;
              }
            }
            control.process = 5;
            Teach.num++;
            Teach.draw();
          } else if (e.x > 550 && e.x < 1046 && e.y > 472 && e.y < 568) {
            Cegg.clear();
            clear();
            control.process = 4;
            control.choice = 0;
            Accompany.clear();
            Block.clear();
            Bridge.clear();
            Button.clear();
            Dialog.clear();
            End.clear();
            Ground.clear();
            Ground.position = [];
            End.num = 0;
            End.position = [];
            Block.num = 0;
            Accompany.who = 0;
            Block.position = [];
            Bridge.position = [];
            Bridge.button = [];
            Button.position = [];
            Button.bridge = [];
            Wall.clear(900);
            Wall.clear2(900);
            clx();
            for (let i = 0; i < 14; i++) {
              for (let j = 0; j < 20; j++) {
                control.center[i][j] = 0;
              }
            }
            Play.play();
          } else if (e.x > 550 && e.x < 1046 && e.y > 602 && e.y < 698) {
            Cegg.clear();
            clear();
            control.choice = 0;
            control.process = 0;
            Accompany.clear();
            Block.clear();
            Bridge.clear();
            Button.clear();
            Dialog.clear();
            End.clear();
            Ground.clear();
            Ground.position = [];
            End.num = 0;
            End.position = [];
            Block.num = 0;
            Accompany.who = 0;
            Block.position = [];
            Bridge.position = [];
            Bridge.button = [];
            Button.position = [];
            Button.bridge = [];
            Wall.clear();
            Wall.clear2();
            clx();
            for (let i = 0; i < 14; i++) {
              for (let j = 0; j < 20; j++) {
                control.center[i][j] = 0;
              }
            }
            init();
            drawline();
          }
        }
        break;
      case 2:
        {
          if (e.x > 550 && e.x < 1146 && e.y > 342 && e.y < 438) {
            Dialog.type = 1;
            Dialog.clear();
            Dialog.main();
          } else if (e.x > 550 && e.x < 1046 && e.y > 472 && e.y < 568) {
            control.process = Dialog.mem;
            Dialog.mem = 0;
            Dialog.clear();
          } else if (e.x > 550 && e.x < 1046 && e.y > 602 && e.y < 698) {
            if (Dialog.mem == 0 || Dialog.mem == 1) {
              Cegg.clear();
              clear();
              control.choice = 0;
              control.process = 0;
              Accompany.clear();
              Block.clear();
              Bridge.clear();
              Button.clear();
              Dialog.clear();
              End.clear();
              Ground.clear();
              Ground.position = [];
              End.num = 0;
              End.position = [];
              Block.num = 0;
              Accompany.who = 0;
              Block.position = [];
              Bridge.position = [];
              Bridge.button = [];
              Button.position = [];
              Button.bridge = [];
              Wall.clear();
              Wall.clear2();
              Saw.clear();
              Saw.clear2();
              Saw.position = [];
              Saw.num = 0;
              Sblock.num = 0;
              Sblock.clear();
              Sblock.position = [];
              clx();
              for (let i = 0; i < 14; i++) {
                for (let j = 0; j < 20; j++) {
                  control.center[i][j] = 0;
                }
              }
              init();
              drawline();
            } else if (Dialog.mem == 4) {
              clear();
              control.choice = 0;
              control.process = Dialog.mem;
              Accompany.clear();
              Block.clear();
              Bridge.clear();
              Button.clear();
              Dialog.clear();
              End.clear();
              Ground.clear();
              Ground.position = [];
              End.num = 0;
              End.position = [];
              Block.num = 0;
              Accompany.who = 0;
              Block.position = [];
              Bridge.position = [];
              Bridge.button = [];
              Button.position = [];
              Button.bridge = [];
              Wall.clear();
              Wall.clear2();
              clx();
              for (let i = 0; i < 14; i++) {
                for (let j = 0; j < 20; j++) {
                  control.center[i][j] = 0;
                }
              }
              Play.play();
            }
          }
        }
        break;
      case 3:
        {
          if (e.x > 550 && e.x < 1146 && e.y > 322 && e.y < 468) {
            Dialog.type = 1;
            Dialog.clear();
            Dialog.main();
          } else if (e.x > 550 && e.x < 1146 && e.y > 522 && e.y < 668) {
            if (Dialog.mem == 0 || Dialog.mem == 1) {
              Cegg.clear();
              control.choice = 0;
              control.process = Dialog.mem;
              Accompany.clear();
              Block.clear();
              Bridge.clear();
              Button.clear();
              Dialog.clear();
              End.clear();
              Ground.clear();
              Ground.position = [];
              End.num = 0;
              End.position = [];
              Block.num = 0;
              Accompany.who = 0;
              Block.position = [];
              Bridge.position = [];
              Bridge.button = [];
              Button.position = [];
              Button.bridge = [];
              Wall.position = [];
              Wall.clear();
              Wall.clear2();
              Saw.clear();
              Saw.clear2();
              Saw.position = [];
              Saw.num = 0;
              Sblock.num = 0;
              Sblock.clear();
              Sblock.position = [];
              clx();
              clear();
              for (let i = 0; i < 14; i++) {
                for (let j = 0; j < 20; j++) {
                  control.center[i][j] = 0;
                }
              }
              init();
              drawline();
            }
          }
        }
        break;
      case 4:
        {
          if (e.x > 550 && e.x < 1146 && e.y > 322 && e.y < 468) {
            Dialog.type = 1;
            Dialog.clear();
            Dialog.main();
          } else if (e.x > 550 && e.x < 1146 && e.y > 522 && e.y < 668) {
            Cegg.clear();
            Accompany.clear();
            Block.clear();
            Bridge.clear();
            Button.clear();
            Dialog.clear();
            End.clear();
            Ground.clear();
            Ground.position = [];
            End.num = 0;
            End.position = [];
            Block.num = 0;
            Accompany.who = 0;
            Block.position = [];
            Bridge.position = [];
            Bridge.button = [];
            Button.position = [];
            Button.bridge = [];
            Wall.clear();
            Wall.clear2();
            Saw.clear();
            Saw.clear2();
            Saw.position = [];
            Saw.num = 0;
            Sblock.num = 0;
            Sblock.clear();
            Sblock.position = [];
            clx();
            clear();
            Cegg.clear();
            for (let i = 0; i < 14; i++) {
              for (let j = 0; j < 20; j++) {
                control.center[i][j] = 0;
              }
            }
            Play.num++;
            Play.play();
            control.process = 4;
          }
        }
        break;
      case 5:
        {
          if (e.x > 550 && e.x < 1146 && e.y > 322 && e.y < 468) {
            Dialog.type = 1;
            Dialog.clear();
            Dialog.main();
          } else if (e.x > 550 && e.x < 1146 && e.y > 522 && e.y < 668) {
            Cegg.clear();
            clear();
            Accompany.clear();
            Block.clear();
            Bridge.clear();
            Button.clear();
            Dialog.clear();
            End.clear();
            Ground.clear();
            Ground.position = [];
            End.num = 0;
            End.position = [];
            Block.num = 0;
            Accompany.who = 0;
            Block.position = [];
            Bridge.position = [];
            Bridge.button = [];
            Button.position = [];
            Button.bridge = [];
            Wall.clear();
            Wall.clear2();
            Saw.clear();
            Saw.clear2();
            Saw.position = [];
            Saw.num = 0;
            Sblock.num = 0;
            Sblock.clear();
            Sblock.position = [];
            clx();
            for (let i = 0; i < 14; i++) {
              for (let j = 0; j < 20; j++) {
                control.center[i][j] = 0;
              }
            }
            if (Dialog.mem == 4) {
              control.process = 4;
              Play.play();
            }
            if (Dialog.mem == 1) {
              control.process = 0;
              init();
              drawline();
            }
          }
        }
        break;
    }
  } else if (control.process == 4) {
    if ((e.x > 1540) & (e.x < 1636) && e.y < 68 && e.y > 2) {
      Dialog.mem = control.process;
      control.process = 3;
      Dialog.menu();
      Dialog.type = 2;
    }
  } else if (control.process == 5) {
    if (Teach.num < 6) {
      if (e.x > 760 && e.x < 938 && e.y > 800 && e.y < 860) {
        Teach.clear();
        Teach.num++;
        Teach.draw();
      }
    } else if (Teach.num == 6) {
      if (e.x > 760 && e.x < 938 && e.y > 800 && e.y < 860) {
        Teach.clear();
        Teach.num = 0;
        control.process = 3;
        Dialog.type = 1;
        Dialog.main();
      }
    }
  }
};
var Lst = [];
var k = 0;
window.onmousemove = function (e) {
  Lst = control.locate(e.x - 48, e.y);
  if (control.choice == 8) {
    Lst = wallocate(e.x - 48, e.y);
    let lst = control.convert(Lst[0], Lst[1]);
    if (Math.abs(e.x - 48 - lst[0]) < 2 * Math.abs(e.y - lst[1])) {
      Wall.type = 2;
    } else {
      Wall.type = 1;
    }
  }
  if (control.choice == 12) {
    Lst = wallocate(e.x - 48, e.y);
    let lst = control.convert(Lst[0], Lst[1]);
    if (Math.abs(e.x - 48 - lst[0]) < 2 * Math.abs(e.y - lst[1])) {
      Saw.state = 2;
    } else {
      Saw.state = 1;
    }
  }
  Accompany.who = control.choice;
  if (Accompany.switch) {
    Accompany.accompany(Lst);
  }
};
window.onkeydown = function (e) {
  if (!control.process) {
    if (control.choice == 6) {
      switch (Block.state) {
        case 1:
          {
            switch (e.key) {
              case "a":
              case "A":
              case "d":
              case "D":
              case "ArrowLeft":
              case "ArrowRight":
                Block.state = 2;
                Accompany.accompany(Lst);
                break;
            }
          }
          break;
        case 2:
          {
            switch (e.key) {
              case "a":
              case "A":
              case "d":
              case "D":
              case "ArrowLeft":
              case "ArrowRight":
                Block.state = 1;
                Accompany.accompany(Lst);
                break;
              case "w":
              case "W":
              case "s":
              case "S":
              case "ArrowUp":
              case "ArrowDown":
                Block.state = 3;
                Accompany.accompany(Lst);
                break;
            }
          }
          break;
        case 3:
          {
            switch (e.key) {
              case "w":
              case "W":
              case "s":
              case "S":
              case "ArrowUp":
              case "ArrowDown":
                Block.state = 2;
                Accompany.accompany(Lst);
                break;
            }
          }
          break;
      }
    } else if (control.choice == 11) {
      switch (Sblock.state) {
        case 1:
          {
            switch (e.key) {
              case "d":
              case "D":
              case "ArrowRight":
                Sblock.state = 2;
                Accompany.accompany(Lst);
                break;
            }
          }
          break;
        case 2:
          {
            switch (e.key) {
              case "a":
              case "A":
              case "ArrowLeft":
                Sblock.state = 1;
                Accompany.accompany(Lst);
                break;
              case "d":
              case "D":
              case "ArrowRight":
                Sblock.state = 5;
                Accompany.accompany(Lst);
                break;
              case "w":
              case "W":
              case "ArrowUp":
                Sblock.state = 4;
                Accompany.accompany(Lst);
                break;
              case "s":
              case "S":
              case "ArrowDown":
                Sblock.state = 3;
                Accompany.accompany(Lst);
                break;
            }
          }
          break;
        case 3:
          {
            switch (e.key) {
              case "w":
              case "W":
              case "ArrowUp":
                Sblock.state = 2;
                Accompany.accompany(Lst);
                break;
            }
          }
          break;
        case 4:
          {
            switch (e.key) {
              case "s":
              case "S":
              case "ArrowDown":
                Sblock.state = 2;
                Accompany.accompany(Lst);
                break;
            }
          }
          break;
        case 5:
          {
            switch (e.key) {
              case "a":
              case "A":
              case "ArrowLeft":
                Sblock.state = 2;
                Accompany.accompany(Lst);
                break;
            }
          }
          break;
      }
    }
  }
  if (control.process == 1 || control.process == 4) {
    if (Block.num) {
      if (Block.split == 0) {
        switch (Block.state) {
          case 1:
            {
              let [x, y] = [Block.position[0], Block.position[1]];
              switch (e.key) {
                case "a":
                case "A":
                case "ArrowLeft":
                  {
                    if (x == 0) {
                    } else {
                      if (
                        control.center[x - 1][y] &&
                        (control.center[x][y] * 4) % 4 != 2 &&
                        (control.center[x][y] * 4) % 4 != 3
                      ) {
                        if (
                          Saw.num &&
                          Saw.state == 2 &&
                          Saw.position[0] == x &&
                          Saw.position[1] == y
                        ) {
                        } else {
                          Block.clear();
                          Block.position = [x - 1, y];
                          Block.state = 2;
                          Block.draw2();
                          const audio = new Audio("move.wav");
                          audio.play();
                        }
                      }
                    }
                  }
                  break;
                case "w":
                case "W":
                case "ArrowUp":
                  {
                    if (y == 0) {
                    } else {
                      if (
                        control.center[x][y - 1] &&
                        control.center[x + 1][y - 1] &&
                        (control.center[x][y] * 4) % 4 != 1 &&
                        (control.center[x + 1][y - 1] * 4) % 4 != 2 &&
                        (control.center[x + 1][y - 1] * 4) % 4 != 3 &&
                        (control.center[x][y] * 4) % 4 != 3 &&
                        (control.center[x + 1][y] * 4) % 4 != 1 &&
                        (control.center[x + 1][y] * 4) % 4 != 3
                      ) {
                        if (
                          Saw.num &&
                          Saw.state == 1 &&
                          ((Saw.position[0] == x && Saw.position[1] == y) ||
                            (Saw.position[0] == x + 1 && Saw.position[1] == y))
                        ) {
                        } else {
                          Block.clear();
                          Block.position = [x, y - 1];
                          Block.draw1();
                          const audio = new Audio("move.wav");
                          audio.play();
                        }
                      }
                    }
                  }
                  break;
                case "s":
                case "S":
                case "ArrowDown":
                  {
                    if (y == 18) {
                    } else {
                      if (
                        control.center[x][y + 1] &&
                        control.center[x + 1][y + 1] &&
                        (control.center[x][y + 1] * 4) % 4 != 1 &&
                        (control.center[x][y + 1] * 4) % 4 != 3 &&
                        (control.center[x + 1][y + 1] * 4) % 4 != 1 &&
                        (control.center[x + 1][y + 1] * 4) % 4 != 3 &&
                        (control.center[x + 1][y + 1] * 4) % 4 != 2
                      ) {
                        if (
                          Saw.num &&
                          Saw.state == 1 &&
                          ((Saw.position[0] == x && Saw.position[1] == y - 1) ||
                            (Saw.position[0] == x + 1 &&
                              Saw.position[1] == y - 1))
                        ) {
                        } else {
                          Block.clear();
                          Block.position = [x, y + 1];
                          Block.draw1();
                          const audio = new Audio("move.wav");
                          audio.play();
                        }
                      }
                    }
                  }
                  break;
                case "d":
                case "D":
                case "ArrowRight":
                  {
                    if (x >= 12) {
                    } else {
                      if (
                        control.center[x + 2][y] &&
                        (control.center[x + 2][y] * 4) % 4 != 2 &&
                        (control.center[x + 2][y] * 4) % 4 != 3
                      ) {
                        if (
                          Saw.num &&
                          Saw.state == 2 &&
                          Saw.position[0] == x + 2 &&
                          Saw.position[1] == y
                        ) {
                        } else {
                          Block.clear();
                          Block.position = [x + 2, y];
                          Block.state = 2;
                          Block.draw2();
                          const audio = new Audio("move.wav");
                          audio.play();
                        }
                      }
                    }
                  }
                  break;
              }
            }
            break;
          case 2:
            {
              let [x, y] = [Block.position[0], Block.position[1]];
              switch (e.key) {
                case "a":
                case "A":
                case "ArrowLeft":
                  {
                    if (x <= 1) {
                    } else {
                      if (
                        control.center[x - 1][y] &&
                        control.center[x - 2][y] &&
                        (control.center[x][y] * 4) % 4 != 2 &&
                        (control.center[x][y] * 4) % 4 != 3 &&
                        (control.center[x - 1][y] * 4) % 4 != 2 &&
                        (control.center[x - 1][y] * 4) % 4 != 3
                      ) {
                        if (
                          Saw.num &&
                          Saw.state == 2 &&
                          Saw.position[0] == x &&
                          Saw.position[1] == y
                        ) {
                        } else {
                          Block.clear();
                          Block.position = [x - 2, y];
                          Block.state = 1;
                          Block.draw1();
                          const audio = new Audio("move.wav");
                          audio.play();
                        }
                      }
                    }
                  }
                  break;
                case "w":
                case "W":
                case "ArrowUp":
                  {
                    if (y <= 1) {
                    } else {
                      if (
                        control.center[x][y - 1] &&
                        control.center[x][y - 2] &&
                        (control.center[x][y] * 4) % 4 != 1 &&
                        (control.center[x][y] * 4) % 4 != 3 &&
                        (control.center[x][y - 1] * 4) % 4 != 1 &&
                        (control.center[x][y - 1] * 4) % 4 != 3
                      ) {
                        if (
                          Saw.num &&
                          Saw.state == 1 &&
                          Saw.position[0] == x &&
                          Saw.position[1] == y
                        ) {
                        } else {
                          Block.clear();
                          Block.position = [x, y - 2];
                          Block.state = 3;
                          Block.draw3();
                          const audio = new Audio("move.wav");
                          audio.play();
                        }
                      }
                    }
                  }
                  break;
                case "s":
                case "S":
                case "ArrowDown":
                  {
                    if (y >= 17) {
                    } else {
                      if (
                        control.center[x][y + 1] &&
                        control.center[x][y + 2] &&
                        (control.center[x][y + 1] * 4) % 4 != 1 &&
                        (control.center[x][y + 1] * 4) % 4 != 3 &&
                        (control.center[x][y + 2] * 4) % 4 != 1 &&
                        (control.center[x][y + 2] * 4) % 4 != 3
                      ) {
                        if (
                          Saw.num &&
                          Saw.state == 1 &&
                          Saw.position[0] == x &&
                          Saw.position[1] == y - 1
                        ) {
                        } else {
                          Block.clear();
                          Block.position = [x, y + 1];
                          Block.state = 3;
                          Block.draw3();
                          const audio = new Audio("move.wav");
                          audio.play();
                        }
                      }
                    }
                  }
                  break;
                case "d":
                case "D":
                case "ArrowRight":
                  {
                    if (x >= 12) {
                    } else {
                      if (
                        control.center[x + 1][y] &&
                        control.center[x + 2][y] &&
                        (control.center[x + 1][y] * 4) % 4 != 2 &&
                        (control.center[x + 1][y] * 4) % 4 != 3 &&
                        (control.center[x + 2][y] * 4) % 4 != 2 &&
                        (control.center[x + 2][y] * 4) % 4 != 3
                      ) {
                        if (
                          Saw.num &&
                          Saw.state == 2 &&
                          Saw.position[0] == x + 1 &&
                          Saw.position[1] == y
                        ) {
                        } else {
                          Block.clear();
                          Block.position = [x + 1, y];
                          Block.state = 1;
                          Block.draw1();
                          const audio = new Audio("move.wav");
                          audio.play();
                        }
                      }
                    }
                  }
                  break;
              }
            }
            break;
          case 3:
            {
              let [x, y] = [Block.position[0], Block.position[1]];
              switch (e.key) {
                case "a":
                case "A":
                case "ArrowLeft":
                  {
                    if (x == 0) {
                    } else {
                      if (
                        control.center[x - 1][y] &&
                        control.center[x - 1][y + 1] &&
                        (control.center[x][y] * 4) % 4 != 2 &&
                        (control.center[x][y] * 4) % 4 != 3 &&
                        (control.center[x - 1][y + 1] * 4) % 4 != 1 &&
                        (control.center[x - 1][y + 1] * 4) % 4 != 3 &&
                        (control.center[x][y + 1] * 4) % 4 != 2 &&
                        (control.center[x][y + 1] * 4) % 4 != 3
                      ) {
                        if (
                          Saw.num &&
                          Saw.state == 2 &&
                          ((Saw.position[0] == x && Saw.position[1] == y) ||
                            (Saw.position[0] == x && Saw.position[1] == y + 1))
                        ) {
                        } else {
                          Block.clear();
                          Block.position = [x - 1, y];
                          Block.draw3();
                          const audio = new Audio("move.wav");
                          audio.play();
                        }
                      }
                    }
                  }
                  break;
                case "w":
                case "W":
                case "ArrowUp":
                  {
                    if (y == 0) {
                    } else {
                      if (
                        control.center[x][y - 1] &&
                        (control.center[x][y] * 4) % 4 != 1 &&
                        (control.center[x][y] * 4) % 4 != 3
                      ) {
                        if (
                          Saw.num &&
                          Saw.state == 1 &&
                          Saw.position[0] == x &&
                          Saw.position[1] == y
                        ) {
                        } else {
                          Block.clear();
                          Block.position = [x, y - 1];
                          Block.state = 2;
                          Block.draw2();
                          const audio = new Audio("move.wav");
                          audio.play();
                        }
                      }
                    }
                  }
                  break;
                case "s":
                case "S":
                case "ArrowDown":
                  {
                    if (y >= 17) {
                    } else {
                      if (
                        control.center[x][y + 2] &&
                        (control.center[x][y + 2] * 4) % 4 != 1 &&
                        (control.center[x][y + 2] * 4) % 4 != 3
                      ) {
                        if (
                          Saw.num &&
                          Saw.state == 1 &&
                          Saw.position[0] == x &&
                          Saw.position[1] == y + 2
                        ) {
                        } else {
                          Block.clear();
                          Block.position = [x, y + 2];
                          Block.state = 2;
                          Block.draw2();
                          const audio = new Audio("move.wav");
                          audio.play();
                        }
                      }
                    }
                  }
                  break;
                case "d":
                case "D":
                case "ArrowRight":
                  {
                    if (x == 13) {
                    } else {
                      if (
                        control.center[x + 1][y] &&
                        control.center[x + 1][y + 1] &&
                        (control.center[x + 1][y] * 4) % 4 != 2 &&
                        (control.center[x + 1][y] * 4) % 4 != 3 &&
                        (control.center[x + 1][y + 1] * 4) % 4 != 2 &&
                        (control.center[x + 1][y + 1] * 4) % 4 != 3 &&
                        (control.center[x + 1][y + 1] * 4) % 4 != 1
                      ) {
                        if (
                          Saw.num &&
                          Saw.state == 2 &&
                          ((Saw.position[0] == x + 1 && Saw.position[1] == y) ||
                            (Saw.position[0] == x + 1 &&
                              Saw.position[1] == y + 1))
                        ) {
                        } else {
                          Block.clear();
                          Block.position = [x + 1, y];
                          Block.draw3();
                          const audio = new Audio("move.wav");
                          audio.play();
                        }
                      }
                    }
                  }
                  break;
              }
            }
            break;
        }
      } else if (Block.split == 1) {
        switch (Block.state) {
          case 1:
            {
              let [x, y] = [Block.position[0], Block.position[1]];
              switch (e.key) {
                case "a":
                case "A":
                case "ArrowLeft":
                  {
                    if (x == 0) {
                    } else {
                      if (
                        control.center[x - 1][y] &&
                        (control.center[x][y] * 4) % 4 != 2 &&
                        (control.center[x][y] * 4) % 4 != 3
                      ) {
                        Block.clear();
                        Block.position = [x - 1, y];
                        Block.state = 2;
                        Block.draws2();
                        const audio = new Audio("move.wav");
                        audio.play();
                      }
                    }
                  }
                  break;
                case "w":
                case "W":
                case "ArrowUp":
                  {
                    if (y == 0) {
                    } else {
                      if (
                        control.center[x][y - 1] &&
                        control.center[x + 2][y - 1] &&
                        (control.center[x][y] * 4) % 4 != 1 &&
                        (control.center[x][y] * 4) % 4 != 3 &&
                        (control.center[x + 2][y] * 4) % 4 != 1 &&
                        (control.center[x + 2][y] * 4) % 4 != 3
                      ) {
                        Block.clear();
                        Block.position = [x, y - 1];
                        Block.draws1();
                        const audio = new Audio("move.wav");
                        audio.play();
                      }
                    }
                  }
                  break;
                case "s":
                case "S":
                case "ArrowDown":
                  {
                    if (y == 18) {
                    } else {
                      if (
                        control.center[x][y + 1] &&
                        control.center[x + 2][y + 1] &&
                        (control.center[x][y + 1] * 4) % 4 != 1 &&
                        (control.center[x][y + 1] * 4) % 4 != 3 &&
                        (control.center[x + 2][y + 1] * 4) % 4 != 1 &&
                        (control.center[x + 2][y + 1] * 4) % 4 != 3
                      ) {
                        Block.clear();
                        Block.position = [x, y + 1];
                        Block.draws1();
                        const audio = new Audio("move.wav");
                        audio.play();
                      }
                    }
                  }
                  break;
                case "d":
                case "D":
                case "ArrowRight":
                  {
                    if (x >= 11) {
                    } else {
                      if (
                        control.center[x + 3][y] &&
                        (control.center[x + 3][y] * 4) % 4 != 2 &&
                        (control.center[x + 3][y] * 4) % 4 != 3
                      ) {
                        Block.clear();
                        Block.position = [x + 3, y];
                        Block.state = 2;
                        Block.draws2();
                        const audio = new Audio("move.wav");
                        audio.play();
                      }
                    }
                  }
                  break;
              }
            }
            break;
          case 2:
            {
              let [x, y] = [Block.position[0], Block.position[1]];
              switch (e.key) {
                case "a":
                case "A":
                case "ArrowLeft":
                  {
                    if (x <= 2) {
                    } else {
                      if (
                        control.center[x - 1][y] &&
                        control.center[x - 3][y] &&
                        (control.center[x][y] * 4) % 4 != 2 &&
                        (control.center[x][y] * 4) % 4 != 3
                      ) {
                        Block.clear();
                        Block.position = [x - 3, y];
                        Block.state = 1;
                        Block.draws1();
                        const audio = new Audio("move.wav");
                        audio.play();
                      }
                    }
                  }
                  break;
                case "w":
                case "W":
                case "ArrowUp":
                  {
                    if (y <= 2) {
                    } else {
                      if (
                        control.center[x][y - 1] &&
                        control.center[x][y - 3] &&
                        (control.center[x][y] * 4) % 4 != 1 &&
                        (control.center[x][y] * 4) % 4 != 3
                      ) {
                        Block.clear();
                        Block.position = [x, y - 3];
                        Block.state = 3;
                        Block.draws3();
                        const audio = new Audio("move.wav");
                        audio.play();
                      }
                    }
                  }
                  break;
                case "s":
                case "S":
                case "ArrowDown":
                  {
                    if (y >= 16) {
                    } else {
                      if (
                        control.center[x][y + 1] &&
                        control.center[x][y + 3] &&
                        (control.center[x][y + 1] * 4) % 4 != 1 &&
                        (control.center[x][y + 1] * 4) % 4 != 3
                      ) {
                        Block.clear();
                        Block.position = [x, y + 1];
                        Block.state = 3;
                        Block.draws3();
                        const audio = new Audio("move.wav");
                        audio.play();
                      }
                    }
                  }
                  break;
                case "d":
                case "D":
                case "ArrowRight":
                  {
                    if (x >= 11) {
                    } else {
                      if (
                        control.center[x + 1][y] &&
                        control.center[x + 3][y] &&
                        (control.center[x + 1][y] * 4) % 4 != 2 &&
                        (control.center[x + 1][y] * 4) % 4 != 3
                      ) {
                        Block.clear();
                        Block.position = [x + 1, y];
                        Block.state = 1;
                        Block.draws1();
                        const audio = new Audio("move.wav");
                        audio.play();
                      }
                    }
                  }
                  break;
              }
            }
            break;
          case 3:
            {
              let [x, y] = [Block.position[0], Block.position[1]];
              switch (e.key) {
                case "a":
                case "A":
                case "ArrowLeft":
                  {
                    if (x == 0) {
                    } else {
                      if (
                        control.center[x - 1][y] &&
                        control.center[x - 1][y + 2] &&
                        (control.center[x][y] * 4) % 4 != 2 &&
                        (control.center[x][y] * 4) % 4 != 3 &&
                        (control.center[x][y + 2] * 4) % 4 != 2 &&
                        (control.center[x][y + 2] * 4) % 4 != 3
                      ) {
                        Block.clear();
                        Block.position = [x - 1, y];
                        Block.draws3();
                        const audio = new Audio("move.wav");
                        audio.play();
                      }
                    }
                  }
                  break;
                case "w":
                case "W":
                case "ArrowUp":
                  {
                    if (y == 0) {
                    } else {
                      if (
                        control.center[x][y - 1] &&
                        (control.center[x][y] * 4) % 4 != 1 &&
                        (control.center[x][y] * 4) % 4 != 3
                      ) {
                        Block.clear();
                        Block.position = [x, y - 1];
                        Block.state = 2;
                        Block.draws2();
                        const audio = new Audio("move.wav");
                        audio.play();
                      }
                    }
                  }
                  break;
                case "s":
                case "S":
                case "ArrowDown":
                  {
                    if (y >= 16) {
                    } else {
                      if (
                        control.center[x][y + 3] &&
                        (control.center[x][y + 3] * 4) % 4 != 1 &&
                        (control.center[x][y + 3] * 4) % 4 != 3
                      ) {
                        Block.clear();
                        Block.position = [x, y + 3];
                        Block.state = 2;
                        Block.draws2();
                        const audio = new Audio("move.wav");
                        audio.play();
                      }
                    }
                  }
                  break;
                case "d":
                case "D":
                case "ArrowRight":
                  {
                    if (x == 13) {
                    } else {
                      if (
                        control.center[x + 1][y] &&
                        control.center[x + 1][y + 2] &&
                        (control.center[x + 1][y] * 4) % 4 != 2 &&
                        (control.center[x + 1][y] * 4) % 4 != 3 &&
                        (control.center[x + 1][y + 2] * 4) % 4 != 2 &&
                        (control.center[x + 1][y + 2] * 4) % 4 != 3
                      ) {
                        Block.clear();
                        Block.position = [x + 1, y];
                        Block.draws3();
                        const audio = new Audio("move.wav");
                        audio.play();
                      }
                    }
                  }
                  break;
              }
            }
            break;
        }
      }
    }
    if (Block2.num) {
      switch (Block2.state) {
        case 1:
          {
            let [x, y] = [Block2.position[0], Block2.position[1]];
            switch (e.key) {
              case "a":
              case "A":
              case "ArrowLeft":
                {
                  if (x == 0) {
                  } else {
                    if (
                      control.center[x - 1][y] &&
                      (control.center[x][y] * 4) % 4 != 2 &&
                      (control.center[x][y] * 4) % 4 != 3
                    ) {
                      Block2.clear();
                      Block2.position = [x - 1, y];
                      Block2.state = 2;
                      Block2.draw2();
                      const audio = new Audio("move.wav");
                      audio.play();
                    }
                  }
                }
                break;
              case "w":
              case "W":
              case "ArrowUp":
                {
                  if (y == 0) {
                  } else {
                    if (
                      control.center[x][y - 1] &&
                      control.center[x + 1][y - 1] &&
                      (control.center[x][y] * 4) % 4 != 1 &&
                      (control.center[x + 1][y - 1] * 4) % 4 != 2 &&
                      (control.center[x + 1][y - 1] * 4) % 4 != 3 &&
                      (control.center[x][y] * 4) % 4 != 3 &&
                      (control.center[x + 1][y] * 4) % 4 != 1 &&
                      (control.center[x + 1][y] * 4) % 4 != 3
                    ) {
                      Block2.clear();
                      Block2.position = [x, y - 1];
                      Block2.draw1();
                      const audio = new Audio("move.wav");
                      audio.play();
                    }
                  }
                }
                break;
              case "s":
              case "S":
              case "ArrowDown":
                {
                  if (y == 18) {
                  } else {
                    if (
                      control.center[x][y + 1] &&
                      control.center[x + 1][y + 1] &&
                      (control.center[x][y + 1] * 4) % 4 != 1 &&
                      (control.center[x][y + 1] * 4) % 4 != 3 &&
                      (control.center[x + 1][y + 1] * 4) % 4 != 1 &&
                      (control.center[x + 1][y + 1] * 4) % 4 != 3 &&
                      (control.center[x + 1][y + 1] * 4) % 4 != 2
                    ) {
                      Block2.clear();
                      Block2.position = [x, y + 1];
                      Block2.draw1();
                      const audio = new Audio("move.wav");
                      audio.play();
                    }
                  }
                }
                break;
              case "d":
              case "D":
              case "ArrowRight":
                {
                  if (x >= 12) {
                  } else {
                    if (
                      control.center[x + 2][y] &&
                      (control.center[x + 2][y] * 4) % 4 != 2 &&
                      (control.center[x + 2][y] * 4) % 4 != 3
                    ) {
                      Block2.clear();
                      Block2.position = [x + 2, y];
                      Block2.state = 2;
                      Block2.draw2();
                      const audio = new Audio("move.wav");
                      audio.play();
                    }
                  }
                }
                break;
            }
          }
          break;
        case 2:
          {
            let [x, y] = [Block2.position[0], Block2.position[1]];
            switch (e.key) {
              case "a":
              case "A":
              case "ArrowLeft":
                {
                  if (x <= 1) {
                  } else {
                    if (
                      control.center[x - 1][y] &&
                      control.center[x - 2][y] &&
                      (control.center[x][y] * 4) % 4 != 2 &&
                      (control.center[x][y] * 4) % 4 != 3 &&
                      (control.center[x - 1][y] * 4) % 4 != 2 &&
                      (control.center[x - 1][y] * 4) % 4 != 3
                    ) {
                      Block2.clear();
                      Block2.position = [x - 2, y];
                      Block2.state = 1;
                      Block2.draw1();
                      const audio = new Audio("move.wav");
                      audio.play();
                    }
                  }
                }
                break;
              case "w":
              case "W":
              case "ArrowUp":
                {
                  if (y <= 1) {
                  } else {
                    if (
                      control.center[x][y - 1] &&
                      control.center[x][y - 2] &&
                      (control.center[x][y] * 4) % 4 != 1 &&
                      (control.center[x][y] * 4) % 4 != 3 &&
                      (control.center[x][y - 1] * 4) % 4 != 1 &&
                      (control.center[x][y - 1] * 4) % 4 != 3
                    ) {
                      Block2.clear();
                      Block2.position = [x, y - 2];
                      Block2.state = 3;
                      Block2.draw3();
                      const audio = new Audio("move.wav");
                      audio.play();
                    }
                  }
                }
                break;
              case "s":
              case "S":
              case "ArrowDown":
                {
                  if (y >= 17) {
                  } else {
                    if (
                      control.center[x][y + 1] &&
                      control.center[x][y + 2] &&
                      (control.center[x][y + 1] * 4) % 4 != 1 &&
                      (control.center[x][y + 1] * 4) % 4 != 3 &&
                      (control.center[x][y + 2] * 4) % 4 != 1 &&
                      (control.center[x][y + 2] * 4) % 4 != 3
                    ) {
                      Block2.clear();
                      Block2.position = [x, y + 1];
                      Block2.state = 3;
                      Block2.draw3();
                      const audio = new Audio("move.wav");
                      audio.play();
                    }
                  }
                }
                break;
              case "d":
              case "D":
              case "ArrowRight":
                {
                  if (x >= 12) {
                  } else {
                    if (
                      control.center[x + 1][y] &&
                      control.center[x + 2][y] &&
                      (control.center[x + 1][y] * 4) % 4 != 2 &&
                      (control.center[x + 1][y] * 4) % 4 != 3 &&
                      (control.center[x + 2][y] * 4) % 4 != 2 &&
                      (control.center[x + 2][y] * 4) % 4 != 3
                    ) {
                      Block2.clear();
                      Block2.position = [x + 1, y];
                      Block2.state = 1;
                      Block2.draw1();
                      const audio = new Audio("move.wav");
                      audio.play();
                    }
                  }
                }
                break;
            }
          }
          break;
        case 3:
          {
            let [x, y] = [Block2.position[0], Block2.position[1]];
            switch (e.key) {
              case "a":
              case "A":
              case "ArrowLeft":
                {
                  if (x == 0) {
                  } else {
                    if (
                      control.center[x - 1][y] &&
                      control.center[x - 1][y + 1] &&
                      (control.center[x][y] * 4) % 4 != 2 &&
                      (control.center[x][y] * 4) % 4 != 3 &&
                      (control.center[x - 1][y + 1] * 4) % 4 != 1 &&
                      (control.center[x - 1][y + 1] * 4) % 4 != 3 &&
                      (control.center[x][y + 1] * 4) % 4 != 2 &&
                      (control.center[x][y + 1] * 4) % 4 != 3
                    ) {
                      Block2.clear();
                      Block2.position = [x - 1, y];
                      Block2.draw3();
                      const audio = new Audio("move.wav");
                      audio.play();
                    }
                  }
                }
                break;
              case "w":
              case "W":
              case "ArrowUp":
                {
                  if (y == 0) {
                  } else {
                    if (
                      control.center[x][y - 1] &&
                      (control.center[x][y] * 4) % 4 != 1 &&
                      (control.center[x][y] * 4) % 4 != 3
                    ) {
                      Block2.clear();
                      Block2.position = [x, y - 1];
                      Block2.state = 2;
                      Block2.draw2();
                      const audio = new Audio("move.wav");
                      audio.play();
                    }
                  }
                }
                break;
              case "s":
              case "S":
              case "ArrowDown":
                {
                  if (y >= 17) {
                  } else {
                    if (
                      control.center[x][y + 2] &&
                      (control.center[x][y + 2] * 4) % 4 != 1 &&
                      (control.center[x][y + 2] * 4) % 4 != 3
                    ) {
                      Block2.clear();
                      Block2.position = [x, y + 2];
                      Block2.state = 2;
                      Block2.draw2();
                      const audio = new Audio("move.wav");
                      audio.play();
                    }
                  }
                }
                break;
              case "d":
              case "D":
              case "ArrowRight":
                {
                  if (x == 13) {
                  } else {
                    if (
                      control.center[x + 1][y] &&
                      control.center[x + 1][y + 1] &&
                      (control.center[x + 1][y] * 4) % 4 != 2 &&
                      (control.center[x + 1][y] * 4) % 4 != 3 &&
                      (control.center[x + 1][y + 1] * 4) % 4 != 2 &&
                      (control.center[x + 1][y + 1] * 4) % 4 != 3 &&
                      (control.center[x + 1][y + 1] * 4) % 4 != 1
                    ) {
                      Block2.clear();
                      Block2.position = [x + 1, y];
                      Block2.draw3();
                      const audio = new Audio("move.wav");
                      audio.play();
                    }
                  }
                }
                break;
            }
          }
          break;
      }
    }
    if (Sblock.num) {
      switch (Sblock.state) {
        case 1:
          {
            let [x, y] = [Sblock.position[0], Sblock.position[1]];
            switch (e.key) {
              case "w":
              case "W":
              case "ArrowUp":
                {
                  if (y == 0) {
                  } else {
                    if (
                      control.center[x][y - 1] &&
                      control.center[x + 1][y - 1] &&
                      (control.center[x][y] * 4) % 4 != 1 &&
                      (control.center[x + 1][y - 1] * 4) % 4 != 2 &&
                      (control.center[x + 1][y - 1] * 4) % 4 != 3 &&
                      (control.center[x][y] * 4) % 4 != 3 &&
                      (control.center[x + 1][y] * 4) % 4 != 1 &&
                      (control.center[x + 1][y] * 4) % 4 != 3
                    ) {
                      Sblock.clear();
                      Sblock.position = [x, y - 1];
                      Sblock.draw1();
                      const audio = new Audio("move.wav");
                      audio.play();
                    }
                  }
                }
                break;
              case "s":
              case "S":
              case "ArrowDown":
                {
                  if (y == 18) {
                  } else {
                    if (
                      control.center[x][y + 1] &&
                      control.center[x + 1][y + 1] &&
                      (control.center[x][y + 1] * 4) % 4 != 1 &&
                      (control.center[x][y + 1] * 4) % 4 != 3 &&
                      (control.center[x + 1][y + 1] * 4) % 4 != 1 &&
                      (control.center[x + 1][y + 1] * 4) % 4 != 3 &&
                      (control.center[x + 1][y + 1] * 4) % 4 != 2
                    ) {
                      Sblock.clear();
                      Sblock.position = [x, y + 1];
                      Sblock.draw1();
                      const audio = new Audio("move.wav");
                      audio.play();
                    }
                  }
                }
                break;
              case "d":
              case "D":
              case "ArrowRight":
                {
                  if (x >= 12) {
                  } else {
                    if (
                      control.center[x + 2][y] &&
                      (control.center[x + 2][y] * 4) % 4 != 2 &&
                      (control.center[x + 2][y] * 4) % 4 != 3
                    ) {
                      Sblock.clear();
                      Sblock.position = [x + 2, y];
                      Sblock.state = 2;
                      Sblock.draw2();
                      const audio = new Audio("move.wav");
                      audio.play();
                    }
                  }
                }
                break;
            }
          }
          break;
        case 2:
          {
            let [x, y] = [Sblock.position[0], Sblock.position[1]];
            switch (e.key) {
              case "a":
              case "A":
              case "ArrowLeft":
                {
                  if (x <= 1) {
                  } else {
                    if (
                      control.center[x - 1][y] &&
                      control.center[x - 2][y] &&
                      (control.center[x][y] * 4) % 4 != 2 &&
                      (control.center[x][y] * 4) % 4 != 3 &&
                      (control.center[x - 1][y] * 4) % 4 != 2 &&
                      (control.center[x - 1][y] * 4) % 4 != 3
                    ) {
                      Sblock.clear();
                      Sblock.position = [x - 2, y];
                      Sblock.state = 1;
                      Sblock.draw1();
                      const audio = new Audio("move.wav");
                      audio.play();
                    }
                  }
                }
                break;
              case "w":
              case "W":
              case "ArrowUp":
                {
                  if (y <= 1) {
                  } else {
                    if (
                      control.center[x][y - 1] &&
                      control.center[x][y - 2] &&
                      (control.center[x][y] * 4) % 4 != 1 &&
                      (control.center[x][y] * 4) % 4 != 3 &&
                      (control.center[x][y - 1] * 4) % 4 != 1 &&
                      (control.center[x][y - 1] * 4) % 4 != 3
                    ) {
                      Sblock.clear();
                      Sblock.position = [x, y - 2];
                      Sblock.state = 4;
                      Sblock.draw4();
                      const audio = new Audio("move.wav");
                      audio.play();
                    }
                  }
                }
                break;
              case "s":
              case "S":
              case "ArrowDown":
                {
                  if (y >= 17) {
                  } else {
                    if (
                      control.center[x][y + 1] &&
                      control.center[x][y + 2] &&
                      (control.center[x][y + 1] * 4) % 4 != 1 &&
                      (control.center[x][y + 1] * 4) % 4 != 3 &&
                      (control.center[x][y + 2] * 4) % 4 != 1 &&
                      (control.center[x][y + 2] * 4) % 4 != 3
                    ) {
                      Sblock.clear();
                      Sblock.position = [x, y + 1];
                      Sblock.state = 3;
                      Sblock.draw3();
                      const audio = new Audio("move.wav");
                      audio.play();
                    }
                  }
                }
                break;
              case "d":
              case "D":
              case "ArrowRight":
                {
                  if (x >= 12) {
                  } else {
                    if (
                      control.center[x + 1][y] &&
                      control.center[x + 2][y] &&
                      (control.center[x + 1][y] * 4) % 4 != 2 &&
                      (control.center[x + 1][y] * 4) % 4 != 3 &&
                      (control.center[x + 2][y] * 4) % 4 != 2 &&
                      (control.center[x + 2][y] * 4) % 4 != 3
                    ) {
                      Sblock.clear();
                      Sblock.position = [x + 1, y];
                      Sblock.state = 5;
                      Sblock.draw5();
                      const audio = new Audio("move.wav");
                      audio.play();
                    }
                  }
                }
                break;
            }
          }
          break;
        case 3:
          {
            let [x, y] = [Sblock.position[0], Sblock.position[1]];
            switch (e.key) {
              case "a":
              case "A":
              case "ArrowLeft":
                {
                  if (x == 0) {
                  } else {
                    if (
                      control.center[x - 1][y] &&
                      control.center[x - 1][y + 1] &&
                      (control.center[x][y] * 4) % 4 != 2 &&
                      (control.center[x][y] * 4) % 4 != 3 &&
                      (control.center[x - 1][y + 1] * 4) % 4 != 1 &&
                      (control.center[x - 1][y + 1] * 4) % 4 != 3 &&
                      (control.center[x][y + 1] * 4) % 4 != 2 &&
                      (control.center[x][y + 1] * 4) % 4 != 3
                    ) {
                      Sblock.clear();
                      Sblock.position = [x - 1, y];
                      Sblock.draw3();
                      const audio = new Audio("move.wav");
                      audio.play();
                    }
                  }
                }
                break;
              case "w":
              case "W":
              case "ArrowUp":
                {
                  if (y == 0) {
                  } else {
                    if (
                      control.center[x][y - 1] &&
                      (control.center[x][y] * 4) % 4 != 1 &&
                      (control.center[x][y] * 4) % 4 != 3
                    ) {
                      Sblock.clear();
                      Sblock.position = [x, y - 1];
                      Sblock.state = 2;
                      Sblock.draw2();
                      const audio = new Audio("move.wav");
                      audio.play();
                    }
                  }
                }
                break;
              case "d":
              case "D":
              case "ArrowRight":
                {
                  if (x == 13) {
                  } else {
                    if (
                      control.center[x + 1][y] &&
                      control.center[x + 1][y + 1] &&
                      (control.center[x + 1][y] * 4) % 4 != 2 &&
                      (control.center[x + 1][y] * 4) % 4 != 3 &&
                      (control.center[x + 1][y + 1] * 4) % 4 != 2 &&
                      (control.center[x + 1][y + 1] * 4) % 4 != 3 &&
                      (control.center[x + 1][y + 1] * 4) % 4 != 1
                    ) {
                      Sblock.clear();
                      Sblock.position = [x + 1, y];
                      Sblock.draw3();
                      const audio = new Audio("move.wav");
                      audio.play();
                    }
                  }
                }
                break;
            }
          }
          break;
        case 4:
          {
            let [x, y] = [Sblock.position[0], Sblock.position[1]];
            switch (e.key) {
              case "a":
              case "A":
              case "ArrowLeft":
                {
                  if (x == 0) {
                  } else {
                    if (
                      control.center[x - 1][y] &&
                      control.center[x - 1][y + 1] &&
                      (control.center[x][y] * 4) % 4 != 2 &&
                      (control.center[x][y] * 4) % 4 != 3 &&
                      (control.center[x - 1][y + 1] * 4) % 4 != 1 &&
                      (control.center[x - 1][y + 1] * 4) % 4 != 3 &&
                      (control.center[x][y + 1] * 4) % 4 != 2 &&
                      (control.center[x][y + 1] * 4) % 4 != 3
                    ) {
                      Sblock.clear();
                      Sblock.position = [x - 1, y];
                      Sblock.draw4();
                      const audio = new Audio("move.wav");
                      audio.play();
                    }
                  }
                }
                break;
              case "d":
              case "D":
              case "ArrowRight":
                {
                  if (x == 13) {
                  } else {
                    if (
                      control.center[x + 1][y] &&
                      control.center[x + 1][y + 1] &&
                      (control.center[x + 1][y] * 4) % 4 != 2 &&
                      (control.center[x + 1][y] * 4) % 4 != 3 &&
                      (control.center[x + 1][y + 1] * 4) % 4 != 2 &&
                      (control.center[x + 1][y + 1] * 4) % 4 != 3 &&
                      (control.center[x + 1][y + 1] * 4) % 4 != 1
                    ) {
                      Sblock.clear();
                      Sblock.position = [x + 1, y];
                      Sblock.draw4();
                      const audio = new Audio("move.wav");
                      audio.play();
                    }
                  }
                }
                break;
              case "s":
              case "S":
              case "ArrowDown":
                {
                  if (y >= 17) {
                  } else {
                    if (
                      control.center[x][y + 2] &&
                      (control.center[x][y + 2] * 4) % 4 != 1 &&
                      (control.center[x][y + 2] * 4) % 4 != 3
                    ) {
                      Sblock.clear();
                      Sblock.position = [x, y + 2];
                      Sblock.state = 2;
                      Sblock.draw2();
                      const audio = new Audio("move.wav");
                      audio.play();
                    }
                  }
                }
                break;
            }
          }
          break;
        case 5:
          {
            let [x, y] = [Sblock.position[0], Sblock.position[1]];
            switch (e.key) {
              case "w":
              case "W":
              case "ArrowUp":
                {
                  if (y == 0) {
                  } else {
                    if (
                      control.center[x][y - 1] &&
                      control.center[x + 1][y - 1] &&
                      (control.center[x][y] * 4) % 4 != 1 &&
                      (control.center[x + 1][y - 1] * 4) % 4 != 2 &&
                      (control.center[x + 1][y - 1] * 4) % 4 != 3 &&
                      (control.center[x][y] * 4) % 4 != 3 &&
                      (control.center[x + 1][y] * 4) % 4 != 1 &&
                      (control.center[x + 1][y] * 4) % 4 != 3
                    ) {
                      Sblock.clear();
                      Sblock.position = [x, y - 1];
                      Sblock.draw5();
                      const audio = new Audio("move.wav");
                      audio.play();
                    }
                  }
                }
                break;
              case "s":
              case "S":
              case "ArrowDown":
                {
                  if (y == 18) {
                  } else {
                    if (
                      control.center[x][y + 1] &&
                      control.center[x + 1][y + 1] &&
                      (control.center[x][y + 1] * 4) % 4 != 1 &&
                      (control.center[x][y + 1] * 4) % 4 != 3 &&
                      (control.center[x + 1][y + 1] * 4) % 4 != 1 &&
                      (control.center[x + 1][y + 1] * 4) % 4 != 3 &&
                      (control.center[x + 1][y + 1] * 4) % 4 != 2
                    ) {
                      Sblock.clear();
                      Sblock.position = [x, y + 1];
                      Sblock.draw5();
                      const audio = new Audio("move.wav");
                      audio.play();
                    }
                  }
                }
                break;
              case "a":
              case "A":
              case "ArrowLeft":
                {
                  if (x == 0) {
                  } else {
                    if (
                      control.center[x - 1][y] &&
                      (control.center[x][y] * 4) % 4 != 2 &&
                      (control.center[x][y] * 4) % 4 != 3
                    ) {
                      Sblock.clear();
                      Sblock.position = [x - 1, y];
                      Sblock.state = 2;
                      Sblock.draw2();
                      const audio = new Audio("move.wav");
                      audio.play();
                    }
                  }
                }
                break;
            }
          }
          break;
      }
    }
    Wall.clear(900);
    Wall.clear2(900);
    for (let i = 0; i < 14; i++) {
      for (let j = 0; j < 19; j++) {
        if (
          (control.center[i][j] * 4) % 4 == 1 ||
          (control.center[i][j] * 4) % 4 == 3
        ) {
          Wall.position = [i, j];
          if (
            j > (Block.state == 3 ? Block.position[1] + 1 : Block.position[1])
          ) {
            Wall.draw1();
            if ((control.center[i][j] * 4) % 4 == 3) {
              Wall.draw2();
            }
          } else {
            if (i < Block.position[0]) {
              Wall.draw1();
              if ((control.center[i][j] * 4) % 4 == 3) {
                Wall.draw2();
              }
            } else {
              Wall.draw3();
              if ((control.center[i][j] * 4) % 4 == 3) {
                Wall.draw4();
              }
            }
          }
        } else if (
          (control.center[i][j] * 4) % 4 == 2 ||
          (control.center[i][j] * 4) % 4 == 3
        ) {
          Wall.position = [i, j];
          if (i <= Block.position[0]) {
            Wall.draw2();
            if ((control.center[i][j] * 4) % 4 == 3) {
              Wall.draw1();
            }
          } else {
            if (j > Block.position[1]) {
              Wall.draw2();
              if ((control.center[i][j] * 4) % 4 == 3) {
                Wall.draw1();
              }
            } else {
              Wall.draw4();
              if ((control.center[i][j] * 4) % 4 == 3) {
                Wall.draw3();
              }
            }
          }
        }
      }
    }
    if (Saw.num) {
      Saw.clear();
      Saw.clear2();
      if (Saw.state == 1) {
        if (
          Saw.position[1] >
          (Block.state == 3 ? Block.position[1] + 1 : Block.position[1])
        ) {
          Saw.draw2();
        } else {
          if (Saw.position[0] < Block.position[0]) {
            Saw.draw2();
          } else {
            Saw.draw();
          }
        }
      } else {
        if (Saw.position[0] < Block.position[0]) {
          Saw.draw2();
        } else {
          if (
            Saw.position[1] >
            (Block.state == 3 ? Block.position[1] + 1 : Block.position[1])
          ) {
            Saw.draw2();
          } else {
            Saw.draw();
          }
        }
      }
    }
  }
};
window.onkeyup = function () {
  if (control.process == 1 || control.process == 4) {
    let x, y;
    if (Block.num) {
      x = Block.position[0];
      y = Block.position[1];
    } else {
      x = Sblock.position[0];
      y = Sblock.position[1];
    }
    if (Block.num) {
      if (
        control.center[x][y] >= 4 &&
        control.center[x][y] < 5 &&
        Block.state == 2
      ) {
        let j = 0;
        for (let i = 0; i < Bridge.button.length; i++) {
          if (Bridge.button[i][0] == x && Bridge.button[i][1] == y) {
            j = i;
          }
        }
        let [a, b] = Button.bridge[j];
        control.center[a][b] = 2;
        Bridge.position = [a, b];
        k = 0;
        loop(a, b);
        const audio = new Audio("rise.wav");
        audio.play();
      }
      if (
        control.center[x][y] >= 7 &&
        control.center[x][y] < 8 &&
        Block.state == 2
      ) {
        Block.clear();
        Dialog.mem = control.process;
        control.process = 3;
        Dialog.type = 5;
        trap();
        const audio = new Audio("lose.wav");
        audio.play();
        setTimeout(Dialog.lose, 600);
      }
      if (control.center[x][y] >= 3 && control.center[x][y] < 4) {
        let j = 0;
        for (let i = 0; i < Bridge.button.length; i++) {
          if (Bridge.button[i][0] == x && Bridge.button[i][1] == y) {
            j = i;
          }
        }
        let [a, b] = Button.bridge[j];
        control.center[a][b] = 2;
        Bridge.position = [a, b];
        k = 0;
        loop(a, b);
        const audio = new Audio("rise.wav");
        audio.play();
      }
      if (
        control.center[x + 1][y] >= 3 &&
        control.center[x + 1][y] < 4 &&
        Block.state == 1
      ) {
        let j = 0;
        for (let i = 0; i < Bridge.button.length; i++) {
          if (Bridge.button[i][0] == x + 1 && Bridge.button[i][1] == y) {
            j = i;
          }
        }
        let [a, b] = Button.bridge[j];
        control.center[a][b] = 2;
        Bridge.position = [a, b];
        k = 0;
        loop(a, b);
        const audio = new Audio("rise.wav");
        audio.play();
      }
      if (
        control.center[x][y + 1] >= 3 &&
        control.center[x][y + 1] < 4 &&
        Block.state == 3
      ) {
        let j = 0;
        for (let i = 0; i < Bridge.button.length; i++) {
          if (Bridge.button[i][0] == x && Bridge.button[i][1] == y + 1) {
            j = i;
          }
        }
        let [a, b] = Button.bridge[j];
        control.center[a][b] = 2;
        Bridge.position = [a, b];
        k = 0;
        loop();
        const audio = new Audio("rise.wav");
        audio.play();
      }
      if (
        Block.state == 1 &&
        Block.position[0] == Saw.position[0] - 1 &&
        Saw.state == 2 &&
        Block.position[1] == Saw.position[1] &&
        Saw.num == 1
      ) {
        Block.clear();
        Block.split = 1;
        Saw.clear();
        Saw.clear2();
        Saw.move();
        Saw.num = 0;
        setTimeout(() => {
          Block.draws1();
        }, 2000);
      } else if (
        Block.state == 3 &&
        Saw.state == 1 &&
        Block.position[0] == Saw.position[0] &&
        Block.position[1] == Saw.position[1] - 1 &&
        Saw.num == 1
      ) {
        Block.position[1] -= 1;
        Block.clear();
        Block.split = 1;
        Saw.clear();
        Saw.clear2();
        Saw.move();
        Saw.num = 0;
        setTimeout(() => {
          Block.draws3();
        }, 2000);
      }
    }
    if (Block2.num) {
      let [a, b] = Block2.position;
      if (
        control.center[x][y] >= 5 &&
        control.center[x][y] < 6 &&
        Block.state == 2 &&
        control.center[a][b] >= 5 &&
        control.center[a][b] < 6 &&
        Block2.state == 2
      ) {
        h = 0;
        v = 0;
        k = 0;
        Lst = [];
        Block.clear();
        Block2.clear();
        End.position = [x, y];
        Accompany.set(39);
        end();
        End.position = [a, b];
        Accompany.set(39);
        end();
        const audio = new Audio("win.wav");
        audio.play();
        if (control.process == 1) {
          setTimeout(Dialog.win, 1000);
          Dialog.type = 3;
        } else {
          setTimeout(Dialog.win2, 1000);
          Dialog.type = 4;
        }
        control.process = 3;
      }
    } else {
      if (
        control.center[x][y] >= 5 &&
        control.center[x][y] < 6 &&
        Block.state == 2
      ) {
        h = 0;
        v = 0;
        k = 0;
        Lst = [];
        Block.clear();
        Accompany.set(39);
        if (Block.split) {
          end3();
        } else {
          end();
        }
        const audio = new Audio("win.wav");
        audio.play();
        if (control.process == 1) {
          setTimeout(Dialog.win, 1000);
          Dialog.type = 3;
        } else {
          setTimeout(Dialog.win2, 1000);
          Dialog.type = 4;
        }
        control.process = 3;
      }
    }
    if (Sblock.num) {
      let [c, d] = Sblock.position;
      if (
        control.center[c][d] >= 4 &&
        control.center[c][d] < 5 &&
        Sblock.state == 2
      ) {
        let j = 0;
        for (let i = 0; i < Bridge.button.length; i++) {
          if (Bridge.button[i][0] == c && Bridge.button[i][1] == d) {
            j = i;
          }
        }
        let [a, b] = Button.bridge[j];
        control.center[a][b] = 2;
        Bridge.position = [a, b];
        k = 0;
        loop(a, b);
        const audio = new Audio("rise.wav");
        audio.play();
      }
      if (
        control.center[c][d] >= 7 &&
        control.center[c][d] < 8 &&
        Sblock.state == 2
      ) {
        Sblock.clear();
        Dialog.mem = control.process;
        control.process = 3;
        Dialog.type = 5;
        trap();
        const audio = new Audio("lose.wav");
        audio.play();
        setTimeout(Dialog.lose, 600);
      }
      if (
        control.center[c][d] >= 3 &&
        control.center[c][d] < 4 &&
        Sblock.state == 5
      ) {
        let j = 0;
        for (let i = 0; i < Bridge.button.length; i++) {
          if (Bridge.button[i][0] == c + 1 && Bridge.button[i][1] == d) {
            j = i;
          }
        }
        let [a, b] = Button.bridge[j];
        control.center[a][b] = 2;
        Bridge.position = [a, b];
        k = 0;
        loop(a, b);
        const audio = new Audio("rise.wav");
        audio.play();
      }
      if (
        control.center[c][d + 1] >= 3 &&
        control.center[c][d + 1] < 4 &&
        Sblock.state == 4
      ) {
        let j = 0;
        for (let i = 0; i < Bridge.button.length; i++) {
          if (Bridge.button[i][0] == c + 1 && Bridge.button[i][1] == d) {
            j = i;
          }
        }
        let [a, b] = Button.bridge[j];
        control.center[a][b] = 2;
        Bridge.position = [a, b];
        k = 0;
        loop(a, b);
        const audio = new Audio("rise.wav");
        audio.play();
      }
      if (
        control.center[c][d] >= 3 &&
        control.center[c][d] < 4 &&
        Sblock.state == 2
      ) {
        let j = 0;
        for (let i = 0; i < Bridge.button.length; i++) {
          if (Bridge.button[i][0] == c + 1 && Bridge.button[i][1] == d) {
            j = i;
          }
        }
        let [a, b] = Button.bridge[j];
        control.center[a][b] = 2;
        Bridge.position = [a, b];
        k = 0;
        loop(a, b);
        const audio = new Audio("rise.wav");
        audio.play();
      }
      if (
        control.center[c + 1][d] >= 3 &&
        control.center[c + 1][d] < 4 &&
        Sblock.state == 1
      ) {
        let j = 0;
        for (let i = 0; i < Bridge.button.length; i++) {
          if (Bridge.button[i][0] == c + 1 && Bridge.button[i][1] == d) {
            j = i;
          }
        }
        let [a, b] = Button.bridge[j];
        control.center[a][b] = 2;
        Bridge.position = [a, b];
        k = 0;
        loop(a, b);
        const audio = new Audio("rise.wav");
        audio.play();
      }
      if (
        control.center[c][d] >= 3 &&
        control.center[c][d] < 4 &&
        Sblock.state == 3
      ) {
        let j = 0;
        for (let i = 0; i < Bridge.button.length; i++) {
          if (Bridge.button[i][0] == c && Bridge.button[i][1] == d + 1) {
            j = i;
          }
        }
        let [a, b] = Button.bridge[j];
        control.center[a][b] = 2;
        Bridge.position = [a, b];
        k = 0;
        loop();
        const audio = new Audio("rise.wav");
        audio.play();
      }
      if (
        control.center[c][d] >= 5 &&
        control.center[c][d] < 6 &&
        Sblock.state == 2
      ) {
        h = 0;
        v = 0;
        k = 0;
        Lst = [];
        Sblock.clear();
        End.position = [c, d];
        Accompany.set(39);
        end2(c, d);
        const audio = new Audio("win.wav");
        audio.play();
        if (control.process == 1) {
          setTimeout(Dialog.win, 1000);
          Dialog.type = 3;
        } else {
          setTimeout(Dialog.win2, 1000);
          Dialog.type = 4;
        }
        control.process = 3;
      }
    }
    if (control.center[x][y] >= 9 && control.center[x][y] < 10) {
      control.center[x][y] = 1;
      Cegg.num++;
      control.process = 6;
      Cegg.pop();
      const audio = new Audio("color.wav");
      audio.play();
    }
    if (
      control.center[x + 1][y] >= 9 &&
      control.center[x + 1][y] < 10 &&
      Block.state == 1
    ) {
      control.center[x + 1][y] = 1;
      Cegg.num++;
      control.process = 6;
      Cegg.pop();
      const audio = new Audio("color.wav");
      audio.play();
    }
    if (
      control.center[x][y + 1] >= 9 &&
      control.center[x][y + 1] < 10 &&
      Block.state == 3
    ) {
      control.center[x][y + 1] = 1;
      Cegg.num++;
      control.process = 6;
      Cegg.pop();
      const audio = new Audio("color.wav");
      audio.play();
    }
  }
};
function drawground(lst) {
  Ground.position = lst;
  if (lst[0] > 0) {
    if (
      (!control.center[lst[0] - 1][lst[1]] ||
        control.center[lst[0] - 1][lst[1]] == 2) &&
      (!control.center[lst[0]][lst[1] + 1] ||
        control.center[lst[0]][lst[1] + 1] == 2)
    ) {
      if (
        control.center[lst[0] - 1][lst[1] + 1] &&
        control.center[lst[0] - 1][lst[1] + 1] != 2
      ) {
        if (
          control.center[lst[0]][lst[1]] == 1 ||
          control.center[lst[0]][lst[1]] == 1.25 ||
          control.center[lst[0]][lst[1]] == 1.5 ||
          control.center[lst[0]][lst[1]] == 1.75 ||
          (control.center[lst[0]][lst[1]] >= 12 &&
            control.center[lst[0]][lst[1]] < 13)
        ) {
          Ground.draw();
        }
        if (
          control.center[lst[0]][lst[1]] == 7 ||
          control.center[lst[0]][lst[1]] == 7.25 ||
          control.center[lst[0]][lst[1]] == 7.5 ||
          control.center[lst[0]][lst[1]] == 7.75 ||
          (control.center[lst[0]][lst[1]] >= 12 &&
            control.center[lst[0]][lst[1]] < 13)
        ) {
          Ground.draw2();
        }
        drawground([lst[0] - 1, lst[1] + 1]);
      } else {
        if (
          control.center[lst[0]][lst[1]] == 1 ||
          control.center[lst[0]][lst[1]] == 1.25 ||
          control.center[lst[0]][lst[1]] == 1.5 ||
          control.center[lst[0]][lst[1]] == 1.75 ||
          (control.center[lst[0]][lst[1]] >= 12 &&
            control.center[lst[0]][lst[1]] < 13)
        ) {
          Ground.draw();
        }
        if (
          control.center[lst[0]][lst[1]] == 7 ||
          control.center[lst[0]][lst[1]] == 7.25 ||
          control.center[lst[0]][lst[1]] == 7.5 ||
          control.center[lst[0]][lst[1]] == 7.75 ||
          (control.center[lst[0]][lst[1]] >= 12 &&
            control.center[lst[0]][lst[1]] < 13)
        ) {
          Ground.draw2();
        }
      }
    } else if (
      (control.center[lst[0] - 1][lst[1]] &&
        control.center[lst[0] - 1][lst[1]] != 2 &&
        !control.center[lst[0]][lst[1] + 1]) ||
      control.center[lst[0]][lst[1] + 1] == 2
    ) {
      if (
        control.center[lst[0]][lst[1]] == 1 ||
        control.center[lst[0]][lst[1]] == 1.25 ||
        control.center[lst[0]][lst[1]] == 1.5 ||
        control.center[lst[0]][lst[1]] == 1.75 ||
        (control.center[lst[0]][lst[1]] >= 12 &&
          control.center[lst[0]][lst[1]] < 13)
      ) {
        Ground.draw();
      }
      if (
        control.center[lst[0]][lst[1]] == 7 ||
        control.center[lst[0]][lst[1]] == 7.25 ||
        control.center[lst[0]][lst[1]] == 7.5 ||
        control.center[lst[0]][lst[1]] == 7.75 ||
        (control.center[lst[0]][lst[1]] >= 12 &&
          control.center[lst[0]][lst[1]] < 13)
      ) {
        Ground.draw2();
      }
      drawground([lst[0] - 1, lst[1]]);
    } else if (
      (!control.center[lst[0] - 1][lst[1]] ||
        control.center[lst[0] - 1][lst[1]] == 2) &&
      control.center[lst[0]][lst[1] + 1] &&
      control.center[lst[0]][lst[1] + 1] != 2
    ) {
      if (
        control.center[lst[0]][lst[1]] == 1 ||
        control.center[lst[0]][lst[1]] == 1.25 ||
        control.center[lst[0]][lst[1]] == 1.5 ||
        control.center[lst[0]][lst[1]] == 1.75 ||
        (control.center[lst[0]][lst[1]] >= 12 &&
          control.center[lst[0]][lst[1]] < 13)
      ) {
        Ground.draw();
      }
      if (
        control.center[lst[0]][lst[1]] == 7 ||
        control.center[lst[0]][lst[1]] == 7.25 ||
        control.center[lst[0]][lst[1]] == 7.5 ||
        control.center[lst[0]][lst[1]] == 7.75 ||
        (control.center[lst[0]][lst[1]] >= 12 &&
          control.center[lst[0]][lst[1]] < 13)
      ) {
        Ground.draw2();
      }
      drawground([lst[0], lst[1] + 1]);
    } else {
      if (
        control.center[lst[0]][lst[1]] == 1 ||
        control.center[lst[0]][lst[1]] == 1.25 ||
        control.center[lst[0]][lst[1]] == 1.5 ||
        control.center[lst[0]][lst[1]] == 1.75 ||
        (control.center[lst[0]][lst[1]] >= 12 &&
          control.center[lst[0]][lst[1]] < 13)
      ) {
        Ground.draw();
      }
      if (
        control.center[lst[0]][lst[1]] == 7 ||
        control.center[lst[0]][lst[1]] == 7.25 ||
        control.center[lst[0]][lst[1]] == 7.5 ||
        control.center[lst[0]][lst[1]] == 7.75 ||
        (control.center[lst[0]][lst[1]] >= 12 &&
          control.center[lst[0]][lst[1]] < 13)
      ) {
        Ground.draw2();
      }
      drawground([lst[0], lst[1] + 1]);
      drawground([lst[0] - 1, lst[1]]);
    }
  } else {
    if (
      control.center[lst[0]][lst[1] + 1] &&
      control.center[lst[0]][lst[1] + 1] != 2
    ) {
      if (
        control.center[lst[0]][lst[1]] == 1 ||
        control.center[lst[0]][lst[1]] == 1.25 ||
        control.center[lst[0]][lst[1]] == 1.5 ||
        control.center[lst[0]][lst[1]] == 1.75 ||
        (control.center[lst[0]][lst[1]] >= 12 &&
          control.center[lst[0]][lst[1]] < 13)
      ) {
        Ground.draw();
      }
      if (
        control.center[lst[0]][lst[1]] == 7 ||
        control.center[lst[0]][lst[1]] == 7.25 ||
        control.center[lst[0]][lst[1]] == 7.5 ||
        control.center[lst[0]][lst[1]] == 7.75 ||
        (control.center[lst[0]][lst[1]] >= 12 &&
          control.center[lst[0]][lst[1]] < 13)
      ) {
        Ground.draw2();
      }
      drawground([lst[0], lst[1] + 1]);
    } else {
      if (
        control.center[lst[0]][lst[1]] == 1 ||
        control.center[lst[0]][lst[1]] == 1.25 ||
        control.center[lst[0]][lst[1]] == 1.5 ||
        control.center[lst[0]][lst[1]] == 1.75 ||
        (control.center[lst[0]][lst[1]] >= 12 &&
          control.center[lst[0]][lst[1]] < 13)
      ) {
        Ground.draw();
      }
      if (
        control.center[lst[0]][lst[1]] == 7 ||
        control.center[lst[0]][lst[1]] == 7.25 ||
        control.center[lst[0]][lst[1]] == 7.5 ||
        control.center[lst[0]][lst[1]] == 7.75 ||
        (control.center[lst[0]][lst[1]] >= 12 &&
          control.center[lst[0]][lst[1]] < 13)
      ) {
        Ground.draw2();
      }
    }
  }
}
export function drawbridge(lst) {
  if (lst[0] == 0) {
    if (lst[1] == 0) {
      if (
        ((control.center[0][1] >= 1 && control.center[0][1] < 2) ||
          (control.center[0][1] >= 3 && control.center[0][1] < 4) ||
          (control.center[0][1] >= 4 && control.center[0][1] < 5)) &&
        ((control.center[1][0] >= 1 && control.center[1][0] < 2) ||
          (control.center[1][0] >= 3 && control.center[1][0] < 4) ||
          (control.center[1][0] >= 4 && control.center[1][0] < 5))
      ) {
        return 1;
      }
      return 0;
    } else {
      if (
        (((control.center[lst[0]][lst[1] - 1] >= 1 &&
          control.center[lst[0]][lst[1] - 1] < 2) ||
          (control.center[lst[0]][lst[1] - 1] >= 3 &&
            control.center[lst[0]][lst[1] - 1] < 4) ||
          (control.center[lst[0]][lst[1] - 1] >= 4 &&
            control.center[lst[0]][lst[1] - 1] < 5) ||
          (control.center[lst[0]][lst[1] - 1] >= 7 &&
            control.center[lst[0]][lst[1] - 1] < 8) ||
          (control.center[lst[0]][lst[1] - 1] >= 12 &&
            control.center[lst[0]][lst[1] - 1] < 13)) &&
          ((control.center[lst[0] + 1][lst[1]] >= 1 &&
            control.center[lst[0] + 1][lst[1]] < 2) ||
            (control.center[lst[0] + 1][lst[1]] >= 3 &&
              control.center[lst[0] + 1][lst[1]] < 4) ||
            (control.center[lst[0] + 1][lst[1]] >= 4 &&
              control.center[lst[0] + 1][lst[1]] < 5) ||
            (control.center[lst[0] + 1][lst[1]] >= 7 &&
              control.center[lst[0] + 1][lst[1]] < 8) ||
            (control.center[lst[0] + 1][lst[1]] >= 12 &&
              control.center[lst[0] + 1][lst[1]] < 13))) ||
        (((control.center[lst[0]][lst[1] - 1] >= 1 &&
          control.center[lst[0]][lst[1] - 1] < 2) ||
          (control.center[lst[0]][lst[1] - 1] >= 3 &&
            control.center[lst[0]][lst[1] - 1] < 4) ||
          (control.center[lst[0]][lst[1] - 1] >= 4 &&
            control.center[lst[0]][lst[1] - 1] < 5) ||
          (control.center[lst[0]][lst[1] - 1] >= 7 &&
            control.center[lst[0]][lst[1] - 1] < 8) ||
          (control.center[lst[0]][lst[1] - 1] >= 12 &&
            control.center[lst[0]][lst[1] - 1] < 13)) &&
          ((control.center[lst[0]][lst[1] + 1] >= 1 &&
            control.center[lst[0]][lst[1] + 1] < 2) ||
            (control.center[lst[0]][lst[1] + 1] >= 3 &&
              control.center[lst[0]][lst[1] + 1] < 4) ||
            (control.center[lst[0]][lst[1] + 1] >= 4 &&
              control.center[lst[0]][lst[1] + 1] < 5) ||
            (control.center[lst[0]][lst[1] + 1] >= 7 &&
              control.center[lst[0]][lst[1] + 1] < 8) ||
            (control.center[lst[0]][lst[1] + 1] >= 12 &&
              control.center[lst[0]][lst[1] + 1] < 13))) ||
        (((control.center[lst[0] + 1][lst[1]] >= 1 &&
          control.center[lst[0] + 1][lst[1]] < 2) ||
          (control.center[lst[0] + 1][lst[1]] >= 3 &&
            control.center[lst[0] + 1][lst[1]] < 4) ||
          (control.center[lst[0] + 1][lst[1]] >= 4 &&
            control.center[lst[0] + 1][lst[1]] < 5) ||
          (control.center[lst[0] + 1][lst[1]] >= 7 &&
            control.center[lst[0] + 1][lst[1]] < 8) ||
          (control.center[lst[0] + 1][lst[1]] >= 12 &&
            control.center[lst[0] + 1][lst[1]] < 13)) &&
          ((control.center[lst[0]][lst[1] + 1] >= 1 &&
            control.center[lst[0]][lst[1] + 1] < 2) ||
            (control.center[lst[0]][lst[1] + 1] >= 3 &&
              control.center[lst[0]][lst[1] + 1] < 4) ||
            (control.center[lst[0]][lst[1] + 1] >= 4 &&
              control.center[lst[0]][lst[1] + 1] < 5) ||
            (control.center[lst[0]][lst[1] + 1] >= 7 &&
              control.center[lst[0]][lst[1] + 1] < 8) ||
            (control.center[lst[0]][lst[1] + 1] >= 12 &&
              control.center[lst[0]][lst[1] + 1] < 13)))
      ) {
        return 1;
      }
      return 0;
    }
  } else if (lst[1] == 0) {
    if (
      (((control.center[lst[0] - 1][lst[1]] >= 1 &&
        control.center[lst[0] - 1][lst[1]] < 2) ||
        (control.center[lst[0] - 1][lst[1]] >= 3 &&
          control.center[lst[0] - 1][lst[1]] < 4) ||
        (control.center[lst[0] - 1][lst[1]] >= 4 &&
          control.center[lst[0] - 1][lst[1]] < 5) ||
        (control.center[lst[0] - 1][lst[1]] >= 7 &&
          control.center[lst[0] - 1][lst[1]] < 8) ||
        (control.center[lst[0] - 1][lst[1]] >= 12 &&
          control.center[lst[0] - 1][lst[1]] < 13)) &&
        ((control.center[lst[0] + 1][lst[1]] >= 1 &&
          control.center[lst[0] + 1][lst[1]] < 2) ||
          (control.center[lst[0] + 1][lst[1]] >= 3 &&
            control.center[lst[0] + 1][lst[1]] < 4) ||
          (control.center[lst[0] + 1][lst[1]] >= 4 &&
            control.center[lst[0] + 1][lst[1]] < 5) ||
          (control.center[lst[0] + 1][lst[1]] >= 7 &&
            control.center[lst[0] + 1][lst[1]] < 8) ||
          (control.center[lst[0] + 1][lst[1]] >= 12 &&
            control.center[lst[0] + 1][lst[1]] < 13))) ||
      (((control.center[lst[0] - 1][lst[1]] >= 1 &&
        control.center[lst[0] - 1][lst[1]] < 2) ||
        (control.center[lst[0] - 1][lst[1]] >= 3 &&
          control.center[lst[0] - 1][lst[1]] < 4) ||
        (control.center[lst[0] - 1][lst[1]] >= 4 &&
          control.center[lst[0] - 1][lst[1]] < 5) ||
        (control.center[lst[0] - 1][lst[1]] >= 7 &&
          control.center[lst[0] - 1][lst[1]] < 8) ||
        (control.center[lst[0] - 1][lst[1]] >= 12 &&
          control.center[lst[0] - 1][lst[1]] < 13)) &&
        ((control.center[lst[0]][lst[1] + 1] >= 1 &&
          control.center[lst[0]][lst[1] + 1] < 2) ||
          (control.center[lst[0]][lst[1] + 1] >= 3 &&
            control.center[lst[0]][lst[1] + 1] < 4) ||
          (control.center[lst[0]][lst[1] + 1] >= 4 &&
            control.center[lst[0]][lst[1] + 1] < 5) ||
          (control.center[lst[0]][lst[1] + 1] >= 7 &&
            control.center[lst[0]][lst[1] + 1] < 8) ||
          (control.center[lst[0]][lst[1] + 1] >= 12 &&
            control.center[lst[0]][lst[1] + 1] < 13))) ||
      (((control.center[lst[0] + 1][lst[1]] >= 1 &&
        control.center[lst[0] + 1][lst[1]] < 2) ||
        (control.center[lst[0] + 1][lst[1]] >= 3 &&
          control.center[lst[0] + 1][lst[1]] < 4) ||
        (control.center[lst[0] + 1][lst[1]] >= 4 &&
          control.center[lst[0] + 1][lst[1]] < 5) ||
        (control.center[lst[0] + 1][lst[1]] >= 7 &&
          control.center[lst[0] + 1][lst[1]] < 8) ||
        (control.center[lst[0] + 1][lst[1]] >= 12 &&
          control.center[lst[0] + 1][lst[1]] < 13)) &&
        ((control.center[lst[0]][lst[1] + 1] >= 1 &&
          control.center[lst[0]][lst[1] + 1] < 2) ||
          (control.center[lst[0]][lst[1] + 1] >= 3 &&
            control.center[lst[0]][lst[1] + 1] < 4) ||
          (control.center[lst[0]][lst[1] + 1] >= 4 &&
            control.center[lst[0]][lst[1] + 1] < 5) ||
          (control.center[lst[0]][lst[1] + 1] >= 7 &&
            control.center[lst[0]][lst[1] + 1] < 8) ||
          (control.center[lst[0]][lst[1] + 1] >= 12 &&
            control.center[lst[0]][lst[1] + 1] < 13)))
    ) {
      return 1;
    }
    return 0;
  } else {
    if (
      (((control.center[lst[0] - 1][lst[1]] >= 1 &&
        control.center[lst[0] - 1][lst[1]] < 2) ||
        (control.center[lst[0] - 1][lst[1]] >= 3 &&
          control.center[lst[0] - 1][lst[1]] < 4) ||
        (control.center[lst[0] - 1][lst[1]] >= 4 &&
          control.center[lst[0] - 1][lst[1]] < 5) ||
        (control.center[lst[0] - 1][lst[1]] >= 7 &&
          control.center[lst[0] - 1][lst[1]] < 8) ||
        (control.center[lst[0] - 1][lst[1]] >= 12 &&
          control.center[lst[0] - 1][lst[1]] < 13)) &&
        ((control.center[lst[0] + 1][lst[1]] >= 1 &&
          control.center[lst[0] + 1][lst[1]] < 2) ||
          (control.center[lst[0] + 1][lst[1]] >= 3 &&
            control.center[lst[0] + 1][lst[1]] < 4) ||
          (control.center[lst[0] + 1][lst[1]] >= 4 &&
            control.center[lst[0] + 1][lst[1]] < 5) ||
          (control.center[lst[0] + 1][lst[1]] >= 7 &&
            control.center[lst[0] + 1][lst[1]] < 8) ||
          (control.center[lst[0] + 1][lst[1]] >= 12 &&
            control.center[lst[0] + 1][lst[1]] < 13))) ||
      (((control.center[lst[0] - 1][lst[1]] >= 1 &&
        control.center[lst[0] - 1][lst[1]] < 2) ||
        (control.center[lst[0] - 1][lst[1]] >= 3 &&
          control.center[lst[0] - 1][lst[1]] < 4) ||
        (control.center[lst[0] - 1][lst[1]] >= 4 &&
          control.center[lst[0] - 1][lst[1]] < 5) ||
        (control.center[lst[0] - 1][lst[1]] >= 7 &&
          control.center[lst[0] - 1][lst[1]] < 8) ||
        (control.center[lst[0] - 1][lst[1]] >= 12 &&
          control.center[lst[0] - 1][lst[1]] < 13)) &&
        ((control.center[lst[0]][lst[1] + 1] >= 1 &&
          control.center[lst[0]][lst[1] + 1] < 2) ||
          (control.center[lst[0]][lst[1] + 1] >= 3 &&
            control.center[lst[0]][lst[1] + 1] < 4) ||
          (control.center[lst[0]][lst[1] + 1] >= 4 &&
            control.center[lst[0]][lst[1] + 1] < 5) ||
          (control.center[lst[0]][lst[1] + 1] >= 7 &&
            control.center[lst[0]][lst[1] + 1] < 8) ||
          (control.center[lst[0]][lst[1] + 1] >= 12 &&
            control.center[lst[0]][lst[1] + 1] < 13))) ||
      (((control.center[lst[0] + 1][lst[1]] >= 1 &&
        control.center[lst[0] + 1][lst[1]] < 2) ||
        (control.center[lst[0] + 1][lst[1]] >= 3 &&
          control.center[lst[0] + 1][lst[1]] < 4) ||
        (control.center[lst[0] + 1][lst[1]] >= 4 &&
          control.center[lst[0] + 1][lst[1]] < 5) ||
        (control.center[lst[0] + 1][lst[1]] >= 7 &&
          control.center[lst[0] + 1][lst[1]] < 8) ||
        (control.center[lst[0] + 1][lst[1]] >= 12 &&
          control.center[lst[0] + 1][lst[1]] < 13)) &&
        ((control.center[lst[0]][lst[1] + 1] >= 1 &&
          control.center[lst[0]][lst[1] + 1] < 2) ||
          (control.center[lst[0]][lst[1] + 1] >= 3 &&
            control.center[lst[0]][lst[1] + 1] < 4) ||
          (control.center[lst[0]][lst[1] + 1] >= 4 &&
            control.center[lst[0]][lst[1] + 1] < 5) ||
          (control.center[lst[0]][lst[1] + 1] >= 7 &&
            control.center[lst[0]][lst[1] + 1] < 8) ||
          (control.center[lst[0]][lst[1] + 1] >= 12 &&
            control.center[lst[0]][lst[1] + 1] < 13))) ||
      (((control.center[lst[0] + 1][lst[1]] >= 1 &&
        control.center[lst[0] + 1][lst[1]] < 2) ||
        (control.center[lst[0] + 1][lst[1]] >= 3 &&
          control.center[lst[0] + 1][lst[1]] < 4) ||
        (control.center[lst[0] + 1][lst[1]] >= 4 &&
          control.center[lst[0] + 1][lst[1]] < 5) ||
        (control.center[lst[0] + 1][lst[1]] >= 7 &&
          control.center[lst[0] + 1][lst[1]] < 8) ||
        (control.center[lst[0] + 1][lst[1]] >= 12 &&
          control.center[lst[0] + 1][lst[1]] < 13)) &&
        ((control.center[lst[0]][lst[1] - 1] >= 1 &&
          control.center[lst[0]][lst[1] - 1] < 2) ||
          (control.center[lst[0]][lst[1] - 1] >= 3 &&
            control.center[lst[0]][lst[1] - 1] < 4) ||
          (control.center[lst[0]][lst[1] - 1] >= 4 &&
            control.center[lst[0]][lst[1] - 1] < 5) ||
          (control.center[lst[0]][lst[1] - 1] >= 7 &&
            control.center[lst[0]][lst[1] - 1] < 8) ||
          (control.center[lst[0]][lst[1] - 1] >= 12 &&
            control.center[lst[0]][lst[1] - 1] < 13))) ||
      (((control.center[lst[0] - 1][lst[1]] >= 1 &&
        control.center[lst[0] - 1][lst[1]] < 2) ||
        (control.center[lst[0] - 1][lst[1]] >= 3 &&
          control.center[lst[0] - 1][lst[1]] < 4) ||
        (control.center[lst[0] - 1][lst[1]] >= 4 &&
          control.center[lst[0] - 1][lst[1]] < 5) ||
        (control.center[lst[0] - 1][lst[1]] >= 7 &&
          control.center[lst[0] - 1][lst[1]] < 8) ||
        (control.center[lst[0] - 1][lst[1]] >= 12 &&
          control.center[lst[0] - 1][lst[1]] < 13)) &&
        ((control.center[lst[0]][lst[1] - 1] >= 1 &&
          control.center[lst[0]][lst[1] - 1] < 2) ||
          (control.center[lst[0]][lst[1] - 1] >= 3 &&
            control.center[lst[0]][lst[1] - 1] < 4) ||
          (control.center[lst[0]][lst[1] - 1] >= 4 &&
            control.center[lst[0]][lst[1] - 1] < 5) ||
          (control.center[lst[0]][lst[1] - 1] >= 7 &&
            control.center[lst[0]][lst[1] - 1] < 8) ||
          (control.center[lst[0]][lst[1] - 1] >= 12 &&
            control.center[lst[0]][lst[1] - 1] < 13))) ||
      (((control.center[lst[0]][lst[1] + 1] >= 1 &&
        control.center[lst[0]][lst[1] + 1] < 2) ||
        (control.center[lst[0]][lst[1] + 1] >= 3 &&
          control.center[lst[0]][lst[1] + 1] < 4) ||
        (control.center[lst[0]][lst[1] + 1] >= 4 &&
          control.center[lst[0]][lst[1] + 1] < 5) ||
        (control.center[lst[0]][lst[1] + 1] >= 7 &&
          control.center[lst[0]][lst[1] + 1] < 8) ||
        (control.center[lst[0]][lst[1] + 1] >= 12 &&
          control.center[lst[0]][lst[1] + 1] < 13)) &&
        ((control.center[lst[0]][lst[1] - 1] >= 1 &&
          control.center[lst[0]][lst[1] - 1] < 2) ||
          (control.center[lst[0]][lst[1] - 1] >= 3 &&
            control.center[lst[0]][lst[1] - 1] < 4) ||
          (control.center[lst[0]][lst[1] - 1] >= 4 &&
            control.center[lst[0]][lst[1] - 1] < 5) ||
          (control.center[lst[0]][lst[1] - 1] >= 7 &&
            control.center[lst[0]][lst[1] - 1] < 8) ||
          (control.center[lst[0]][lst[1] - 1] >= 12 &&
            control.center[lst[0]][lst[1] - 1] < 13)))
    ) {
      return 1;
    }
    return 0;
  }
}
function loop(x, y) {
  let ls = control.convert(x, y);
  ctx1.clearRect(ls[0], ls[1], 110, 40);
  ctx1.globalAlpha = k;
  Bridge.draw();
  k += 0.01;
  if (k < 1) {
    requestAnimationFrame(loop);
  } else {
    k = 0;
  }
}
var h = 0;
var v = 0;
async function end() {
  let lst = control.convert(End.position[0], End.position[1]);
  const img = new Image();
  img.src = Block.texture;
  await new Promise((resolve) => {
    img.onload = resolve;
  });
  ctx.clearRect(0, 0, 1600, 900);
  ctx.save();
  ctx.transform(1, 1.36, 0, 1, lst[0], lst[1]);
  ctx.filter = "brightness(0.5)";
  ctx.drawImage(img, 0, -160 + h, 24, 160 - h);
  ctx.restore();
  ctx.save();
  ctx.transform(1.2, 0, 0.785, 1, lst[0], lst[1] - 160 + h);
  ctx.filter = "brightness(1.5)";
  ctx.drawImage(img, 0, 0, 66, 31.8);
  ctx.restore();
  ctx.save();
  ctx.translate(lst[0] + 24, lst[1] - 128 + h);
  ctx.drawImage(img, 0, 0, 80, 160 - h);
  ctx.restore();
  v += 0.05;
  h += v;
  if (h < 160) {
    requestAnimationFrame(end);
  } else {
    h = 0;
    v = 0;
  }
}
async function end2() {
  let lst = control.convert(End.position[0], End.position[1]);
  const img = new Image();
  img.src = Block.texture;
  await new Promise((resolve) => {
    img.onload = resolve;
  });
  ctx.clearRect(0, 0, 1600, 900);
  const pattern = ctx.createPattern(img, "repeat");
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(lst[0], lst[1] - 80 + h);
  ctx.lineTo(lst[0] + 53, lst[1] - 128 + h);
  ctx.lineTo(lst[0] + 24, lst[1] - 48 + h);
  ctx.closePath();
  ctx.filter = "brightness(0.8)";
  ctx.translate(700, 550);
  ctx.fillStyle = pattern;
  ctx.fill();
  ctx.restore();
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(lst[0] + 24, lst[1] - 48 + h);
  ctx.lineTo(lst[0] + 53, lst[1] - 128 + h);
  ctx.lineTo(lst[0] + 104, lst[1] - 48 + h);
  ctx.closePath();
  ctx.filter = "brightness(1.3)";
  ctx.translate(700, 550);
  ctx.fillStyle = pattern;
  ctx.fill();
  ctx.restore();
  ctx.save();
  ctx.transform(1, 1.36, 0, 1, lst[0], lst[1] + 80 + h);
  ctx.filter = "brightness(0.5)";
  ctx.drawImage(img, 0, -160, 24, 80 - h);
  ctx.restore();
  ctx.save();
  ctx.translate(lst[0] + 24, lst[1] - 48 + h);
  ctx.drawImage(img, 0, 0, 80, 80 - h);
  ctx.restore();
  v += 0.05;
  h += v;
  if (h < 80) {
    requestAnimationFrame(end2);
  } else {
    h = 0;
    v = 0;
  }
}
async function end3() {
  let lst = control.convert(End.position[0], End.position[1]);
  const img = new Image();
  img.src = Block.texture;
  await new Promise((resolve) => {
    img.onload = resolve;
  });
  ctx.clearRect(0, 0, 1600, 900);
  if (h < 80) {
    ctx.save();
    ctx.transform(1, 1.36, 0, 1, lst[0], lst[1] + h);
    ctx.filter = "brightness(0.5)";
    ctx.drawImage(img, 0, -80, 24, 80 - h);
    ctx.restore();
    ctx.save();
    ctx.transform(1.2, 0, 0.785, 1, lst[0], lst[1] + h - 80);
    ctx.filter = "brightness(1.5)";
    ctx.drawImage(img, 0, 0, 66, 31.8);
    ctx.restore();
    ctx.save();
    ctx.translate(lst[0] + 24, lst[1] + h - 48);
    ctx.drawImage(img, 0, 0, 80, 80 - h);
    ctx.restore();
    ctx.save();
    ctx.transform(1, 1.36, 0, 1, lst[0], lst[1] + h - 160);
    ctx.filter = "brightness(0.5)";
    ctx.drawImage(img, 0, -80, 24, 80);
    ctx.restore();
    ctx.save();
    ctx.transform(1.2, 0, 0.785, 1, lst[0], lst[1] + h - 240);
    ctx.filter = "brightness(1.5)";
    ctx.drawImage(img, 0, 0, 66, 31.8);
    ctx.restore();
    ctx.save();
    ctx.translate(lst[0] + 24, lst[1] + h - 208);
    ctx.drawImage(img, 0, 0, 80, 80);
    ctx.restore();
  }
  if (h >= 80 && h <= 160) {
    ctx.save();
    ctx.transform(1, 1.36, 0, 1, lst[0], lst[1] + h - 160);
    ctx.filter = "brightness(0.5)";
    ctx.drawImage(img, 0, -80, 24, 80);
    ctx.restore();
    ctx.save();
    ctx.transform(1.2, 0, 0.785, 1, lst[0], lst[1] + h - 240);
    ctx.filter = "brightness(1.5)";
    ctx.drawImage(img, 0, 0, 66, 31.8);
    ctx.restore();
    ctx.save();
    ctx.translate(lst[0] + 24, lst[1] + h - 208);
    ctx.drawImage(img, 0, 0, 80, 80);
    ctx.restore();
  }
  if (h > 160) {
    ctx.save();
    ctx.transform(1, 1.36, 0, 1, lst[0], lst[1] + h - 160);
    ctx.filter = "brightness(0.5)";
    ctx.drawImage(img, 0, -80, 24, 80 - h + 160);
    ctx.restore();
    ctx.save();
    ctx.transform(1.2, 0, 0.785, 1, lst[0], lst[1] + h - 240);
    ctx.filter = "brightness(1.5)";
    ctx.drawImage(img, 0, 0, 66, 31.8);
    ctx.restore();
    ctx.save();
    ctx.translate(lst[0] + 24, lst[1] + h - 208);
    ctx.drawImage(img, 0, 0, 80, 80 - h + 160);
    ctx.restore();
  }
  v += 0.05;
  h += v;
  if (h < 240) {
    requestAnimationFrame(end3);
  } else {
    h = 0;
    v = 0;
  }
}
async function trap() {
  Ground.clear();
  for (let i = 13; i > -1; i--) {
    for (let j = 0; j < 20; j++) {
      if (control.center[i][j] == 1) {
        Ground.position = [i, j];
        Ground.draw();
      }
    }
  }
  let lst = control.convert(Block.position[0], Block.position[1]);
  const img = new Image();
  img.src = Block.texture;
  await new Promise((resolve) => {
    img.onload = resolve;
  });
  ctx.clearRect(0, 0, 1600, 900);
  ctx.save();
  ctx.transform(1, 1.36, 0, 1, lst[0], lst[1]);
  ctx.filter = "brightness(0.5)";
  ctx.drawImage(img, 0, -160 + h, 24, 160 - h);
  ctx.restore();
  ctx.save();
  ctx.transform(1.2, 0, 0.785, 1, lst[0], lst[1] - 160 + h);
  ctx.filter = "brightness(1.5)";
  ctx.drawImage(img, 0, 0, 66, 31.8);
  ctx.restore();
  ctx.save();
  ctx.translate(lst[0] + 24, lst[1] - 128 + h);
  ctx.drawImage(img, 0, 0, 80, 160 - h);
  ctx.restore();
  v += 0.05;
  h += v;
  if (h < 160) {
    requestAnimationFrame(trap);
  } else {
    h = 0;
    v = 0;
  }
}
