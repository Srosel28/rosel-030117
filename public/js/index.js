function clickme(){
	document.getElementById('first').innerHTML ="Sidney"
}

function addme(){
	var x =document.getElementById('fn').value;
	var y =document.getElementById('sn').value;
	var sum=parsenInt (x) + parsenInt (y);
	document.getElementById('first').innerHTML =sum;
}
