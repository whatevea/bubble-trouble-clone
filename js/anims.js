function defineAnims(scene){
	scene.anims.create({
			key:"walk",
			frames:scene.anims.generateFrameNumbers('player',{frames:[2,3]},),
			frameRate:7,
			repeat:-1

		});
		scene.anims.create({
			key:"turn",
			frames:scene.anims.generateFrameNumbers('player',{frames:[1]},),
			frameRate:7

		});

}
