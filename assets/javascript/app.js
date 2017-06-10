
// store
// search term
var searchTerm = 'basketball';
// seach records to Retrueve
var searchRecords = 10;
// Seach StartYear
var searchStartYear = '20170610'; //YYYYMMDD
// Search EndYear
var searchEndYear = '20170610'; //YYYYMMDD

// Make API Call, pass in paramenters



// Create Article Div

// Add Article Content



var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?9669e295a3e64ec6bcda97a5e33b6b39' + $.param({
	'api-key': "9669e295a3e64ec6bcda97a5e33b6b39",
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
