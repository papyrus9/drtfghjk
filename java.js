var SpeechRecognition = window.webkitSpeechRecognition;
 var recognition = new SpeechRecognition();
 function foto(){
    document.getElementById("textbox").innerHTML="";
    recognition.start(); 
}
recognition.onresult=function(foto){
    console.log(foto);
    var f=foto.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=f;
}