import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookhistoryPage } from './bookhistory';

@NgModule({
  declarations: [
    BookhistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(BookhistoryPage),
  ],
})
export class BookhistoryPageModule {}
