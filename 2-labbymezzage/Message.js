"use strict";

function Message(message, date){
    
    this.getText = function(){
        return message;
    }
    
    this.setText = function(_text){
        message = _text;
    }
    
    this.getDate = function(){
        return date;
    }
    
    this.setDate = function(_date){
        date = _date;
    }
}

Message.prototype.toString = function(){
    return this.getText()+ " ("+ this.getDate()+ ")";
}

Message.prototype.getHTMLText = function(){

    console.log(this.getText().replace(/\n/g, "<br />")); 
    return this.getText().replace(/\n/g, "<br />");
}

Message.prototype.getDateText = function() {
    
}

var mess = new Message("lol \n lol", new Date());
var lol = mess.getHTMLText();
