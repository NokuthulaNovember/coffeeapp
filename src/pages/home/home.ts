
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from './../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  counter:number=1
  whipcreamprice=25;
  cinnamonprice=30;
  chocolateprice=35;
  coffeeprice=20;
  quantity=1;
  price=0.0;
  
  whipcream=false;
  cinnamon=false;
  chocolate=false;
  coffee=false;


  purchase():void{
    this.calcCost();
    this.Order();
  }
  calcCost():number{
    this.price=this.coffeeprice*this.quantity;

    if (this.whipcream&& this.cinnamon&& this.chocolate&& this.coffeeprice)
this.price=((this.whipcreamprice) + (this.cinnamonprice) + (this.chocolateprice) + (this.coffeeprice))*this.quantity;


  else if(this.whipcream&& this.coffeeprice){
     this.price=(this.coffeeprice+this.whipcreamprice)*this.quantity;

   }

   else if(this.cinnamon&& this.coffeeprice){
    this.price=(this.coffeeprice+this.cinnamonprice)*this.quantity;
 
    }
   else if(this.chocolate&& this.coffeeprice){
      this.price=(this.coffeeprice+this.chocolateprice)*this.quantity;
  }
  return this.price;
}

  Reset():void{
    this.whipcreamprice=0;
    this.cinnamonprice=0;
  }
  forCinnamon=0;
  constructor(public navCtrl: NavController) {

  }
  Quantity(value:number):void{

    this.quantity+=value;
}


Cinnamon(value:number):void{

  this.forCinnamon+=value;
}


Order():void{
  this.navCtrl.push(DetailsPage,{
    data:this.price
  });
}

}

