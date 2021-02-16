import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SignupcelebPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signupceleb',
  templateUrl: 'signupceleb.html',
})
export class SignupcelebPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

   complete() {
    this.navCtrl.push("CompleteprofilePage")
  }

}
