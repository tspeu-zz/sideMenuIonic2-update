import { Component ,OnInit} from '@angular/core';
import { NavController, NavParams, ToastController , AlertController} from 'ionic-angular';
import {LoginPage} from '../../../../index';
import {TransferMoneyPage} from '../../transfer-money';
/*
  Generated jm_b
*/
@Component({  
  templateUrl: 'modal.betw-a.html',
})

export class ModalBetwA implements OnInit{

	//accountFrom : string;
	data =[];


  constructor(public nav: NavController, public params: NavParams,
  	public alert : AlertController, public toastCtrl: ToastController) {}

	ngOnInit(){
		//this.accountFrom = this.params.get('fromA');
		
		this.data = this.params.get('allData');
    
		console.log(JSON.stringify(this.data));
	}

  ionViewDidEnter(){
    this.showToastWithCloseButton('middle',
      'I you are satisfied and the details are correct press CONTINUE Otherwise press CANCEL to abandon the transaction!',8000 );
  }


 //alert 
  public confirmTransaction() :void {
      let alert = this.alert.create({
      title: "I you are satisfied and the details are correct press CONTINUE",
      message: "Otherwise press CANCEL to abandon the transaction!",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('cancel clicked');
          }
        },
        {
          text: 'Continue',
         // role: 'cancel',
          handler: () => { //'top''''bottom''
          //  this.showToastWithCloseButton('middle','The Transacction were successfully!',4000);
             //this.nav.push(TrasferMoneyPage);
           // this.successTransaction();
            console.log('ok clicked');
          }
        }
      ]
    });
        alert.present();
  }

public successTransaction() :void {
      let alert = this.alert.create({
      title: 'Transaction Successful!',
      message: 'Thank you!',
      buttons: [
/*       {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('cancel clicked');
          }
        },*/
        {
          text: 'Continue',
          handler: () => {
            //this.logOut();(LoginPage);{animation: 'slide-in'}animate: true, direction: 'forward'
            this.nav.setRoot(TransferMoneyPage, {animation:'slide-in-right'});
            console.log('Ok clicked');
            }
        }
      ]
    });
        alert.present();
  }
//
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
