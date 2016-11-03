//import {ViewChild} from '@angular/core'; 
import { NavController, NavParams, App} from 'ionic-angular';//, Alert
import {Component,  OnInit} from '@angular/core';
//import {AccountService} from '../../services/account-service';
//import {RtcurrentPage} from '../rtcurrent/rtcurrent';
//import {LoginPage} from '../login/login';
import {LoginPage} from '../../index';
//import {RtcurrentPage} from './rtcurrent/index';


@Component({
  templateUrl: 'current.html',
  providers: []//AccountService
})
export class CurrentPage implements OnInit{

   // the root nav is a child of the root app component
  // @ViewChild(Nav) gets a reference to the app's root nav
  //@ViewChild(Nav) nav: Nav;
//private app: IonicApp,

/*  private currents = [];
  public data_error: Boolean = false;*/

  constructor(
    public nav : NavController,
    public navParams: NavParams, public app: App
    //,private _accountService : AccountService
    ) {

  	
  }

   ngOnInit(){
     //this.getCurrentAccounts();
   }

  //  getCurrentAccounts() {
  //     this._accountService.getCurrentAccountType().subscribe(
  //       data => { this.currents = data
  //       console.log("accounts: " + JSON.stringify(this.currents)); 
        
  //       },
  //       err => { this.data_error = true }
  //     );
  //   }

  //   public gotoPagertCurrent(num){
  //     let numAc = num;
  //     this.nav.push(RtcurrentPage, { paramUser: num }); 
  //     console.info("go to RECENTSHARE "+num);
  //   }

  // /*alert logOut*/
  // public confirmLogout() :void {
  //   let alert = Alert.create({
  //   title: 'Confirm Log out',
  //   message: 'Do you want to log out?',
  //   buttons: [
  //     {
  //       text: 'Cancel',
  //       role: 'cancel',
  //       handler: () => {
  //         console.log('Cancel clicked');
  //       }
  //     },
  //     {
  //       text: 'Accept',
  //       handler: () => {
  //         //this.logOut();
  //         this.nav.rootNav.setRoot(LoginPage);
  //         console.log('Ok clicked');
  //         }
  //     }
  //   ]
  // });
  //     this.nav.present(alert);
  // }  

  public logOut() :void {  
      //this.nav.setRoot(LoginPage);
      this.app.getRootNav().setRoot(LoginPage);    
      console.info("test log out from navBar");
  }

}
/* girtmobile @ jm_b 2016*/