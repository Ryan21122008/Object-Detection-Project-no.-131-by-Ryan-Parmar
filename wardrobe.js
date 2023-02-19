status = "";
function preload(){

}
function setup(){
    canvas = createCanvas(600, 600);
    canvas.center();
    cocossdmodel = ml5.objectDetector("cocossd", modelloaded);
    document.getElementById("status").innerHTML = "Status - Detecting Objects";
}
function modelloaded(){
    console.log("Model Loaded");
    status = "true";
}
function draw(){
    
}
function gotResults(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
    }

}