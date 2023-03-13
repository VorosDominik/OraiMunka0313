function formvalidaltform(){
	let x = document.validTeszt.knev.value;
	let kuld=true
	if (x === "") {
    	alert("A mező kitöltése kötelező!");
    	kuld= false;
	}
	let el2 = egyforma();
	if( el2 && kuld)
	{
		return true;
	}
	return false;

}
function egyforma(){
	let el2= false;
	let j1= document.validTeszt.jelszo1.value;
	let j2= document.validTeszt.jelszo2.value;

	if (j1 === j2) {
    	
    	el2=true;
	}
	alert("A két jelszó nem egyezik ez igy türhetetlen!!");
    return el2;
}