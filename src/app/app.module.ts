import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import {LoginPage, SignupPage, TabsPage }  from '../pages/index';
import {LoginProvider} from '../providers/index';

import {AccountsPage, CurrentPage, ShareAccount} from '../pages/models/index';
import {ChangePasswPage, StandingOrdersPage, TransEnquiryPage, TransferMoneyPage } from '../pages/sidemenu/index';

import {Paybill, TransferAnotherMenA, TransferBetwMyA, TransferExtA} from '../pages/sidemenu/transfer-money/index';

import {AccountService} from '../services/index';
import {RtcurrentPage} from '../pages/models/current/rtcurrent/index';
import {rtSharePage} from '../pages/models/share/rtshare/rtshare';
//import {ModalBetwA} from '../pages/sidemenu/transfer-money/paybill/index';
//import {ModalBetwA} from '../pages/sidemenu/transfer-money/paybill/index';



@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    LoginPage, SignupPage, TabsPage,
    AccountsPage, CurrentPage, ShareAccount,
    ChangePasswPage, StandingOrdersPage, TransEnquiryPage, TransferMoneyPage,
    Paybill, TransferAnotherMenA, TransferBetwMyA, TransferExtA,
    RtcurrentPage, rtSharePage
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
    AccountsPage, CurrentPage, ShareAccount,
    ChangePasswPage, StandingOrdersPage, TransEnquiryPage, TransferMoneyPage,
    Paybill, TransferAnotherMenA, TransferBetwMyA, TransferExtA,
     RtcurrentPage, rtSharePage
  ],
  providers: [LoginProvider, AccountService]
})
export class AppModule {}
