var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

var timer = false;
function start(){
  timer=true;
  stopwatch();
  
  
}
function stop(){
    timer = false;
    alert(` Timer stopped at ${hr}hr ${min}min ${sec} sec `);
    hr=0;
    min=0;
    sec=0;
    count=0;
    document.getElementById("hr").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("count").innerHTML="00";
}
function reset(){
    timer = false;
    hr=0;
    min=0;
    sec=0;
    count=0;
    document.getElementById("hr").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("count").innerHTML="00";
}
function stopwatch(){
    if(timer==true){
        count=count+1;

                            if(count==100)
                            {
                                sec= sec+1;
                                document.getElementById("sec").innerHTML=sec;
                                count=0;
                                document.getElementById("count").innerHTML=count;
                            }
                            if(sec==60)
                            {
                                min = min+1;
                                document.getElementById("min").innerHTML=min;
                                sec=0;
                                document.getElementById("sec").innerHTML="00";
                            }
                            if(min==60)
                            {
                                hr=hr+1;
                                document.getElementById("hr").innerHTML=hr;
                                min = 0;
                                document.getElementById("min").innerHTML="00";
                                sec= sec+1;
                                document.getElementById("sec").innerHTML=sec;
                                count=0;
                                document.getElementById("count").innerHTML=count;   
                            }
       
        document.getElementById("count").innerHTML=count;
            setTimeout( "stopwatch()",10);
    }
    
}