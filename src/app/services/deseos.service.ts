import { Lista } from 'src/app/models/lista.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = [];

  constructor() {
    this.cargarStorage();

    // const LISTA1 = new Lista('Recolectar piedras del infinito');
    // const LISTA2 = new Lista('Heroes ha desaparecer');


    // this.listas.push(LISTA1, LISTA2);

    // console.log(this.listas);
    // console.log(' ya se cargo el contructor');
  }

  crearLista( titulo: string){
    const nuevaLista = new Lista( titulo );
    this.listas.push( nuevaLista );
    this.guardarStorage();

    return nuevaLista.id;
  }

  borrarLista( lista: Lista){
    this.listas = this.listas.filter( listaData => listaData.id !== lista.id);

    this.guardarStorage();
  }


  obtenerLista( id: string | number){
    id = Number(id);

    return this.listas.find( listaData => listaData.id === id );

  }

  guardarStorage(){
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  cargarStorage(){

    if ( localStorage.getItem('data') ){
    this.listas = JSON.parse( localStorage.getItem('data') );
    // console.log('hay data en el local storage');
    }else{
      this.listas = [];
    }

  }
}

