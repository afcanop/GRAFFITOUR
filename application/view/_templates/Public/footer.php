<script src="<?php echo URL ?>asistente/jquery/jquery.min.js"></script>
<script src="<?php echo URL ?>http://ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>
<script src="<?php echo URL ?>asistente/bootstrap/js/bootstrap.min.js"></script>
<script src="<?php echo URL ?>asistente/smooth-scroll/SmoothScroll.js"></script>
<script src="<?php echo URL ?>asistente/jarallax/jarallax.js"></script>
<script src="<?php echo URL ?>asistente/bootstrap-carousel-swipe/bootstrap-carousel-swipe.js"></script>
<script src="<?php echo URL ?>asistente/masonry/masonry.pkgd.min.js"></script>
<script src="<?php echo URL ?>asistente/imagesloaded/imagesloaded.pkgd.min.js"></script>
<script src="<?php echo URL ?>asistente/social-likes/social-likes.js"></script>
<script src="<?php echo URL ?>asistente/mobirise/js/script.js"></script>
<script src="<?php echo URL ?>asistente/mobirise-gallery/script.js"></script>
<script src="<?php echo URL ?>asistente/jquery.fullpage.min.js"></script>
<script src="<?php echo URL ?>asistente/js/moment.min.js" type="text/javascript"></script>
<script src="<?php echo URL ?>asistente/datetimepicker/js/bootstrap-datetimepicker.min.js" type="text/javascript"></script>
<link href="<?php echo URL ?>asistente/datetimepicker/css/bootstrap-datetimepicker.min.css" rel="stylesheet" type="text/css"/>
<script src="<?php echo URL ?>asistente/js/jquery.datatables.min.js"></script>
<script src="<?php echo URL ?>asistente/js/jquery.datatables.min.js"></script>
<script src="<?php echo URL ?>asistente/js/datatables.bootstrap.min.js"></script>

  <script >    var link = "<?php echo URL; ?>";</script>
<script src="<?php echo URL ?>asistente/js/ajax.js" type="text/javascript"></script>
 <script type="text/javascript">

   $(document).ready(function() {
    $('#fullpage').fullpage({
      sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
      anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
      menu: '#menu',
      continuousVertical: true
    });
    
    $('#TablaMarcas').DataTable({
            "ajax": link + "Marca/Listar",

    });

    $('#TablaNoticias').DataTable({
            "ajax": link + "C_Noticias/Listar",

    });


    $("#btnEnviarTour").on("click", function(){
      Solicitudes.registrar();
    })


    $('#datetimepicker4').datetimepicker();



  });
</script>
<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>