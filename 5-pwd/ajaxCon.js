 "use strict";
 function AjaxCon(url, callback){
     
     var xhr = this.getXHR();
     
     xhr.onreadystatechange = function()
     {
         if(xhr.readyState === 3)
         {
            if(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)
            {
                //alert(xhr.responseText);
                callback(xhr.responseText);
            }
            else
            {
                console.log("Läsfel status " + xhr.status);
            }
         }
     };
     xhr.open("get", url, true);
     xhr.send(null);     
     
     }
     
AjaxCon.prototype.getXHR = function(){
    var xhr = null;
        xhr = new XMLHttpRequest();
        return xhr;
};