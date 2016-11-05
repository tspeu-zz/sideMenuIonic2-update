import { NavController, NavParams, AlertController} from 'ionic-angular';//*, Alert
import  {Component,OnInit, AfterViewInit} from '@angular/core';//
import {AccountService} from '../../../../services/account-service';
import {LoginPage} from '../../../index';
import {TransEnquiryPage} from '../../../sidemenu/index';

@Component({
  templateUrl: 'rtcurrent.html',
  providers :[]//AccountService
})
export class RtcurrentPage implements OnInit, AfterViewInit{//
	private rtCurrent =[];
	private accCurrent =[];
	private otra=[];
	public data_error: Boolean = false;

	private accNumber :string ;

  constructor(public nav: NavController,public navParams: NavParams,
  	 		  public _accountService : AccountService, public alert: AlertController) {}

	ngAfterViewInit(){
		console.log("AfterViewInit recenCurrenTransactions");
	}

  	ngOnInit(){
  	 	console.log("on init ---------------");
  	 	this.getCurrentrt();
  	 	console.log("---otra----");
  //recibo  la cuanta clik como parammetro	 	
  	 	this.accNumber =this.navParams.get('paramUser');

  	 	if (this.accNumber === "01721838"){
  	 		this.getRT_1();
			console.info("cuenta 1 " +this.accNumber);	
  	 	}

  	 	else if(this.accNumber === "01667288"){
  	 		this.getRT_2();
  	 		console.info("cuenta 2 " +this.accNumber);
  	 	}

  	 	
		console.log("-------------on init END");
		//this.getAccCurrentrt();	
		//this.getAccCurrentrt();
		//this._accountService.getAccCurrentRT();
		//this._accountService.getCurrentRecentTransactionACCOUNT();
		//this.getAccCurrentrt2();	
		
  	}

//


//get share transaccion from json file  ()JSON.stringify(this.rtCurrent)
	getCurrentrt(){
		this._accountService.getAllCurrentRecentTransaction().subscribe(
		data => { this.rtCurrent = data;
		console.log("--------:"+this.accNumber);
		},
		err => { this.data_error = true }
		);
	}

	getRT_1(){
		this._accountService.getACRT().subscribe(
		data => { this.otra = data;
		console.log("-- RT1----:" + JSON.stringify(this.otra)); 
		},
		err => { this.data_error = true }
		);
	}

	getRT_2(){
		this._accountService.getACRT_2().subscribe(
		data => { this.otra = data;
		console.log("-- RT2 ----:" + JSON.stringify(this.otra)); 
		},
		err => { this.data_error = true }
		);
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

	gotoTransaction() {

		this.nav.push(TransEnquiryPage);

	}
	

}
//* girtmobile @ jm_b 2016*/


/*muestraTodo(){
		for (let i= 0; i < this.rtCurrent.length; i++ ){
			console.log("eso es "+ i);
		}
	}	
	
	let accc1 =[];
	let acc2 =[];
		
		this.rtCurrent.forEach(v => {
  				 if (v._accountNumber === this.accNumber)
       			{	
       				//accc1.push(v._accountNumber);
       				console.log("GANAFDOR"+v._accountNumber);
       			}
       			else{
       				console.log("*-*-* PERDEDOR"+v._accountNumber);
       			}
       			
       			
			});
			

			this.rtCurrent.forEach(function(obj) { 
				console.log("***"+obj._accountNumber); 
			});
*/
/*

			let miVariable = this.rtCurrent.toString();
			console.log("miravariables "+miVariable);
			console.log(this.rtCurrent[0]);
			console.log(Array.isArray(this.rtCurrent));
*/
/* .map((races: Array<any>) => races.map(race => race._accounts))
    .subscribe(names => {console.log(names);});
   
 */
		