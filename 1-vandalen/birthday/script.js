"use strict";

window.onload = function(){

	
	var birthday = function(date){
		


			// Din kod här.

    var nowDate = new Date();
    var birthDate = new Date(date);
    var yearnow = 0;
    var yearbirth = 0;
    birthDate.setYear(nowDate.getFullYear());
    var daysLeft = Math.round((birthDate.getTime() - nowDate.getTime())/(1000*(60*(60*24))));
    
    if (nowDate.getHours() > 12)
     {daysLeft += 1;}
    
    /*if (birthDate.getDate() < nowDate.getDate()){
       daysLeft += 365;
    }*/

   // yearnow = Math.round((nowDate.getTime())/(1000*(60*(60*(24*365)))));
//    yearbirth = Math.round((nowDate.getTime())/(1000*(60*(60*(24*365)))));

    //yearnow = nowDate.getFullYear();
    //yearbirth = birthDate.getFullYear();
    console.log(yearbirth);
    console.log(yearnow);
    /*while (yearbirth < yearnow) {
        console.log("Succes");
        daysLeft += 365;
        yearbirth += 1;
        
    }*/
    if(birthDate.getDate() < nowDate.getDate()){
    daysLeft += 365;
}
    if(isNaN(daysLeft))
	{throw new Error("Angiv ett datum!!");}
    
    return daysLeft;



	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};