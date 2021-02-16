import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-celebtabs',
  templateUrl: 'celebtabs.html',
})
export class CelebtabsPage {
  tab1Root = "CelebdashPage";
  tab2Root = "BookhistoryPage";
  tab3Root = "PaymentsPage";
  tab4Root = "ContactPage";
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CelebtabsPage');
  }

}
