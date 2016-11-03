import { NavController,MenuController, AlertController} from 'ionic-angular';
import {Component, OnInit} from '@angular/core';
import {LoginPage} from '../../index';

@Component({
  templateUrl: 'standing-orders.html',
})
export class StandingOrdersPage implements OnInit{
  constructor(public nav: NavController, public menu: MenuController, public alert :AlertController) {
    //this.nav = nav;
  }

ngOnInit() {
  //Initialize the directive/component after Angular initializes the data-bound input properties. 
    this.menu.enable(true);
}

addNewOrders() {
    let prompt = this.alert.create({
      title: 'New Standing Order',
      message: "add new standing order",
      
      buttons: [
        {
          text: 'Internal Standing Order',
          handler: data => {
            console.log('Internal Standing Order clicked');
          }
        },
        {
          text: 'External Standing Order',
          handler: data => {
            console.log('External Standing Order clicked');
          }
        },

        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        }
        
      ]
    });
    prompt.present();
  }

  deletedOrders(){
    let prompt = this.alert.create({
      title: 'Delete Standing Order',
      message: "delete standing order",
      
      buttons: [
       
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel deleted Standing Order');
          }
        },

        {
          text: 'Delete',
          handler: data => {
            console.log('deleted clicked');
          }
        }
        
      ]
    });
    prompt.present();
  }

  editOrders(){
    let prompt = this.alert.create({
      title: 'Edit Standing Order',
      message: "edit standing order",
      
      buttons: [
       
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel deleted Standing Order');
          }
        },

        {
          text: 'continue',
          handler: data => {
            console.log('continue clicked');
          }
        }
        
      ]
    });
    prompt.present();
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
