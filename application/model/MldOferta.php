<?php

class MldOferta {

    private $IDOFERTAS;
    private $Valor;
    private $FECHAINICIO;
    private $FECHAFINAL;
    private $FECHAREGISTRO;
    private $Estado;


    //metodos magicos get y set
    public function __GET($atributo) {
        return $this->$atributo;
    }

    public function __SET($atributo, $value) {
        $this->$atributo = $value;
    }

    function __construct($db) {
        try {
            $this->db = $db;
        } catch (PDOException $e) {
            exit('Database connection could not be established.');
        }
    }

    public function registrar() {
        $sql = 'CALL RU_RegistrarOferta(?,?,?,?)';
        $sth = $this->db->prepare($sql);
        $sth->bindParam(1, $this->Valor);
        $sth->bindParam(2, $this->FECHAINICIO);
        $sth->bindParam(3, $this->FECHAFINAL);
        $sth->bindParam(4, $this->FECHAREGISTRO);
        return $sth->execute();
    }

    PUBLIC function ListarOfertas(){
     $sql= 'CALL RU_ListarOfertas()';
     $sth= $this->db->prepare($sql);
     $sth->execute();
     return $sth->fetchall();
    }

    PUBLIC function ListarOfertasID(){
     $sql= 'CALL RU_ListarOfertasID()';
     $sth= $this->db->prepare($sql);
     $sth->execute();
     return $sth->fetchall();
    }

    public function CambiarEstado() {
        $sql ='CALL RU_ActualizarEstadoOfertas(?)';
        $sth = $this->db->prepare($sql);
        $sth->bindParam(1, $this->FECHAFINAL);
        return $sth->execute();   
    }

    public function CambiarEstadoPorId() {
        $sql ='CALL     RU_ActualizarEstadoOfertasPorId(?,?)';
        $sth = $this->db->prepare($sql);
        $sth->bindParam(1, $this->IDOFERTAS);
        $sth->bindParam(2, $this->Estado);
        return $sth->execute();   
    }

    public function ListarOfertasParamodificar() {
        $sql ='CALL   RU_ListarOfertasParamodificar(?)';
        $sth = $this->db->prepare($sql);
        $sth->bindParam(1, $this->IDOFERTAS);
         $sth->execute();
        return $sth->fetchall();   
    }

    public function ActualizarValorOferta() {
        $sql ='CALL   RU_ActualizarValorOferta(?,?)';
        $sth = $this->db->prepare($sql);
        $sth->bindParam(1, $this->IDOFERTAS);
        $sth->bindParam(2, $this->Valor);
          return $sth->execute();
    }

    
    

}