"use strict";

var Validator = {
    
    init:function(){
        //alert("LOLOL");
        var btn = document.getElementById("btn");
        btn.disabled = true;
        var check = [false,false,false,false];
        var form = document.getElementById("theForm");
        form.elements["name"].onblur = function(){
            var label = document.getElementById("nlabel");
            var val = /[\w]+/;
            if(form.elements["name"].value.match(val)){
                var suc=document.createTextNode("klar");
                label.removeChild(label.childNodes[0]);
                label.appendChild(suc);
                check[0] = true;
                if(check[0] === true && check[1] === true && check[2] === true && check[3] === true){btn.disabled = false;}
                }
            else{
                var fail=document.createTextNode("Detta fält får inte lämnas blankt");
                label.removeChild(label.childNodes[0]);
                label.appendChild(fail);
                check[0] = false;
                btn.disabled = true;
            }

        };
        form.elements["surname"].onblur = function(){
            var label = document.getElementById("snlabel");
            var val = /[\w]+/;
            if(form.elements["surname"].value.match(val)){
                var suc=document.createTextNode("klar");
                label.removeChild(label.childNodes[0]);
                label.appendChild(suc);
                check[1] = true;
                if(check[0] === true && check[1] === true && check[2] === true && check[3] === true){btn.disabled = false;}
                }
            else{
                var fail=document.createTextNode("Detta fält får inte lämnas blankt");
                label.removeChild(label.childNodes[0]);
                label.appendChild(fail);
                check[1] = false;
                btn.disabled = true;
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
                check[2] = true;
                if(check[0] === true && check[1] === true && check[2] === true && check[3] === true){btn.disabled = false;}
                }
            else{
                var fail=document.createTextNode("Ange ett gilltigt postnummer");
                label.removeChild(label.childNodes[0]);
                label.appendChild(fail);
                check[2] = false;
                btn.disabled = true;
            }
            
        };
        form.elements["email"].onblur = function(){
            var label = document.getElementById("eplabel");
            var val = /^[\w]+(\.[\w]+)*@([\w]+\.)+[a-z]{2,7}$/i;
            if(form.elements["email"].value.match(val)){
                var suc=document.createTextNode("klar");
                label.removeChild(label.childNodes[0]);
                label.appendChild(suc);
                check[3] = true;
                if(check[0] === true && check[1] === true && check[2] === true && check[3] === true){btn.disabled = false;}
                }
            else{
                var fail=document.createTextNode("Ange en giltigt e-post");
                label.removeChild(label.childNodes[0]);
                label.appendChild(fail);
                check[3] = false;
                btn.disabled = true;
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