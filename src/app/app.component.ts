import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import analytics from 'src/analytics.js'
import Analytics from 'analytics'
import snowplow from '@analytics/snowplow'



// Find the utma cookie and extract the unique user ID
function getGoogleId() {
  var id, a, c = document.cookie.split('; ');
  for (var i in c) {
  a = c[i].split('=');
  if (a[0]==='__utma') {
  id = a[1].split('.')[1];
  console.log('fired',id)
  
  }
  }
  return id || 'unknown';
 }


analytics.page()

analytics.on('page', ({ payload }) => {
  console.log('page:Plugin fired')
})


snowplow(function () {
  console.log("sp.js has loaded");
});

analytics.getState('context.offline')



  const IP = analytics.user('userIpaddress')
console.log("IP ADDRESS",IP);

const pageStartListener = analytics.on('pageStart', ({ payload }) => {
  console.log("PageStart")
})



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'snowplow-analytics';


  onSubmit(form:NgForm){
    var a1= analytics.identify(form.value)
   analytics.on('identify', ({ payload }) => {
    console.log('track call just happened. Do stuff Current Data',a1)   
  })
  
}


}
