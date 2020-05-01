export const environment = {
  production: true,

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
  // embed link here. Other source can be used, so long as it will work in an iframe.
  mapUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=-97.13578373193742%2C33.21388788189697%2C-97.13130444288255%2C33.21615206951842&amp;layer=mapnik',

  // Survey
  //
  // Survey is provided by Google Forms. No API key is needed, but you will need a google account and to create a form at
  // docs.google.com/forms. Survey resutls will be stored there as well and can be accessed in a spreadsheet.
  // Other survey source can be used, so long as it will work in an iframe.
  surveyUrl:''
};
