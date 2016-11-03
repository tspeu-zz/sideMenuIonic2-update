import {NavController,  App} from 'ionic-angular';//NavParams,, Alert, MenuController
import {Component, OnInit} from '@angular/core';
import {TabsPage} from '../tabs/tabs';
//import {LoginProvider} from '../../providers/index';


@Component({
  templateUrl: 'signup.html'
})
export class SignupPage implements OnInit{

  signup: {username?: string, answer?: string} = {};
  submitted = false;
  numRandom : number ; 

  titles: Array<{title: string , answerOk : string}>;
  options =["Mother's Maiden Name","Place Of Birth", "Date of Birth (DDMMYYYY or YYYYMMDD)"];
  options2 =["Question Test 1","Question Test 2","Question Test 3"];
  currentUser : string;
//private userData: UserData,
  optionsAnswer =["SRGCU","Dublin","01011996"];
  optionsAnswer2 =["test1","test2","test3"];

    constructor(public nav: NavController,public app: App,
               // private menu: MenuController,
               // public loginProvider: LoginProvider, public params: NavParams
               ) {
      
           //this.currentUser = this.params.get('userParams');
    }

  ngOnInit(){

    this.titles =[];

    for(let i = 0; i < 1; i++) {
      this.numRandom = Math.floor(Math.random() * this.options.length);
      this.titles.push({
           title: this.options2[this.numRandom],
           answerOk: this.optionsAnswer2[this.numRandom]
        });     
    }
        console.info("----numero onInit:"+JSON.stringify(this.titles) );
        
  }
  
/**/goto(){
       // this.loginProvider.signupEvent();
        //this.nav.push(TabsPage);  
        this.app.getRootNav().setRoot(TabsPage);     
}


/*
  public onSignup(form, answer) :void {
    this.submitted = true;
    this.signup.answer = answer;
    let trueAnswer : boolean = false;

    if (form.valid) {
//    
      if(this.signup.answer === 'test1' || this.signup.answer === 'test2' || this.signup.answer === 'test3'){
          trueAnswer= true;
      }
      else {
           trueAnswer= false;
      }
        if( trueAnswer === false){
          this. errorAlert("the answer is not correct!");
          return;
        }
        else{
        console.info("--NUMBER--: "+this.numRandom);
        console.info("----Q/A-----: "+ JSON.stringify(this.titles));      
        console.info("answer: "+ this.signup.answer); 
//emit even signUp   
        this.loginProvider.signupEvent();
        this.nav.push(TabsPage);       
        this.testNav();       
        }                 
    }
  }
  
  errorAlert(msm :string) {
    let alert = Alert.create({
      title: 'Answer Error!',
      subTitle: msm,
      buttons: [{ 
          text: 'Sign up',
          handler: data => {
            this.clearField();
        }
      }]
    });
    this.nav.present(alert);
  }

  clearField(){
    this.signup.answer="";
  }

  public testNav() : void{

  let numNav = this.nav.length();
  let goBack = this.nav.canGoBack();
  console.info("go to Tabs |User: "+ this.currentUser + 
    " nº nav: " + numNav + "|can go Back:"+goBack );  
  }

  ionicWiewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionicViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }
  */
}
/* girtmobile @ jm_b 2016*/