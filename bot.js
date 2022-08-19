function talk(){
    var know= {
      "Who are you":"Hello",
      "How are you":"Good ",
      "What canido for you":"Please Give usAFollow&Like.",
      "Your followers":"Ihave my family of 5000 members,idon't have follower,have supportive family",
      "ok":"Thank You So Much",
      "Bye":"Okay!will meet soon .."

    };
   var user = document.getElementById("userBox").value;
      document.getElementById("chatLog").innerHTML= user + "<br>";
      if(user in know){
      document.getElementById("chatLog").innerHTML=know[user] + "<br>";
    }
    else {
      document.getElementById("chatLog").innerHTML= "Sorry, I didn't understand <br>";
    }
    };