var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    
    function createObstacle(x, y, damage, rotation, hitZone, image, offsetX, offsetY, scaleX, scaleY){
    var hitZoneSize = hitZone; // how big the hit zone is
    var damageFromObstacle = damage; // how much dmange the saw does
    var obstacleHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); // creates it, stores the damage
    obstacleHitZone.x = x; // saws x position
    obstacleHitZone.y = y; // saws y position
    game.addGameItem(obstacleHitZone); // adds the obstcal to the game
    var obstacleImage = draw.bitmap("img/mudcrab.png"); // draws it and stores it to obstacle image
    obstacleHitZone.addChild(obstacleImage); // takes the saw blade puicture and adds it as a child to the hit zone
    obstacleImage.x = -25; // the abstical images x
    obstacleImage.y = -25; // the abstical images y
    obstacleImage.scaleX = 0.10;
    obstacleImage.scaleY = 0.10;

    obstacleHitZone.rotationalVelocity = rotation;

    }

    function createReward(x, y){
      var reward = game.createGameItem("reward", 25); // giving the type reward and giving it a hit zone of 25 and storing it in the reward variable
      var rewardImage = draw.bitmap("img/healpotion.png"); // draws the image
      rewardImage.x = -25; // image x offset right
      rewardImage.y = -25; // image y offsets up
      reward.addChild(rewardImage); // attachs the image to the reward object
      reward.x = x; // sets reward x position
      reward.y = groundY - y; // sets reward y position
      game.addGameItem(reward); // adds reward object

      reward.velocityX -= 3; // moving the reward across the scvreen

      // handles when halle collides with the reward
      reward.onPlayerCollision = function(){
        game.changeIntegrity(10); // increases player health
        reward.fadeOut();
      }

      // handles when halle gets the reward
      reward.onProjectileCollision = function(){
        game.increaseScore(50); // incrases the players score when she gets the reward
      }
    }

    createReward(1200, groundY - 400);
    createReward(800, groundY - 400);

      function createEnemy(x, y){
      var enemy = game.createGameItem("enemy", 25); // giving the type enemy and giving it a hit zone of 25 and storing it in the enemy variable
      var enemyImage = draw.bitmap("img/Kwama_species (1).png"); // draws the image
      enemyImage.x = -25; // image x offset right
      enemyImage.y = -25; // image y offsets up
      enemy.addChild(enemyImage); // attachs the image to the enemy object
      enemy.x = x; // sets enemy x position
      enemy.y = groundY - y; // sets enemy y position
      game.addGameItem(enemy); // adds enemy object
      obstacleImage.x = -25; // the abstical images x
      obstacleImage.y = -25; // the abstical images y
      obstacleImage.scaleX = 0.10;
      obstacleImage.scaleY = 0.10;

      enemy.velocityX -= 3; // moving the enemy across the scvreen

      // handles when halle collides with the enemy
      enemy.onPlayerCollision = function(){
        game.changeIntegrity(-10); // reduces player health
      }

      // handles when halle shoots the enemy
      enemy.onProjectileCollision = function(){
        game.increaseScore(100); // incrases the players score when she shoots the enemy
        enemy.fadeOut();
      }
    }


    function createLevelMarker(x, y){
      var levelMarker = game.createGameItem("level", 25); // giving the type reward and giving it a hit zone of 25 and storing it in the reward variable
      var levelImage = draw.rect(50, 50, "yellow"); // draws the image
      levelImage.x = +500; // image x offset right
      levelImage.y = -25; // image y offsets up
      levelMarker.addChild(levelImage); // attachs the image to the levelMarker object
      levelMarker.x = x; // sets levelMarker x position
      levelMarker.y = groundY - y; // sets levelMarker y position
      game.addGameItem(levelMarker); // adds levelMarker object

      levelMarker.velocityX -= 3; // moving the levelMarker across the scvreen

      // handles when halle collides with the levelMarker
      levelMarker.onPlayerCollision = function(){
        game.changeIntegrity(10); // increases player health
        levelMarker.fadeOut();
        startLevel();
      }

      // handles when halle gets the levelMarker
      levelMarker.onProjectileCollision = function(){
        game.increaseScore(200); // incrases the players score when she gets the reward
        levelMarker.fadeOut();
        startLevel();
      }
    }

    createLevelMarker(2000, groundY - 450);

    function startLevel() {
      // TODO 13 goes below here
      var level = levelData[currentLevel]; // fetches the current from the level data array and stores it inside the level data array
      var levelObjects = level.gameItems; // retrievs the array for game items and stores it in the level objcts variable

      for(var i = 0; i < levelObjects.length; i++){
        var element = levelObjects[i];

        if(element.type === "obstacle"){
          createObstacle(element.x, element.y, element.damage, element.rotation, element.hitZone, element.image, element.offsetX, element.offsetY, element.scaleX, element.scaleY);
        }
        if(element.type === "enemy"){
          createEnemy(element.x, element.y);
        }
        if(element.type === "reward"){
          createEnemy(element.x, element.y);
        }

      }

      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
