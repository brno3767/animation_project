function results()
{
	var fav;
	//reset text area
	document.getElementById("answers").value="";
	//favorite school
	
	//radio buttons questions 1-3
	if(document.getElementById("trueyes1").checked==true){
		document.getElementById("answers").value+="Correct!\n";
	}
	else {
		if (document.getElementById("trueno1").checked==true){
			document.getElementById("answers").value+="Incorrect!\n";
		}
	}

	//radio button question 4
	if(document.getElementById("trueyes2").checked==true){
		document.getElementById("answers").value+="Incorrect!\n";
	}
	else {
		if (document.getElementById("trueno2").checked==true){
			document.getElementById("answers").value+="Correect!\n";
		}
	}
}


var cu=document.getElementById("submit");
cu.addEventListener("click", results, false);



//new addition
function showText(){
	$(this).next('.text').toggle("slow"); 
	$(this).toggleClass('close'); 
}

$(document).ready(function() {

	$('.text').hide(); 
	$('.title').click(showText); 
		
}); 