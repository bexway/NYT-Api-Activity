


// Make API Call, pass in paramenters

$("#submit").on("click", function(event) {
  // store
  // search term
  var searchTerm = $('.js-searchTerm')[0].value.trim();
  // seach records to Retrueve
  var searchRecords = 10;
  // Seach StartYear
  var searchStartYear =  $('.js-searchStartYear')[0].value.trim(); //YYYYMMDD
  // Search EndYear
  var searchEndYear =  $('.js-searchEndYear')[0].value.trim(); //YYYYMMDD

  event.preventDefault();
  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  url += '?' + $.param({
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
    //go through searchRecords to display top content
    var articleDiv = $('.js-articleholder');
    for (var i=0; i < Math.min(searchRecords, result.response.docs.length); i++){
      console.log(result.response.docs[i]);
      var article = $("<div>");
      article.text(result.response.docs[i].headline.main);
      articleDiv.append(article);


    }
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
