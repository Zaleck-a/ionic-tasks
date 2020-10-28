import { Component, Input, IterableDiffers, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @ViewChild( IonList ) lista: IonList;
  @Input() terminada = true;


  constructor(public deseosService: DeseosService, private route: Router, private alertCtrl: AlertController) { }

  ngOnInit() {}


  listaSeleccionada( lista: Lista){

    if ( this.terminada ){
      this.route.navigateByUrl(`/tabs/tab2/agregar/${ lista.id }`);
    } else{
      this.route.navigateByUrl(`/tabs/tab1/agregar/${ lista.id }`);
    }

  }

  borrarLista(item: Lista){
    this.deseosService.borrarLista( item );
  }

  async cambiarTitulo(item: Lista){
    const alert = await this.alertCtrl.create({
      header: 'Nuevo titulo',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          value: item.titulo,
          placeholder: 'Nombre del nuevo titulo'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('cancelar');
            this.lista.closeSlidingItems();
          }
        },
        {
          text: 'Cambiar',
          handler: ( data ) => {


            if ( data.titulo.length === 0 ){
              this.lista.closeSlidingItems();
              return;
            }

            item.titulo = data.titulo;
            this.deseosService.guardarStorage();
            this.lista.closeSlidingItems();

          }
        }
      ]
    });

    await alert.present();
  }

}
