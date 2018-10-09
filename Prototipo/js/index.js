function btnForms (formularioHide,formularioShow){
	$(formularioHide).hide();
	$(formularioShow).show();
}

function btnForms2 (formularioShow,formularioHide){
	$(formularioShow).show();
	$(formularioHide).hide();
}

$(document).ready(function(){ /*Codigo jquery*/
	$("#btn-documento-siguiente").on("click",function(e){
		e.preventDefault();
		btnForms(".contenedorFormulario form",".contenedorFormulario #formulario2");
	})

	$("#btn-documento-atras").on("click",function(e){
		e.preventDefault();
		btnForms2(".contenedorFormulario form",".contenedorFormulario #formulario2");
	})
})