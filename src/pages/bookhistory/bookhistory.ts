import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';

/**
 * Generated class for the BookhistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bookhistory',
  templateUrl: 'bookhistory.html',
})
export class BookhistoryPage {


  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }

  

  
    view_video() {
    let profileModal = this.modalCtrl.create("ViewVideoPage");
    profileModal.present();
    }
  
  
  upload_video() {
      let profileModal = this.modalCtrl.create("UploadvideoPage");
    profileModal.present();
    
  }
}
