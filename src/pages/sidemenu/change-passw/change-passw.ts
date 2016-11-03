import { NavController, AlertController } from 'ionic-angular';//,MenuController
import {Component, OnInit} from '@angular/core';
//import {AccountsPage} from '../../accounts/accounts';
import {TabsPage} from '../../tabs/tabs';
import {LoginPage} from '../../index';


@Component({
  templateUrl: 'change-passw.html'
})
export class ChangePasswPage implements OnInit{
  constructor(public nav: NavController,public alertCtrl: AlertController 
              //private menu: MenuController
              ) {
    //this.nav = nav;
  }

ngOnInit() {
  //Initialize the directive/component after Angular initializes the data-bound input properties. 
   // this.menu.enable(true);
  }  

passSuccess() {
    let alert = this.alertCtrl.create({
      title: 'Congratulations!',
      subTitle: 'your password has been successfully changed!',
      buttons: [
       {
          text: 'Finish',
          handler: data => {
          //this.step ="step1";
          this.goHome();
            console.log('Saved clicked');
            //this.nav.push(AccountsPage);
          }
        }
      ]
    });
    alert.present();  
  }

  


  public goHome() :void {
    this.nav.push(TabsPage,{animation: 'slide-out'});
    //this.nav.setRoot(TabsPage);
    console.log('go to homePage');
  }

 /*alert logOut*/
  public confirmLogout() :void {
      let alert = this.alertCtrl.create({
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
            // this.app.getRootNav().setRoot(LoginPage);    

            //this.menu.enable(false);
            console.log('Ok clicked');
            }
        }
      ]
    });
        alert.present();
  }


 showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Use this lightsaber?',
      message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }


}
