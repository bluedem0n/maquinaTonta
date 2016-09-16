window.addEventListener("load", function(){
	var boton1 = document.getElementById("cri");
	boton1.addEventListener("click", function(){
        var contador = 1;
		if(contador == 1){
			document.getElementsByClassName("circulo")[0].style.border = "4px solid gray";
			document.getElementById("input").placeholder = "Rojo";
			document.getElementsByClassName("circulo")[1].style.border = "1px solid black";
			document.getElementsByClassName("circulo")[2].style.border = "1px solid black";
		}
		else if(contador == 2){
			document.getElementsByClassName("circulo")[0].style.border = "1px solid black";
			document.getElementById("input").placeholder = "Amarillo";
			document.getElementsByClassName("circulo")[1].style.border = "4px solid gray";
			document.getElementsByClassName("circulo")[2].style.border = "1px solid black";
		}
		else{
			document.getElementsByClassName("circulo")[0].style.border = "1px solid black";
			document.getElementById("input").placeholder = "Verde";
			document.getElementsByClassName("circulo")[1].style.border = "1px solid black";
			document.getElementsByClassName("circulo")[2].style.border = "4px solid gray";
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
