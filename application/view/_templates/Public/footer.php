<script >    var link = "<?php echo URL; ?>";</script>
<script src="<?php echo URL ?>asistente/JS/jquery.min.js" charset="utf-8"></script>
<script src="<?php  echo URL ?>asistente/JS/bootstrap.min.js" charset="utf-8"></script>
<script src="<?php  echo URL ?>asistente/JS/sweetalert.min.js" charset="utf-8"></script>
<script src="<?php echo URL ?>asistente/js/jquery.datatables.min.js"></script>
<script src="<?php echo URL ?>asistente/js/datatables.bootstrap.min.js"></script>

<script src="<?php echo URL ?>asistente/js/ajax.js" type="text/javascript"></script>

<script type="text/javascript">
  $(document).ready(function(){
    $('#datatables-example').DataTable({
responsive: true,
		/*cargar datos con ajax*/
		"ajax": link + "C_Tienda/listar",
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
	});
  });
</script>
</body>
</html>

