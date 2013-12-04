"use strict";

var MessageBoard = {
    
    messages: [],
    
    removeMessage:function(messageID){
        MessageBoard.messages.splice(messageID, 1);
        MessageBoard.renderMessages();
    },
    
    renderMessage:function(messageID){

        var div = document.createElement("div");
        // Texten
        var text =document.createElement("p");
        text.innerHTML = MessageBoard.messages[messageID].getHTMLText();
        // Datumet
        var date = document.createElement("p");
        date.innerHTML = MessageBoard.messages[messageID].getDate();
        
        
        var removeButton = document.createElement("a");
        var removeImg = document.createElement("img");
        removeImg.setAttribute('src', 'DeleteRed.png')
        removeImg.className = "imgc";
        // Lägger till dem i HTML
        removeButton.appendChild(removeImg);
        removeButton.onclick = function(){ 
            MessageBoard.removeMessage(messageID);
        }
        div.appendChild(removeButton);
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
    }
    
};
    

var writeButton = document.getElementById("writebutton");
writeButton.onclick = MessageBoard.init;

//window.onload = MessageBoard.init;