import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-view-video',
  templateUrl: 'view-video.html',
})
export class ViewVideoPage {
  video_url;

  constructor(public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams) {

    this.video_url = "assets/imgs/reev1.mp4"
  }

 dismiss() {
    
    this.viewCtrl.dismiss();
   }

}
