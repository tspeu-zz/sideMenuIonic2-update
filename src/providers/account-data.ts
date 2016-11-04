import {Injectable} from '@angular/core';
import {Http} from '@angular/http';


@Injectable()
export class AccountData {
	data: any;

constructor(public http: Http) {}

load() {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      	this.http.get('./assets/data/countdata.json').subscribe(res => {
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference
        this.data = this.processData(res.json());
        resolve(this.data);
      });
    });
}

processData(data) {
    // just some good 'ol JS fun with objects and arrays
    // build up the data by linking speakers to sessions

    data.tracks = [];

    // loop through each day in the schedule
    data.accounts.forEach(res => {
    	console.log("forEch res");
         // loop through each timeline group in the day
       // day.groups.forEach(group => {
     // loop through each session in the timeline group
      //group.sessions.forEach(session => {this.processSession(data, session);});
       //});
    });
    return data;
}

getAccounts() {
    return this.load().then(data => {
      return data.accounts;
    });
}

/*getSpeakers() {
    return this.load().then(data => {
      return data.speakers.sort((a, b) => {
        let aName = a.name.split(' ').pop();
        let bName = b.name.split(' ').pop();
        return aName.localeCompare(bName);
      });
    });
}*/

}