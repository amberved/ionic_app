import { Component } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private iab: InAppBrowser) {}
  clickMe(){
    console.log("Button clicked");
    //let target = "_target";
    let target = "_self";
    //let target = "_top";
    //let target = "_parent";
    //let target = "_blank";

    let url = "https://devsite.getprosper.in"

    const options: InAppBrowserOptions = {
      zoom: 'no',
      fullscreen: "yes",
      hidenavigationbuttons: "no",
      toolbar:'no',
      hideurlbar: 'yes',
    }

    // Opening a URL and returning an InAppBrowserObject
    const browser = this.iab.create(url, '_blank',{ toolbar: 'no',  hideurlbar: 'yes', fullscreen: "yes",location:"no"});

    browser.on('loadstop').subscribe(event => {
      browser.insertCSS({ code: "toolbar{display: none;" });
    });



    //this.iab.create('http://ekyc-webapp-user.s3-website.ap-south-1.amazonaws.com/login');
    //this.iab.create('https://www.google.com', target, { toolbar: 'no'});

    // const browser = this.iab.create('http://localhost:4200/');
  }
}
