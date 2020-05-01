// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  // Weather
  //
  // API provider is OpenWeatherMap.org. Sign up there to get your API key and get your location code.
  weatherApiKey: '',
  weatherApiUrl: 'https://api.openweathermap.org/data/2.5',
  weatherLoc: '4685907',

  // Events
  //
  // API provider is Eventful.com. Sign up there to get your API key. Be sure to set your location here according to their
  // guidelines.
  eventsApiUrl: 'https://api.eventful.com/json/events/search',
  eventsApiKey: '',
  eventsLoc: 'Denton',

  // News
  //
  // API provider is NewsAPI.org. Sign up there to get your API key
  newsApiUrl: 'https://newsapi.org/v2/top-headlines?country=us',
  newsApiKey: '',
  
  // Air Quality
  //
  // API provider is AirVisual.com. Sign up there to get your API key. You will also need to set your City, State and Country
  // code here.
  aqiApiUrl: 'https://api.airvisual.com/v2/city?',
  aqiApiKey: '',
  aqiCity: 'Denton',
  aqiState: 'Texas',
  aqiCountry: 'USA',

  // Map
  //
  // Map is provided by OpenStreetMap.org. No API key is needed, but you should set your starting lcoation and then paste the
  // embed link here.
  mapUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=-97.13578373193742%2C33.21388788189697%2C-97.13130444288255%2C33.21615206951842&amp;layer=mapnik',

  // Survey
  //
  // Survey is provided by Google Forms. No API key is needed, but you will need a google account and to create a form at
  // docs.google.com/forms. Survey resutls will be stored there as well and can be accessed in a spreadsheet.
  surveyUrl: ''
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
