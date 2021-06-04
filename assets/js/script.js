function flame(){
	
	var count = document.getElementById("count").textContent;
	var countInt = parseInt(count);

	if (countInt<13) {

	
		countInt = countInt+1;
		document.getElementById("count").innerHTML = countInt;
		document.getElementById("img"+countInt).style.visibility = "visible";
	}


}

document.addEventListener("keydown", KeyCheck); 
function KeyCheck(event){

   var KeyID = event.keyCode;
   switch(KeyID){

      case 37:
      		var count = document.getElementById("count").textContent;
			var countInt = parseInt(count);
		

			if (countInt>0) {

	
				document.getElementById("img"+countInt).style.visibility = "hidden";
				countInt = countInt-1;
				document.getElementById("count").innerHTML = countInt;
			}
      break; 

      case 39:
			var count = document.getElementById("count").textContent;
			var countInt = parseInt(count);

			if (countInt<13) {

	
				countInt = countInt+1;
				document.getElementById("count").innerHTML = countInt;
				document.getElementById("img"+countInt).style.visibility = "visible";
			}
      break;

      case 67:
      		window.location.reload(true); 
      break;

      default:
      break;
   }
}