<div><!--contenido-->
    <div id="content">
        <div class="panel-body text-center">
            <div class="form-group">
                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                    <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingOne">
                            <h4 class="panel-title">
                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Registrar Nuevo Producto
                                </a>
                            </h4>
                        </div>
                        <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                            <div class="panel-body">
                                <form id="FrmRegistrarProducto" method="post" enctype="multipart/form-data"> 
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group form-animate-text">
                                                <input type="text" class="form-text"   name="txtNombreProducto" required>
                                                <span class="bar"></span>
                                                <label><span class="glyphicon glyphicon-pencil"></span> Nombre Producto </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group form-animate-text">
                                                <input type="text" class="datepicker form-text dateAnimate" name="date" required>
                                                <span class="bar"></span>
                                                <label><span class="fa fa-calendar"></span> Fecha de registristo</label>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="exampleInputFile"><samp class="glyphicon glyphicon-picture"></samp> Imagen del Producto</label>
                                                <input type="file" id="exampleInputFile" name="imgproducto">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <label class="label label-default"><span class="glyphicon glyphicon-pencil"></span>Descripción producto </label>
                                            <br>
                                            <textarea class="form-control" rows="5" id="comment" name="txtDescripcion"></textarea>
                                        </div>
                                    </div>
                                    <br>
                                    <div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <SELECT NAME="TipoProducto"  class="form-control" id="sel1" onChange="pagoOnChange(this)">
                                                    <OPTION> Categoria </OPTION>
                                                    <OPTION VALUE="aerosoles">Aerosoles</OPTION>
                                                    <OPTION VALUE="camisas">Camisas</OPTION> 
                                                    <OPTION VALUE="calzado">calzado</OPTION> 
                                                </SELECT>
                                            </div>
                                            <br><br><br><br>
                                            <!--  camisas-->
                                            <div id="camisas" style="display:none;">
                                                <div class="col-md-6">
                                                    <div class="form-group" name="">
                                                        <label for="sel1">Talla</label>
                                                        <select class="js-example-basic-single" name="TallaCamilla">
                                                        <option></option>
                                                            <option>XXS</option>
                                                            <option>xs</option>
                                                            <option>S</option>
                                                            <option>M</option>
                                                            <option>L</option>
                                                            <option>XL</option>
                                                            <option>XXL</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group form-animate-text">
                                                        <input type="text" class="form-text"   name="txtcolor" >
                                                        <span class="bar"></span>
                                                        <label><span class="glyphicon glyphicon-pencil"></span>color </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <!--Aerosoles-->
                                            <div id="aerosoles" style="display:none;">
                                                <div class="col-md-6">
                                                    <div class="form-group form-animate-text">
                                                        <input type="text" class="datepicker form-text dateAnimate" name="datefinal">
                                                        <span class="bar"></span>
                                                        <label><span class="fa fa-calendar"></span> Fecha de vencimiento</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group form-animate-text">
                                                        <input type="text" class="form-text"   name="txtcolor" >
                                                        <span class="bar"></span>
                                                        <label><span class="glyphicon glyphicon-pencil"></span> color </label>
                                                    </div>
                                                </div>


                                                <div class="col-md-6">
                                                    <div class="form-group form-animate-text">
                                                        <input type="text" class="form-text"   name="txtMarca">
                                                        <span class="bar"></span>
                                                        <label><span class="glyphicon glyphicon-pencil"></span> Marca </label>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group form-animate-text">
                                                        <input type="time" class="form-text"   name="txtSecado" >
                                                        <span class="bar"></span>
                                                        <label><span class="glyphicon glyphicon-pencil"></span> secado </label>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group form-animate-text">
                                                        <input type="text" class="form-text"   name="txtRendimiento" >
                                                        <span class="bar"></span>
                                                        <label><span class="glyphicon glyphicon-pencil"></span> Rendimiento </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <!--calzado -->
                                            <div id="calzado" style="display:none;">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label for="exampleInputFile"><samp class="glyphicon glyphicon-picture"></samp> TALLA CALZADO</label>
                                                        <select class="js-example-basic-single" name="tallaCalzado">
                                                        <option></option>
                                                            <optgroup style="color: black">INFANTILES Y NIÑOS</optgroup>
                                                            <option>20</option>
                                                            <option>21</option>
                                                            <option>22</option>
                                                            <option>23</option>
                                                            <option>24</option>
                                                            <option>25</option>
                                                            <option>26</option>
                                                            <option>27</option>
                                                            <option>27 1/2</option>
                                                            <option>28</option>
                                                            <option>28 1/2</option>
                                                            <option>29</option>
                                                            <option>30</option>
                                                            <optgroup>jovenes</optgroup>
                                                            <option>30 1/2</option>
                                                            <option>31 </option>
                                                            <option>32</option>                                          
                                                            <option>32 1/2</option>
                                                            <option>33</option>
                                                            <option>33 1/2</option>
                                                            <option>34</option>
                                                            <option>34 1/2</option>
                                                            <option>35</option>
                                                            <option>36</option>
                                                            <option>36 1/2</option>
                                                            <optgroup>Mujeres</optgroup>
                                                            <option>34 1/2</option>
                                                            <option>35</option>
                                                            <option>36</option>
                                                            <option>36 1/2</option>
                                                            <option>37</option>
                                                            <option>37 1/2</option>
                                                            <option>38</option>
                                                            <option>39</option>
                                                            <option>39 1/2</option>
                                                            <option>40</option>
                                                            <optgroup>Hombres</optgroup>
                                                            <option>38</option>
                                                            <option>39</option>
                                                            <option>39 1/2</option>
                                                            <option>40</option>
                                                            <option>40 1/2</option>
                                                            <option>41</option>
                                                            <option>41 1/2</option>
                                                            <option>42</option>
                                                            <option>43</option>
                                                            <option>43 1/2</option>
                                                            <option>44</option>
                                                            <option>44 1/2</option>
                                                            <option>45</option>
                                                            <option>45 1/2</option>
                                                        </select>
                                                    </div>  
                                                    <div class="col-md-6">
                                                        <div class="form-group form-animate-text">
                                                            <input type="text" class="form-text"   name="txtcolor">
                                                            <span class="bar"></span>
                                                            <label><span class="glyphicon glyphicon-pencil"></span>color </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label for="exampleInputFile"><samp class="glyphicon glyphicon-picture"></samp> Tipo</label>
                                                        <select class="js-example-basic-single" name="TipoCalzado">
                                                            <option>  </option>
                                                            <option> Bota </option>
                                                            <option> Tennis </option>
                                                        </select> 
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <script>
                                                function pagoOnChange(sel) {
                                                    if (sel.value == "aerosoles") {
                                                        $("#aerosoles").show();
                                                        $("#camisas").hide();
                                                        $("#calzado").hide();

                                                    }
                                                    if (sel.value == "camisas") {
                                                       $("#camisas").show();
                                                       $("#aerosoles").hide();
                                                       $("#calzado").hide();
                                                   }
                                                   if (sel.value == "calzado") {

                                                    $("#calzado").show();
                                                    $("#aerosoles").hide();
                                                    $("#camisas").hide();

                                                }
                                            }
                                        </script>
                                    </div>
                                    <button type="button" class="btn btn-success" onclick="GuardarProducto()">Guardar</button>
                                </div>
                            </div>
                        </form>
                        <BR>

                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
</div>
</div>
</div>

