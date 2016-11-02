import { NavController} from 'ionic-angular';//, MenuController,Alert
import {Component, OnInit} from '@angular/core';
//import {TabsPage} from '../tabs/tabs';
//import {SignupPage} from '../signup/signup';
//import {UserData} from '../../providers/user-data';
//import {LoginProvider} from '../../providers/login-provider';


@Component({
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit{
  
login: {username?: string, password?: string} = {};  
submitted :boolean = false;
  //let user ="";
  //let pass ="";private userData: UserData, 
  constructor(public nav: NavController) {}
//private menu : MenuController,private loginProvider : LoginProvider
  ngOnInit(){
 //   this.presentLoading()
//    this.getShareAccounts();
//    this.shareAccount="";
   // getNumAccount(shareAccount);
  }

  ngOnDestroy() {
    //this.clearUser();
  }

/*
  onLogin(form, user, pass) {
    this.submitted = true;
    this.login.username= user;
    this.login.password = pass;
    let okPass : boolean;
    let okMember : boolean;
    
    if (form.valid) {
      
        if (user !== '123'){
            okMember=false;
            okPass= true;
            this.errorAlert("The member is not correct");
            return; 
        }
        if (pass!== 'test'){
            okPass= false;
            okMember=true;
            this.errorAlert("The password is not correct!");
            return;  
        }   
      
      else{
//emitt event user is login 
        okPass= true;
        okMember=true; 
        this.loginProvider.loginEvent();
        this.nav.push(SignupPage , {userParams : user});
        console.info("Member:" + this.login.username);
        console.info("pass:" +  this.login.password);
        console.log(this.nav);
        console.log(this.nav.length());
        this.testNav();
    
      }
    } 
  }

  errorAlert(msm :string) {
    let alert = Alert.create({
      title: 'Login Error',
      subTitle: msm,
      buttons: [{ 
          text: 'Login',
          handler: data => {
            this.clearUser();
        }
      }]
    });
    this.nav.present(alert);
  }


  clearUser(){
    this.login.username ="";
    this.login.password="";
    console.info("USER CLEAR");
  }
//TODO
  clearHandler(){

  }

 public testNav():void{
    let num= 0;
    let numNav = this.nav.length();
    let isT= this.nav.isTransitioning();
    let goBack = this.nav.canGoBack();
    num +=1;
    console.info("For LOGIN1goto LOGIN2|USER: "+ this.login.username+ " | nº click:" 
      + num + " nº nav:"+ numNav + "|can go Back:"+goBack);
 }


  onSignup() {
    this.nav.push(SignupPage);
  }
  
  ionViewLoaded(){
    this.menu.enable(false);
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    console.log("enter login1");
    console.log("login1"+JSON.stringify(this.nav));
    console.log(this.nav.length());
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    console.info("out login1");
    this.menu.enable(false);
  }

  
  ionViewWillEnter(){
    this.menu.enable(false);
  }
  */
}
/* girtmobile @ jm_b 2016*/