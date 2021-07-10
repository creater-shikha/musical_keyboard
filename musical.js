

document.addEventListener('keydown',function(e){
    var A=document.getElementById("A"); 
    var S=document.getElementById("S");
    var D=document.getElementById("D");
    var F=document.getElementById("F");  
    var G=document.getElementById("G");
    var H=document.getElementById("H");
    var J=document.getElementById("J");
    var K=document.getElementById("K");
    var L=document.getElementById("L");
    var audioa=document.getElementById("audioA");
    var audios=document.getElementById("audioS");
    var audiod=document.getElementById("audioD");
    var audiof=document.getElementById("audioF");
    var audiog=document.getElementById("audioG");
    var audioh=document.getElementById("audioH");
    var audioj=document.getElementById("audioJ");
    var audiok=document.getElementById("audioK");
    var audiol=document.getElementById("audioL");
    var musicButton=document.getElementById('music-button');
   var key=e.keyCode;
  
     if(key===65){
        A.classList.add("button1");
      A.classList.remove("button"); 

   
       
     
audioa.src="boom.wav";


 A.classList.contains;
       }
       if(key===83){
        S.classList.add("button1");
        S.classList.remove("button"); 
            audios.src="clap.wav";
          
       }
       if(key===68){
           
          D.classList.add("button1");
           D.classList.remove("button");           
            audiod.src= "hihat.wav";

       }
       if(key===70){
        F.classList.add("button1");
        F.classList.remove("button");           
         audiof.src=  "kick.wav";
 
       }
       if(key===71){
        G.classList.add("button1");
        G.classList.remove("button");           
         audiog.src= "openhat.wav";
                  
                 
                   
      }
      if(key===72){
        H.classList.add("button1");
        H.classList.remove("button");           
         audioh.src="ride.wav";
                  
                   
                  
                 
      }
      if(key===74){
        J.classList.add("button1");
        J.classList.remove("button");           
         audioj.src="snare.wav";
              
      }
      if(key===75){
        K.classList.add("button1");
        K.classList.remove("button");           
         audiok.src="tink.wav";
               
          }
      if(key===76){
        L.classList.add("button1");
        L.classList.remove("button");           
         audiol.src="tom.wav";
                  
}}
)
 
document.addEventListener('keyup',function(){
    var A=document.getElementById("A"); 
    var S=document.getElementById("S");
    var D=document.getElementById("D");
    var F=document.getElementById("F");  
    var G=document.getElementById("G");
    var H=document.getElementById("H");
    var J=document.getElementById("J");
    var K=document.getElementById("K");
    var L=document.getElementById("L");
    A.classList.remove("button1"); 
    A.classList.add("button");
    
    S.classList.remove("button1"); 
    S.classList.add("button");

    D.classList.remove("button1"); 
    D.classList.add("button");

    F.classList.remove("button1"); 
    F.classList.add("button");

    G.classList.remove("button1"); 
    G.classList.add("button");

    H.classList.remove("button1"); 
    H.classList.add("button");

    J.classList.remove("button1"); 
    J.classList.add("button");

    K.classList.remove("button1"); 
    K.classList.add("button");

    L.classList.remove("button1"); 
    L.classList.add("button");
     
}) 
  
