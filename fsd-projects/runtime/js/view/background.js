var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // TODO (several):
        var tree;
        var buildings = [];
      
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            var backgroundFill = draw.rect(canvasWidth,groundY,'blue'); // draws a rectangle and stores it inside background fill
            background.addChild(backgroundFill); // adds backgroundFill to the background object
            
            // TODO 2: - Add a moon and starfield
            var moon = draw.bitmap("img/moon.png"); // creats a bitmap object using the moon image and storesw it in the variuable moon
            moon.x = canvas.width - 400; // sets moon's x position
            moon.y = canvas.height - 900; // sets moon's y position
            moon.scaleX = 0.75; // scales the moon's width
            moon.scaleY = 0.75; // scales the moon's height
            background.addChild(moon); // add the moon to the background container
            
            for(var i = 0; i < 50; i++){
                var circle = draw.circle(2, "white", "LightGray", 2); // create a circle with a specified radius, border color, fill color, alpha ande stores it in the variable circle
                circle.x = canvasWidth * Math.random(); // sets random x position within canvas width
                circle.y = groundY * Math.random(); // sets random x position within groundY
                background.addChild(circle); // adds circle too to the background color
            }
            
            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            for (var i = 0; i < 5; ++i) { // for loop creates buildings
                var buildingHeight = groundY * Math.random(); // makes the building height
                var building = draw.rect(75, buildingHeight, "lightGray", "black", 1); // draws a rectangle and width and the whole building
                building.x = 250 * i; // where the building is on the x axis
                building.y = groundY - buildingHeight; // keeps the buildings above the ground
                background.addChild(building); // adds building to the background container
                buildings.push(building); // pushes the array for the building to be stored
}
            
            // TODO 3: Part 1 - Add a tree
             tree = draw.bitmap("img/tree.png");// creates bitmap object using the tree image
             tree.x = 0;// sets the x value of the tree
             tree.y = groundY - 230;// sets the y value of the tree
             background.addChild(tree);// adds the tree to the background color
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 3: Part 2 - Move the tree!
            tree.x = tree.x - 3; // moves tree toi the left by subtracting by it's current exposition

            if (tree.x < -200) { // checks if the tree has gone off the left and resets it on the right
                tree.x = canvasWidth;
            }
            
            // TODO 4: Part 2 - Parallax
            for (var i = 0; i < buildings.length; i++) { // takes an index from the array and stores it in the variable building
                var building = buildings[i]; // pulls a building out the buiulding array and puts it in the building array
                building.x -= 1; // moves it to the left -1
                if ( building.x < - 200){ // checks if it went off the screen and if so
                    building.x = canvas.width // it comes back on the right side
                }
  // code to do something with each element
}

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
