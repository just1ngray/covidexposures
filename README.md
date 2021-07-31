# About
COVID-19 is a pain. We've been asked to keep our contacts low and practice social distancing.
To help slow the spread of the virus, some governments have been contact tracing as much as possible.
While contact tracing is effective with respect to social gatherings, it's basically impossible to
list and remember everyone you've seen at the grocery store or pharmacy.

Under these circumstances, some health authorities resort to a catch-all list of potential exposure
locations (a known COVID-19 case was at a location, but not everyone could be contacted directly).
During the peaks of case numbers, these lists may grow significantly. How can ordinary people be
expected to keep up-to-date with these potential exposure sites without obsessively checking the list
200 times a day?

COVID Exposures aimed to solve this problem.


# How it Worked
1.  A webscraper would periodically check for new potential exposures from official health sources and
    save them in a private database.
2.  Anyone could browse a heatmap of the last 30-days of potential exposure sites (without signing-in).
    Clicking on a specific location would show more details: name of the location, address, time of
    exposure, and a link to the public health website to confirm.
3.  A Google account could be used to sign-in to the covidexposures website. Once there, users could
    input recently visited location & times to be stored for 30-days. **If a potential exposure was
    detected at their location during their time window, they'd be sent an automated email notification.**
    This was the main motivation behind this project.

## Video Demo:
It's low framerate, but it's good enough to get an idea of this project in action.

[![Demo of COVID Exposures](http://img.youtube.com/vi/IoVKegt8ZPI/0.jpg)](http://www.youtube.com/watch?v=IoVKegt8ZPI "Demo of COVID Exposures")

## Data
Check out the `src/database/scrapers.json` and `src/database/exposures.json` if you want to create a
local database to give increased functionality to your local website. Notably, the exposures file is a
duplicate (and imperfect) record of nshealth potential COVID exposures which are deleted shortly
after being published.

These files have no impact on the project and will not work without manually importing them into your
MongoDB `covidexposures` database.


# Technical Details
## Libraries, Frameworks, & Services
-   [Node.js](https://nodejs.org/en/) as the runtime environment
-   [Next.js](https://nextjs.org) to make [React](https://reactjs.org) and backend development easier
-   [MongoDB](https://www.mongodb.com) through the [Mongoose](https://mongoosejs.com) interface
-   [TypeScript](https://www.typescriptlang.org) on all source code files to help catch some errors before
    deploying
-   [Puppeteer](https://pptr.dev) as the webscraper
-   [Axios](https://axios-http.com) to send and receive HTTP requests
-   [tailwindcss](https://tailwindcss.com) because CSS sucks, but somehow tailwind makes it enjoyable
-   [pm2](https://www.npmjs.com/package/pm2) to handle Node.js processes
-   [nginx](https://nginx.org/en/) + [Let's Encrypt](https://letsencrypt.org) +
    [Certbot](https://certbot.eff.org) to keep the site HTTPS
-   [mapbox](https://www.mapbox.com) for geocoding addresses into longitude/latitude and displaying
    the map for the "Hot Spots" and "Account" pages
-   [mailjet](https://www.mailjet.com) to send notification emails to logged-in users if they have an
    overlap with a potential exposure location
-   [Google OAuth](https://developers.google.com/identity/protocols/oauth2) so people could login without
    having to create another email/password combination, and so I wouldn't have to verify their email
    address before sending transactional mail

## Setup
Install and start [MongoDB Community](https://docs.mongodb.com/manual/installation/). This project will
connect through `src/database/db.js` using connection string: `mongodb://localhost:27017/covidexposures`
```bash
# clone the repo
git clone https://github.com/just1ngray/covidexposures.git
cd covidexposures

# create `keys.ts` in project root (this only has to be done once, so I
# didn't bother making it smooth) and replace accordingly with your keys
: '
export default {
    mapbox: {
        map: "URL_RESTRICTED_PUBLIC_FACING_ACCESS_TOKEN",
        geocode: "NON_SHARED_ACCESS_TOKEN_4_GEOCODING"
    },
    mailjet: {
        key: "MAILJET_MAIN_ACCOUNT_API_KEY",
        secret: "MAILJET_MAIN_ACCOUNT_SECRET_KEY"
    },
    google: {
        oauth: "OAUTH_CLIENT_ID"
    }
};
'

# install and build
npm install
npm run ball

# to start Next.js @ http://localhost:3000
npm run fstart

# if you want to run the scraper, in another bash window:
npm run bstart
```

## Development
```bash
npm run bdev # scraper
npm run fdev # website
```
Since localhost keys cannot be restricted by domain rules, the mapbox keys should be unrestricted.
> If you are also running a production build, use different (restricted) keys on your public server

## Production
When the public server was running, I used nginx to:
1. proxy-pass all requests to the Next.js server on port 3000
2. upgrade and maintain https
Certbot + Let's Encrypt were also set up on nginx to keep it running with valid keys.

I can't imagine anyone would run a production covidexposures server in the future. But go for it if
you want to! Set it up any way you see fit :)

You may also find it useful to use [MongoDB Compass](https://www.mongodb.com/products/compass) to
ssh tunnel into your server and view the database visually and without commands! See my settings below:
```
Hostname:       localhost
Port:           27017
SRV Record:     off
Authentication: None

Read Preference: Primary
SSL:            None
SSH Tunnel:     Use Identity File
SSH Hostname:   the.public.ip.address
Tunnel Port:    22
SSH Username:   root        (oops security)
Identity File:  path/to/it/id_rsa
```