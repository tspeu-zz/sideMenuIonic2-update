import { NavController,NavParams, AlertController, ModalController,LoadingController} from 'ionic-angular';
//, , Modal, , Picker,
import {Component, OnInit} from '@angular/core';//, ViewChild Inject,
import {AccountService} from '../../../../services/account-service';
//import {SearhmodalPage} from '../searchmodal/searchmodal';
//import {DatepickerPage} from '../datepicker/datepicker';
import {LoginPage} from '../../../index';
import {TransEnquiryPage} from '../../../sidemenu/index';

@Component({
  templateUrl: 'rtshare.html',
  providers :[]//,AccountService
  //directives: [DatepickerPage]
})
export class rtSharePage implements OnInit{

  //@ViewChild(DatepickerPage) myDate: DatepickerPage;

	private rtShare =[];
	public data_error: Boolean = false;
	public numAccount = [];
	public na : string;
  private accShareNumber :string ;

  constructor(public nav : NavController,public navParams: NavParams,
    public _accountService : AccountService, public alert: AlertController,
    public modal : ModalController, public loading : LoadingController) {}

// load data
  	 ngOnInit(){
  	 	console.log("on init recent accounts");
  	 	//this.presentLoading();
  	 	this.getSharert();
  	 	this.getAccountNum();
      this.accShareNumber =this.navParams.get('paramUser');
  	 }

//get share transaccion from json file
	getSharert(){
		this._accountService.getShareRecentTransaction().subscribe(
		data => { this.rtShare = data
		console.log("--Share recent Transaccions--:" + JSON.stringify(this.rtShare)); 
		},
		err => { this.data_error = true }
		);
	}
//get number of share account
	getAccountNum(){
		this._accountService.getShareAccountType().subscribe(
		data => { this.numAccount = data
		console.log("--GET NUM Share Account--:" + JSON.stringify(this.numAccount)); 
		},
		err => { this.data_error = true }
		);
	}
 //show loading   
	 presentLoading() {
	    let loading = this.loading.create({
	      content: "loading...",
	      duration: 1000,
	      dismissOnPageChange: true
	    });
	    loading.present(loading);
    }
//got to transaction Enquiry
  gotoTransaction(){

    this.nav.push(TransEnquiryPage);

  }

//show result in a modal screen
    showModalResult() {
    //let modal = Modal.create(SearhmodalPage);
    //this.nav.present(modal)
    console.log("showModal result page");
   // this.nav.push(SearhmodalPage);
  }

   presentAlert() {
      let alert = this.alert.create({
        title: 'No more transactions',
        subTitle: '',
        buttons: ['Dismiss']
      });
      alert.present();
    }

    noMoreTrasaction(){
      this.presentLoading();
      this.presentAlert();

    }

//promt search screen
  searchPrompt() {
    let alert = this.alert.create({
      title: 'search Transactions',
      message: 'FROM DATE:',
      inputs: [{
          label: 'To',
          name: 'to',
          placeholder: 'to',
          type: 'date'},
          {
          label: 'To',
          name: 'to',
          placeholder: 'to', 
          type: 'date',}],
      buttons: [{
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');}
          },{
          text: 'Search',
        	role: 'search',
          handler: data => {
          //this.presentLoading();
          this.showModalResult();
            console.log('accept clicked');
          }
        }]
    });
      alert.present();
   }

  initiateAlert() {
    let alert = this.alert.create();
    alert.setTitle('Search Date..');
    alert.setMessage('from:');
    alert.addInput({type: 'date', label: 'FROM'});
    alert.setSubTitle('to:');
    alert.addButton('Cancel');
    alert.addButton({
      text   : 'Ok',
      handler: data => {
        console.log('accept clicked');
      }
    });
    
    alert.present();
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
/* girtmobile @ jm_b 2016*/






