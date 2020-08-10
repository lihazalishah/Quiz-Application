var question2=document.getElementById("question2div2");
var question3=document.getElementById("question3div3");
var question4=document.getElementById("question4div4");
var question5=document.getElementById("question5div5");

question2.setAttribute("class","questionDisable");
question3.setAttribute("class","questionDisable");
question4.setAttribute("class","questionDisable");
question5.setAttribute("class","questionDisable");

var result=document.getElementById("Result");

result.setAttribute("class","questionDisable");

var question1Mark,question2Mark,question3Mark,question4Mark,question5Mark;
var falg = 0;
var score = 0;

function store1(e){
    var store1=document.getElementById("question1Mark1");
    store1.innerHTML= e;
}

function scoree(){ //for question1

    var correct_Ans=document.getElementById("correctoptions1");
    
    if(correct_Ans.checked == true){
        score= score + 4;
        falg++;
    }
    else{
        score--;
        
    }

    finish();
    question2.setAttribute("class","visible");



    if(falg == 1 )
    {
        question1Mark = 4;
        falg=0;
        store1(04);
    }
    else{
        question1Mark = -1;
        store1(-1);
    }
    

    
}


function finish(){ /// for hide options after click any one
    var option = document.getElementById("question1div");
    option.setAttribute("class","questionDisable");
}

function store2(e){
    var store1=document.getElementById("question2Mark");
    store1.innerHTML= e;
}

function scoree2(){ //for question2
    var correct_Ans=document.getElementById("correctoptions2");
    if(correct_Ans.checked == true){
        score= score + 4;
        falg++;
    }
    else{
        score--;
        
    }
     
    
    finish2();
    if(falg == 1 )
    {
        question2Mark = 4;
        falg=0;
        store2(04);
    }
    else{
        question2Mark = -1;
        store2(-1);
    }
    question3.setAttribute("class","visible");

    

}



function finish2(){
    var option = document.getElementById("question2div");
    option.setAttribute("class","questionDisable");
}


function store3(e){
    var store1=document.getElementById("question3Mark");
    store1.innerHTML= e;
}

function scoree3(){ //for question3
    var correct_Ans=document.getElementById("correctoptions3");
    if(correct_Ans.checked == true){
        score= score + 4;
        falg++;
    }
    else{
        score--;
        
    }
    
    finish3();
    if(falg == 1 )
    {
        question3Mark = 4;
        falg=0;
        store3(04);
    }
    else{
        question3Mark = -1;
        store3(-1);
    }
    question4.setAttribute("class","visible");
    

}
function finish3(){
    var option = document.getElementById("question3div");
    option.setAttribute("class","questionDisable");
}

function store4(e){
    var store1=document.getElementById("question4Mark");
    store1.innerHTML= e;
}

function scoree4(){ //for question4
    var correct_Ans=document.getElementById("correctoptions4");
    if(correct_Ans.checked == true){
        score= score + 4;
        falg++;
    }
    else{
        score--;
        
    }
    

    finish4();
    if(falg == 1 )
    {
        question4Mark = 4;
        falg=0;
        store4(04);
    }
    else{
        question4Mark = -1;
        store4(-1);
    }
    question5.setAttribute("class","visible");

    

}
function finish4(){
    var option = document.getElementById("question4div");
    option.setAttribute("class","questionDisable");
}

function store5(e){
    var store1=document.getElementById("question5Mark");
    store1.innerHTML= e;
}

function scoree5(){ //for question5
    var correct_Ans=document.getElementById("correctoptions5");
    if(correct_Ans.checked == true){
        score= score + 4;
        falg++;
    }
    else{
        score--;
        
    }
    

    finish5();

    if(falg == 1 )
    {
        question5Mark = 4;
        falg=0;
        store5(04);
    }
    else{
        question5Mark = -1;
        store5(-1);
    }

    
}
function finish5(){
    var option = document.getElementById("question5div");
    option.setAttribute("class","questionDisable");
}

/// timer

var count = 300;

function timer(){
    count--;
    var time = document.getElementById("timer");
    time.innerHTML  = "Time :"+count+" / 300 sec";
    if(count == 240){
        finish();
     question2.setAttribute("class","visible");

    }
    else if(count == 180 ){
        finish2();
     question3.setAttribute("class","visible");
  
    }
    else if(count == 120 ){
        finish3();
     question4.setAttribute("class","visible");

    }
    else if(count == 60 ){
        finish4();
     question5.setAttribute("class","visible");

    }
    else if(count == 00 ){
        finish5();
    }
}

 var interval = setInterval(timer,1000);
 setTimeout( function ()
 {clearInterval(interval);},300000)// for stop timer after 300 sec


function Result(){ //// result

    var visibleResult=document.getElementById("Result");
     visibleResult.setAttribute("class","visible");
    
    var ObtainMark = question1Mark + question2Mark + question3Mark + question4Mark + question5Mark;
    
    var percentage= ( ObtainMark/20 ) *100;
    
    var storeObtained = document.getElementById("questionTotalMark");
    storeObtained.innerHTML = ObtainMark;
    
    var storeper=document.getElementById("percentage");
    storeper.innerHTML = percentage +" %";
    
    var StoreGread=document.getElementById("Gread")
    if(percentage >= 80 ){
       StoreGread.innerHTML= "A+1"
    }
    else if(percentage >= 70 ){
        StoreGread.innerHTML= "A"
     }
     else if(percentage >= 60 ){
        StoreGread.innerHTML= "B"
     }else if(percentage >= 50 ){
        StoreGread.innerHTML= "C"
     }else if(percentage >= 45 ){
        StoreGread.innerHTML= "D"
     }
     else if(percentage <= 44 ){
        StoreGread.innerHTML= "F"
     }
 
     var bodydiv=document.getElementById("bodydiv");
     bodydiv.setAttribute("class","questionDisable");

     count=0;

     var question2=document.getElementById("question2div2");
     var question3=document.getElementById("question3div3");
     var question4=document.getElementById("question4div4");
     var question5=document.getElementById("question5div5");



     question2.setAttribute("class","questionDisable");
     question3.setAttribute("class","questionDisable");
     question4.setAttribute("class","questionDisable");
     question5.setAttribute("class","questionDisable");
     
     

     var interval = setInterval(timer,1000);
     setTimeout( function ()
     {clearInterval(interval);},000);

    }
   

var date = new Date(); // for date
var string = date.toString();
var c= string.slice(0,25);
var datee = document.getElementById("date");
datee.innerHTML ="DATE : "+ c;





