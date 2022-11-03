class Game{
    constructor() {
        this.obstacles = []
        this.obstaclesTwo = []
        this.coinImage
        this.candyImage
        this.player = new Player()
      }
  
    preload() {
    this.coinImage = loadImage("https://i.postimg.cc/NF8rwkK7/hearts.png")
    this.playerImage = loadImage("https://i.postimg.cc/cL211x2B/unicorn-38-1-1.gif")
    this.winnerPlayer = loadImage ("https://i.postimg.cc/BQk1dghb/winner-unicorn.png")
    this.loserPlayer = loadImage ("https://i.postimg.cc/NjRLZw9C/loser-unicorn.png")
    this.candyImage = loadImage("https://i.postimg.cc/zGVBZzq8/kisspng-lollipop-cotton-candy-clip-art-candy-5a8abdb454c139-4571398815190419723472.jpg")
  
    }
    draw() {
        this.player.draw()
        // Every x frames we want to push a new coin into the array 
        if (frameCount % 100 === 0) {
            if (this.player.score < 300){
                this.obstacles.push(new Obstacle(this.coinImage))
            }
            else{
                this.obstacles.push(new Obstacle(this.coinImage))
                this.obstacles.push(new ObstacleTwo(this.candyImage))
            }
            
        }

        //Draw the obstacles
		this.obstacles.forEach(function (obstacle) {
			obstacle.draw()
		})


        // Filter the coins which are out of the canvas or had a collision
		// We need an arrow function here, so that "this" has the right context (of the game object)
		this.obstacles = this.obstacles.filter(obstacle => {
		
            if (obstacle.collision(this.player)) {
                return false

            } else if(obstacle.y > 600) {
                game.player.lives -= 1
                document.querySelector("#lives span").innerText = '🦄🦄🦄🦄🦄'.substring(0, game.player.lives*2)
                
            } 
            else {
        
                return true
            }
		})
        
	}
}