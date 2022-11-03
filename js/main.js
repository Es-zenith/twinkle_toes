var circles = [];
let backgroundSky;
let sparkleSky;
let rainbow;
let beat = new Audio('/path/to/my/beat.mp3');

const game = new Game()

// Load game assets
function preload() {
	game.preload()
  rainbow = loadImage("https://i.postimg.cc/hGBMcFjL/rainbow.png")
  backgroundSky = {src: loadImage("https://i.postimg.cc/2S84C4N5/sky.png"), x: 0, speed: 3};
  sparkleSky = {src: loadImage("https://i.postimg.cc/Df1Lqg0f/pngwing-com.png"), x: 0, speed: 1};
  
}

function setup() {
	createCanvas(1000, 600)
  for (var i = 0; i < 500; i++) {
    var x = random(width);
    var y = random(height);
    var d = random(5, 8);
    var c = color(250);
    var s = random(2, 5);
    circles[i] = new DrawCircle(x, y, d, c, s);
  }
}

function draw() {
  clear()

  // image(rainbow, 0, 0, 1000, 600)
  
  sparkleSky.x -= sparkleSky.speed
  image(sparkleSky.src, sparkleSky.x, -50, 1000, 600)
  // Here we add a second image
  image(sparkleSky.src, sparkleSky.x + 700, -50, 1000, 600)
  
  // When the image leaves the screen we set it to the starting position
  if (sparkleSky.x <= -width) sparkleSky.x = 0
  

  backgroundSky.x -= backgroundSky.speed
  image(backgroundSky.src, backgroundSky.x, 0, 1000, 250)
  // Here we add a second image
  image(backgroundSky.src, backgroundSky.x + 950, 0, 1000, 250)
  
  // When the image leaves the screen we set it to the starting position
  if (backgroundSky.x <= - width) backgroundSky.x = 0
  
  
  game.draw() 
  
  
  for (var i = 0; i < circles.length; i++) {
    circles[i].move();
    circles[i].display();
  }
  if (circles.length > 1000) {
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
        noStroke();
        // strokeWeight(0.2);
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


  