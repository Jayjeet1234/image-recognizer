Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function snapshot(){
Webcam.snap(function(e){
document.getElementById("result").innerHTML='<img id="b" src="'+e+'"/>';
});
}
console.log("ml5 version",ml5.version);
x=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/X-KJJNOgE/model.json',modelloaded);
function modelloaded(){
console.log("modelloaded");
}
function check(){
a=document.getElementById("b");
x.classify(a,gotresult);
}
function gotresult(error,results){
if(error){
console.log(error);
}
else{
console.log(results);
document.getElementById("object").innerHTML=results[0].label;
document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(2);
}
}