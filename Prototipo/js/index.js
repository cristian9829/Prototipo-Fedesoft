function btnForms (formularioHide,formularioShow){
	var inputs = $(formularioHide + " input")
	if (!$(inputs).val()) {
		$(".advertencia").css("display","block");	     
		return false;
	      
	    }else{
	    	$(".advertencia").text("Perfecto");
	    	$(".advertencia").css("color","green");

			$(formularioHide).hide(800);
			$(formularioShow).show(200);
	    }
}

function btnForms2 (formularioShow,formularioHide){
	$(formularioShow).show(200);
	$(formularioHide).hide(500);
}

function imagenRandom(){
	var random = Math.floor(Math.random() * 9);
	$(".contenedorImagen").fadeOut(500,function(){
		$(this).css("background-image","url('Imagenes/fondo" +random+".jpg')").fadeIn(1000);
		console.log(random);				
	})
}



$(document).ready(function(){ /*Codigo jquery*/
	
	setInterval(imagenRandom,9000);

	$("#btn-documento-siguiente").on("click",function(e){
		e.preventDefault();
		btnForms(".contenedorFormulario form",".contenedorFormulario #formulario2");
	})

	$("#btn-documento-atras").on("click",function(e){
		e.preventDefault();
		btnForms2(".contenedorFormulario form",".contenedorFormulario #formulario2");
	})	

})