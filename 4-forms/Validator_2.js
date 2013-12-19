"use strict";
//Klar
var Validator = {
    
    init:function(){
        //alert("LOLOL");
        var form = document.getElementById("theForm");
        var btn = document.getElementById("btn");
        var btnParent = btn.parentElement;
        btn.remove();
       
        Validator.addSubmitBtn(btnParent);
        btn = document.getElementById("btn");
        btn.disabled = true;
        var check = [false,false,false,false];
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
        },
        genereateModal:function(){
        var form = document.getElementById("theForm");
        var l1 = document.getElementById("1");
        var l2 = document.getElementById("2");
        var l3 = document.getElementById("3");
        var l4 = document.getElementById("4");
        var l5 = document.getElementById("5");
        
        var popup = document.getElementById("popup");
        popup.className = "popup";
        var p1 = document.createElement("p");
        var text1 = document.createTextNode(l1.firstChild.nodeValue + ":                 " + form.elements["name"].value);
        var p2 = document.createElement("p");
        var text2 = document.createTextNode(l2.firstChild.nodeValue+":                   "+ form.elements["surname"].value);
        var p3 = document.createElement("p");
        var text3 = document.createTextNode(l3.firstChild.nodeValue+":               " + form.elements["postnumber"].value);
        var p4 = document.createElement("p");
        var text4 = document.createTextNode(l4.firstChild.nodeValue+":                          " + form.elements["email"].value);        
        var p5 = document.createElement("p");
        var text5 = document.createTextNode(l5.firstChild.nodeValue+":                   " + form.elements["price"].value);
        var textdiv = document.createElement("div");
        p1.appendChild(text1);
        textdiv.appendChild(p1);
        p2.appendChild(text2);
        textdiv.appendChild(p2);
        p3.appendChild(text3);
        textdiv.appendChild(p3);
        p4.appendChild(text4);
        textdiv.appendChild(p4);
        p5.appendChild(text5);
        textdiv.appendChild(p5);
        popup.appendChild(textdiv);
        var btndiv = document.createElement("div");
        var button1 = document.createElement("button");
        button1.setAttribute("type", "button");
        //button1.innerHTML = "Genomför köp";
        var btnt1 = document.createTextNode("Genomför köpet");
        button1.appendChild(btnt1);
        button1.onclick = function(){
            form.submit();
        };
        document.getElementById("darkLayer").style.display = "";
        var button2 = document.createElement("button");
        button2.setAttribute("type", "button");
       // button2.innerHTML = "Avbryt";
        var btnt2 = document.createTextNode("Avbryt!");
        button2.appendChild(btnt2);
        button2.onclick = function(){
            popup.className = "";
            popup.removeChild(popup.childNodes[1]);
            popup.removeChild(popup.childNodes[0]);
            document.getElementById("darkLayer").style.display = "none";
        };
        btndiv.appendChild(button1)
        btndiv.appendChild(button2)
        popup.appendChild(btndiv);
        
    },
    addSubmitBtn:function(node) {
      var btn = document.createElement('button');
      btn.setAttribute("type", "button")
      //btn.innerHTML = "Genomför köp";
      var btnt = document.createTextNode("Genomför köp");
      btn.appendChild(btnt)
      btn.setAttribute("id", "btn");
      node.appendChild(btn);

      btn.onclick = function(){
          Validator.genereateModal();
      };
      

     // btn.addEventListener('click', Validator.genereateModal());
     
    }
    
};
Element.prototype.remove = function() {
     this.parentElement.removeChild(this);};

window.onload = Validator.init;