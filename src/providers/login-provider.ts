import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Events} from 'ionic-angular';
import 'rxjs/add/operator/map';

//Storage, LocalStorage,

@Injectable()
export class LoginProvider {

  constructor(public http: Http, public events : Events) {
    console.log('Hello LoginProvider Provider');
  }

  /*This methods emitt the events */
	loginEvent() {
//this.storage.set(this.HAS_LOGGED_IN, true);
	    this.events.publish('user:login');
	}

signupEvent() {
//this.storage.set(this.HAS_LOGGED_IN, true);
	    this.events.publish('user:signup');
	}

	logoutEvent() {
//this.storage.remove(this.HAS_LOGGED_IN);
	    this.events.publish('user:logout');
	}

}
