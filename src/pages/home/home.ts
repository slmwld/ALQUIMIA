import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import {Modal3Page} from "../index.pages";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private _datacards: any;

  constructor(public navCtrl: NavController,
              private modalCtrl: ModalController) {

    this. _datacards = [
      {title: "Aquimia Pasteleria Boutique", image: "logo-alquimia_v2.png", descripcion: "Lorem."},
      {title: "Pastelerias Gurmet, y alta calidad", image: "890126.jpg", descripcion: "Lorem."},
      {title: "Elaboradis con productos de alta calidad ", image: "DSC_8841.jpg", descripcion: "Lorem."}
    ];

  }

  recargar( refresher: any){
    console.log('inicio recarga');

    setTimeout( ()=>{
      console.log('termino recarga');

      this. _datacards = [
        {title: "Aquimia Pasteleria Boutique", image: "logo-alquimia_v2.png", descripcion: "Lorem."},
        {title: "Pastelerias Gurmet, y alta calidad", image: "890126.jpg", descripcion: "Lorem."},
        {title: "Elaboradis con productos de alta calidad ", image: "DSC_8841.jpg", descripcion: "Lorem."}
      ];
      refresher.complete();
    } ,1500)
  }

  abrir_modal3(){

    this.modalCtrl.create( Modal3Page ).present();
  }
}
