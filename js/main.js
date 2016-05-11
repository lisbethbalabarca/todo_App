function getInputValue(){
	var inputBox= document.getElementById("homework");
	return inputBox.value;
}

function item(){
	var inputBoxValue= getInputValue();
	if(inputBoxValue!== ""){
		doItem(inputBoxValue);
		clean();
	}
}

 function doItem(texto){
 	var tareas= document.getElementById("texto");
 	var caja= document.createElement("div");
 	caja.className="list-work col-sm-12";
 	var elemento= document.createElement("span")
 	elemento.className="tarea";
 	elemento.innerHTML= texto;
 	var boton= document.createElement("button");
 	var icon= document.createElement("i");
 	icon.className="glyphicon glyphicon-trash";
 	boton.onclick= function(){
 		alert("estas seguro de querer eliminarlo");
 		tareas.removeChild(caja);
 	}
 	var check= document.createElement('input');
 	check.type = 'checkbox';
 	check.className = "check"
 	check.onchange= function(){
 		if(check.checked==true)
 			elemento.innerHTML=texto.strike();
 		else
 			elemento.innerHTML=texto;
 	}

 	boton.appendChild(icon);
	caja.appendChild(elemento);
 	caja.insertBefore(check,elemento);
	caja.appendChild(boton);
	tareas.appendChild(caja);
}

function clean() {
	var inputBox = document.getElementById("text-box");
	inputBox.value = "";
	inputBox.focus();
}