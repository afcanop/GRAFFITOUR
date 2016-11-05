$(function(){
	$('#SegundoNombre').val("");
	//datepiker
	$('#date').datetimepicker({
        viewMode: 'years',
        format: 'YYYY/MM/DD',
        maxDate: '1997/12/31'
    });

	$('#date').val("");

    $('#txtFechaInicio').datetimepicker({
    	minDate: new Date(Date.now()),
        format: 'YYYY/MM/DD'
    });
    $('#txtFechaInicio').val("");

    $('#FechaRegistoProducto').datetimepicker({
    	 format: 'YYYY/MM/DD',
    	minDate: new Date(Date.now())
    });
      $('#FechaRegistoProducto').val("");

///datepiker para reportes
  $('#FechaReporteInicio').datetimepicker({

        format: 'YYYY/MM/DD'
    });
    $('#FechaReporteInicio').val("");

    $('#FechaReporteFinal').datetimepicker({
        format: 'YYYY/MM/DD'
    });


    $('#txtFechaFinal').datetimepicker({
            format: 'YYYY/MM/DD',
            useCurrent: false //Important! See issue #1075
     });

    $("#txtFechaInicio").on("dp.change", function (e) {
            $('#txtFechaFinal').data("DateTimePicker").minDate(e.date);
        });
    $("#txtFechaFinal").on("dp.change", function (e) {
            $('#txtFechaInicio').data("DateTimePicker").maxDate(e.date);
    });

    $("#FechaReporteInicio").on("dp.change", function (e) {
        $('#FechaReporteFinal').data("DateTimePicker").minDate(e.date);
    });
    $("#FechaReporteFinal").on("dp.change", function (e) {
        $('#FechaReporteInicio').data("DateTimePicker").maxDate(e.date);
    });

    //reportes anio
       $('#FechaReporteAnio').datetimepicker({
       	 viewMode: 'years',
        format: 'YYYY'
    });

//reportes anio
       $('#FechaReporteAnioMes').datetimepicker({
       	 viewMode: 'years',
        format: 'YYYY/MM'
    });

	// select

	$("#catagorias").select2({
		  language: "es",
		placeholder: "Seleccionar un Categoria para el producto",

		ajax: {
			url: link + "Categoria/listar",
			dataType: 'json',
			delay: 250,
			data: function (params) {
				return {
	                q: params.term // search term
	            };
	        },
	        processResults: function (data) {
	            // parse the results into the format expected by Select2.
	            // since we are using custom formatting functions we do not need to
	            // alter the remote JSON data
	            return {
	            	results: data
	            };
	        },
	        cache: true
	    },
	    minimumInputLength: 1
	});

	$('.rolesMultiple').select2({

		placeholder: "Por favor, selecciones los cargos del nuevo usuario",
		    language: "es",
		ajax: {
			url: link + "C_AdmGraffitourNuevosUsuarios/ListarRol",
			dataType: 'json',
			delay: 250,
			data: function (params) {
				return {
	                q: params.term // search term
	            };
	        },
	        processResults: function (data) {
	            // parse the results into the format expected by Select2.
	            // since we are using custom formatting functions we do not need to
	            // alter the remote JSON data
	            return {
	            	results: data
	            };
	        },
	        cache: true
	    },
	    minimumInputLength: 1
	});

	$("#Marcas").select2({
		language: "es",
		placeholder: "Seleccionar un marca para el producto",

		ajax: {
    	url:  link + "Marca/ListarSelect",
    			dataType: 'json',
			delay: 250,
			data: function (params) {
				return {
	                q: params.term // search term
	            };
	        },
	        processResults: function (data) {
	            // parse the results into the format expected by Select2.
	            // since we are using custom formatting functions we do not need to
	            // alter the remote JSON data
	            return {
	            	results: data
	            };
	        },
	        cache: true
	    },
	    minimumInputLength: 1
	});

	$('.selColor').select2({
		language: "es",
		placeholder: "Seleccionar los colores disponibles para el producto",

		ajax: {
			url: link + "Color/ListaColores",
			dataType: 'json',
			delay: 250,
			data: function (params) {
				return {
	                q: params.term // search term
	            };
	        },
	        processResults: function (data) {
	            // parse the results into the format expected by Select2.
	            // since we are using custom formatting functions we do not need to
	            // alter the remote JSON data
	            return {
	            	results: data
	            };
	        },
	        cache: true
	    },
	    minimumInputLength: 1
	});

	$('.selGuias').select2({
		language: "es",
		placeholder: "Seleccionar guías",

		ajax: {
			url: link + "C_AdmGraffitourNuevoRol/ListarGuias",
			dataType: 'json',
			delay: 250,
			data: function (params) {
				return {
	                q: params.term // search term
	            };
	        },
	        processResults: function (data) {
	            // parse the results into the format expected by Select2.
	            // since we are using custom formatting functions we do not need to
	            // alter the remote JSON data
	            return {
	            	results: data
	            };
	        },
	        cache: true
	    },
	    minimumInputLength: 1
	});

	$('.selTraductores').select2({
				placeholder: "Seleccionar traductor",

		language: "es",
		ajax: {
			url: link + "C_AdmGraffitourNuevoRol/listarTraductores",
			dataType: 'json',
			delay: 250,
			data: function (params) {
				return {
	                q: params.term // search term
	            };
	        },
	        processResults: function (data) {
	            // parse the results into the format expected by Select2.
	            // since we are using custom formatting functions we do not need to
	            // alter the remote JSON data
	            return {
	            	results: data
	            };
	        },
	        cache: true
	    },
	    minimumInputLength: 1
	});

	$('.selOtros').select2({
				placeholder: "Seleccionar otras personas",

		language: "es",
		ajax: {
			url: link + "C_AdmGraffitourNuevoRol/listarOtrosRoles",
			dataType: 'json',
			delay: 250,
			data: function (params) {
				return {
	                q: params.term // search term
	            };
	        },
	        processResults: function (data) {
	            // parse the results into the format expected by Select2.
	            // since we are using custom formatting functions we do not need to
	            // alter the remote JSON data
	            return {
	            	results: data
	            };
	        },
	        cache: true
	    },
	    minimumInputLength: 1
	});

	$(".ValorOferta").select2({
		placeholder: "Valor Oferta",
		allowClear: true,
		language: "es",
		ajax: {
			url:  link +"C_Ofertas/ListarOfertasID",
			dataType: 'json',
			delay: 250,
			data: function (params) {
				return {
	                q: params.term // search term
	            };
	        },
	        processResults: function (data) {
	            // parse the results into the format expected by Select2.
	            // since we are using custom formatting functions we do not need to
	            // alter the remote JSON data
	            return {
	            	results: data
	            };
	        },
	        cache: true
	    },
	    minimumInputLength: 1

	});

	$(".ProductosParaOfertas").select2({
		placeholder: "Productos Para Ofertas",
		language: "es",
			ajax: {
			url:  link +"C_Ofertas/ListarProductosPorID",
			dataType: 'json',
			delay: 250,
			data: function (params) {
				return {
	                q: params.term // search term
	            };
	        },
	        processResults: function (data) {
	            // parse the results into the format expected by Select2.
	            // since we are using custom formatting functions we do not need to
	            // alter the remote JSON data
	            return {
	            	results: data
	            };
	        },
	        cache: true
	    },
	    minimumInputLength: 1

	});

	//Tablas

	TablaUsuarios=$('#TablaUsuarios').DataTable( {
		//se le quita el orden a la tabla

		"ordering": false,

		responsive: true,
		/*cargar datos con ajax*/
		"ajax": link + "C_AdmGraffitourNuevosUsuarios/listar",
		//cambiar el idioma de la tabla

		language: {
			"sProcessing":     "Procesando...",
			"sLengthMenu":     "Mostrar _MENU_ registros",
			"sZeroRecords":    "No se encontraron resultados",
			"sEmptyTable":     "Ningún dato disponible en esta tabla",
			"sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
			"sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
			"sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
			"sInfoPostFix":    "",
			"sSearch":         "Buscar:",
			"sUrl":            "",
			"sInfoThousands":  ",",
			"sLoadingRecords": "Cargando...",
			"oPaginate": {
				"sFirst":    "Primero",
				"sLast":     "Último",
				"sNext":     "Siguiente",
				"sPrevious": "Anterior"
			},
			"oAria": {
				"sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
				"sSortDescending": ": Activar para ordenar la columna de manera descendente"
			}
		}
	} );

	TablaRoles=$('#TablaRoles').DataTable( {
		responsive: true,
		/*cargar datos con ajax*/
		"ajax": link + "C_AdmGraffitourNuevoRol/listar",
		//cambiar el idioma de la tabla

		language: {
			"sProcessing":     "Procesando...",
			"sLengthMenu":     "Mostrar _MENU_ registros",
			"sZeroRecords":    "No se encontraron resultados",
			"sEmptyTable":     "Ningún dato disponible en esta tabla",
			"sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
			"sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
			"sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
			"sInfoPostFix":    "",
			"sSearch":         "Buscar:",
			"sUrl":            "",
			"sInfoThousands":  ",",
			"sLoadingRecords": "Cargando...",
			"oPaginate": {
				"sFirst":    "Primero",
				"sLast":     "Último",
				"sNext":     "Siguiente",
				"sPrevious": "Anterior"
			},
			"oAria": {
				"sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
				"sSortDescending": ": Activar para ordenar la columna de manera descendente"
			}
		}
	} );

	solicitud=$('#solicitud').DataTable( {
		responsive: true,

		"ordering": false,

		/*cargar datos con ajax*/
		"ajax": link + "C_SolicitarBuscar/listar",
		//cambiar el idioma de la tabla
		language: {
			"sProcessing":     "Procesando...",
			"sLengthMenu":     "Mostrar _MENU_ registros",
			"sZeroRecords":    "No se encontraron resultados",
			"sEmptyTable":     "Ningún dato disponible en esta tabla",
			"sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
			"sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
			"sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
			"sInfoPostFix":    "",
			"sSearch":         "Buscar:",
			"sUrl":            "",
			"sInfoThousands":  ",",
			"sLoadingRecords": "Cargando...",
			"oPaginate": {
				"sFirst":    "Primero",
				"sLast":     "Último",
				"sNext":     "Siguiente",
				"sPrevious": "Anterior"
			},
			"oAria": {
				"sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
				"sSortDescending": ": Activar para ordenar la columna de manera descendente"
			}
		}
	} );

	TablasolicitudActivas=$('#solicitudActivas').DataTable( {
				responsive: true,


		"ordering": false,

		/*cargar datos con ajax*/
		 "ajax": link + "C_Solicitudes/listarActivas",
		//cambiar el idioma de la tabla
		language: {
			"sProcessing":     "Procesando...",
			"sLengthMenu":     "Mostrar _MENU_ registros",
			"sZeroRecords":    "No se encontraron resultados",
			"sEmptyTable":     "Ningún dato disponible en esta tabla",
			"sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
			"sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
			"sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
			"sInfoPostFix":    "",
			"sSearch":         "Buscar:",
			"sUrl":            "",
			"sInfoThousands":  ",",
			"sLoadingRecords": "Cargando...",
			"oPaginate": {
				"sFirst":    "Primero",
				"sLast":     "Último",
				"sNext":     "Siguiente",
				"sPrevious": "Anterior"
			},
			"oAria": {
				"sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
				"sSortDescending": ": Activar para ordenar la columna de manera descendente"
			}
		}
	} );

	Productos=$('#Productos').DataTable( {
		"ordering": false,
		/*cargar datos con ajax*/
		"ajax": link + "C_AdmTiendabuscar/Listar",

		responsive: true,
		//cambiar el idioma de la tabla
		language: {
			"sProcessing":     "Procesando...",
			"sLengthMenu":     "Mostrar _MENU_ registros",
			"sZeroRecords":    "No se encontraron resultados",
			"sEmptyTable":     "Ningún dato disponible en esta tabla",
			"sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
			"sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
			"sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
			"sInfoPostFix":    "",
			"sSearch":         "Buscar:",
			"sUrl":            "",
			"sInfoThousands":  ",",
			"sLoadingRecords": "Cargando...",
			"oPaginate": {
				"sFirst":    "Primero",
				"sLast":     "Último",
				"sNext":     "Siguiente",
				"sPrevious": "Anterior"
			},
			"oAria": {
				"sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
				"sSortDescending": ": Activar para ordenar la columna de manera descendente"
			}
		}
	} );

	TablaNoticas=$('#TablaNoticas').DataTable({
		"ordering": false,

			"ajax": link + "Noticias/Listar",

			responsive: true,

			language: {
			"sProcessing":     "Procesando...",
			"sLengthMenu":     "Mostrar _MENU_ registros",
			"sZeroRecords":    "No se encontraron resultados",
			"sEmptyTable":     "Ningún dato disponible en esta tabla",
			"sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
			"sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
			"sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
			"sInfoPostFix":    "",
			"sSearch":         "Buscar:",
			"sUrl":            "",
			"sInfoThousands":  ",",
			"sLoadingRecords": "Cargando...",
			"oPaginate": {
				"sFirst":    "Primero",
				"sLast":     "Último",
				"sNext":     "Siguiente",
				"sPrevious": "Anterior"
			},
			"oAria": {
				"sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
				"sSortDescending": ": Activar para ordenar la columna de manera descendente"
			}
			}
	});

	TablaMarcas=$('#TablaMarcas').DataTable({
			"ajax": link + "Marca/Listar",

			responsive: true,

			language: {
			"sProcessing":     "Procesando...",
			"sLengthMenu":     "Mostrar _MENU_ registros",
			"sZeroRecords":    "No se encontraron resultados",
			"sEmptyTable":     "Ningún dato disponible en esta tabla",
			"sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
			"sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
			"sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
			"sInfoPostFix":    "",
			"sSearch":         "Buscar:",
			"sUrl":            "",
			"sInfoThousands":  ",",
			"sLoadingRecords": "Cargando...",
			"oPaginate": {
				"sFirst":    "Primero",
				"sLast":     "Último",
				"sNext":     "Siguiente",
				"sPrevious": "Anterior"
			},
			"oAria": {
				"sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
				"sSortDescending": ": Activar para ordenar la columna de manera descendente"
			}
			}
	});

	TablaCategoria=$('#TablaCategoria').DataTable({
			"ajax": link + "Categoria/ListarTodo",

			responsive: true,

			language: {
			"sProcessing":     "Procesando...",
			"sLengthMenu":     "Mostrar _MENU_ registros",
			"sZeroRecords":    "No se encontraron resultados",
			"sEmptyTable":     "Ningún dato disponible en esta tabla",
			"sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
			"sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
			"sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
			"sInfoPostFix":    "",
			"sSearch":         "Buscar:",
			"sUrl":            "",
			"sInfoThousands":  ",",
			"sLoadingRecords": "Cargando...",
			"oPaginate": {
				"sFirst":    "Primero",
				"sLast":     "Último",
				"sNext":     "Siguiente",
				"sPrevious": "Anterior"
			},
			"oAria": {
				"sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
				"sSortDescending": ": Activar para ordenar la columna de manera descendente"
			}
			}
	});

	TablaOfertas=$('#TablaOfertas').DataTable({
			"ordering": false,

			"ajax": link + "C_Ofertas/Listar",

			responsive: true,

			language: {
			"sProcessing":     "Procesando...",
			"sLengthMenu":     "Mostrar _MENU_ registros",
			"sZeroRecords":    "No se encontraron resultados",
			"sEmptyTable":     "Ningún dato disponible en esta tabla",
			"sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
			"sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
			"sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
			"sInfoPostFix":    "",
			"sSearch":         "Buscar:",
			"sUrl":            "",
			"sInfoThousands":  ",",
			"sLoadingRecords": "Cargando...",
			"oPaginate": {
				"sFirst":    "Primero",
				"sLast":     "Último",
				"sNext":     "Siguiente",
				"sPrevious": "Anterior"
			},
			"oAria": {
				"sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
				"sSortDescending": ": Activar para ordenar la columna de manera descendente"
			}
			}
	});

	// $('#ProductosAsociadosTabla').DataTable({
	// 		"ordering": false,
	//
	//
	//
	// 		responsive: true,
	//
	// 		language: {
	// 		"sProcessing":     "Procesando...",
	// 		"sLengthMenu":     "Mostrar _MENU_ registros",
	// 		"sZeroRecords":    "No se encontraron resultados",
	// 		"sEmptyTable":     "Ningún dato disponible en esta tabla",
	// 		"sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
	// 		"sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
	// 		"sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
	// 		"sInfoPostFix":    "",
	// 		"sSearch":         "Buscar:",
	// 		"sUrl":            "",
	// 		"sInfoThousands":  ",",
	// 		"sLoadingRecords": "Cargando...",
	// 		"oPaginate": {
	// 			"sFirst":    "Primero",
	// 			"sLast":     "Último",
	// 			"sNext":     "Siguiente",
	// 			"sPrevious": "Anterior"
	// 		},
	// 		"oAria": {
	// 			"sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
	// 			"sSortDescending": ": Activar para ordenar la columna de manera descendente"
	// 		}
	// 		}
	// });

});
