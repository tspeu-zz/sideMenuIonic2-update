import { Component } from '@angular/core';
import { NavController, ToastController , AlertController } from 'ionic-angular';
import {LoginPage} from '../../../index';


@Component({
  templateUrl: 'paybill.html',
})
export class Paybill {
  constructor(public nav: NavController, 
  	public alert : AlertController, public toastCtrl: ToastController) {}

  gotoModal() :void {

    this.showToastWithCloseButton('middle','Not avaible in this build',3000);
	   /* if (this.toAccount === undefined){
	       this.undefinedSelect("Please select the Account to transfer to");
	       return;
	    }

	    if (this.amount === undefined){
	       this.undefinedSelect("Please enter the Amount to transfer to");
	       return;
	    }

	    if(this.msg === undefined){
	     this.msg="transfer";
	    }

	   this.getData();
	   this.nav.push(ModalAnotherM ,{allData : this.getData()});
	  */ 
	   //this.nav.push(ModalBetwA, {allData : this.getData()});fromA: this.fromAccount , 
  }

  showToastWithCloseButton(position :string, message : string, duration : number){
    let toast = this.toastCtrl.create({
      message: message,
      showCloseButton: true,
      closeButtonText: 'Ok',
      duration: duration,
      position: position
    });
    	toast.present(toast);
  }
  
    showToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Mmmm, buttered toast',
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }


  /*alert logOut*/
  public confirmLogout() :void {
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


}
