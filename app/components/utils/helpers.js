// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// Geocoder API
var nytAPI = "da675c565aaf42ab814858facd222de7";

// Helper functions for making API Calls
var helper = {

  // This function serves our purpose of running the query to geolocate.
  runQuery: function(search) {

    //console.log(search);

    // Figure out the geolocation
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
    queryURL += 'fq=' + search.term;
    //queryURL += '&begin_date=' + search.start;
    //queryURL += '&end_date=' + search.end;
    queryURL += '&api-key=' + nytAPI;

    return axios.get(queryURL).then(function(response, err) {
      // If get get a result, return that result's formatted address property

      if (response.data.response.docs) {
        var articles = [];
        for (var i=0; i<response.data.response.docs.length; i++){
        //console.log("headline: " + response.data.response.docs[i].headline.main + ", url: " + response.data.response.docs[i].web_url )
        articles.push({ 'headline' : response.data.response.docs[i].headline.main, 'url' : response.data.response.docs[i].web_url })
       

        }
        return articles;
      }
      // If we don't get any results, return an empty string
      console.log("there is nothing here")
      throw err;
    });
  },

  // This function hits our own server to retrieve the record of query results
  getHistory: function() {
    return axios.get("/api");
  },

  // This function posts new searches to our database.
  postHistory: function(data) {
    //console.log("from post history", data)
    return axios.post("/api", { data: data });
  }
};

// We export the API helper
module.exports = helper;
