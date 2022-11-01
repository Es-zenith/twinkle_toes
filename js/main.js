var circles = [];
let backgroundSky;
  
  // hearts.x += hearts.speed
  // // image(hearts.src, 0, 0, 30, 30)
  // clear();
  // image(hearts.src, 0, hearts.x+10, 30, 30)



const game = new Game()

// Load game assets
function preload() {
	game.preload()
  backgroundSky = {src: loadImage("https://i.postimg.cc/2S84C4N5/sky.png"), x: 0, speed: 3};
  
}

function setup() {
	createCanvas(1000, 600)
  for (var i = 0; i < 250; i++) {
    var x = random(width);
    var y = random(height);
    var d = random(8, 13);
    // var c = color(random(255), random(250), 30);
    var c = color(random(220),192, 192);
    var s = random(2, 5);
    circles[i] = new DrawCircle(x, y, d, c, s);
  }
}

function draw() {
	game.draw()
  
  backgroundSky.x -= backgroundSky.speed
    image(backgroundSky.src, backgroundSky.x, 0, 1000, 250)
    // Here we add a second image
    image(backgroundSky.src, backgroundSky.x + 1000, 0, 1000, 250)

    // When the image leaves the screen we set it to the starting position
    if (backgroundSky.x <= - width) backgroundSky.x = 0


    for (var i = 0; i < circles.length; i++) {
      circles[i].move();
      circles[i].display();
    }
    if (circles.length > 100) {
      circles.shift();
    }

}

function DrawCircle( x, y, d, c, s ) {
    // declare the properties
    this.xPos = x;
    this.yPos = y;
    this.diameter = d;
    this.color = c;
    this.speed = s;
  }

  DrawCircle.prototype = {
      constructor: DrawCircle,
    display: function() {
        fill(this.color);
        strokeWeight(0.2);
        ellipse(this.xPos,this.yPos, this.diameter, this.diameter);
    },
    
    // *** Method: move the circle downwards ***
    move: function() {
          this.yPos += this.speed;
      if (this.yPos - this.diameter/2 > height) {
          this.yPos = -this.diameter/2;
      }
      }
  }
  

function keyPressed() {
	if (keyCode === 39) {
		game.player.jump()
	}
}












