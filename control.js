const control = {
  choice: 0,
  process: 3,
  center: [],
  convert(a, b) {
    let x = 80 * a + 24 * b;
    let y = 160 + 32 * b;
    return [x, y];
  },
  locate(a, b) {
    let y = Math.floor((b - 160) / 32);
    let x = Math.floor((a - 24 * y) / 80);
    return [x, y];
  },
};
for (let i = 0; i < 15; i++) {
  control.center[i] = new Array();
  for (let j = 0; j < 20; j++) {
    control.center[i].push(0);
  }
}
export default control;
