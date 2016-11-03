import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import {LoginPage, SignupPage, TabsPage }  from '../pages/index';
import {LoginProvider} from '../providers/index';

import {AccountsPage, CurrentPage, ShareAccount} from '../pages/models/index';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    LoginPage, SignupPage, TabsPage,
    AccountsPage, CurrentPage, ShareAccount
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    LoginPage, SignupPage, TabsPage,
    AccountsPage, CurrentPage, ShareAccount
  ],
  providers: [LoginProvider]
})
export class AppModule {}
