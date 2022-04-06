export class Contacto {
    nombre = '';
    apellido= '';
    correo= '';
    statusCon= false

    constructor(nombre,apellido,correo,statusCon){
    this.nombre = nombre;
    this.apellido=apellido;  
    this.correo=correo;
    this.statusCon=statusCon  

    }
}