// Denk dir etwas aus und probier es aus

// create different shapes in a class, store it in a file, put it in a list and make it pop up each time you click on the screen;

var words = ["rainbow","heart","purple","friendship","love","acceptance","trust"];

var index = 0

let square;
let circle;

var elements = [square, circle]

function setup() {
  createCanvas(400, 400);

  square = new Square(200,200,);
  circle = new Circle(300,200);
}

function draw() {
  background(0);

  fill(255);
  textSize(32);
  text(words[index], 12,200)

  square.display();
  circle.display();

  }

  function mousePressed(){
    index = index + 1;
    elements = elements +1;

    if(index == words.length){
      index = 0;
    }

    if(elements == elements.length){
      elements = 0;
    }
  }
