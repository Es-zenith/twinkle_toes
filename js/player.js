class Player {
	constructor() {
		this.width = 500
		this.height = 400
		this.x = 600 - this.width
		this.y = 700 - this.height
		this.gravity = 0.2
		this.velocity = 0
		this.score = 0
	}

	draw() {
		this.velocity += this.gravity
		this.x += this.velocity

		// If y is lower than the top left corner of bb8 we need to set its value to the starting value
		if (this.x >= 600 - this.height) {
			this.x = 600 - this.height;
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

	jump(){
		this.velocity = - 10;
    }
    
}

