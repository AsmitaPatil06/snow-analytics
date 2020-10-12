import { Component, OnChanges, OnInit } from '@angular/core';

import analytics from 'src/analytics.js'
// import Analytics from 'analytics'
// import segmentPlugin from '@analytics/snowplow'
// analytics.page('about');
// analytics.on('page:snowplow', ({ payload }) => {
//   console.log('about:snowplowPlugin fired')
// })

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
     analytics.page('about');
    analytics.on('page', ({ payload }) => {
        console.log('about:Plugin fired')
      })


     // analytics.snowplow('trackPageView', 'about');
  }



}
