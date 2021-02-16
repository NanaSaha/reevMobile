import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-signupmodal',
  templateUrl: 'signupmodal.html',
})
export class SignupmodalPage {

  constructor(public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams) {
  }

   dismiss() {
    
    this.viewCtrl.dismiss();
   }
  
  signup_user() {
    
    this.navCtrl.push("SignupPage");
     this.viewCtrl.dismiss();

   }
  
  signup_celeb() {
    
    this.navCtrl.push("SignupcelebPage");
     this.viewCtrl.dismiss();

  }

}
