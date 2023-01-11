img=""
function preload() {
    img=loadImage("dog_cat.jpg")
    
}

function setup() {
    canvas=createCanvas(650,500)
    canvas.center()
}

function draw() {
    image(img,0,0,650,500)
    fill("green")
    textSize(40)
    text("dog",225,60)
    noFill()
    rect(100,50,300,400)

    fill("green")
    textSize(40)
    text("cat",420,100)
    noFill()
    rect(300,30,300,450)
}