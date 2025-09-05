$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
      createPlatform(25, 650, 150, 25, "gray");
      createPlatform(300, 650, 150, 25, "gray");
      createPlatform(500, 550, 150, 25, "gray");
      createPlatform(725, 450, 150, 25, "gray");
      createPlatform(500, 425, 150, 25, "gray");
      createPlatform(600, 300, 150, 25, "gray");
      createPlatform(875, 300, 150, 25, "gray");
      createPlatform(1100, 200, 150, 25, "gray");
    // TODO 3 - Create Collectables
      createCollectable("collegeDropOut", 375, 600, 0.5);
      createCollectable("lateRegistration", 545, 150, .2);
      createCollectable("graduation", 540, 450, 0.4);
      createCollectable("andHeartbreak", 667, 200, 0.2);
      createCollectable("MBDTF", 930, 250, 0.2);
      createCollectable("youWin", 1150, 150, 0.2);
    // TODO 4 - Create Cannons
      createCannon("left", 677, 100);
      createCannon("right", 400, 1000);
      createCannon("top", 870, 1000);
      createCannon("left", 180, 1000);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
