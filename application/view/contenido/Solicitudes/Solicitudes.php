
<div><!--contenido-->
  <div id="content">
    <div class="panel-body text-center">
      <div class="form-group">
        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
          <div class="panel panel-default">
            <div class="panel-heading" role="tab" id="headingOne">
              <h4 class="panel-title">
                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                 Lista de solicitudes
               </a>
             </h4>
           </div>
           <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
            <div class="panel-body">
              <!-- start: Content -->
              <div class="col-md-12 top-20 padding-0">
                <div class="col-md-12">

                  <div class="panel-body">
                    <div class="responsive-table">
                      <table id="solicitudActivas" class="table table-striped table-bordered" width="100%" cellspacing="0">
                        <thead>
                          <tr>
                            <th><center>Código</center></th>
                            <th><center>Nombre</center></th>
                            <th> <center>Apellido</center> </th>
                            <th> <center>Correo</center> </th>
                            <th> <center>Fecha</center> </th>
                            <th> <center>Hora</center> </th>
                            <th> <center>Cantidad</center> </th>
                            <th> <center>Agenda</center> </th>
                            <th> <center>Cancel</center> </th>
                          </tr>
                        </thead>
                        <tbody>
                        </tbody>
                      </table>
                    </div>
                    <!-- Modal -->
                    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title" id="myModalLabel"> <span class="fa fa-calendar-plus-o" ></span> Agendar</h4>
                          </div>
                          <div class="modal-body">
                          <form id="FrmAgendar">
                            <div class="row">
                              <input type="hidden" class="form-text" id="id"  name="id" readonly="readonly" >
                              <input type="hidden" class="form-text" id="Fecha"  name="Fecha"  required>
                               <input type="hidden" class="form-text" id="Hora"  name="Hora"   required>      
                            </div>
                            <div class="row">
                             
                              <div class="col-md-4">
                                <label>
                                  <strong>
                                    Guiás
                                  </strong>                 
                                </label><br>
                                <select name="selGuias[]" id="selGuias" class="selGuias" style="width:85%" multiple="multiple" required>
                                </select>
                              </div>
                               <div class="col-md-4">
                                <label>
                                  <strong>
                                    Traductor
                                  </strong>    
                                </label><br>
                                <select name="selTraductores[]" id="selTraductores" class="selTraductores" style="width: 75%" multiple="multiple">
                                </select>

                              </div>
                              <div class="col-md-4">
                               <label>
                                 <strong>
                                   Otros
                                 </strong>   
                               </label><br>
                               <select name="selOtros[]" id="selOtros" class="selOtros" style="width: 75%" multiple="multiple">
                               </select>

                             </div>
                           </div>
                           </form>
                         </div>
                         <div class="modal-footer">
                          <button type="button" class="btn btn-danger" data-dismiss="modal"><span class="glyphicon glyphicon-floppy-remove"></span>  Cerrar</button>
                          <button type="button" id="btnAgendar" class="btn btn-success " onclick="Solicitudes.Agendar()">

                           <span class="glyphicon glyphicon-floppy-disk"></span> Guardar</button>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>  
             </div>
           </div> 
         </div>
       </div>
     </div>
   </div>
 </div>
</div>
</div>
<script src="<?php echo URL ?>asistente/ValidacionesFrontEnd/FrmAgendar.js" type="text/javascript"></script>
