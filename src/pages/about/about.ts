import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import {Modal1Page} from "../index.pages";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  private _datacards: any;

  constructor(public navCtrl: NavController,
              private modarlCtrl: ModalController) {

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
  
  abrir_modal1(){

    this.modarlCtrl.create( Modal1Page ).present();

  }
}
