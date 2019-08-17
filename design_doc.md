# Denton Kiosk Design Plan

## About

We (TechMill Denton) are building a web application that aggregates useful information to Denton residents and newcomers visiting our community. This app will initially be live on an iPad in a moderate-traffic public space while we perform beta testing with users, and eventually housed permanently in a large, rigid enclosure right on the square.

Our community is extremely active and oftentimes there are many events happening concurrently, but there’s not a single resource which aggregates all of that data.

## Resources
* Real-time DCTA information
	* Train and bus stops
	* Current location
	* Prices/plans

* Environmental data
	* Weather
	* Air quality

* Community events (Calendar)
	* Community market
	* Upcoming concerts and meet-ups
	* Aggregate from social media
	* City event calendar

* Facts
	* Recycling
	* Green energy availability
	* Cost of living, density, crime statistics
	* Historical factoids

* Local news
	* Denton record-chronicle

## Data collection
Another key purpose of this application is its data collection capabilities.

* User engagement by page (social services, events, local retail, etc).
* Event tracking (interacting with transit feed, weather, or ads).
* Data from surveys directly in the kiosk.


## Interface and technical details
[Info]

[Mock-ups]

## Detailed APIs
Below is a list of potential public facing APIs that can be used as a source of data into the digital kiosk.

### City of Denton Calendar API
- **Reference:** https://www.cityofdenton.com/en-us/calendars
- **URL:** https://www.cityofdenton.com/rest/content/currentsite/defaultculture/all?classnames=cms.event&format=json&where=<DATE RANGE>
- **Key:** 
	* Method: Basic authentication
	* User: ajax
	* Password: TrivialPassword
- **Notes:** Date range is written as such: `Date>='2019-9-1' AND Date<='2019-10-5'` and URL encoded.

### DCTA Transit Feeds
- **Reference:** https://www.dcta.net/resources/open-data
- **URL:** http://api.transitime.org/api/v1/key/dca04420/agency/dcta/command/gtfs-rt/tripUpdates?format=json
- **Notes:** Will require setup to map IDs from DCTA GTFS (General Transit Feed Specification).