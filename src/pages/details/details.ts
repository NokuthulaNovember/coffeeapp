import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  counter:number=1
whipcream=25;
cinnamon=30;
chocolate=35;
coffee=20;
quantity=0;
price=0.0;

wwhipcream=false;
ccinnamon=false;
cchocolate=false;



  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
    this.price=navParams.get('data');
  }

  Reset():void{
    this.whipcream=0;
    this.cinnamon=0;
  }
  
  AddOrder() {
    let alert = this.alertCtrl.create({
      
      title: 'Thank you',
      subTitle: 'here is your oder',
      buttons: ['ok']
    });
    alert.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
