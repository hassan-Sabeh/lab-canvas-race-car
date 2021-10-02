let car;
let obstacles;
let gameover;
let points;

const ctx = document.querySelector('canvas').getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;

function draw() {
  //
  // Iteration 1: road drawing
  //
  ctx.fillStyle = 'green';
  ctx.fillRect(0, 0, 1000, 1600);
  // TODO
  ctx.fillStyle = 'grey';
  ctx.fillRect(100, 0, 800, 1600);
  ctx.fillStyle = 'white';
  ctx.fillRect(125, 0, 25, 1600);

  ctx.fillStyle = 'white';
  ctx.fillRect(850, 0, 25, 1600);
  
  for (let i = 0; i <= 1600; i += 100) {
    ctx.fillStyle = 'white';
    ctx.fillRect(490, i, 20, 60);
  }
  //
  // Iteration 2: car drawing
  //
  car.draw()
  // TODO

  //
  // Iteration #4: obstacles
  //

  // TODO

  //
  // Iteration #5: collisions
  //

  // TODO

  //
  // Iteration #6: points
  //

  // TODO

}

document.onkeydown = function (e) {
  if (!car) return;

  // TODO
}

let raf;
let frames = 0;
function animLoop() {
  frames++;

  draw();

  if (!gameover) {
    raf = requestAnimationFrame(animLoop);
  }
}

function startGame() {
  if (raf) {
    cancelAnimationFrame(raf);
  }

  // TODO
  car = new Car(450, 1450);
  animLoop();
  
}

document.getElementById("start-button").onclick = function() {
  startGame();
};

// auto-start
startGame();
