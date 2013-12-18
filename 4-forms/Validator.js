"use strict";

var Validator = {
    
    init:function(){
        //alert("LOLOL");
        var form = document.getElementById("theForm");
        form.elements["name"].onblur = function(){
            var label = document.getElementById("nlabel");
            var val = /[\w]+/;
            if(form.elements["name"].value.match(val)){
                var suc=document.createTextNode("klar");
                label.removeChild(label.childNodes[0]);
                label.appendChild(suc);
                }
            else{
                var fail=document.createTextNode("Detta fält får inte lämnas blankt");
                label.removeChild(label.childNodes[0]);
                label.appendChild(fail);
            }

        };
        form.elements["surname"].onblur = function(){
            var label = document.getElementById("snlabel");
            var val = /[\w]+/;
            if(form.elements["surname"].value.match(val)){
                var suc=document.createTextNode("klar");
                label.removeChild(label.childNodes[0]);
                label.appendChild(suc);
                }
            else{
                var fail=document.createTextNode("Detta fält får inte lämnas blankt");
                label.removeChild(label.childNodes[0]);
                label.appendChild(fail);
            }
            
        };
        form.elements["postnumber"].onblur = function(){
            var label = document.getElementById("pnlabel");
            var val = /^[\d]{5,5}$/;
            var pattern = /(SE)|(-)|(\s)/g;
            //| - | \s/g;
            form.elements["postnumber"].value = form.elements["postnumber"].value.replace(pattern, "");
            if(form.elements["postnumber"].value.match(val)){
                var suc=document.createTextNode("klar");
                label.removeChild(label.childNodes[0]);
                label.appendChild(suc);
                }
            else{
                var fail=document.createTextNode("Ange ett gilltigt postnummer");
                label.removeChild(label.childNodes[0]);
                label.appendChild(fail);
            }
            
        };
        form.elements["email"].onblur = function(){
            var label = document.getElementById("eplabel");
            var val = /^[\w]+(\.[\w]+)*@([\w]+\.)+[a-z]{2,7}$/i;
            if(form.elements["email"].value.match(val)){
                var suc=document.createTextNode("klar");
                label.removeChild(label.childNodes[0]);
                label.appendChild(suc);
                }
            else{
                var fail=document.createTextNode("Ange en giltigt e-post");
                label.removeChild(label.childNodes[0]);
                label.appendChild(fail);
            }
            
        };
        form.onsubmit = function(){
        
        var l1 = document.getElementById("1");
        var l2 = document.getElementById("2");
        var l3 = document.getElementById("3");
        var l4 = document.getElementById("4");
        var l5 = document.getElementById("5");
        
        var promttext =l1.firstChild.nodeValue + ":                     " + form.elements["name"].value + 
        "\n" + l2.firstChild.nodeValue+":                   "+ form.elements["surname"].value+
        "\n" + l3.firstChild.nodeValue+":               " + form.elements["postnumber"].value +
        "\n" + l4.firstChild.nodeValue+":                          " + form.elements["email"].value +
        "\n" + l5.firstChild.nodeValue+":                   " + form.elements["price"].value;
        var r = confirm(promttext);
        if(r === true){
            return true;
        }
        else
        {
            return false;
        }
            
        };
        /*function popitup(url,windowName) {
       newwindow=window.open(url,windowName,'height=200,width=150');
       if (window.focus) {newwindow.focus()}
       return false; }*/
    }
};


window.onload = Validator.init;