$(function(){
	jQuery("#ajx-select-2").select2({        
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
});