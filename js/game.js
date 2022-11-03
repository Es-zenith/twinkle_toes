class Game{
    constructor() {
        this.obstacles = []
        this.coinImage
        this.player = new Player()
          
      }
  
    preload() {
    this.coinImage = loadImage("https://i.postimg.cc/NF8rwkK7/hearts.png")
    this.playerImage = loadImage("https://i.postimg.cc/zGhZ3CLZ/unicorn-38-1.gif")
    
  
    }
    draw() {

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
		

			if (obstacle.collision(this.player) || obstacle.y > 600) {
               
				return false

			} else {
            
				return true
			}
		})
        
	}
}