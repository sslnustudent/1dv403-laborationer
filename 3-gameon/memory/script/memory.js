"use strict";
var Memory = {
    
    memories:[],
    
    rows:4,
    
    collumns:4,
    
    count:0,
    
    click:false,
    
    pairs:0,
    
    i2:999999,
    
    a2:999999,
    
    createMemory:function(i){
        
        var clear = false;
        var ai = 'a' + i;
        var src = '';
        var a = document.createElement("a");
        var img = document.createElement("img");
        src = 'pics/' + Memory.memories[i] + '.png';
        img.setAttribute('src', 'pics/0.png');
        //img.className = "imgc";
        img.setAttribute('id', i);
        a.setAttribute('id', ai);
        a.appendChild(img);
                
        a.onclick = function(){
            if(i == Memory.i2){}
            else if(Memory.click === false){
            Memory.count++;
            img.setAttribute('src', src);
            Memory.i2 = i;
            Memory.a2 = ai;
            Memory.click = true;
            }
            else{
                Memory.count++;
                Memory.click = false;
                if(Memory.memories[i] == Memory.memories[Memory.i2]){
                    //alert(Memory.i2);
                    img.setAttribute('src', src);
                    Memory.i2 = 99999;
                    var a2 = document.getElementById(Memory.a2);
                    a2.onclick = null;
                    a.onclick = null;
                    Memory.pairs++;
                    if(Memory.pairs == (Memory.collumns*Memory.rows)/2){
                        //alert("CLEAR " + Memory.count);
                        document.getElementById("text").innerHTML =  "Det tog "+(Memory.count/2)+ " försök";
                        }
                }
                else{
                    img.setAttribute('src', src);
                    //alert(Memory.i2);
                    var img2 = document.getElementById(Memory.i2);
                    setTimeout(function(){
                        img.setAttribute('src', 'pics/0.png');
                        img2.setAttribute('src', 'pics/0.png');
                        },1000);
                        
                }
                
            }
        };
        return a;
    },
    
    init:function(){
        
        Memory.memories = RandomGenerator.getPictureArray(Memory.rows, Memory.collumns);
        //alert(Memory.memories);
        var i = 0;
        for(var c=0; c < Memory.collumns; c++){
            var div = document.createElement("div");
            for(var r=0; r < Memory.rows; r++){
                var a = Memory.createMemory(i);
                div.appendChild(a);
                i++;
            }
            document.getElementById("content").appendChild(div);
        }
    }
    
};

window.onload = Memory.init;