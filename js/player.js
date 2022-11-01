class Player {
	constructor() {
		this.width = 500
		this.height = 400
		this.x = 250
		this.y = 300
		this.gravity = 0.2
		this.velocity = 0
		this.score = 0
		this.step = 5
	}

	draw() {
		this.velocity += this.gravity
		this.y += this.velocity

		// Horizontal movement
		if (keyIsPressed && keyCode === LEFT_ARROW) {
			this.x -= this.step;
		}
		if (keyIsPressed && keyCode === RIGHT_ARROW) {
			this.x += this.step;
		}
		if (keyIsPressed && keyCode === UP_ARROW) {
			this.velocity = -this.step;
		}

		// Keep the unicorn inside the canvas
		if (this.x >= 700) {
			this.x = 700;
        }
		if (this.x <= -200) {
			this.x = -200;
        }
		if (this.y >= 300) {
			this.y = 300;
		}
		if (this.y <= -100) {
			this.y = -100;
		}


		image(game.playerImage, this.x, this.y, this.width, this.height)



        // let leftWall = 20;
        // let rightWall = 1000;
    
        // // xm is just the mouseY, while
        // // xc is the mouseX, but constrained
        // // between the leftWall and rightWall!
        // let xm = mouseY;
        // let xc = constrain(mouseX, leftWall, rightWall);
    
        // image(game.playerImage, xc, this.y, this.width, this.height)
        
	}
    
}

