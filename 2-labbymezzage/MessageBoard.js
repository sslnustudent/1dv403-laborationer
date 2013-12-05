"use strict";

var MessageBoard = {
    
    messages: [],
    
    numberOfMessages:function(){
        var nom = document.getElementById("nom");
        var t=document.createTextNode("Antal medelande "+ MessageBoard.messages.length());
        nom.appendChild(t);
    },
    
    removeMessage:function(messageID){
        
        var r = confirm("Är du säker?");
        if(r === true){
        MessageBoard.messages.splice(messageID, 1);
        MessageBoard.renderMessages();
        }
        else
        {}
    },
    
    renderMessage:function(messageID){

        var div = document.createElement("div");
        div.className = "textclass";
        // Texten
        var text =document.createElement("p");
        text.innerHTML = MessageBoard.messages[messageID].getHTMLText();
        text.className = "tclass";
        // Datumet
        var date = document.createElement("p");
        date.className = "timeclass";
        date.innerHTML = MessageBoard.messages[messageID].getTime();
        //Raderaknappen
        var removeButton = document.createElement("a");
        var removeImg = document.createElement("img");
        removeImg.setAttribute('src', 'DeleteRed.png');
        removeImg.className = "imgc";
        removeButton.appendChild(removeImg);
        removeButton.onclick = function(){ 
            MessageBoard.removeMessage(messageID);
        };
        removeButton.className ="iconclass";
        //Tidsknappen
        var timeButton = document.createElement("a");
        var timeImg = document.createElement("img");
        timeImg.setAttribute('src', 'time.png');
        timeImg.className ="imgc";
        timeButton.appendChild(timeImg);
        timeButton.onclick = function(){
            alert("Inlägget skapades "+ MessageBoard.messages[messageID].getDate());
        };
        timeButton.className ="iconclass";
        // Lägger till dem i HTML

        div.appendChild(removeButton);
        div.appendChild(timeButton);
        div.appendChild(text);
        div.appendChild(date);
        document.getElementById("written").appendChild(div);
       // var messageArea = document.getElementById("written");
    //    messageArea.appendChild(div);
    },
    renderMessages:function(){
        document.getElementById("written").innerHTML = "";
        for(var i=0; i < MessageBoard.messages.length; i++){
            MessageBoard.renderMessage(i);
        }
        document.getElementById("nom").innerHTML = "Antal Medelande "+ i;
    },
    init:function(){
        
       /* First Test 
        alert("Working comrade");
        var mess = new Message("Testmedelande", new Date());
        alert(mess);
        alert(mess.getText());
        mess.setText("En annan Text");
        alert(mess);
        mess.setText("En \n gång i \n tiden");
        alert(mess.getText());
        alert(mess.getHTMLText());
        alert(mess.getDate());
        mess.setDate(new Date());
        alert(mess.getDate());*/
        /* Second Test
        MessageBoard.messages.push(new Message("Testmedelande1", new Date()));
        MessageBoard.messages.push(new Message("Testmedelande2", new Date()));
        MessageBoard.messages.push(new Message("Testmedelande3", new Date()));
        
        alert(MessageBoard.messages[0].getText());
        alert(MessageBoard.messages[1].getText());
        alert(MessageBoard.messages[2].getText());*/
        
        
        var text = document.getElementById("text");
        MessageBoard.messages.push(new Message(text.value, new Date())); 
        //alert(MessageBoard.messages[0]);
        MessageBoard.renderMessages();
        document.getElementById("text").value = "";
        //MessageBoard.numberOfMessages();
    }
    
};
   
var writeButton = document.getElementById("writebutton");
writeButton.onclick = MessageBoard.init;
var textbox = document.getElementById("text");
//textbox.onkeypress = MessageBoard.init;
textbox.onkeypress = function(e){
    if(e.keyCode == 13)
    {
        if(e.shiftKey == 1){
        }
        else{
        MessageBoard.init();
        }
    }
   // alert(e.keyCode);
}

//window.onload = MessageBoard.init;