//your JS code here. If required.
function rem() {
	var check = document.querySelector("#colorSelect").value;
	
	for(var i=1;i<=4;i++) {
		var id = "c"+i;
		if(document.querySelector(`#${id}`).value === check) {
			document.querySelector(`#${id}`).remove();
			break;
		}
	}
}