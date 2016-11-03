import { Component } from '@angular/core';
import { NavController,ToastController , AlertController } from 'ionic-angular';
import {LoginPage} from '../../../index';
//import {ModalAnotherM} from './index';

@Component({    
  templateUrl: 'transfer.another-men-a.html',
})

export class TransferAnotherMenA {

	fromAccount :string = "share"; 
	toAccount : string ;
	msg : string = undefined;
	amount : number;
	typeMoney : string = "€";
	transferDate : string;

  	dataTransfer : Array<{
        fromA: string, 
        toA :string, 
        text :string,
        tranAmmount : number,
        typeDiv : string,
        tranDate : string }>;

  constructor(public nav: NavController,
  	public alert : AlertController, public toastCtrl: ToastController) {}

 //ionViewLoaded 
	ionViewDidLoad(){
    	this.todayDate(this.transferDate);
  	}

  todayDate(todayDate :string){
    	let utc = new Date().toJSON().slice(0,10);
    		if (todayDate === undefined ){
      		this.transferDate = utc;
    	}
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



 	gotoModal() :void{

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


 	getData(){
     this.dataTransfer = [];
     this.dataTransfer.push({
       fromA : this.fromAccount,
       toA :  this.toAccount, 
       text : this.msg,
       tranAmmount : this.amount,
       typeDiv :this.typeMoney,
       tranDate : this.transferDate });

     return  this.dataTransfer;
  }

  public undefinedSelect(msm :string ) :void {
      let alerta = this.alert.create({
      title: msm,
      //message: msm,
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          handler: () => {
            console.log('ok clicked');
          }
        }
      ]
    });
        alerta.present();
  }

  clearData(){
    this.msg = undefined;
    this.amount= undefined;
  }

   /*alert logOut*/
  public confirmLogout() :void {
      let alerta = this.alert.create({
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
        alerta.present();
  }

}
