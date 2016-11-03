import {  NavController, Tabs, App} from 'ionic-angular';
//, MenuController, Loading, Alert
//import {AccountData} from '../../providers/account-data';IONIC_DIRECTIVES,IonicApp,
import {Component, OnInit} from '@angular/core';//,AfterViewInit

//import {AccountService} from '../../services/account-service';
//import {ShareAccount} from '../share/share';
//import {CurrentPage} from '../current/current';
//import {TabsPage} from '../../tabs/tabs';
import {LoginPage} from '../../index';



@Component({
  templateUrl: 'accounts.html',
  providers : [],//AccountService
  //directives: [IONIC_DIRECTIVES]
  
})
export class AccountsPage  implements OnInit{
  //, AfterViewInit
 /* private datos = [];
  //private todo = [] ;
  public data_error: Boolean = false;
  private cliente  =[];*/
  //private cuenta  ;
 

 mySelectedIndex: number;
 //content : any ;

//private app: IonicApp,
  constructor(public tabs:Tabs, public nav : NavController ,public app: App
    //,public _accountService: AccountService, private menu: MenuController
    ) {
    //this.aData.getAccounts();
   // 
   // this.content = this.app.getComponent('ion-tabs');   
  }

  ngOnInit(){
 //Initialize the directive/component after Angular initializes the data-bound input properties. 
  //  this.getClient();
  //  this.getAccounts();
  //  this.menu.enable(true);  
  }

//   ngAfterViewInit() {
//   //After Angular creates the component's view(s).
//       // Here 'my-content' is the ID of my ion-content
//     //this.content = this.app.getComponent('my-tabs');
//     console.info("From account page this: ");
//   }
// /*
//   presentLoading() {
//     let loading = Loading.create({
//       content: "Loading...",
//       duration: 500,
//       dismissOnPageChange: true
//     });
//       this.nav.present(loading);
//   }
// */

//   getAccounts() {
//     this._accountService.getAccountDemoData().subscribe(
//         data => { this.datos = data
//         console.log("datos: " + JSON.stringify(this.datos)); 
//         //console.log("parse: " + JSON.parse(this.datos));
//         },
//         err => { this.data_error = true }
//       );
//   }

//   getClient(){
//     this._accountService.getAccountDemoClient().subscribe(
//         data => {this.cliente = data
//         console.log("client: " + JSON.stringify(this.cliente));
//         }, err => { this.data_error = true }
//       );
//   }


//   gotoAccount(typeAccount : string){
//     let account = typeAccount;    
//     if (account === "Share"){
// //go to tabs and pass the index by paramater  
//         this.nav.push(TabsPage, {tabIndex: 2}, {animation: 'slide-in'});
       
// //this way is that go for the tabs component in the position 1 of the array 
        
//    //this.tabs.select(2);
//        // console.log("get the tab1 from account click");
//         let numNav = this.nav.length();
//         console.info("the account is:" + account + "|nº nav:"+ numNav);
//     } 
//     if(account === "Current"){
        
//        this.nav.push(TabsPage, {tabIndex: 1}, {animation: 'slide-in'});   
//   //Tabselect -> this.tabs.ionSelect(1);
//   //this.tabs.select(1);
//         let numNav = this.nav.length();
//         console.info("the account is:" + account + "|nº nav:"+ numNav);   
//     }
//   }


  public logOut() :void {  
     // this.nav.setRoot(LoginPage);
      this.app.getRootNav().setRoot(LoginPage);    
      console.info("test log out from navBar");
  }



// /*alert logOut*/
//   public confirmLogout() :void {
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
}
/* girtmobile @ jm_b 2016*/
/*
ionicViewDidEnter() { 
  this.presentLoading(); 
    console.log("HelloIonicPage entra");
}

ionicWiewWillLeave() {
    console.log("HelloIonicPage sale");
}*/
