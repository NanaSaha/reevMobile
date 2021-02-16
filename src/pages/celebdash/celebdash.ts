import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CelebdashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-celebdash',
  templateUrl: 'celebdash.html',
})
export class CelebdashPage {
    tab1Root = "CelebdashPage";
  tab2Root = "BookhistoryPage";
  tab3Root = "ContactPage";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CelebdashPage');
  }

}
