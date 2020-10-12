import Analytics from 'analytics'
import snowplowPlugin from '@analytics/snowplow'

const analytics = Analytics({
    app: 'app-name',
    plugins: [
        // ... your analytics integrations


        snowplowPlugin({
            // scriptSrc: 'http://cdn.jsdelivr.net/gh/snowplow/sp-js-assets@2.10.2/sp.js"',
            scriptSrc: "http://src/sp.js",
            collectorUrl: 'http://localhost:4200/',
            //  collectorUrl: 'http://localhost:4600/',

            trackerSettings: {
                appId: 'myApp',
                contexts: {
                    webPage: true,
                    // geolocation: true,
                }
            }
        })
    ]
})


// console.log("hiiiiiiiiiii")
window.Analytics = analytics
    // analytics.page()
    /* export the instance for usage in your app */
export default analytics