function init(){
	console.log( "Welcome" );
	getClock();
}
	
function getClock(){
	var Wochentagname = new Array("Sonntag", "Montag", "Dienstag", "Mittwoch",
                                "Donnerstag", "Freitag", "Samstag");
	var time = new Date();
	var day = time.getDate();
	var month = time.getMonth() + 1;
	var year = time.getYear();
	if (year < 999) year += 1900;
	var hours = time.getHours();
	var minutes = time.getMinutes();
	var seconds = time.getSeconds();
	var WoTag = time.getDay();
	var Vortag = (day < 10) ? "0" : "";
	var Vormon = (month < 10) ? ".0" : ".";
	var Vorstd = (hours < 10) ? "0" : "";
	var Vormin = (minutes < 10) ? ":0" : ":";
	var Vorsek = (seconds < 10) ? ":0" : ":";
	var Datum = Vortag + day + Vormon + month + "." + year;
	var Uhrzeit = Vorstd + hours + Vormin + minutes + Vorsek + seconds;
	var Gesamt = Wochentagname[WoTag] + ", " + Datum + ", " + Uhrzeit;
	
	$('#clock').html( Gesamt );
	setTimeout(getClock, 1000);
};