import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';//
//import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';
 
@Injectable()
export class AccountService {
 
  data: any;
  nAccount : string;

  constructor(public http:Http) { }
 
  // Uses http.get() to load a single JSON file JSON.parse(response)
  getAccountData() {
    return this.http.get('./assets/data/countdata.json').
    map((res:Response) => res.json());
  }

  getAccountDemoData() {
    return this.http.get('./assets/data/demodata.json').
    map(res => res.json()._account);
  }


  getAccountDemoClient() {
    return this.http.get('./assets/data/demodata.json').
    map(res => res.json()._client);
  }

  getShareAccountType() {
    return this.http.get('./assets/data/sharedemodata.json').
    map(res => res.json()._account);
  }

  getCurrentAccountType() {
    return this.http.get('./assets/data/currentdemodata.json').
    map(res => res.json()._account);
  }

   getMap() {
     return this.http.get('./assets/data/map.json').
    map(res => res.json().map);
  }

  getShareRecentTransaction() {
    return this.http.get('./assets/data/rtsharedata.json').
    map(res => res.json()._transactions);
  }

  getAllCurrentRecentTransaction() {
    return this.http.get('./assets/data/rtcurrentdata.json').
    map(res => res.json()._accounts);
  }

  getCRTA(accNum) {
    return this.http.get('./assets/data/rtcurrentdata.json').
    map(res => res.json()._accounts._accountNumber);
  }


  getACRT() {
    return this.http.get('./assets/data/rtcurrentdata.json').
    map(res => res.json()._recentTransactions);
  }
   getACRT_2() {
    return this.http.get('./assets/data/rtcurrentdata2.json').
    map(res => res.json()._recentTransactions);
  }

/*  */
/* girtmobile @ jm_b 2016*/
}

   


 
