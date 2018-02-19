
  window.onload = function () {
  cflag=0;
  canvas();
  max=0;
  current=0;
  document.getElementById("maxx").innerHTML=max;
  document.getElementById("curr").innerHTML=current;

  // console.log(canvas.width);
  myStickman = document.getElementById("sticky");
  context = myStickman.getContext('2d');
      
  var alphabet = [ 'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N',  'P', 'Q', 'R', 'S','T',  'V', 'W', 'X', 'Y', 'Z'];
    
   // console.log("iam working");
   
   // console.log(Keyarr.length);
  var x = document.getElementById("yahoo"); 
  var y = document.getElementById("tryagain"); 
  var z =document.getElementById("dead")

  function yahoo() { 
      x.play(); 
  } 

  function tryagain() { 
      y.play(); 
  } 
  function dead(){
    z.play();
  }

   map = {};
  map["VIRAT KOHLI"] = "He is an Indian cricketer";
  map["YUSUF PATHAN"] = "He is an Indian cricketer";
  map["KEDAR JADAV"] = "He is an Indian cricketer";
  map["STUART BINNY"] = "He is an Indian cricketer";
  map["SURESH RAINA"] = "He is an Indian cricketer";
  map["IRFAN PATHAN"] = "He is an Indian cricketer";
  map["HARDIK PANDAYA"] = "He is an Indian cricketer";
  map["GAUTAM GAMBHIR"] = "He is an Indian cricketer";
  map["YUVRAJ SINGH"] = "He is an Indian cricketer";
  map["PIYUSH CHAWLA"] = "He is an Indian cricketer";
  map["SACHIN TENDULKAR"] = "He is an Indian cricketer";
  map["ROHIT SHARMA"] = "He is an Indian cricketer";
  map["RAVINDRA JADEJA"] = "He is an Indian cricketer";
  map["HARBHAJAN SINGH"] = "He is an Indian cricketer";
  map["DINESH KARTHIK"] = "He is an Indian cricketer";
  map["ROBIN UTHAPPA"] = "He is an Indian cricketer";
  map["PRAVEEN KUMAR"] = "He is an Indian cricketer";
  map["PRIYANKA CHOPRA"]="She is a bollywood actress";
  map["ANUSHKA SHARMA"]="She is a bollywood actress";
  map["AISHWARYA RAI"]="She is a bollywood actress";
  map["KAREENA KAPOOR"]="She is a bollywood actress";
  map["VIDYA BALAN"]="She is a bollywood actress";
  map["KANGANA RANAUT"]="She is a bollywood actress";
  map["SONAM KAPOOR"]="She is a bollywood actress";
  map["ALIA BHATT"]="She is a bollywood actress";
  map["KATRINA KAIF"]="She is a bollywood actress";
  map["KARISHMA KAPOOR"]="She is a bollywood actress";
  map["MADHURI DIXIT"]="She is a bollywood actress";
  map["RANI MUKHERJI"]="She is a bollywood actress";
  map["SHRADDHA KAPOOR"]="She is a bollywood actress";
  map["PREITY ZINTA"]="She is a bollywood actress";
  map["AMITABH BACHAN"]="He is a bollywood actor";
  map["SHARUKH KHAN"]="He is a bollywood actor";
  map["SALMAN KHAN"]="He is a bollywood actor";
  map["AAMIR KHAN"]="He is a bollywood actor";
  map["AKSHAY KUMAR"]="He is a bollywood actor";
  map["HRITHIK ROSHAN"]="He is a bollywood actor";
  map["NASEERUDDIN SHAH"]="He is a bollywood actor";
  map["KAMAL HAASAN"]="He is a bollywood actor";
  map["RAJNIKANT"]="He is a bollywood actor";
  map["AJAY DEVGAN"]="He is a bollywood actor";
  map["ANUPAM KHER"]="He is a bollywood actor";
  map["RANVIR SINGH"]="He is a bollywood actor";
  map["RANVIR KAPOOR"]="He is a bollywood actor";
  map["SANJAY DUTT"]="He is a bollywood actor";
  map["FARHAN AKHTAR"]="He is a bollywood actor";


  function get(k) {
      return map[k];
  }
   check = function () {
      list.onclick = function () {
       selected = (this.innerHTML);
       // console.log(selected);
       this.onclick = null;
       this.style.color = "#CBE32D";
       for (var i = 0; i < answer.length; i++) {
          if (answer[i] == selected) {
            var temp= selected;
            dashed[i]=selected;
            // console.log(dashed);
            
            document.getElementById("answer-box").innerHTML=dashed.join(" ");

          cflag=1;


          } 
        }
        
        if (cflag==1){
          
          cflag=0;
        }
        else {
          if(lives!=0){
          tryagain();
         }
          drawArray[lives]();
          // console.log(drawArray[lives]);
          lives=lives-1;

        }
        set=0;
        for(var i = 0; i < answer.length; i++){
          if(dashed[i]=="_"){
            set=1;
          }
        }
    if (lives==-1){

      gameover();
    }
    if (set==0){
      current++;
      if(max<current){
        max=current;
      }
      yahoo();
     //r alert("yipee you saved stickyy");
     setTimeout(function(){

      reset2();

  }, 2000); 
    }
   
      }
    }
    

    buttons();
   // console.log("iam working AFTERALSO");
   function buttons() {
      myButtons = document.getElementById('keys-box');
      letters = document.createElement('ul');

      for (var i = 0; i < alphabet.length; i++) {
        letters.id = 'alphabet';
        list = document.createElement('li');
        list.id = 'letter';
        list.innerHTML = alphabet[i];
        check();
        myButtons.appendChild(letters);
        letters.appendChild(list);
      }
    }

      
      
      function prints (answer){
         var result=[];
        for (var i=0 ;i< answer.length; i++){
            var x=answer.charAt(i);
          if(x=='A' || x=='E'|| x=='I'|| x=='O'|| x=='U'){
            result[i]=x ;
          }
          else if(x==" "){
            result[i]="/" ;          
          }
          else{
            result[i]="_" ;          
          }
          
      }
      return result;
      }

  function canvas(){

      myStickman = document.getElementById("sticky");
      context = myStickman.getContext('2d');
      context.beginPath();
      context.strokeStyle = "#005A31";
      context.lineWidth = 6;
    };
    
      head = function(){
        myStickman = document.getElementById("sticky");
        context = myStickman.getContext('2d');
        context.beginPath();
        context.arc(60, 25, 10, 0, Math.PI*2, true);
        context.stroke();
      }
      
    draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
      
      context.moveTo($pathFromx, $pathFromy);
      context.lineTo($pathTox, $pathToy);
      context.stroke(); 
  }

     frame1 = function() {
       draw (0, 150, 50, 150);
     };
     
     frame2 = function() {
       draw (10, 0, 10, 400);
     };
    
     frame3 = function() {
       draw (0, 5, 70, 5);
     };
    
     frame4 = function() {
       draw (60, 5, 60, 15);
     };
    
     torso = function() {
       draw (60, 36, 60, 70);
     };
    
     rightArm = function() {
       draw (60, 46, 100, 50);
     };
    
     leftArm = function() {
       draw (60, 46, 20, 50);
     };
    
     rightLeg = function() {
       draw (60, 70, 100, 100);
     };
    
     leftLeg = function() {
       draw (60, 70, 20, 100);
     };
  drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1]; 

  // for(var i =0; i< drawArray.length;i++){
  //   drawArray[i]();
  //   console.log(drawArray[i])
  // }

   
  function reset(){
    var rano=Math.floor(Math.random()*46);
   
    answer=Object.keys(map)[rano];
    // console.log(answer);
    question=map[answer];
    // console.log(question);
    document.getElementById("question-box").innerHTML=question;
    dashed=prints (answer);
    document.getElementById("answer-box").innerHTML=dashed.join(" ");
    lives=9;  
     letters.parentNode.removeChild(letters);
     
     current=0;
    buttons();

    document.getElementById("maxx").innerHTML=max;
    document.getElementById("curr").innerHTML=current;
    var c = document.getElementById("sticky");
    var ctx = c.getContext("2d");
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.rect(0, 0, 210, 400);
    ctx.fillStyle = "#CBE32D";
    ctx.fill();

   
  }
  function reset2(){
    var rano=Math.floor(Math.random()*46);
   
    answer=Object.keys(map)[rano];
    // console.log(answer);
    question=map[answer];
    // console.log(question);
    document.getElementById("question-box").innerHTML=question;
    dashed=prints (answer);
    document.getElementById("answer-box").innerHTML=dashed.join(" ");
    lives=9;  
     letters.parentNode.removeChild(letters);
    buttons();

    document.getElementById("maxx").innerHTML=max;
    document.getElementById("curr").innerHTML=current;
    var c = document.getElementById("sticky");

    var ctx = c.getContext("2d");
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.rect(0, 0, 210, 400);
    ctx.fillStyle = "#CBE32D";
    ctx.fill();
  }

  function gameover(){
    dead();
          drawArray[0]();

      // location.reload();

    setTimeout(function(){
    alert("you are unable to save sticky");
    
    reset();

  }, 1300); 
  }

  reset();










  }
  // canvas()  ;
  // for (var i=0;i<drawArray.length;i++)
  // {
  //   drawArray[i]();
  // }


    
     


  //console.log(get("Virat Kohli"));

  // var dashedanswer= prints ("VIRAT KAPOORS");
  //  console.log(dashedanswer);
  //  document.getElementById("answer-box").innerHTML=dashedanswer;
   