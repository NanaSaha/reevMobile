import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
 import { GooglePlus } from '@ionic-native/google-plus';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loader;
  
  userData: any = {};
   displayName: any;
  email: any;
  familyName: any;
  givenName: any;
  userId: any;
  imageUrl: any;
  token;

  isLoggedIn:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,private loadingCtrl: LoadingController, private googlePlus: GooglePlus) {
  }

  // ,  private googlePlus: GooglePlus


  googleSignIn() {
  //   this.googlePlus.login({})
  //     .then(result => this.userData = result)
  //     .catch(err => this.userData = `Error ${JSON.stringify(err)}`);
  // }


  this.googlePlus.login({})
      .then(res => {
        console.log(res);
        this.displayName = res.displayName;
        this.email = res.email;
        this.familyName = res.familyName;
        this.givenName = res.givenName;
        this.userId = res.userId;
        this.imageUrl = res.imageUrl;
        this.token = res.accessToken;

        this.isLoggedIn = true;
      })
    .catch(err => console.error(err));

}
      


    logout() {
    this.googlePlus.logout()
      .then(res => {
        console.log(res);
        this.displayName = "";
        this.email = "";
        this.familyName = "";
        this.givenName = "";
        this.userId = "";
        this.imageUrl = "";

        this.isLoggedIn = false;
      })
      .catch(err => console.error(err));
  }

  showLoader() {
    // this.loader = this.loadingCtrl.create({
    //   content: 'Please wait...',
    //   spinner: 'dots',
    //   duration: 5000
    // });

    this.loader = this.loadingCtrl.create({
     spinner: 'hide',
      content: `
      <div class="custom-spinner-container">
          <div class="custom-spinner-box">
             <img src="assets/imgs/loado.svg" style="max-width: 100%;
             width: 140px !important;"/>
          </div>
        </div>`,
      duration: 10000000000
    });


    
    this.loader.present();
  }

  login() {
      //this.showLoader()
    this.navCtrl.setRoot("TabsPage")
    // this.loader.dismiss();
  }


}
