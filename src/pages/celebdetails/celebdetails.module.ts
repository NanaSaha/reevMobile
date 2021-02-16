import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CelebdetailsPage } from './celebdetails';

@NgModule({
  declarations: [
    CelebdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CelebdetailsPage),
  ],
})
export class CelebdetailsPageModule {}
