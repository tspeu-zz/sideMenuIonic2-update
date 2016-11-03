import { NavController, MenuController, AlertController} from 'ionic-angular';//Nav,
import { Component, OnInit} from '@angular/core';//ViewChild,

//import {TransferBetwMyA} from './transfer.betw-my/transfer.betw-my-a';
import {TransferBetwMyA, TransferAnotherMenA, TransferExtA, Paybill} from './index';
import {LoginPage} from '../../index';


@Component({
  templateUrl: 'transfer-money.html',
})
export class TransferMoneyPage implements OnInit{
  //@ViewChild(Nav) nav: Nav;

  constructor(public navControl: NavController, 
  	public menu: MenuController, public alert : AlertController) {}

ngOnInit() {
  //Initialize the directive/component after Angular initializes the data-bound input properties. 
    this.menu.enable(true);
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
            this.navControl.setRoot(LoginPage);
            console.log('Ok clicked');
            }
        }
      ]
    });
       alert.present();
  }

//
  	gotoBetweenMyAccounts() :void {

  		this.navControl.push(TransferBetwMyA);
  		console.log("got to Transfer between my accounts");
  	}

  	gotoAnotherMembA() :void {

  		this.navControl.push(TransferAnotherMenA);
  		console.log("got to Transfer to another member accounts");
  	}

  	gotoExterA() :void{
  		this.navControl.push(TransferExtA);
  		console.log("got to Transfer to external  accounts");	
  	}

  	gotoPayBill() :void{
  		this.navControl.push(Paybill);
  		console.log("got to Paybill");	
  	}


}
/* girtmobile @ jm_b 2016*/