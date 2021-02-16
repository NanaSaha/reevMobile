import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CeleblistPage } from './celeblist';

@NgModule({
  declarations: [
    CeleblistPage,
  ],
  imports: [
    IonicPageModule.forChild(CeleblistPage),
  ],
})
export class CeleblistPageModule {}
