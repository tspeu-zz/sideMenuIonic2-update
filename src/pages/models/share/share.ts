import { NavController,NavParams, App, LoadingController, AlertController} from 'ionic-angular';//IonicApp,, Loading, Alert
import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../../services/index';
import {rtSharePage} from './rtshare/rtshare';
import {LoginPage} from '../../index';

@Component({
  templateUrl: 'share.html',
  providers: []//AccountService
})


export class ShareAccount implements OnInit{
  
   private accounts = [];
   //private rtShare = [] ;
   public data_error: Boolean = false;
   public shareAccount : string ;
   

  constructor(public nav : NavController, public navParams: NavParams,
    public app: App, public alert : AlertController, public loadingCtrl :LoadingController,
    public _accountService : AccountService){}
  	//private app: IonicApp,
    
     

   ngOnInit(){
   //this.presentLoading()
    this.getShareAccounts();
    this.shareAccount="";
   // getNumAccount(shareAccount);
  }

  getShareAccounts() {
      this._accountService.getShareAccountType().subscribe(
        data => { this.accounts = data
        console.log("accounts: " + JSON.stringify(this.accounts)); 

        },
        err => { this.data_error = true }
      );
    }

 /* 
   setNumAcc(){
       this._accountService.setNumAccount(this.shareAccount);
   }
 */
  gotoShareRT(num){
      let numAc = num;   
      this.nav.push(rtSharePage , {paramUser: numAc});
      console.info("go to recent transaction share page");
  }


  presentLoading() {
  let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  loading.present();

  setTimeout(() => {
    loading.dismiss();
  }, 500);
}



/*alert logOut*/
   confirmLogout() :void {
    let alert = this.alert.create({
    title: 'Confirm Log out',
    message: 'Do you want to log out?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Accept',
        handler: () => {
          //this.logOut();
          this.nav.setRoot(LoginPage);
          console.log('Ok clicked');
        }
      }
    ]
  });
    alert.present();
  }  
public logOut() :void {  
      //this.nav.setRoot(LoginPage);
      this.app.getRootNav().setRoot(LoginPage);    
      console.info("test log out from navBar");
  }
}
