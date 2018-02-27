function userProvider(targetElement) {
  if (targetElement.parents('.twitter, .twitter-embed').length) {
    social_media_provider = "Twitter";
  }
  
  if (targetElement.parents('.instagram, .instagram-embed').length) {
    social_media_provider = "Instagram";
  }
  
  if (targetElement.parents('.tumblr, .tumblr-embed').length) {
    social_media_provider = "Tumblr";
  }
  
  if (social_media_provider == null) {
    social_media_provider = "Social Media";
  }
}
