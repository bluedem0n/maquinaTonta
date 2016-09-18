window.addEventListener("load", function(){
	var boton1 = document.getElementById("cri");
	var contador = 1;
	boton1.addEventListener("click", function(){
		if(contador == 1){
			document.getElementsByClassName("circulo")[0].style.borderColor = "blue";
			document.getElementById("input").placeholder = "Rojo";
			document.getElementsByClassName("circulo")[1].style.borderColor = "gray";
			document.getElementsByClassName("circulo")[2].style.borderColor = "gray";
		}
		if(contador == 2){
			document.getElementsByClassName("circulo")[1].style.borderColor = "blue";
			document.getElementsByClassName("circulo")[0].style.borderColor = "gray";
			document.getElementById("input").placeholder = "Amarillo";
			document.getElementsByClassName("circulo")[2].style.borderColor = "gray";
		}
		if(contador == 3){
			document.getElementsByClassName("circulo")[2].style.borderColor = "blue";
			document.getElementsByClassName("circulo")[0].style.borderColor = "gray";
			document.getElementById("input").placeholder = "Verde";
			document.getElementsByClassName("circulo")[1].style.borderColor = "gray";
			contador = 0;
		}
		contador++;
    });
	var boton2 = document.getElementById("superCri");
	boton2.addEventListener("click", function() {
	var color = document.getElementById("input").value;
	if (color=="rojo" || color=="Rojo"){
		document.getElementsByClassName("circulo")[0].style.border = "4px solid gray";
		document.getElementsByClassName("circulo")[1].style.border = "0px solid gray";
		document.getElementsByClassName("circulo")[2].style.border = "0px solid gray";
	} else if (color=="amarillo" || color == "Amarillo"){
		document.getElementsByClassName("circulo")[0].style.border = "0px solid gray";
		document.getElementsByClassName("circulo")[1].style.border = "4px solid gray";
		document.getElementsByClassName("circulo")[2].style.border = "0px solid gray";
	} else if (color=="verde" || color == "Verde"){
		document.getElementsByClassName("circulo")[0].style.border = "0px solid gray";
		document.getElementsByClassName("circulo")[1].style.border = "0px solid gray";
		document.getElementsByClassName("circulo")[2].style.border = "4px solid gray";
	}
	});
});