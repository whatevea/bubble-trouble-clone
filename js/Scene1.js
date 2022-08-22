class Scene1 extends Phaser.Scene
{
	constructor()
	{
		super("mainScene");

	}

	preload(){
		this.load.image("screen","assets/background.jpg");
		this.load.spritesheet("player","assets/contra.png",{frameWidth:25,
			frameHeight:42});
		this.load.spritesheet("ball","assets/ballsprite.png",{
			frameHeight:64,frameWidth:64
		})
		this.load.image("arrow","assets/arrow.png");
		this.load.image("rope","assets/rope.png");
	}





	create(){
			this.ropeGrp=this.physics.add.group(); //make ropefgroup /added this to top because obj should be defined b4 collider
			this.add.image(0,0,"screen").setOrigin(0,0); //setting up background
			this.player1=this.physics.add.sprite(31,156,"player",1).setOrigin(0,0); //adding the player
			defineAnims(this); //defining anims of player
			this.cursors = this.input.keyboard.createCursorKeys(); //initiating the keyboard
			this.physics.world.setBounds(-5,0,267,200);  //setting collison box
			this.physics.world.setBoundsCollision(); //enabling collison
			this.player1.body.collideWorldBounds = true; //setting player limits
 			this.ballGrp=this.add.group(); //creating the balls group
			 //ball code
			let balls=new Ball({scene:this,x:100,y:100}) //creates ball obj and adds it to ballgrp
			this.offsetArrow=13;
 			this.isThrowing=false;
 		
 			 		 
	}

	update(){

		if(this.cursors.right.isDown){
			this.player1.setFlipX(false);
			this.player1.setVelocityX(49);
			this.player1.play("walk",true);
		}
		else{
			    this.player1.anims.stop(null, true);
			this.player1.setVelocity(0);
			this.player1.play("turn");
		}
		if (this.cursors.left.isDown){
			this.player1.setFlipX(true);
			this.player1.setVelocityX(-49);
			this.player1.playReverse("walk");
		}

		if(this.cursors.up.isDown && !this.isThrowing) {
			this.isThrowing=true;
			this.startThrow();
		}
		
		if(this.isThrowing) // if the throw is started
				{
				this.lastElementofArrow=this.ropeGrp.children.entries.slice(-1)[0];
				// console.log(this.lastElementofArrow);
				if(this.lastElementofArrow.y<184) //if last el reaches one stepabove
				{

				this.ropeGrp.create(this.xofRope,this.yofRope,"rope").setScale(0.5); //adds rope tochain
				}
				if(this.arrow.y<0){
					this.isThrowing=false;
					this.arrow.destroy();
					this.ropeGrp.clear(true,true);
				}
				}
				}

	startThrow(){

		this.xofRope=this.player1.x+this.offsetArrow; //get the player x cordi
		this.yofRope=190;
		this.arrow=this.physics.add.image(this.xofRope, this.yofRope,"arrow").setScale(0.5); //make arrow
		this.ropeGrp.defaults.setVelocityY=-65; //property should be defined before adding objs in grp
		this.ropeGrp.add(this.arrow);//arrow is added
		;
		}


}