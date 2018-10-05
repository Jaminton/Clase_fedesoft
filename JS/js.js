//comentario simple
/**
 * comentario multilinea
 * @argument salon esto es lo que hace 
 */
//Tipo  de datos 
//BOOLEANO true/false 
//number
//string
//undefine
//null


var verificado = false;
verificado = true;
//negacion
!verificado
// AND --> &&
verificado && false;
//OR --> ||
verificado || true;

var edad = 15;
var peso = 70.67;
var latitud = 4.1455


edad++; // edad=edad+1;
edad--; // edad =edad-1;

//Math para trabajar operaciones con numeros 

var numeroAleatorio = Math.random() * 100;
var potencia = Math.pow(10, 3);
var logaritmo = Math.log10(1000);

console.log(numeroAleatorio, potencia);
console.log(logaritmo);
alert("logarotmo de 100" + logaritmo);// detiene el flujo del codigo
console.log("No esta verificado", !verificado);
document.querySelector('.uno');

var listaNombres = ['juan', 'pablo', 'David'];
var listaEdades = [10, 15, 50, 40];

//objetos agrupaciones de datos 
// se establecen con llave valor 

var eduardo = {
    nombre: "eduardo", apellido: "perez", edad: 30,

    casa: [
        {


            dirreccion: "123",
            viveAqui: false

        },
        {}, {}
    ]



};

//eduardo.casa[0].dirreccion

console.log(eduardo);

//for(var i=0; i<50; i++){
for (var indice in listaNombres) {
    console.log(indice);
    //listaNombres[i];

    //console.log(i);
}

//for(var i=0; i<=50;i=i+2){
for (var valor of listaNombres) {
    console.log(valor);
    //console.log(i); 

}

var mifuncion = function (arg1, arg2, arg3) {
    return arg1 + arg2 + arg3;

}
console.log(mifuncion(1, 2, 4));
console.log(mifuncion("a", 2, 4));




//console.nombre.split();


var palindromos = function (nombre,nombre2) {

    var nombreseparado = nombre.split('');
    console.log(nombreseparado);
    nombreseparado.reverse();
    console.log(nombreseparado);
    var nombreseparado2 = nombre2.split('');
    console.log(nombreseparado2);
    nombreseparado2.reverse();
    console.log(nombreseparado2);
for(var valor of nombreseparado){

    

    console.log(valor);

}

    var resultado = true;

    //if(){

    //}else{


    // }

    return resultado;


}
nombre = prompt('Ingrese una palabra:', '');
nombre2 = prompt('Ingrese una palabra:', '');

palindromos(nombre,nombre2);





