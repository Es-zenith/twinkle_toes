class Game{
    constructor() {
          this.player = new Player()
          this.obstacles = []
          this.coinImage
      }
  
    preload() {
    this.playerImage = loadImage("https://i.postimg.cc/y6r7t2s7/unicorn-38.gif")
    this.coinImage = loadImage("https://i.postimg.cc/NF8rwkK7/hearts.png")
  
    }
    draw() {
        clear()
          this.player.draw()
  
          // Every x frames we want to push a new coin into the array 
          if (frameCount % 100 === 0) {
              this.obstacles.push(new Obstacle(this.coinImage))
        }

    //Draw the obstacles
		this.obstacles.forEach(function (obstacle) {
			obstacle.draw()
		})

        // Filter the coins which are out of the canvas or had a collision
		// We need an arrow function here, so that "this" has the right context (of the game object)
		this.obstacles = this.obstacles.filter(obstacle => {
			console.log(this)

			if (obstacle.collision(this.player) || obstacle.x < 0) {
				return false
			} else {
				return true
			}
		})
	}
}