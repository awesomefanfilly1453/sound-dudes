function start(){
    navigator.mediaDevices.getUserMedia(
    {
     audio:true
    }
    );
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/5NKsIuNHI/model.json",model_ready)
}
function model_ready(){
    classifier.classify(got_results);
}
function got_results(error,result){
    if(error){
        console.error(error);
    }
    else {
        console.log(result);
        alien1=document.getElementById("alien_1");
        alien2=document.getElementById("alien_2");
        alien3=document.getElementById("alien_3");
        alien4=document.getElementById("alien_4");
        document.getElementById("result").innerHTML="I can hear - "+result[0].label;
        accuracy=(result[0].confidence*100).toFixed(2)+" %";
        document.getElementById("accuracy").innerHTML="Accuracy - "+accuracy;

        if(result[0].label=="me"){
           alien1.src="aliens-01.gif";
            alien2.src="aliens-02.png";
            alien3.src="aliens-03.png";
            alien4.src="aliens-04.png";
       }
        else if (result[0].label=="book slap") {
            alien1.src="aliens-01.png";
            alien2.src="aliens-02.gif";
            alien3.src="aliens-03.png";
            alien4.src="aliens-04.png";
        }   
        else if (result[0].label=="clap") {
            alien1.src="aliens-01.png";
            alien2.src="aliens-02.png";
            alien3.src="aliens-03.gif";
            alien4.src="aliens-04.png";
        }    
        else  {
            alien1.src="aliens-01.png";
            alien2.src="aliens-02.png";
            alien3.src="aliens-03.png";
            alien4.src="aliens-04.gif";
    }

}
}