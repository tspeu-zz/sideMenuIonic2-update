import { NavController,NavParams, App} from 'ionic-angular';//IonicApp,, Loading, Alert
import {Component, OnInit} from '@angular/core';
//import {AccountService} from '../../services/account-service';
//import {rtSharePage} from '../rtshare/rtshare';
import {LoginPage} from '../../index';

@Component({
  templateUrl: 'share.html',
  providers: []//AccountService
})


export class ShareAccount implements OnInit{
  
   /*private accounts = [];
   //private rtShare = [] ;
   public data_error: Boolean = false;
   public shareAccount : string ;*/
   

  constructor(public nav : NavController,public navParams: NavParams,
    public app: App

  	//private app: IonicApp,
    //,private _accountService : AccountService
    ) {
  	
  }

   ngOnInit(){
 //   this.presentLoading()
    //this.getShareAccounts();
   // this.shareAccount="";
   // getNumAccount(shareAccount);
  }

  // getShareAccounts() {
  //     this._accountService.getShareAccountType().subscribe(
  //       data => { this.accounts = data
  //       console.log("accounts: " + JSON.stringify(this.accounts)); 

  //       },
  //       err => { this.data_error = true }
  //     );
  //   }

 /*  
   setNumAcc(){
       this._accountService.setNumAccount(this.shareAccount);
   }
*/
//   gotoShareRT(num){
//       let numAc = num;   
//       this.nav.push(rtSharePage , {paramUser: num});
//       console.info("go to recent transaction share page");
//   }


//   presentLoading() {
//       let loading = Loading.create({
//         content: "Please wait...",
//         duration: 500,
//         dismissOnPageChange: true
//       });
//       this.nav.present(loading);
//   }
// /*alert logOut*/
//    confirmLogout() :void {
//     let alert = Alert.create({
//     title: 'Confirm Log out',
//     message: 'Do you want to log out?',
//     buttons: [
//       {
//         text: 'Cancel',
//         role: 'cancel',
//         handler: () => {
//           console.log('Cancel clicked');
//         }
//       },
//       {
//         text: 'Accept',
//         handler: () => {
//           //this.logOut();
//           this.nav.rootNav.setRoot(LoginPage);
//           console.log('Ok clicked');
//         }
//       }
//     ]
//   });
//     this.nav.present(alert);
//   }  
public logOut() :void {  
      //this.nav.setRoot(LoginPage);
      this.app.getRootNav().setRoot(LoginPage);    
      console.info("test log out from navBar");
  }
}
