Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality : 90
});

camera = document.getElementById("camera");

Webcam.attach( '#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);
classifer = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/s4fTl9QOY/model.json', modelLoaded);

function modelLoaded () {
    console.log('Model Loaded!');
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is " + prediction_1;
    speak_data_2 = "The first prediction is " + prediction_2;
var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
synth.speak(utterThis);
}

function check()
{
    img = document.getElementById('captured image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else{
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
    prediction_1 = results[0].label
    prediction_2 = results[1].label
    speak();
    if(results [0].label == "Number one")
    {
        document.getElementById("update_emoji").innerHTML = "&#128070;";
    }

    if(results [0].label == "Number two")
    {
        document.getElementById("update_emoji").innerHTML = "&#9996;";
    }

    if(results [0].label == "Number three")
    {
        document.getElementById("update_emoji").innerHTML = "&#65039;";
    }

    if(results [1].label == "number1")
    {
        document.getElementById("update_emoji2").innerHTML = "&#128070;";
    };

    if(results [1].label == "number2")
    {
        document.getElementById("update_emoji2").innerHTML = "&#9996;";
    }

    if(results [1].label == "number3")
    {
        document.getElementById("update_emoji2").innerHTML = "&#65039;";
    }
    
    }
}