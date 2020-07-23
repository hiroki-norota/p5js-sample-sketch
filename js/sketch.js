let button_pressed;

function setup() {
  createCanvas(710, 400);
  background(102);
  //線の色は最初は黒
  stroke('black');
  strokeWeight(5);

  //リセットボタン
  const resetButton = setButton('リセット', {
    x: 20,
    y: 370
  });

  resetButton.mousePressed(() => {
    button_pressed = location.reload();
  });

  //クリアボタン
  const clearButton = setButton('消しゴム', {
    x: 110,
    y: 370
  });

  clearButton.mousePressed(() => {
    strokeWeight(10);
    stroke(102);
    button_pressed = "clear";
  });

  //赤点ボタン
  redButton = setButton('赤点', {
    x: 200,
    y: 370
  });

  redButton.mousePressed(() => {
    fill('red');
    noStroke();
    button_pressed = "red";
  });

  //黄色ボタン
  const greenButton = setButton('黄色', {
    x: 290,
    y: 370
  });

  greenButton.mousePressed(() => {
    stroke('yellow');
    strokeWeight(5);
    button_pressed = "yellow";
  });

  //黒色ボタン
  const blackButton = setButton('黒色', {
    x: 380,
    y: 370
  });
  blackButton.mousePressed(() => {
    stroke('black');
    strokeWeight(5);
    button_pressed = "black";
  });

}

function draw() {
  if (mouseIsPressed) {
    if (button_pressed === "red") {
      ellipse(mouseX, mouseY, 10 ,10);
    } else {
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
  }
}

//ボタン生成関連
function setButton(label, pos) {
  const button = createButton(label);
  button.size(80, 30);
  button.position(pos.x, pos.y);
  return button;
}
