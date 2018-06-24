"use strict"; 
//select score span to update score
scoreSpan =document.querySelector('#score');
// Enemies our player must avoid
var Enemy = function(row =1 ,speed=10) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = Math.random()*3;
    this.y = row
    this.speed=speed/700;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x > 5.5) this.x = Math.random()-1;
    this.x = this.x +this.speed + dt;
    ctx.drawImage(Resources.get(this.sprite),this.x * 101    ,  this.y * 83 + 60 );

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite),this.x * 101 ,  this.y * 83 + 60 );
};

// Now write your own player class

var Player = function (){
    this.x = 2
    this.y = 3
    this.sprite = 'images/char-boy.png';
    this.score=0;
};
// This class requires an update(), render() and
// a handleInput() method.
Player.prototype.update=function(dt){
   // ctx.drawImage(Resources.get(this.sprite), this.x * 101 ,  this.y * 83 + 70  );
};

Player.prototype.render=function(){
    ctx.drawImage(Resources.get(this.sprite), this.x * 101 ,  this.y * 83 + 70  );
};

Player.prototype.handleInput = function(key){
 
   switch(key){
        case 'left' :  if(this.x!=0) this.x--;
        break;

        case 'up' :   if(this.y!=0) this.y--; 
                      else this.passed();
        break;

        case 'right' : if(this.x!=4) this.x++;
        break;

        case 'down' : if(this.y!=4) this.y++; 
        break;
   }

};

Player.prototype.passed=function(){
    this.score++;
    this.x = 2
    this.y = 3
    console.log( "score : " + this.score);
    scoreSpan.textContent =this.score + " points";

};


Player.prototype.reset=function(){
    if(this.score==1)
    {  
         this.score--;
         scoreSpan.textContent =this.score + " point";
    }
    else if(this.score != 0){
        this.score--;
        scoreSpan.textContent =this.score + " points";
    }

    this.x = 2
    this.y = 3
};



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies= [new Enemy(0 , 8) , new Enemy(0 ,4) , new Enemy(1 , 9 ) , new Enemy(1 ,5 ) , new Enemy(2 , 10) , new Enemy(2 ,5)  ];
// Place the player object in a variable called player
var player =new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});






/*
The css folder contains a style.css file which you do not need to edit
The images folder contains the png image files, which are used when displaying the game. The images for the player and enemy character are going to be loaded from this folder.
The js folder also contains the app engine needed to run the game and a resources.js file. You do not need to edit these files.
index.html - opening index.html should load the game
README.md should contain instructions on how to load and play the game (you will need to add those instructions).
*/