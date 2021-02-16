import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CelebdashPage } from './celebdash';

@NgModule({
  declarations: [
    CelebdashPage,
  ],
  imports: [
    IonicPageModule.forChild(CelebdashPage),
  ],
})
export class CelebdashPageModule {}
