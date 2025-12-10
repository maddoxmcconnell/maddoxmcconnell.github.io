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
    function createObstacle(x, y, damage, hitZone, image, offsetX, offsetY, scaleX, scaleY, speed){
      var hitZoneSize = hitZone; //sets the size of the obstacle's collision area
      var damageFromObstacle = damage; //sets the obstacles damage
      var obstacleHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); //creates the obstacle hitzone with the size and damage attatched to it
      obstacleHitZone.x = x; //sets the obstacles x position
      obstacleHitZone.y = y; //sets the obstacles y position
      game.addGameItem(obstacleHitZone); //adds obstacle to the game
      var obstacleImage = draw.bitmap(image); //draws sawblade as a bitmap and stores it to obstacleImage
      obstacleHitZone.addChild(obstacleImage); //takes obstacleImage and adds it as a child to hitzone
      obstacleImage.x = offsetX; //offsets the image's sprite horizontally towards the hitzone
      obstacleImage.y = offsetY; //offsets the image's sprite vertically towards the hitzone
      obstacleImage.scaleX = scaleX;
      obstacleImage.scaleY = scaleY;
      obstacleHitZone.velocityX = speed

      // obstacleHitZone.rotationalVelocity = rotation;
    }
    
    function createEnemy(x, y, damage, score, hitZone, image, offsetX, offsetY, scaleX, scaleY, speed, health){
      var enemy = game.createGameItem("enemy", hitZone); //creates an item with type "enemy" and a hitzone of 25, and stores that in the enemy variable
      var enemyImage = draw.bitmap(image); //draws a rectangle with a width and height of 50 and and the color red, and stores that in the enemyImage variable
      enemyImage.x = offsetX; //image x offset
      enemyImage.y = offsetY; //image y offset
      enemyImage.scaleX = scaleX;
      enemyImage.scaleY = scaleY;
      enemy.addChild(enemyImage); //attaches image to enemy objct
      enemy.x = x; //enemy x position
      enemy.y = y; //enemy y position
      game.addGameItem(enemy); //adds enemy to the game

      enemy.velocityX -= speed //moves enemy across screen

      //handles when halle collides w/ enemy
      enemy.onPlayerCollision = function(){
        game.changeIntegrity(-damage) //reduce player health by 10
      };

      //handles when halle shoots enemy
      enemy.onProjectileCollision = function(){
        game.increaseScore(score) //increase score by 100
        enemy.fadeOut() //enemy fade out animation
        
      };
    }

    function createReward(x, y, score, health, hitZone, image, offsetX, offsetY, scaleX, scaleY){
      var reward = game.createGameItem("reward", hitZone); //creates an item with type "reward" and a hitzone of 25, and stores that in the reward variable
      var rewardImage = draw.bitmap(image); //draws a rectangle with a width and height of 50 and and the color red, and stores that in the rewardImage variable
      rewardImage.x = offsetX; //image x offset
      rewardImage.y = offsetY; //image y offset
      rewardImage.scaleX = scaleX;
      rewardImage.scaleY = scaleY;
      reward.addChild(rewardImage); //attaches image to reward objct
      reward.x = x; //reward x position
      reward.y = y; //reward y position
      game.addGameItem(reward); //adds reward to the game

      reward.velocityX -= 2 //moves reward across screen

      //handles when halle collides w/ reward
      reward.onPlayerCollision = function(){
        game.increaseScore(score) //increases player score by 200
        game.changeIntegrity(health) //increaees player health by 5
        reward.fadeOut() //reward fade out animation
      };
    }

    function createLevelMarker(x, y, health, hitZone, image, offsetX, offsetY, scaleX, scaleY, speed){
      var levelMarker = game.createGameItem("level", hitZone); //creates an item with type "level" and a hitzone of 25, and stores that in the levelMarker variable
      var levelImage = draw.bitmap(image); //draws a rectangle with a width and height of 50 and and the color red, and stores that in the levelImage variable
      levelImage.x = offsetX; //image x offset
      levelImage.y = offsetY; //image y offset
      levelImage.scaleX = scaleX; //image x offset
      levelImage.scaleY = scaleY; //image y offset
      levelMarker.addChild(levelImage); //attaches image to levelMarker objct
      levelMarker.x = x; //levelMarker x position
      levelMarker.y = y; //levelMarker y position
      game.addGameItem(levelMarker); //adds levelMarker to the game

      levelMarker.velocityX -= speed //moves levelMarker across screen

      //handles when halle collides w/ levelMarker
      levelMarker.onPlayerCollision = function(){
        game.changeIntegrity(health) //increases player health by 100 (resets health)
        levelMarker.fadeOut() //levelMarker fade out animation
        startLevel();
      };
    }

    function startLevel() {
      // TODO 13 goes below here
      var level = levelData[currentLevel]; //fetches the current level from the levelData array and stores it into the level variable
      var levelObjects = level.gameItems; //retreives the array of gameItems and stores it in the levelObjects variable

      for(var i = 0; i < levelObjects.length; i++){
        var element = levelObjects[i];

        if(element.type === "obstacle"){
          createObstacle(element.x, element.y, element.damage, element.hitZone, element.image, element.offsetX, element.offsetY, element.scaleX, element.scaleY, element.speed, element.rotation);
        }

        if(element.type === "enemy"){
          createEnemy(element.x, element.y, element.damage, element.score, element.hitZone, element.image, element.offsetX, element.offsetY, element.scaleX, element.scaleY, element.speed);
        }

        if(element.type === "reward"){
          createReward(element.x, element.y, element.score, element.health, element.hitZone, element.image, element.offsetX, element.offsetY, element.scaleX, element.scaleY);
        }

        if(element.type === "levelmarker"){
          createLevelMarker(element.x, element.y, element.health, element.hitZone, element.image, element.offsetX, element.offsetY, element.scaleX, element.scaleY, element.speed);
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
