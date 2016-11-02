import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen ,Keyboard} from 'ionic-native';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';

import {LoginPage}  from '../pages/index';

import {LoginProvider} from '../providers/index';

//interface
interface PageObj {title: string;
                   component: any;
                   icon: string;
                  }

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;//Page1;

  pages: Array<{title: string, component: any}>;

  appPages: PageObj[] = [
    { title: 'Home', component: "", icon: 'home'},
    { title: 'Transfer Money',      component: "", icon: 'ios-cash'},
    { title: 'Transaction Enquiry', component: "", icon: 'ios-card-outline'},
    { title: 'Standing Orders',   component: "",  icon: 'md-calendar'},
    { title: 'Change Password', component: "",  icon: 'md-contact'},
  ]; 

  loggedInPages: PageObj[] = [
    { title: 'Logout', component: LoginPage, icon: 'log-out' }
  ];

  isLoggedIn : boolean = false;
  isSignUp : boolean = false;

  constructor(public platform: Platform, public loginProvider: LoginProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Page One', component: Page1 },
      { title: 'Page Two', component: Page2 }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Keyboard.disableScroll(true);//for prevent the key issue
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
       this.nav.setRoot(page.component);
  }

  openPage2(page : PageObj) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (page.title === "Logout"){
      this.nav.setRoot(page.component);
      this.loginProvider.logoutEvent();
    }else{
        this.nav.setRoot(page.component);

    }
  }


}
