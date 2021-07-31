function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocosd', modelLoaded);
    document.getElementById('status').innerHTML = "Status : Detecting Objects";
}
img = "";
status = "";
function preload()
{
    img = loadImage("dog_cat.jpg");
}
function draw()
{
    image( img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Dog", 40, 70);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350 );

    fill("#000080");
    text("Cat", 320, 120);
    noFill();
    stroke("#0000FF")
    rect(300, 90, 270, 320);
}
function modelLoaded()
{
    console.log("ModelLoaded")
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results)
{
    if (error) {
     console.log(error);
    }
    console.log(results);
}