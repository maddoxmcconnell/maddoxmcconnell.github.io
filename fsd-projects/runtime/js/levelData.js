var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Morrowind",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "obstacle", x: 600, y: groundY - 20, damage: 10, hitZone: 20, image: "img/mudcrab.png", offsetX: -35, offsetY: -25, scaleX: 0.08, scaleY: 0.08, speed: -2},
          { type: "obstacle", x: 1100, y: groundY - 20, damage: 10, hitZone: 20, image: "img/mudcrab.png", offsetX: -37, offsetY: -25, scaleX: 0.08, scaleY: 0.08, speed: -2},
          { type: "obstacle", x: 1600, y: groundY - 20, damage : 10, hitZone: 20, image: "img/mudcrab.png", offsetX: -38, offsetY: -25, scaleX: 0.08, scaleY: 0.08, speed: -2},
          { type: "enemy", x: 800, y: groundY - 20, damage: 10, score: 100, hitZone: 30, image: "img/Kwama_species (1).png", offsetX: -35, offsetY: -5, scaleX: 0.2, scaleY: 0.2, speed: 2 },
          { type: "enemy", x: 1700, y: groundY - 20, damage: 10, score: 100, hitZone: 30, image: "img/Kwama_species (1).png", offsetX: -35, offsetY: -5, scaleX: 0.2, scaleY: 0.2, speed: 2 },
          { type: "enemy", x: 2300, y: groundY - 450, damage: 10, score: 100, hitZone: 30, image: "img/images (4).png", offsetX: -35, offsetY: -5, scaleX: 2, scaleY: 2, speed: 2 },
          { type: "reward", x: 1000, y: groundY - 90, hitZone: 25, image: "img/healpotion.png", offsetX: -35, offsetY: -35, scaleX: 0.15, scaleY: 0.15, score: 200, health: 5 },
          { type: "reward", x: 1300, y: groundY - 90, hitZone: 25, image: "img/healpotion.png", offsetX: -35, offsetY: -35, scaleX: 0.15, scaleY: 0.15, score: 200, health: 5 },
          { type: "reward", x: 1500, y: groundY - 140, score: 200, health: 5, hitZone: 25, image: "img/healpotion.png", offsetX: -35, offsetY: -35, scaleX: 0.15, scaleY: 0.15 },
          { type: "levelmarker", x: 3000, y: groundY - 75, health: 100, hitZone: 25, image: "img/Morrowinddoor.png", offsetX: -110, offsetY: -110, scaleX: 0.6, scaleY: 0.6, speed: 2},
        ]
      },
      {
        name: "Oblivion",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "obstacle", x: 400, y: groundY },
          { type: "obstacle", x: 600, y: groundY },
          { type: "obstacle", x: 900, y: groundY },
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
