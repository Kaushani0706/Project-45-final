var canvas;
var backgroundImage;
var bg2Image;
var bg3Image;
var bg4Image;
var bg5Image;
var hint;
var round1, round2, round3;
const Answer1 = "DONOR";
const Answer2 = "ARRAY";
const Answer3 = "HYPOCRISY";
var score = 0;


function preload() {
  backgroundImage = loadImage("./assets/background scrabble 2.jpg");
  bg2Image = loadImage("./assets/background scrabble.jpg");
  bg3Image = loadImage("./assets/background3.jpg");
  bg4Image = loadImage("./assets/background4.jpg");
  bg5Image = loadImage("./assets/background5.jpg");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
  form = new Form(); 
  form.display();

  round1 = new Round1();
  round1.display();

  round2 = new Round2();
  round3 = new Round3();

 
 
}

function draw() {
  background(backgroundImage);
  


  fill("pink");
  textSize(40);
  text("Score: " + score,600,50);

    if(score === 3){
    clear();
    background(bg3Image);
    fill("red");
    textSize(50);
    //text("THANK YOU FOR ANSWERING",500,200);
   }

 


  
  

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
