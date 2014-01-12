"use strict";

var desktop = {
    
    windowon:false,
    
    images:[],
    
    init:function(){
        var a = document.getElementById("ai");
        a.onclick = desktop.openWindow;
    },
    
    click:function(images, imgId){
    var desk = document.getElementById("desktop");
    //alert(images[imgId].URL);
    desk.style.backgroundImage= "url(" + images[imgId].URL + ")";
    },
    
    createImg:function(i, windowContent){
    var height = 0;
    var width = 0;
    for(var k=0;k<desktop.images.length;k++)
    {
        if(desktop.images[k].thumbHeight > height)
        {
            height = desktop.images[k].thumbHeight;
        }
        if(desktop.images[k].thumbWidth > width)
        {
            width = desktop.images[k].thumbWidth;
        }
        
    }
    width = width + 15;
    height = height + 15;
    
    
    
    //var imgId = new Numbers();
    // imgId.num = i;
    var frame = document.createElement("div");
    frame.className = "frames";
    frame.style.height = height + "px";
    frame.style.width = width + "px";
    var click = document.createElement("a");
    click.className = "click";
    click.setAttribute("href", "#");
    var image = document.createElement("img");
    image.className = "thumbnail";
    image.setAttribute("src", desktop.images[i].thumbURL);
    frame.appendChild(image);
    click.appendChild(frame);
    //alert(desktop.images[i].thumbURL);
    
    windowContent.appendChild(click);
    click.onclick = function(){ desktop.click(desktop.images, i);};
        
    },
    
    openWindow:function(){
        if(desktop.windowon === false)
        {
            desktop.windowon = true;
            var body = document.getElementById("top");
            // Skapar popupfönstret
            var windowBody= document.createElement("div");
            windowBody.className ="windowBody";
            body.appendChild(windowBody);
            var windowTop = document.createElement("div");
            windowTop.className ="windowTop";
            windowBody.appendChild(windowTop);
            var windowContent = document.createElement("div");
            windowContent.className = "windowContent";
            windowBody.appendChild(windowContent);
            var windowBottom = document.createElement("div");
            windowBody.appendChild(windowBottom);
            windowBottom.className = "windowBottom";
            var iconImg = document.createElement("img");
            iconImg.setAttribute('src', 'viewImgIcon.png');
            iconImg.className = "iconImg";
            windowTop.appendChild(iconImg);
            var iconText = document.createElement("p");
            var text = document.createTextNode("Image Viewer");
            iconText.appendChild(text);
            iconText.className = "iconText";
            windowTop.appendChild(iconText);
            var deletebutton = document.createElement("a");
            deletebutton.setAttribute("href", "#");
            var deleteimg = document.createElement("img");
            deleteimg.setAttribute('src', 'DeleteRed.png');
            deleteimg.className = "deleteimg";
            deletebutton.appendChild(deleteimg);
            deletebutton.className = "deletebutton";
            deletebutton.onclick = function(){
                body.removeChild(body.childNodes[0]);
                desktop.windowon = false;
            };
            windowTop.appendChild(deletebutton);
            var url = "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/";
          /*  var mycallback = function(data){
             windowContent.innerHTML(data);
            };*/
            var loadIcon = document.createElement("img");
            loadIcon.className = "gif";
            loadIcon.setAttribute("src", "ajax-loader.gif");
            windowBottom.appendChild(loadIcon);
            var loadText = document.createElement("p");
            text = document.createTextNode("Laddar...");
            loadText.appendChild(text);
            loadText.className = "loadText";
            windowBottom.appendChild(loadText);
            new AjaxCon(url, function(data){
            desktop.images = JSON.parse(data);
             for (var i=0;i<desktop.images.length;i++)
            {
                desktop.createImg(i, windowContent);
            }
                windowBottom.removeChild(windowBottom.childNodes[0]);
                windowBottom.removeChild(windowBottom.childNodes[0]);

                });

            
            
            
        }
    }
    
    
    
    
};
window.onload = desktop.init;