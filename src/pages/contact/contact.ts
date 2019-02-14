import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  private _datacards: any;

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController) {}
  doAlert() {
    let alert = this.alertCtrl.create({
      title: 'Upss',
      message: 'Lo sentimos la pagina esta en contrucción',
      buttons: ['Ok']
    });
    alert.present()
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

}
