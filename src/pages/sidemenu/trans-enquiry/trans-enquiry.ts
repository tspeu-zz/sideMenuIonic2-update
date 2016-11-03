import { NavController, MenuController, AlertController} from 'ionic-angular';
import {Component, OnInit} from '@angular/core';
import {TabsPage} from '../../tabs/tabs';
import {LoginPage} from '../../index';

@Component({
  templateUrl: 'trans-enquiry.html',
})
export class TransEnquiryPage implements OnInit {
  
  

	accounts :string ; 
  accountRadio : string;
  fromDate : string;
  toDate : string;
  fromAmount : number;
  toAmount : number ; 
  msg : string = "";

  inCheck: Array<{tipo: string}>;

  //radioS: string;

  constructor(public nav: NavController, public menu: MenuController, 
    public alert: AlertController) {
    this.accounts = 'share';
    //this.selectAccount(this.accounts);
    //console.info("from---"+this.relationship);

  }

  ngOnInit() {
  //Initialize the directive/component after Angular initializes the data-bound input properties. 
    this.menu.enable(true);
  }


  selectAccount(aSelect :string, radioS: string){
   	this.accounts = aSelect;
    this.accountRadio = radioS; 
    switch (this.accounts) {
     	case "share":
     		console.info("from selected selected " + this.accounts);

        this.undefinedTypes(this.fromDate, this.toDate);//,this.fromAmount,this.toAmount

        console.info("from selected DATE " + this.fromDate);
        console.info("TO selected DATE " + this.toDate);
        console.info("FROM selected AMOUNT " + this.fromAmount);
        console.info("TO selected AMOUNT " + this.toAmount);
        console.info("FROM selected MESSAGE " + this.msg);
//alert info
        this.infoTransaction(this.accounts,this.fromDate, this.toDate);
        //console.info("from radio selected " + this.accountRadio);
     		break;
     	case "current":

       this.undefinedTypes(this.fromDate, this.toDate);//,this.fromAmount,this.toAmount

     		console.info("from selected selected " + this.accounts);
        console.info("from selected DATE " + this.fromDate);
        console.info("TO selected DATE " + this.toDate);
//alert info
        this.infoTransaction(this.accounts,this.fromDate, this.toDate);
       // console.info("from radio selected " + this.accountRadio);
     	break;
     	case "other":
        this.undefinedTypes(this.fromDate, this.toDate);//,this.fromAmount,this.toAmount
        
     		console.info("from selected selected " + this.accounts);
        console.info("from selected DATE " + this.fromDate);
        console.info("TO selected DATE " + this.toDate);
//alert info
        this.infoTransaction(this.accounts,this.fromDate, this.toDate);
       // console.info("from radio selected " + this.accountRadio);
     	break;	
     	
     	default:
     		console.info("DEFAULT selected" + this.accounts);
     		break;
    }
  }

  cancelAction() : void{
    console.log("navvvv:"+this.nav.length());
   
    this.nav.push(TabsPage); //,{animation: 'slide-out'}
  }

  infoTransaction(acc :string, fromD :string, toD :string) : void{
    let alerta = this.alert.create({
      title: 'Transaction for account type: '+ acc,
      subTitle: 'from: ' +fromD + ' to: '+ toD,
      buttons: [
       {
          text: 'Finish',
          handler: data => {
          //this.step ="step1";
          //this.goHome();
            console.log('Saved clicked');
            //this.nav.push(AccountsPage);
          }
        }
      ]
    });
    alerta.present();  
  }

 /* clicked(event: any): void {
   
     //event.preventDefault();
 }
*/

 undefinedTypes(Fromdate :string, Todate : string){
//, Formamount :number, Toamount: number  || Formamount===undefined || Toamount===undefined
    let utc = new Date().toJSON().slice(0,10);
    if (Fromdate === undefined || Todate=== undefined ){
      this.fromDate = utc;
      this.toDate = utc;
      //this.fromAmount =1;
     // this.toAmount = 10000;
    }

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

