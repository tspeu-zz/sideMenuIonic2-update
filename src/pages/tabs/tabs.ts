//import {ViewChild} from '@angular/core';  //IonicApp,
import {NavParams} from 'ionic-angular';
import {Component, AfterViewInit} from '@angular/core';
//import {AccountsPage} from '../accounts/accounts';
//import {ShareAccount} from '../share/share';
//import {CurrentPage} from '../current/current';

import {Page1} from '../page1/page1';
import {Page2} from '../page2/page2';

import {AccountsPage , CurrentPage, ShareAccount} from '../models/index';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage implements AfterViewInit{
  
//@ViewChild(Nav) nav: Nav;

  // this tells the tabs component which Pages
  // should be each tab's root Page
  // set the root pages for each tab//private app: IonicApp,
  tabRoot : any = AccountsPage;//AccountsPage;
  tab1Root: any = CurrentPage;//Page1//CurrentPage;
  tab2Root: any = ShareAccount;//Page2//ShareAccount;

  mySelectedIndex: number;


  constructor( navParams: NavParams) {

    this.mySelectedIndex = navParams.data.tabIndex || 0;
  
  }

 

  ngAfterViewInit() {
  // Here 'my-content' is the ID of my ion-content
  //this.content = this.app.getComponent('my-tabs');
    console.info("From tabs page");
  }



  getSelectIndex()  {
    console.log("Tab index:" + this.mySelectedIndex);
    return this.mySelectedIndex;
    
  }

  setSelectedIndex(num : number){
    this.mySelectedIndex = num;
    console.log("Tab index:" +this.mySelectedIndex);
  }

}
/* girtmobile @ jm_b 2016*/