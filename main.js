//https://teachablemachine.withgoogle.com/models/ZeIextnrR/
function identify(){
navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ZeIextnrR/model.json',modelReady)
}
function modelReady(){
    classifier.classify(gotResults);
}
var dog=0;
var cow=0;
var lion=0;
var cat=0;

function gotResults(error,results){
    if(error){

        console.error(error);

    }else{
        console.log(results);

        rnr=Math.floor(Math.random()*255)+1;
        rng=Math.floor(Math.random()*255)+1;
        rnb=Math.floor(Math.random()*255)+1;

        document.getElementById("result_object").innerHTML="i can hear "+results[0].label;
        document.getElementById("aimbot_object").innerHTML="accuracy "+(results[0].confidence*100).toFixed(4)+"%";
        document.getElementById("result_object").style.color="rgb("+rnr+","+rng+","+rnb+")";
        document.getElementById("aimbot_object").style.color="rgb("+rnr+","+rng+","+rnb+")";

        img1=document.getElementById("ear");
        if(results[0].label == "dog"){
img1.src="icon56-22-512.webp";
dog=dog+1;
}else if(results[0].label == "cat"){
    img.src="1522855947cat-png-cartoon-kitty-cut-clipart.png";
cat=cat+1;
}else if(results[0].label == "lion"){
    img1.src="117473ea3b83b580b7dbe855c4f1a601.png";
lion=lion+1;
}else if(results[0].label == "cow"){
    img1.src="1280px-Cow_cartoon_04.svg.png";
cow=cow+1;
}
    }
}