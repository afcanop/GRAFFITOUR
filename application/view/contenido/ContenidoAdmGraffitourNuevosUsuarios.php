
<div><!--contenido-->
    <div id="content">
        <div class="panel-body text-center">
            <div class="form-group">
                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                    <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingOne">
                            <h2 class="panel-title text-center">
                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <samp class="fa fa-user-plus"> </samp>
                                    REGISTRAR
                                </a>
                            </h2>
                        </div>
                        <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                            <!-- inicio formulario--> 
                            <div class="panel-body">
                                <form action="<?= URL ?>C_AdmGraffitourNuevosUsuarios/Guardar" method="POST">

                                    <!-- inicio del formulario -->
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group form-animate-text">
                                                <input type="text" class="form-text"   name="PrimerNombre" required>
                                                <span class="bar"></span>
                                                <label><span class="glyphicon glyphicon-pencil"></span> Registrar primer nombre del nuevo administrador </label>
                                            </div>

                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group form-animate-text">
                                                <input type="text" class="form-text"   name="SegundoNombre" required>
                                                <span class="bar"></span>
                                                <label><span class="glyphicon glyphicon-pencil"></span> Registrar segundo nombre del nuevo administrador </label>
                                            </div>
                                        </div>
                                    </div>
                                    <br>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group form-animate-text">
                                                <input type="text" class="form-text"   name="PrimerApellido" required>
                                                <span class="bar"></span>
                                                <label><span class="glyphicon glyphicon-pencil"></span> Registrar Primer Apellido del nuevo administrador </label>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group form-animate-text">
                                                <input type="text" class="form-text"   name="SegundoApellido" required>
                                                <span class="bar"></span>
                                                <label><span class="glyphicon glyphicon-pencil"></span> Registrar segundo Apellido del nuevo administrador </label>
                                            </div>
                                        </div>
                                    </div>
                                    <br>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group form-animate-text">
                                                <input type="number"  min="18" class="form-text"   name="Edad" required>
                                                <span class="bar"></span>
                                                <label><span class="glyphicon glyphicon-pencil"></span> Edad del nuevo administrador </label>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group form-animate-text">
                                                <input type="number"  min="1" class="form-text"   name="numContacto" required>
                                                <span class="bar"></span>
                                                <label><span class="glyphicon glyphicon-pencil"></span>Número de contacto administrador </label>
                                            </div>
                                        </div>
                                    </div>
                                    <br>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group form-animate-text">
                                                <input type="number"  min="1" class="form-text"    name="DOCI" required>
                                                <span class="bar"></span>
                                                <label><span class="glyphicon glyphicon-pencil"></span>Número  del documento de identicación </label>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group form-animate-text">
                                                <input type="text" class="datepicker form-text dateAnimate" name="date" required>
                                                <span class="bar"></span>
                                                <label><span class="fa fa-calendar"></span> FECHA DE NACIMIENTO</label>
                                            </div>
                                        </div>
                                    </div>
                                    <br>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group form-animate-text">
                                                <input type="password"  class="form-text"   name="PrimeraContrasena" required>
                                                <span class="bar"></span>
                                                <label><span class="glyphicon glyphicon-pencil"></span>Ingresar contraseña </label>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label><span class="fa fa-users"></span> roles</label>
                                                <select name="Roles[]" class="js-example-basic-multiple" multiple="multiple" >
                                                  <!--  <?//php foreach ($this->mdlUser->listarRoles() as $value): ?>
                                                        <option > <//?= $value->NombreRol ?></option>
                                                    <?//PHP endforeach; ?>
-->
                                                </select>
                                            </div>

                                            <!-- fin formulario -->
                                        </div>
                                    </div>
                                    <div class="row">
                                        <input type="submit" class="btn btn-success" name="btnGuardar" value="guardar">
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingTwo">
                            <h3 class="panel-title text-center">
                                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <samp class="fa fa-search"></samp>
                                    LISTA DE USUARIOS
                                </a>
                            </h3>
                        </div>
                        <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                            <div class="panel-body">
                                <div class="table-responsive text-center">
                                    <table class="table table-bordered text-center"  style="color: #002a80">
                                        <thead class="table">
                                            <tr class="text-center">
                                                <th>ID</th>
                                                <th>Primer Nombre</th>
                                                <th>Segundo Nombre</th>
                                                <th>Primer Apellido</th>
                                                <th>Segundo Apellido</th>
                                                <th>Edad</th>
                                                <th>Numero Contacto</th>
                                                <th>Numero Cedula</th>
                                                <th>Fecha de nacimineto</th>
                                                <th>Modificar</th>
                                                <th>Eliminar</th>
                                            </tr>
                                        </thead>
                                        <tbody class="table table-hover" style="color: #002a80">
                                            <?php foreach ($this->mdlUser->listar() as $value): ?>
                                                <tr>
                                                    <td> <?= $value->IDUSUARIOS ?></td>
                                                    <td> <?= $value->PRIMER_NOMBRE ?></td>
                                                    <td> <?= $value->SEGUNDO_NOMBRE ?></td>
                                                    <td> <?= $value->PRIMER_APELLIDO ?></td>
                                                    <td> <?= $value-> SegundoApellido?></td>
                                                    <td> <?= $value->EDAD ?></td>
                                                    <td> <?= $value->NUMERO_CONTACTO ?></td>
                                                    <td> <?= $value->NumeroIdentificacion ?></td>
                                                    <td> <?= $value->FechaNacimiento ?></td>
                                                    <td> <input type="submit" class="btn  btn-warning" name="btnModificar" value="Modificar"></td>
                                                    <td>  <input type="submit" class="btn btn-danger" name="btnEliminar" value="eliminar"></td>
                                                </tr>
                                            <?PHP endforeach; ?>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!--end contenido-->
