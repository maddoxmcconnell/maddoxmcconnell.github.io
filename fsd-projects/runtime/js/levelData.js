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
          { type: "obstacle", x: 300, y: groundY - 20, damage: 10, hitZone: 20, image: "img/mudcrab.png", offsetX: -35, offsetY: -25, scaleX: 0.08, scaleY: 0.08, speed: -2},
          { type: "obstacle", x: 800, y: groundY - 20, damage: 10, hitZone: 20, image: "img/mudcrab.png", offsetX: -37, offsetY: -25, scaleX: 0.08, scaleY: 0.08, speed: -2},
          { type: "obstacle", x: 1300, y: groundY - 20, damage : 10, hitZone: 20, image: "img/mudcrab.png", offsetX: -38, offsetY: -25, scaleX: 0.08, scaleY: 0.08, speed: -2},
          { type: "enemy", x: 500, y: groundY - 20, damage: 10, score: 100, hitZone: 30, image: "img/Kwama_species (1).png", offsetX: -55, offsetY: -25, scaleX: 0.4, scaleY: 0.4, speed: 2 },
          { type: "enemy", x: 1000, y: groundY - 20, damage: 10, score: 100, hitZone: 30, image: "img/Kwama_species (1).png", offsetX: -55, offsetY: -25, scaleX: 0.4, scaleY: 0.4, speed: 2 },
          { type: "enemy", x: 1500, y: groundY - 20, damage: 33.33, score: 1000, hitZone: 50, image: "img/Dragoth_Ur-removebg-preview.png", offsetX: -155, offsetY: -450, scaleX: 2, scaleY: 2, speed: 2 },
          { type: "reward", x: 650, y: groundY - 90, hitZone: 25, image: "img/healpotion.png", offsetX: -35, offsetY: -35, scaleX: 0.15, scaleY: 0.15, score: 200, health: 5 },
          { type: "reward", x: 1150, y: groundY - 90, hitZone: 25, image: "img/healpotion.png", offsetX: -35, offsetY: -35, scaleX: 0.15, scaleY: 0.15, score: 200, health: 5 },
          { type: "levelmarker", x: 1800, y: groundY - 75, health: 100, hitZone: 25, image: "img/Morrowinddoor-removebg-preview.png", offsetX: -110, offsetY: -160, scaleX: 0.6, scaleY: 0.6, speed: 2},
        ]
      },
      {
        name: "Oblivion",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "obstacle", x: 300, y: groundY - 20, damage: 10, hitZone: 20, image: "img/DwarvenSpider.webp", offsetX: -35, offsetY: -25, scaleX: 0.08, scaleY: 0.08, speed: -2},
          { type: "obstacle", x: 800, y: groundY - 20, damage: 10, hitZone: 20, image: "img/DwarvenSpider.webp", offsetX: -37, offsetY: -25, scaleX: 0.08, scaleY: 0.08, speed: -2},
          { type: "obstacle", x: 1300, y: groundY - 20, damage : 10, hitZone: 20, image: "img/DwarvenSpider.webp", offsetX: -38, offsetY: -25, scaleX: 0.08, scaleY: 0.08, speed: -2},
          { type: "enemy", x: 500, y: groundY - 20, damage: 20, score: 100, hitZone: 30, image: "img/Minotaur.png", offsetX: -155, offsetY: -145, scaleX: 0.5, scaleY: 0.5, speed: 2 },
          { type: "enemy", x: 1000, y: groundY - 20, damage: 20, score: 100, hitZone: 30, image: "img/Minotaur.png", offsetX: -155, offsetY: -145, scaleX: 0.5, scaleY: 0.5, speed: 2 },
          { type: "enemy", x: 1500, y: groundY - 20, damage: 50, score: 1000, hitZone: 50, image: "img/LordDragon.png", offsetX: -255, offsetY: -450, scaleX: 0, scaleY: 1, speed: 2 },
          { type: "reward", x: 650, y: groundY - 90, hitZone: 25, image: "img/healpotion.png", offsetX: -35, offsetY: -35, scaleX: 0.15, scaleY: 0.15, score: 200, health: 5 },
          { type: "reward", x: 1150, y: groundY - 90, hitZone: 25, image: "img/healpotion.png", offsetX: -35, offsetY: -35, scaleX: 0.15, scaleY: 0.15, score: 200, health: 5 },
          { type: "levelmarker", x: 1800, y: groundY - 75, health: 100, hitZone: 25, image: "img/Morrowinddoor-removebg-preview.png", offsetX: -110, offsetY: -160, scaleX: 0.6, scaleY: 0.6, speed: 2},
        ]
      },
      {
        name: "Skyrim",
        number: 3,
        speed: -3,
        gameItems: [
          { type: "obstacle", x: 500, y: groundY - 130, damage: 10, hitZone: 40, image: "img/Chaurus.webp", offsetX: -35, offsetY: -25, scaleX: 0.1, scaleY: 0.1, speed: -2},
          { type: "obstacle", x: 1000, y: groundY - 130, damage: 10, hitZone: 40, image: "img/Chaurus.webp", offsetX: -35, offsetY: -25, scaleX: 0.1, scaleY: 0.1, speed: -2},
          { type: "enemy", x: 300, y: groundY - 20, damage: 30, score: 100, hitZone: 40, image: "img/dragur.png", offsetX: -35, offsetY: -135, scaleX: 0.5, scaleY: 0.5, speed: 2 },
          { type: "enemy", x: 800, y: groundY - 20, damage: 30, score: 100, hitZone: 40, image: "img/dragur.png", offsetX: -35, offsetY: -135, scaleX: 0.5, scaleY: 0.5, speed: 2 },
          { type: "enemy", x: 1500, y: groundY - 20, damage: 100, score: 1000, hitZone: 50, image: "img/SkyrimdragonPNG.png", offsetX: -250, offsetY: -320, scaleX: 0.5, scaleY: 0.5, speed: 2 },
          { type: "reward", x: 1150, y: groundY - 90, hitZone: 25, image: "img/healpotion.png", offsetX: -35, offsetY: -35, scaleX: 0.15, scaleY: 0.15, score: 200, health: 5 },
          { type: "levelmarker", x: 2000, y: groundY - 75, health: 100, hitZone: 25, image: "img/Morrowinddoor-removebg-preview.png", offsetX: -110, offsetY: -160, scaleX: 0.6, scaleY: 0.6, speed: 2},
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
