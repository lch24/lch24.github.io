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
              if (!End.num) {
                End.position = lst;
                End.draw();
                End.num = 1;
                control.center[lst[0]][lst[1]] = 5;
                control.choice = 0;
                Accompany.clear();
              }
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
        case 8: {
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
                  (Block.state == 3 ? Block.position[1] + 1 : Block.position[1])
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
      } else if ((e.x > 370) & (e.x < 466) && e.y < 898 && e.y > 822) {
        if (!End.num) {
          control.choice = 5;
          Accompany.who = 5;
          Accompany.switch = 1;
          ctx.beginPath();
          ctx.roundRect(324, 824, 72, 72, 10);
          ctx.strokeStyle = "black";
          ctx.setLineDash([10, 15]);
          ctx.lineWidth = 1;
          ctx.stroke();
        } else {
          window.alert("一张地图有且仅有一个终点");
        }
      } else if ((e.x > 450) & (e.x < 546) && e.y < 898 && e.y > 822) {
        if (!Block.num) {
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
      } else if ((e.x > 1400) & (e.x < 1526) && e.y < 68 && e.y > 2) {
        if (End.num && Block.num) {
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
            control.process = 5;
            Teach.num++;
            Teach.draw();
          } else if (e.x > 550 && e.x < 1046 && e.y > 472 && e.y < 568) {
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
            Wall.clear();
            Wall.clear2();
            clx();
            for (let i = 0; i < 14; i++) {
              for (let j = 0; j < 20; j++) {
                control.center[i][j] = 0;
              }
            }
            Play.play();
          } else if (e.x > 550 && e.x < 1046 && e.y > 602 && e.y < 698) {
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
    }
  }
  if (control.process == 1 || control.process == 4) {
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
                    Block.draw2();
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
                    Block.clear();
                    Block.position = [x, y - 1];
                    Block.draw1();
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
                    Block.clear();
                    Block.position = [x, y + 1];
                    Block.draw1();
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
                    Block.clear();
                    Block.position = [x + 2, y];
                    Block.state = 2;
                    Block.draw2();
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
                    Block.clear();
                    Block.position = [x - 2, y];
                    Block.state = 1;
                    Block.draw1();
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
                    Block.clear();
                    Block.position = [x, y - 2];
                    Block.state = 3;
                    Block.draw3();
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
                    Block.clear();
                    Block.position = [x, y + 1];
                    Block.state = 3;
                    Block.draw3();
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
                    Block.clear();
                    Block.position = [x + 1, y];
                    Block.state = 1;
                    Block.draw1();
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
                    Block.clear();
                    Block.position = [x - 1, y];
                    Block.draw3();
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
                    Block.draw2();
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
                    Block.clear();
                    Block.position = [x, y + 2];
                    Block.state = 2;
                    Block.draw2();
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
                    Block.clear();
                    Block.position = [x + 1, y];
                    Block.draw3();
                  }
                }
              }
              break;
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
  }
};
window.onkeyup = function () {
  if (control.process == 1 || control.process == 4) {
    let [x, y] = Block.position;
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
    }
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
      end(x, y);
      if (control.process == 1) {
        setTimeout(Dialog.win, 1000);
        Dialog.type = 3;
      } else {
        setTimeout(Dialog.win2, 1000);
        Dialog.type = 4;
      }
      control.process = 3;
    }
    if (control.center[x][y] >= 9 && control.center[x][y] < 10) {
      control.center[x][y] = 1;
      Cegg.num++;
      control.process = 6;
      Cegg.pop();
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
          control.center[lst[0]][lst[1]] == 1.75
        ) {
          Ground.draw();
        }
        if (
          control.center[lst[0]][lst[1]] == 7 ||
          control.center[lst[0]][lst[1]] == 7.25 ||
          control.center[lst[0]][lst[1]] == 7.5 ||
          control.center[lst[0]][lst[1]] == 7.75
        ) {
          Ground.draw2();
        }
        drawground([lst[0] - 1, lst[1] + 1]);
      } else {
        if (
          control.center[lst[0]][lst[1]] == 1 ||
          control.center[lst[0]][lst[1]] == 1.25 ||
          control.center[lst[0]][lst[1]] == 1.5 ||
          control.center[lst[0]][lst[1]] == 1.75
        ) {
          Ground.draw();
        }
        if (
          control.center[lst[0]][lst[1]] == 7 ||
          control.center[lst[0]][lst[1]] == 7.25 ||
          control.center[lst[0]][lst[1]] == 7.5 ||
          control.center[lst[0]][lst[1]] == 7.75
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
        control.center[lst[0]][lst[1]] == 1.75
      ) {
        Ground.draw();
      }
      if (
        control.center[lst[0]][lst[1]] == 7 ||
        control.center[lst[0]][lst[1]] == 7.25 ||
        control.center[lst[0]][lst[1]] == 7.5 ||
        control.center[lst[0]][lst[1]] == 7.75
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
        control.center[lst[0]][lst[1]] == 1.75
      ) {
        Ground.draw();
      }
      if (
        control.center[lst[0]][lst[1]] == 7 ||
        control.center[lst[0]][lst[1]] == 7.25 ||
        control.center[lst[0]][lst[1]] == 7.5 ||
        control.center[lst[0]][lst[1]] == 7.75
      ) {
        Ground.draw2();
      }
      drawground([lst[0], lst[1] + 1]);
    } else {
      if (
        control.center[lst[0]][lst[1]] == 1 ||
        control.center[lst[0]][lst[1]] == 1.25 ||
        control.center[lst[0]][lst[1]] == 1.5 ||
        control.center[lst[0]][lst[1]] == 1.75
      ) {
        Ground.draw();
      }
      if (
        control.center[lst[0]][lst[1]] == 7 ||
        control.center[lst[0]][lst[1]] == 7.25 ||
        control.center[lst[0]][lst[1]] == 7.5 ||
        control.center[lst[0]][lst[1]] == 7.75
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
        control.center[lst[0]][lst[1]] == 1.75
      ) {
        Ground.draw();
      }
      if (
        control.center[lst[0]][lst[1]] == 7 ||
        control.center[lst[0]][lst[1]] == 7.25 ||
        control.center[lst[0]][lst[1]] == 7.5 ||
        control.center[lst[0]][lst[1]] == 7.75
      ) {
        Ground.draw2();
      }
      drawground([lst[0], lst[1] + 1]);
    } else {
      if (
        control.center[lst[0]][lst[1]] == 1 ||
        control.center[lst[0]][lst[1]] == 1.25 ||
        control.center[lst[0]][lst[1]] == 1.5 ||
        control.center[lst[0]][lst[1]] == 1.75
      ) {
        Ground.draw();
      }
      if (
        control.center[lst[0]][lst[1]] == 7 ||
        control.center[lst[0]][lst[1]] == 7.25 ||
        control.center[lst[0]][lst[1]] == 7.5 ||
        control.center[lst[0]][lst[1]] == 7.75
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
            control.center[lst[0]][lst[1] - 1] < 8)) &&
          ((control.center[lst[0] + 1][lst[1]] >= 1 &&
            control.center[lst[0] + 1][lst[1]] < 2) ||
            (control.center[lst[0] + 1][lst[1]] >= 3 &&
              control.center[lst[0] + 1][lst[1]] < 4) ||
            (control.center[lst[0] + 1][lst[1]] >= 4 &&
              control.center[lst[0] + 1][lst[1]] < 5) ||
            (control.center[lst[0] + 1][lst[1]] >= 7 &&
              control.center[lst[0] + 1][lst[1]] < 8))) ||
        (((control.center[lst[0]][lst[1] - 1] >= 1 &&
          control.center[lst[0]][lst[1] - 1] < 2) ||
          (control.center[lst[0]][lst[1] - 1] >= 3 &&
            control.center[lst[0]][lst[1] - 1] < 4) ||
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
              control.center[lst[0]][lst[1] + 1] < 8))) ||
        (((control.center[lst[0] + 1][lst[1]] >= 1 &&
          control.center[lst[0] + 1][lst[1]] < 2) ||
          (control.center[lst[0] + 1][lst[1]] >= 3 &&
            control.center[lst[0] + 1][lst[1]] < 4) ||
          (control.center[lst[0] + 1][lst[1]] >= 4 &&
            control.center[lst[0] + 1][lst[1]] < 5) ||
          (control.center[lst[0] + 1][lst[1]] >= 7 &&
            control.center[lst[0] + 1][lst[1]] < 8)) &&
          ((control.center[lst[0]][lst[1] + 1] >= 1 &&
            control.center[lst[0]][lst[1] + 1] < 2) ||
            (control.center[lst[0]][lst[1] + 1] >= 3 &&
              control.center[lst[0]][lst[1] + 1] < 4) ||
            (control.center[lst[0]][lst[1] + 1] >= 4 &&
              control.center[lst[0]][lst[1] + 1] < 5) ||
            (control.center[lst[0]][lst[1] + 1] >= 7 &&
              control.center[lst[0]][lst[1] + 1] < 8)))
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
          control.center[lst[0] - 1][lst[1]] < 8)) &&
        ((control.center[lst[0] + 1][lst[1]] >= 1 &&
          control.center[lst[0] + 1][lst[1]] < 2) ||
          (control.center[lst[0] + 1][lst[1]] >= 3 &&
            control.center[lst[0] + 1][lst[1]] < 4) ||
          (control.center[lst[0] + 1][lst[1]] >= 4 &&
            control.center[lst[0] + 1][lst[1]] < 5) ||
          (control.center[lst[0] + 1][lst[1]] >= 7 &&
            control.center[lst[0] + 1][lst[1]] < 8))) ||
      (((control.center[lst[0] - 1][lst[1]] >= 1 &&
        control.center[lst[0] - 1][lst[1]] < 2) ||
        (control.center[lst[0] - 1][lst[1]] >= 3 &&
          control.center[lst[0] - 1][lst[1]] < 4) ||
        (control.center[lst[0] - 1][lst[1]] >= 4 &&
          control.center[lst[0] - 1][lst[1]] < 5) ||
        (control.center[lst[0] - 1][lst[1]] >= 7 &&
          control.center[lst[0] - 1][lst[1]] < 8)) &&
        ((control.center[lst[0]][lst[1] + 1] >= 1 &&
          control.center[lst[0]][lst[1] + 1] < 2) ||
          (control.center[lst[0]][lst[1] + 1] >= 3 &&
            control.center[lst[0]][lst[1] + 1] < 4) ||
          (control.center[lst[0]][lst[1] + 1] >= 4 &&
            control.center[lst[0]][lst[1] + 1] < 5) ||
          (control.center[lst[0]][lst[1] + 1] >= 7 &&
            control.center[lst[0]][lst[1] + 1] < 8))) ||
      (((control.center[lst[0] + 1][lst[1]] >= 1 &&
        control.center[lst[0] + 1][lst[1]] < 2) ||
        (control.center[lst[0] + 1][lst[1]] >= 3 &&
          control.center[lst[0] + 1][lst[1]] < 4) ||
        (control.center[lst[0] + 1][lst[1]] >= 4 &&
          control.center[lst[0] + 1][lst[1]] < 5) ||
        (control.center[lst[0] + 1][lst[1]] >= 7 &&
          control.center[lst[0] + 1][lst[1]] < 8)) &&
        ((control.center[lst[0]][lst[1] + 1] >= 1 &&
          control.center[lst[0]][lst[1] + 1] < 2) ||
          (control.center[lst[0]][lst[1] + 1] >= 3 &&
            control.center[lst[0]][lst[1] + 1] < 4) ||
          (control.center[lst[0]][lst[1] + 1] >= 4 &&
            control.center[lst[0]][lst[1] + 1] < 5) ||
          (control.center[lst[0]][lst[1] + 1] >= 7 &&
            control.center[lst[0]][lst[1] + 1] < 8)))
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
          control.center[lst[0] - 1][lst[1]] < 8)) &&
        ((control.center[lst[0] + 1][lst[1]] >= 1 &&
          control.center[lst[0] + 1][lst[1]] < 2) ||
          (control.center[lst[0] + 1][lst[1]] >= 3 &&
            control.center[lst[0] + 1][lst[1]] < 4) ||
          (control.center[lst[0] + 1][lst[1]] >= 4 &&
            control.center[lst[0] + 1][lst[1]] < 5) ||
          (control.center[lst[0] + 1][lst[1]] >= 7 &&
            control.center[lst[0] + 1][lst[1]] < 8))) ||
      (((control.center[lst[0] - 1][lst[1]] >= 1 &&
        control.center[lst[0] - 1][lst[1]] < 2) ||
        (control.center[lst[0] - 1][lst[1]] >= 3 &&
          control.center[lst[0] - 1][lst[1]] < 4) ||
        (control.center[lst[0] - 1][lst[1]] >= 4 &&
          control.center[lst[0] - 1][lst[1]] < 5) ||
        (control.center[lst[0] - 1][lst[1]] >= 7 &&
          control.center[lst[0] - 1][lst[1]] < 8)) &&
        ((control.center[lst[0]][lst[1] + 1] >= 1 &&
          control.center[lst[0]][lst[1] + 1] < 2) ||
          (control.center[lst[0]][lst[1] + 1] >= 3 &&
            control.center[lst[0]][lst[1] + 1] < 4) ||
          (control.center[lst[0]][lst[1] + 1] >= 4 &&
            control.center[lst[0]][lst[1] + 1] < 5) ||
          (control.center[lst[0]][lst[1] + 1] >= 7 &&
            control.center[lst[0]][lst[1] + 1] < 8))) ||
      (((control.center[lst[0] + 1][lst[1]] >= 1 &&
        control.center[lst[0] + 1][lst[1]] < 2) ||
        (control.center[lst[0] + 1][lst[1]] >= 3 &&
          control.center[lst[0] + 1][lst[1]] < 4) ||
        (control.center[lst[0] + 1][lst[1]] >= 4 &&
          control.center[lst[0] + 1][lst[1]] < 5) ||
        (control.center[lst[0] + 1][lst[1]] >= 7 &&
          control.center[lst[0] + 1][lst[1]] < 8)) &&
        ((control.center[lst[0]][lst[1] + 1] >= 1 &&
          control.center[lst[0]][lst[1] + 1] < 2) ||
          (control.center[lst[0]][lst[1] + 1] >= 3 &&
            control.center[lst[0]][lst[1] + 1] < 4) ||
          (control.center[lst[0]][lst[1] + 1] >= 4 &&
            control.center[lst[0]][lst[1] + 1] < 5) ||
          (control.center[lst[0]][lst[1] + 1] >= 7 &&
            control.center[lst[0]][lst[1] + 1] < 8))) ||
      (((control.center[lst[0] + 1][lst[1]] >= 1 &&
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
            control.center[lst[0]][lst[1] - 1] < 4) ||
          (control.center[lst[0]][lst[1] - 1] >= 4 &&
            control.center[lst[0]][lst[1] - 1] < 5) ||
          (control.center[lst[0]][lst[1] - 1] >= 7 &&
            control.center[lst[0]][lst[1] - 1] < 8))) ||
      (((control.center[lst[0] - 1][lst[1]] >= 1 &&
        control.center[lst[0] - 1][lst[1]] < 2) ||
        (control.center[lst[0] - 1][lst[1]] >= 3 &&
          control.center[lst[0] - 1][lst[1]] < 4) ||
        (control.center[lst[0] - 1][lst[1]] >= 4 &&
          control.center[lst[0] - 1][lst[1]] < 5) ||
        (control.center[lst[0] - 1][lst[1]] >= 7 &&
          control.center[lst[0] - 1][lst[1]] < 8)) &&
        ((control.center[lst[0]][lst[1] - 1] >= 1 &&
          control.center[lst[0]][lst[1] - 1] < 2) ||
          (control.center[lst[0]][lst[1] - 1] >= 3 &&
            control.center[lst[0]][lst[1] - 1] < 4) ||
          (control.center[lst[0]][lst[1] - 1] >= 4 &&
            control.center[lst[0]][lst[1] - 1] < 5) ||
          (control.center[lst[0]][lst[1] - 1] >= 7 &&
            control.center[lst[0]][lst[1] - 1] < 8))) ||
      (((control.center[lst[0]][lst[1] + 1] >= 1 &&
        control.center[lst[0]][lst[1] + 1] < 2) ||
        (control.center[lst[0]][lst[1] + 1] >= 3 &&
          control.center[lst[0]][lst[1] + 1] < 4) ||
        (control.center[lst[0]][lst[1] + 1] >= 4 &&
          control.center[lst[0]][lst[1] + 1] < 5) ||
        (control.center[lst[0]][lst[1] + 1] >= 7 &&
          control.center[lst[0]][lst[1] + 1] < 8)) &&
        ((control.center[lst[0]][lst[1] - 1] >= 1 &&
          control.center[lst[0]][lst[1] - 1] < 2) ||
          (control.center[lst[0]][lst[1] - 1] >= 3 &&
            control.center[lst[0]][lst[1] - 1] < 4) ||
          (control.center[lst[0]][lst[1] - 1] >= 4 &&
            control.center[lst[0]][lst[1] - 1] < 5) ||
          (control.center[lst[0]][lst[1] - 1] >= 7 &&
            control.center[lst[0]][lst[1] - 1] < 8)))
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
