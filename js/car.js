class Car {
  constructor(x, y) {
    const img = document.createElement('img');
    img.onload = () => {
      this.w = 100;
      const imgRatio = img.naturalWidth/img.naturalHeight;
      this.h = imgRatio;
    }
    img.src = "images/car.png";
    this.x = x;
    this.y = y;
    this.img = img
    // console.log(this.img);
  }

  draw() {
    if (!this.img) return; // if `this.img` is not loaded yet => don't draw
    // console.log(this.img);
    const ctx = document.querySelector('#canvas').getContext('2d');
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  moveLeft() {
    // TODO
  }
  moveRight() {
    // TODO
  }
}