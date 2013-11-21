"use strict";
var makePerson = function(persArr){

    var i=0;
    var ages = [];
    var minAge1;
    var maxAge1;
    var averageAge1 = 0;
    var names1 = "";
    var namesarr = [];
    var sum = 0;
	// Din kod här...
	while (i < persArr.length) {
	    ages[i] = persArr[i].age;
	    i++;
	}
	
	ages.sort();
	minAge1 = ages[0];
	maxAge1 = ages[persArr.length - 1];
	i = 0;
	
	while (i < ages.length) {
	    sum += +ages[i];
	    i++;
	}
	averageAge1 = Math.round(sum / ages.length);
	i = 0;
	while (i < persArr.length) {
	    namesarr[i] = persArr[i].name;
	    i++;
	}
	namesarr.sort(function(a,b){return a.localeCompare(b)});

	i = 0;
	while (i < namesarr.length) {
	    names1 += namesarr[i];
	    i++;
	    if (i < namesarr.length){
	        names1 += ", ";
	    }
	}
	
	console.log(ages);
	console.log(persArr);
	var result = {minAge: minAge1, maxAge: maxAge1, averageAge: averageAge1, names: names1};
	return result;
	
}

var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];
var result = makePerson(data);

console.log(result);
	/*
	if(namesarr[0] == "Ä")
	{
	    namesarr[0] = "Å";
	    namesarr[1] = "Ä";
	    namesarr[2] = "Ö";
	}
	*/