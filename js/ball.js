class Ball extends Phaser.GameObjects.Sprite{
	constructor(config)
	{
		super(config.scene,config.x,config.y,"ball")
		
		config.scene.add.existing(this); //adding ball to screen
		config.scene.physics.world.enableBody(this); //adding physics to ball.
		this.body.velocity.y=-59;
		this.body.velocity.x=49;
		this.body.collideWorldBounds = true;
		this.body.bounce.x=1;
		this.body.bounce.y=1;
		this.setScale(0.5);
		config.scene.ballGrp.add(this); //adding balls to the ballgrp 
		config.scene.physics.add.collider(this,config.scene.player1,this.gameOver);//ballPlayer col	
		config.scene.physics.add.collider(this,config.scene.ropeGrp,this.hit); //ballPlayer col	
		// console.log(config.scene.ropeGrp);
		//ball break animation
			config.scene.anims.create({
			key:"break",
			frames:config.scene.anims.generateFrameNumbers('ball'),
			frameRate:4,
			repeat:0});

		}


	hit(obj1,obj2){
		//make the ball blast animation
		// obj1 is ball 
		obj1.play("break");
		console.log(typeof(obj1));


	}
	gameOver()
	{

		//show gameover screen and restart 
		console.log ("Game OVer");
			
	}

}	
