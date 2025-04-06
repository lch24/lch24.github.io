import control from "./control.js";
import Block from "./block.js";
import Block2 from "./Block2.js";
import End from "./end.js";
import Ground from "./ground.js";
import Button from "./button.js";
import Bridge from "./bridge.js";
import Cegg from "./coloregg.js";
import Wall from "./wall.js";
import { init4 } from "./icon.js";
import Sblock from "./strangeblock.js";
import Saw from "./saw.js";
import Count from "./count.js";
const Play = {
  num: 1,
  play() {
    init4();
    switch (this.num) {
      case 1:
        {
          control.center[2][7] = 1;
          control.center[2][8] = 1;
          control.center[2][9] = 1;
          control.center[3][7] = 1;
          control.center[3][8] = 1;
          control.center[3][9] = 1;
          control.center[4][7] = 1;
          control.center[4][8] = 1;
          control.center[4][9] = 1;
          control.center[5][7] = 1;
          control.center[5][8] = 1;
          control.center[5][9] = 1;
          control.center[6][7] = 1;
          control.center[6][8] = 1;
          control.center[6][9] = 1;
          control.center[7][7] = 1;
          control.center[7][8] = 1;
          control.center[7][9] = 1;
          control.center[8][7] = 1;
          control.center[8][8] = 1;
          control.center[8][9] = 1;
          control.center[9][7] = 1;
          control.center[9][8] = 1;
          control.center[9][9] = 1;
          control.center[10][7] = 1;
          control.center[10][8] = 5;
          control.center[10][9] = 1;
          control.center[11][7] = 1;
          control.center[11][8] = 1;
          control.center[11][9] = 1;
          control.choice = 0;
          Block.position = [2, 8];
          Block.state = 2;
          Block.num = 1;
          Block.draw2();
          End.num = 1;
          End.position = [10, 8];
          End.draw();
          Count.number = 0;
          Count.clear();
          Count.draw();
          for (let i = 13; i > -1; i--) {
            for (let j = 0; j < 20; j++) {
              if (control.center[i][j] == 1) {
                Ground.position = [i, j];
                Ground.draw();
              }
            }
          }
        }
        break;
      case 2:
        {
          control.center[1][3] = 1;
          control.center[1][4] = 1;
          control.center[1][5] = 1;
          control.center[1][6] = 1;
          control.center[1][7] = 1;
          control.center[1][8] = 1;
          control.center[1][9] = 1;
          control.center[1][10] = 1;
          control.center[1][11] = 1;
          control.center[1][12] = 1;
          control.center[2][8] = 1;
          control.center[2][9] = 1;
          control.center[2][12] = 1;
          control.center[3][8] = 1;
          control.center[3][9] = 1;
          control.center[3][12] = 1;
          control.center[4][12] = 1;
          control.center[5][9] = 1;
          control.center[5][10] = 1;
          control.center[5][11] = 1;
          control.center[5][12] = 1;
          control.center[6][7] = 1;
          control.center[6][8] = 1;
          control.center[6][9] = 1;
          control.center[6][10] = 1;
          control.center[6][11] = 1;
          control.center[6][12] = 1;
          control.center[7][7] = 1;
          control.center[7][8] = 1;
          control.center[7][9] = 1;
          control.center[7][10] = 1;
          control.center[7][12] = 1;
          control.center[8][6] = 1;
          control.center[8][12] = 1;
          control.center[9][5] = 1;
          control.center[9][6] = 5;
          control.center[9][7] = 1;
          control.center[9][8] = 1;
          control.center[9][9] = 1;
          control.center[9][10] = 1;
          control.center[9][11] = 1;
          control.center[9][12] = 1;
          control.center[10][6] = 1;
          Block.position = [1, 3];
          Block.state = 3;
          Block.num = 1;
          Block.draw3();
          Count.number = 0;
          Count.clear();
          Count.draw();
          End.num = 1;
          End.position = [9, 6];
          End.draw();
          for (let i = 13; i > -1; i--) {
            for (let j = 0; j < 20; j++) {
              if (control.center[i][j] == 1) {
                Ground.position = [i, j];
                Ground.draw();
              }
            }
          }
        }
        break;
      case 3:
        {
          control.center[2][4] = 1;
          control.center[2][5] = 1;
          control.center[2][6] = 1;
          control.center[2][7] = 1;
          control.center[2][8] = 1;
          control.center[3][4] = 1;
          control.center[3][5] = 1;
          control.center[3][6] = 1;
          control.center[3][7] = 1;
          control.center[3][8] = 1;
          control.center[4][4] = 1;
          control.center[4][5] = 1;
          control.center[4][6] = 1;
          control.center[4][7] = 3;
          control.center[4][8] = 1;
          control.center[6][8] = 1;
          control.center[6][9] = 1;
          control.center[6][10] = 1;
          control.center[6][11] = 1;
          control.center[6][12] = 1;
          control.center[7][8] = 1;
          control.center[7][9] = 1;
          control.center[7][10] = 1;
          control.center[7][11] = 1;
          control.center[7][12] = 1;
          control.center[8][8] = 1;
          control.center[8][9] = 1;
          control.center[8][10] = 1;
          control.center[8][11] = 1;
          control.center[8][12] = 1;
          control.center[9][10] = 1;
          control.center[9][11] = 5;
          control.center[9][12] = 1;
          control.center[10][10] = 1;
          control.center[10][11] = 1;
          control.center[10][12] = 1;
          Button.bridge = [[5, 8]];
          Bridge.button = [[4, 7]];
          Block.position = [2, 4];
          Block.state = 1;
          Block.num = 1;
          Block.draw1();
          End.num = 1;
          End.position = [9, 11];
          End.draw();
          Count.number = 0;
          Count.clear();
          Count.draw();
          Button.position = [4, 7];
          Button.draw1();
          for (let i = 13; i > -1; i--) {
            for (let j = 0; j < 20; j++) {
              if (control.center[i][j] == 1 || control.center[i][j] == 3) {
                Ground.position = [i, j];
                Ground.draw();
              }
            }
          }
        }
        break;
      case 4:
        {
          control.center[1][3] = 1;
          control.center[1][4] = 1;
          control.center[1][5] = 1;
          control.center[1][6] = 1;
          control.center[2][6] = 1;
          control.center[2][5] = 1;
          control.center[2][4] = 1;
          control.center[2][3] = 1;
          control.center[3][3] = 1;
          control.center[3][4] = 1;
          control.center[3][5] = 1;
          control.center[3][6] = 4;
          control.center[3][8] = 1;
          control.center[3][9] = 1;
          control.center[4][9] = 1;
          control.center[4][8] = 1;
          control.center[5][9] = 1;
          control.center[5][8] = 1;
          control.center[6][9] = 1;
          control.center[6][8] = 1;
          control.center[6][10] = 1;
          control.center[7][9] = 1;
          control.center[7][8] = 1;
          control.center[7][10] = 1;
          control.center[8][9] = 1;
          control.center[8][8] = 4;
          control.center[8][10] = 1;
          control.center[6][14] = 1;
          control.center[6][13] = 1;
          control.center[6][12] = 1;
          control.center[6][15] = 1;
          control.center[7][14] = 1;
          control.center[7][13] = 5;
          control.center[7][12] = 1;
          control.center[7][15] = 1;
          control.center[8][14] = 1;
          control.center[8][13] = 1;
          control.center[8][12] = 1;
          control.center[8][15] = 1;
          Button.bridge = [
            [3, 7],
            [7, 11],
          ];
          Bridge.button = [
            [3, 6],
            [8, 8],
          ];
          Block.position = [2, 3];
          Block.state = 1;
          Block.num = 1;
          Block.draw1();
          End.num = 1;
          End.position = [7, 13];
          End.draw();
          Button.position = [3, 6];
          Button.draw2();
          Button.position = [8, 8];
          Button.draw2();
          Count.number = 0;
          Count.clear();
          Count.draw();
          for (let i = 13; i > -1; i--) {
            for (let j = 0; j < 20; j++) {
              if (control.center[i][j] == 1 || control.center[i][j] == 4) {
                Ground.position = [i, j];
                Ground.draw();
              }
            }
          }
        }
        break;
      case 5:
        {
          control.center[2][2] = 1;
          control.center[2][3] = 1;
          control.center[2][4] = 1;
          control.center[2][5] = 1;
          control.center[2][6] = 7;
          control.center[2][7] = 7;
          control.center[2][8] = 7;
          control.center[2][9] = 7;
          control.center[3][2] = 1;
          control.center[3][3] = 1;
          control.center[3][4] = 1;
          control.center[3][5] = 1;
          control.center[3][6] = 7;
          control.center[3][7] = 7;
          control.center[3][8] = 7;
          control.center[3][9] = 7;
          control.center[4][2] = 1;
          control.center[4][3] = 1;
          control.center[4][4] = 1;
          control.center[4][5] = 1;
          control.center[4][8] = 7;
          control.center[4][9] = 1;
          control.center[5][9] = 1;
          control.center[5][8] = 1;
          control.center[6][9] = 1;
          control.center[6][8] = 1;
          control.center[7][8] = 1;
          control.center[7][9] = 7;
          control.center[7][10] = 7;
          control.center[7][11] = 1;
          control.center[7][12] = 7;
          control.center[7][13] = 1;
          control.center[8][8] = 7;
          control.center[8][9] = 7;
          control.center[8][10] = 5;
          control.center[8][11] = 1;
          control.center[8][12] = 7;
          control.center[8][13] = 7;
          control.center[9][8] = 7;
          control.center[9][9] = 7;
          control.center[9][10] = 7;
          control.center[9][11] = 1;
          control.center[9][12] = 7;
          control.center[9][13] = 1;
          Count.number = 0;
          Count.clear();
          Count.draw();
          Block.position = [3, 2];
          Block.state = 1;
          Block.num = 1;
          Block.draw1();
          End.num = 1;
          End.position = [8, 10];
          End.draw();
          for (let i = 13; i > -1; i--) {
            for (let j = 0; j < 20; j++) {
              if (control.center[i][j] == 1) {
                Ground.position = [i, j];
                Ground.draw();
              } else if (control.center[i][j] == 7) {
                Ground.position = [i, j];
                Ground.draw2();
              }
            }
          }
        }
        break;
      case 6:
        {
          control.center[3][7] = 1;
          control.center[3][8] = 1;
          control.center[3][9] = 1;
          control.center[4][7] = 1;
          control.center[4][8] = 1;
          control.center[4][9] = 1;
          control.center[5][7] = 1;
          control.center[5][8] = 5.75;
          control.center[5][9] = 1.5;
          control.center[5][10] = 1;
          control.center[6][7] = 1;
          control.center[6][8] = 1.5;
          control.center[6][9] = 1;
          control.center[6][10] = 1;
          control.center[7][7] = 1;
          control.center[7][8] = 1.25;
          control.center[7][9] = 1;
          control.center[7][10] = 1;
          control.center[8][7] = 1;
          control.center[8][8] = 1;
          control.center[8][9] = 1;
          control.center[8][10] = 1;
          Count.number = 0;
          Count.clear();
          Count.draw();
          Block.position = [3, 8];
          Block.state = 1;
          Block.num = 1;
          Block.draw1();
          End.num = 1;
          End.position = [5, 8];
          End.draw();
          for (let i = 13; i > -1; i--) {
            for (let j = 0; j < 20; j++) {
              if (control.center[i][j] >= 1 && control.center[i][j] < 2) {
                Ground.position = [i, j];
                Ground.draw();
              }
            }
          }
          for (let i = 0; i < 14; i++) {
            for (let j = 0; j < 19; j++) {
              if (
                (control.center[i][j] * 4) % 4 == 1 ||
                (control.center[i][j] * 4) % 4 == 3
              ) {
                Wall.position = [i, j];
                if (
                  j >
                  (Block.state == 3 ? Block.position[1] + 1 : Block.position[1])
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
        break;
      case 7:
        {
          for (let i = 3; i < 12; i++) {
            control.center[i][4] = 1;
            control.center[i][5] = 1;
            control.center[i][6] = 1;
            control.center[i][11] = 1;
            control.center[i][12] = 1;
            control.center[i][13] = 1;
          }
          control.center[11][11] = 0;
          control.center[11][12] = 0;
          control.center[11][13] = 0;
          control.center[10][5] = 5;
          control.center[9][12] = 5;
          Count.number = 0;
          Count.clear();
          Count.draw();
          Block.position = [3, 5];
          Block2.position = [3, 12];
          Block2.state = 1;
          Block.state = 1;
          Block.num = 1;
          Block2.num = 1;
          Block.draw1();
          Block2.draw1();
          End.num = 1;
          End.position = [10, 5];
          End.draw();
          End.position = [9, 12];
          End.draw();
          for (let i = 13; i > -1; i--) {
            for (let j = 0; j < 20; j++) {
              if (control.center[i][j] >= 1 && control.center[i][j] < 2) {
                Ground.position = [i, j];
                Ground.draw();
              }
            }
          }
        }
        break;
      case 8:
        {
          control.center[2][6] = 1;
          control.center[2][7] = 1;
          control.center[2][8] = 1;
          control.center[3][6] = 1;
          control.center[3][7] = 1;
          control.center[3][8] = 1;
          control.center[3][11] = 1;
          control.center[3][12] = 1;
          control.center[3][13] = 1;
          control.center[4][6] = 1;
          control.center[4][7] = 1;
          control.center[4][8] = 1;
          control.center[4][9] = 1;
          control.center[4][10] = 1;
          control.center[4][11] = 1;
          control.center[4][12] = 1;
          control.center[4][13] = 1;
          control.center[5][6] = 1;
          control.center[5][7] = 1;
          control.center[5][8] = 1;
          control.center[5][9] = 1;
          control.center[5][10] = 1;
          control.center[5][11] = 1;
          control.center[5][12] = 1;
          control.center[5][13] = 1;
          control.center[6][11] = 1;
          control.center[6][12] = 1;
          control.center[6][13] = 1;
          control.center[7][11] = 1;
          control.center[7][12] = 5;
          control.center[7][13] = 1;
          control.center[8][11] = 1;
          control.center[8][12] = 1;
          control.center[8][13] = 1;
          control.choice = 0;
          Count.number = 0;
          Count.clear();
          Count.draw();
          Sblock.position = [3, 6];
          Sblock.state = 5;
          Sblock.num = 1;
          Sblock.draw5();
          End.num = 1;
          End.position = [7, 12];
          End.draw();
          for (let i = 13; i > -1; i--) {
            for (let j = 0; j < 20; j++) {
              if (control.center[i][j] == 1) {
                Ground.position = [i, j];
                Ground.draw();
              }
            }
          }
        }
        break;
      case 9:
        {
          control.center[2][6] = 1;
          control.center[2][5] = 1;
          control.center[2][4] = 1;
          control.center[3][4] = 1;
          control.center[3][5] = 1;
          control.center[3][6] = 1;
          control.center[3][7] = 1;
          control.center[3][8] = 1;
          control.center[4][4] = 1;
          control.center[4][5] = 1;
          control.center[4][6] = 1;
          control.center[4][7] = 1;
          control.center[4][8] = 1;
          control.center[5][4] = 1;
          control.center[5][5] = 1;
          control.center[5][6] = 1;
          control.center[5][7] = 1;
          control.center[5][8] = 1;
          control.center[6][6] = 1;
          control.center[6][7] = 1;
          control.center[6][8] = 1;
          control.center[8][6] = 1;
          control.center[8][9] = 1;
          control.center[8][10] = 1;
          control.center[8][11] = 1;
          control.center[8][12] = 1;
          control.center[8][13] = 1;
          control.center[8][14] = 1;
          control.center[9][6] = 1;
          control.center[9][7] = 1;
          control.center[9][8] = 1;
          control.center[9][9] = 1;
          control.center[9][10] = 1;
          control.center[9][11] = 1;
          control.center[9][12] = 1;
          control.center[9][13] = 1;
          control.center[9][14] = 1;
          control.center[10][9] = 1;
          control.center[10][10] = 1;
          control.center[10][11] = 1;
          control.center[10][12] = 5;
          control.center[10][13] = 1;
          control.center[10][14] = 1;
          control.center[10][9] = 1;
          control.center[11][10] = 1;
          control.center[11][11] = 1;
          control.center[11][12] = 1;
          control.center[11][13] = 1;
          control.center[11][14] = 1;
          Count.number = 0;
          Count.clear();
          Count.draw();
          Block.position = [3, 4];
          Block.state = 1;
          Block.num = 1;
          Block.draw1();
          Saw.position = [4, 7];
          Saw.state = 1;
          Saw.num = 1;
          Saw.draw();
          End.num = 1;
          End.position = [10, 12];
          End.draw();
          for (let i = 13; i > -1; i--) {
            for (let j = 0; j < 20; j++) {
              if (control.center[i][j] == 1) {
                Ground.position = [i, j];
                Ground.draw();
              }
            }
          }
        }
        break;
      case 10:
        {
          control.center[0][4] = 1;
          control.center[0][5] = 1;
          control.center[0][6] = 1;
          control.center[0][7] = 1;
          control.center[0][8] = 9;
          control.center[0][9] = 1;
          control.center[0][10] = 1;
          control.center[0][11] = 1;
          control.center[0][12] = 1;
          control.center[1][12] = 1;
          control.center[2][12] = 3;
          control.center[4][12] = 1;
          control.center[4][11] = 1;
          control.center[4][10] = 1;
          control.center[4][9] = 1;
          control.center[4][8] = 1;
          control.center[4][7] = 1;
          control.center[5][7] = 1;
          control.center[6][7] = 1;
          control.center[7][7] = 1;
          control.center[5][12] = 1;
          control.center[6][12] = 4;
          control.center[7][12] = 1;
          control.center[9][12] = 1;
          control.center[9][11] = 1;
          control.center[9][10] = 1;
          control.center[9][9] = 9;
          control.center[9][8] = 1;
          control.center[9][7] = 1;
          control.center[9][6] = 1;
          control.center[9][5] = 9;
          control.center[9][4] = 1;
          control.center[9][3] = 5;
          control.center[9][2] = 1;
          control.center[8][3] = 1;
          control.center[10][3] = 1;
          control.center[10][7] = 1;
          control.center[11][7] = 1;
          control.center[12][7] = 1;
          control.center[12][8] = 1;
          control.center[12][9] = 9;
          control.center[12][10] = 1;
          control.center[12][11] = 1;
          control.center[12][12] = 1;
          Button.bridge = [
            [3, 12],
            [8, 12],
          ];
          Bridge.button = [
            [2, 12],
            [6, 12],
          ];
          Count.number = 0;
          Count.clear();
          Count.draw();
          Block.position = [0, 4];
          Block.state = 3;
          Block.num = 1;
          Block.draw3();
          End.num = 1;
          End.position = [9, 3];
          End.draw();
          Button.position = [2, 12];
          Button.draw1();
          Button.position = [6, 12];
          Button.draw2();
          Cegg.position = [0, 8];
          Cegg.draw();
          Cegg.position = [9, 9];
          Cegg.draw();
          Cegg.position = [9, 5];
          Cegg.draw();
          Cegg.position = [12, 9];
          Cegg.draw();
          for (let i = 13; i > -1; i--) {
            for (let j = 0; j < 20; j++) {
              if (
                control.center[i][j] == 1 ||
                control.center[i][j] == 3 ||
                control.center[i][j] == 4 ||
                control.center[i][j] == 9
              ) {
                Ground.position = [i, j];
                Ground.draw();
              }
            }
          }
        }
        break;
    }
  },
};
export default Play;
