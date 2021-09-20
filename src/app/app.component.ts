import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}

class Producto {
  pcodigo: number;
  pnombre: string;
  pcantidad: number;
  pmarca: string;
  pprecio_unitario: string;


  constructor() {
    this.pcodigo= 0;
    this.pnombre = '';
    this.pcantidad = 0;
    this.pmarca= '';
    this.pprecio_unitario= '';
  }

  MODIFICARCANTIDAD(operacion: string, cantidad: number): boolean {
    let status:boolean = false;

    if (cantidad < 0) 
    {console.log('Ingrese valores superiores');}
    else {
      switch (operacion) {
        case 'añadir':
            this.pcantidad += cantidad;
             console.log(`La cantidad es del producto [${this.pnombre}] a +${cantidad}.`);
            return true;
        case 'quitar':
          if ((this.pcantidad - cantidad) < 0) {
            console.log('No se puede realizar esta operacion porque no hay suficientes productos.');
            return false;
          }
          else {
            this.pcantidad -= cantidad;
            console.log(`La cantidad se reducio [${this.pnombre}] a -${cantidad}.`);
            return true;
          }
      }
      console.log(`La cantidad del producto  [${this.pnombre}] es de ${this.pcantidad}.`);
      return false;
    }
    return status;
  }
}


//    Almacen
class Almacen {
  anombre: string;
  aproductos: Producto[];

  constructor() {
    this.anombre = ''
    this.aproductos = [];
  }
}




//  [ FUNCIONES ] -----------------------------------------------------------------------------------------------------------------
function SI_EXISTEPRODUCTOALMACEN(nombreproducto: string, almacen: Almacen): boolean{
  let status:boolean = false;
  almacen.aproductos.forEach((Producto) => {
    if (Producto.pnombre == nombreproducto) {
      status = true;
    }
  });
  return status;
}

function BUSCAR(nombreproducto: string, almacen: Almacen){
  if (SI_EXISTEPRODUCTOALMACEN(nombreproducto, almacen) == true) 
  {return almacen.aproductos.find(Producto => Producto.pnombre === nombreproducto);}
  return null;
}

function MOVER(origen: Almacen, nombreproducto: string, cantidad: number, adestino: Almacen){
  if (SI_EXISTEPRODUCTOALMACEN(nombreproducto,origen)== true && SI_EXISTEPRODUCTOALMACEN(nombreproducto,adestino) == true){
    if (BUSCAR(nombreproducto, origen)?.MODIFICARCANTIDAD('quitar', cantidad) == true){
      if (BUSCAR(nombreproducto, adestino)?.MODIFICARCANTIDAD('añadir', cantidad) == true){
        console.log(`Se cambio  [${cantidad} ${nombreproducto}] del  [${origen.anombre}] al almacen [${adestino.anombre}].`)
      }
    }
  }
}

function MOSTRARProductosA(almacen: Almacen){
  console.log(`Mostrando los productos del almacen [${almacen.anombre}]`)
  console.log('\tCodigo\t\tNombre Producto\t\tCantidad\t\tMarca\t\tPrecio')
  almacen.aproductos.forEach((Producto) => {
    console.log(`\t\t${Producto.pcodigo}\t\t\t${Producto.pnombre}\t\t\t${Producto.pcantidad}\t\t\t${Producto.pmarca}\t\t\t${Producto.pprecio_unitario}`);
  });
  console.log('------------------------------------------------------')
}



//Ingreso de DAtos de los MAteriales de COnstruccion en ALmacen 1
const AlmacenNro1 = new Almacen(); AlmacenNro1.anombre = 'ALMACEN 1 de MATERIALES DE CONSTRUCCION' ;
  const producto01 = new Producto();
    producto01.pcodigo= 1;
    producto01.pnombre = "CEMENTO";
    producto01.pcantidad = 30;
    producto01.pmarca = "YURA";
    producto01.pprecio_unitario ="S/.30";

const producto02 = new Producto();
    producto02.pcodigo= 2;
    producto02.pnombre = "YESO";
    producto02.pcantidad = 5;
    producto02.pmarca = "REYNA";
    producto02.pprecio_unitario ="S/.20";

const producto03 = new Producto();
    producto03.pcodigo= 3;
    producto03.pnombre = "Pintura";
    producto03.pcantidad = 15;
    producto03.pmarca = "Pato";
    producto03.pprecio_unitario ="S/.25";

const producto04 = new Producto();
    producto04.pcodigo= 4;
    producto04.pnombre = "Tiza";
    producto04.pcantidad = 7;
    producto04.pmarca = "Martell";
    producto04.pprecio_unitario = "S/.4";

const producto05 = new Producto();
    producto05.pcodigo= 5;
    producto05.pnombre = "Barniz";
    producto05.pcantidad = 21;
    producto05.pmarca = "Tekno";
    producto05.pprecio_unitario = "S/.90" ;

const producto06 = new Producto();
    producto06.pcodigo= 6;
    producto06.pnombre = "Mayólic";
    producto06.pcantidad = 30;
    producto06.pmarca = "Decor";
    producto06.pprecio_unitario = "S/.20";
  
const producto07 = new Producto();
    producto07.pcodigo= 7;
    producto07.pnombre = "Barras";
    producto07.pcantidad = 50;
    producto07.pmarca = "Aceros Arequipa";
    producto07.pprecio_unitario = "S/.40";

//Mostrar los Productos en la consola
AlmacenNro1.aproductos.push(producto01)
AlmacenNro1.aproductos.push(producto02)
AlmacenNro1.aproductos.push(producto03)
AlmacenNro1.aproductos.push(producto04)
AlmacenNro1.aproductos.push(producto05)
AlmacenNro1.aproductos.push(producto06)
AlmacenNro1.aproductos.push(producto07)


//Ingreso de DAtos de los MAteriales de COnstruccion en ALmacen 2
const AlmacenNro2 = new Almacen(); AlmacenNro2.anombre = 'ALMACEN 2 de MATERIALES DE CONSTRUCCION' ;
  const producto11 = new Producto();
    producto11.pcodigo= 11;
    producto11.pnombre = "CEMENTO";
    producto11.pcantidad = 9;
    producto11.pmarca = "YURA";
    producto11.pprecio_unitario = "S/.30";

const producto12 = new Producto();
    producto12.pcodigo= 12;
    producto12.pnombre = "YESO";
    producto12.pcantidad =25 ;
    producto12.pmarca = "REYNA";
    producto12.pprecio_unitario ="S/.20";

const producto13 = new Producto();
    producto13.pcodigo= 13;
    producto13.pnombre = "Pintura";
    producto13.pcantidad = 8;
    producto13.pmarca = "Pato";
    producto13.pprecio_unitario = "S/.25";

const producto14 = new Producto();
    producto14.pcodigo= 14;
    producto14.pnombre = "Tiza";
    producto14.pcantidad = 3;
    producto14.pmarca = "Martell";
    producto14.pprecio_unitario = "S/.4";

const producto15 = new Producto();
    producto15.pcodigo= 15;
    producto15.pnombre = "Barniz";
    producto15.pcantidad = 12;
    producto15.pmarca = "Tekno";
    producto15.pprecio_unitario = "S/.90" ;

const producto16 = new Producto();
    producto16.pcodigo= 16;
    producto16.pnombre = "Mayólic";
    producto16.pcantidad = 20;
    producto16.pmarca = "Decor";
    producto16.pprecio_unitario = "S/.20";
  
const producto17 = new Producto();
    producto17.pcodigo= 17;
    producto17.pnombre = "Barras";
    producto17.pcantidad = 41;
    producto17.pmarca = "Aceros Arequipa";
    producto17.pprecio_unitario = "S/.40";


//Mostrar los Productos en la consola
AlmacenNro2.aproductos.push(producto11)
AlmacenNro2.aproductos.push(producto12)
AlmacenNro2.aproductos.push(producto13)
AlmacenNro2.aproductos.push(producto14)
AlmacenNro2.aproductos.push(producto15)
AlmacenNro2.aproductos.push(producto16)
AlmacenNro2.aproductos.push(producto17)




//Ejecuciones de MOVIMIENTOS DE MATERIAL POR ALMACEN

MOSTRARProductosA(AlmacenNro2);
MOSTRARProductosA(AlmacenNro1);

MOVER(AlmacenNro2,'CEMENTO',1,AlmacenNro1);
MOVER(AlmacenNro1,'YESO',5,AlmacenNro2);
MOVER(AlmacenNro2,'Tiza',9,AlmacenNro1);
MOVER(AlmacenNro1,'Barniz',20,AlmacenNro2);
MOVER(AlmacenNro1,'Mayólic',25,AlmacenNro2);
MOVER(AlmacenNro2,'Barras',40,AlmacenNro1);

MOSTRARProductosA(AlmacenNro2);
MOSTRARProductosA(AlmacenNro1);

