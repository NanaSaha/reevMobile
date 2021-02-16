import { Component } from '@angular/core';
import {IonicPage, NavController,ActionSheetController ,ModalController} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public actionSheetCtrl: ActionSheetController,public modalCtrl: ModalController) {



  }

  login() {
    this.navCtrl.push("LoginPage");

  }



  //  signup() {
  //   this.navCtrl.push("SignupPage");

  // }

  signup() {
    let profileModal = this.modalCtrl.create("SignupmodalPage");
    profileModal.present();
  }

}
