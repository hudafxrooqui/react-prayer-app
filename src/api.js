export const geoApiOptions = {
	//method for fetch
	method: "GET",
	headers: {
	  "X-RapidAPI-Key": `${process.env.REACT_APP_RapidApiKey}`,
	  "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
	},
  };
  
  export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
  
  export const prayerApiOptions = {
	method: "GET",
	headers: {
	  "X-RapidAPI-Key": `${process.env.RapidApiKey}`,
	  "X-RapidAPI-Host": "aladhan.p.rapidapi.com",
	},
  };
  //prayer API key
  export const PRAYER_API_URL = `${process.env.REACT_APP_PRAYER_API_URL}`;
  export const PRAYER_API_KEY = `${process.env.REACT_APP_PRAYER_API_KEY}`;