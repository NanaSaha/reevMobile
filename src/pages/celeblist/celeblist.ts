import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CeleblistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-celeblist',
  templateUrl: 'celeblist.html',
})
export class CeleblistPage {

  // tab1Root = "HomePage";
  // tab2Root = "AboutPage";
  // tab3Root = "ContactPage";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CeleblistPage');
  }

  details() {
    this.navCtrl.push("CelebdetailsPage")
  }

}
