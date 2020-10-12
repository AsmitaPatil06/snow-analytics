import { Component, OnInit } from '@angular/core';

import analytics from 'src/analytics.js'
// import Analytics from 'analytics'
// import segmentPlugin from '@analytics/snowplow'
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    analytics.page('home');
    analytics.on('page', ({ payload }) => {
        console.log('Home:plugin fired')
        
      })

      // analytics.snowplow('trackPageView', 'URL');

      // console.log(analytics.snowplow('trackPageView', 'URL'))

      analytics.ready()
      {
      console.log('all plugins have loaded or were skipped')
      }
      
  }


  onSubmit(form:NgForm){
    var a1= analytics.identify(form.value.id,form.value)
   analytics.on('identify', ({ payload }) => {
    console.log('identify track call just happened.Current Data',a1)   
  })

  var a2 = analytics.track('button clicked');
  analytics.on('track', ({ payload }) => {
  console.log('Track form',a2)
})

          const userData = analytics.user()
          console.log("Previous userData",userData);


        // Get user id
          const userId = analytics.user('userId')
          console.log("userId",userId);

          
          // const userIpaddress = analytics.user('useripAddress')
          // console.log("IP ADDRESS",userIpaddress);

      // Get user User name
        const userName = analytics.user('traits.name');
        console.log("Name of User",userName);

       // analytics.reset()
}



click(){

  analytics.track('click');
  analytics.on('track', ({ payload }) => {
  console.log('click done')
})

analytics.on('track', ({ payload }) => {
    console.log(this.click)
  })

 

}


doTrack = () => {
  analytics.track('buttonClicked', {
    foo: 'bar'
  }, () => {
    console.log('track callback')
  })
}


}
