import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  //would be useful to have class for citys that extracts information from the observable
  title = 'weatherApp';
  losAngelesUrl = "http://api.openweathermap.org/data/2.5/weather?id=5368381&APPID=9cdaf756c3251a542ba5cabdaeddb87e";
  houstonUrl = "http://api.openweathermap.org/data/2.5/weather?id=5977783&APPID=9cdaf756c3251a542ba5cabdaeddb87e";
  losRes;
  houRes;
  constructor(public http: HttpClient){
    //http request for los angeles
    this.http.get(this.losAngelesUrl)
      .subscribe( (res) => {
        console.log(res);
        this.losRes = res;
      },
      (err) => {
        console.log(err);
      });
      //http request for houston
      this.http.get(this.houstonUrl)
      .subscribe( (res) => {
        console.log(res);
        this.houRes = res;
      },
      (err) => {
        console.log(err);
      });
  }
}
