


// Make API Call, pass in paramenters

$("#submit").on("click", function(event) {

  // store
  // search term
  var searchTerm = 'basketball';
  // seach records to Retrueve
  var searchRecords = 10;
  // Seach StartYear
  var searchStartYear = '20170610'; //YYYYMMDD
  // Search EndYear
  var searchEndYear = '20170610'; //YYYYMMDD

  event.preventDefault();
  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  url += '?' + my_key + $.param({
  	'api-key': my_key,
    'q': searchTerm,
    'begin_date': searchStartYear,
    'end_date': searchEndYear,
    'sort': "newest"
  });

  $.ajax({
    url: url,
    method: 'GET',
  }).done(function(result) {
    console.log(result);
  }).fail(function(err) {
    throw err;
  });
});


// Create Article Div

// Add Article Content

//
//
// var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
// url += '?' + my_key + $.param({
// 	'api-key': my_key,
//   'q': searchTerm,
//   'begin_date': searchStartYear,
//   'end_date': searchEndYear,
//   'sort': "newest"
// });
//
// $.ajax({
//   url: url,
//   method: 'GET',
// }).done(function(result) {
//   console.log(result);
// }).fail(function(err) {
//   throw err;
// });
