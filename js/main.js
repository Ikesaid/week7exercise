 var dallas = document.getElementById('dallas');
 	dallas.innerText = "America's NFL Team";
 var newH1 = document.getElementById('newH1');


 function outputName() {

	var x = document.getElementById("five");
	console.log(x);
		newH1.innerText = x;
	document.write(
	"Thanks for your Vote "+"<br>"+"You have selected the "+"<br>"+x.value);
}



var teams = [
	 'Dallas Cowboys', 'Philadelphia Eagles', 'Washington Redskins', 'New York Giants',
	 'Los Angeles Rams', 'Seattle Seahawks', 'Arizona Cardinals', 'San Fransico 49ers',
     'New Orleans Saints', 'Carolina Panthers', 'Atlanta Falcons', 'Tampa Bay Buccaneers',
	 'Chicago Bears', 'Minnesota Vikings', 'Green Bay Packers', 'Detroit Lions',
	 'Pittsburgh Steelers', 'Baltimore Ravens', 'Cincinnati Bengals', 'Cleveland Browns',
	 'Houston Texans', 'Indianapolis Colts', 'Tennessee Titans', 'Jacksonville Jaguars',
	 'Kansas City Chiefs', 'Los Angeles Chargers', 'Denver Broncos', 'Oakland Raiders',
	 'New England Patriots', 'Miami Dolphins', 'Buffalo Bills', 'New York Jets'];

var x = document.getElementById("five");
 	
 		for (var i = 0; i < teams.length; i++) {
 				console.log(teams[i]);
 	}
 		// if(x.value == teams[i]){
 		// 	document.write(x.value + "  has been approved for 1 vote");		
 		// 	}

		// else{
 	// 		alert(x.value + "  Not a Recognized NFL Team!");
 	// 	}
 	// 	return;
 	
 			
 	

		

 var info = {

 	NFC: 'Cowboys',
 	Rings: 5,
 	Contender: true
 };

 	console.log(info.NFC);
 	console.log(info.Rings)
 	console.log(info.Contender)
var newH1 = document.getElementById("newH1");
var newH2 = document.getElementById("newH2");
var newH3 = document.getElementById("newH3");

 	
 
