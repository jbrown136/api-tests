const config = require("../config/flickr")
const Flickr = require("flickrapi"),
flickrOptions = {
  api_key: config.key,
  secret: config.secret
};
// var flickr = new Flickr({
//     api_key: config.key
// });
Flickr.tokenOnly(flickrOptions, function(error, flickr) {
    const photos = flickr.photos.search({
        user_id: flickr.options.user_id,
        page: 1,
        per_page: 20
      }, function(err, result) {
        console.log(result)
      });
      //console.log(photos)    
});

// const photos = flickr.photos.search({
//     user_id: flickr.options.user_id,
//     page: 1,
//     per_page: 20
//   }, function(err, result) {
//     // result is Flickr's response
//   });

  //console.log(photos)