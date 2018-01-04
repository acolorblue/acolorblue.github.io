// SOCIAL MEDIA EMBED LIBRARY
function socialMediaProfileLibrary(user_info) {
  var profile_container = document.createElement('div');
      profile_container.className = 'profile-container' + (user_info.verified ? ' verified': '') +
                                                          (user_info.private ? ' private' : '');
  
  var header_container = document.createElement('div');
      header_container.className = 'header-container';
      profile_container.appendChild(header_container);
  
  
  if (user_info.provider == 'twitter.com') {
    var header_image = document.createElement('div');
        header_image.className = 'header-image';
        header_image.src = user_info.header_image;
        header_container.appendChild(header_image);

    var header_content = document.createElement('div');
        header_content.className = 'header-content';
        header_container.appendChild(header_content);

    var avi_button = document.createElement('button');
        avi_button.className = 'avi';
        header_content.appendChild(avi_button);

    var avi_image = document.createElement('img');
        avi_image.src = user_info.profile_picture;
        avi_button.appendChild(avi_image);

    var right_function_buttons_container = document.createElement('div');
        right_function_buttons_container.className = 'right-function-buttons';
        header_content.appendChild(right_function_buttons_container);

    var direct_message_button = document.createElement('button');
        direct_message_button.className = 'dm icons';
        right_function_buttons_container.appendChild(direct_message_button);

    if (user_info.uid != user_uid) {
      var relation_to_user_button = document.createElement("button");
      relation_to_user_button.className = "follow relation-to-user";
      relation_to_user_button.addEventListener("click", function() {
        if ($(this).hasClass("follow")) {
          followUser(user_info);
          $(this).removeClass("follow");
          $(this).addClass("following");
        } else if ($(this).hasClass("following") && $(".ios-prompt").length == 0) {
          $(this)
            .closest(".tabs, .social-media-embed-container")
            .append(iosPromptLibrary("Unfollow", user_info));
          $(this)
            .closest(".tabs, .social-media-embed-container")
            .addClass("ios-prompt-parent-transform");
        }
      });
      right_function_buttons_container.appendChild(relation_to_user_button);
    }

    var header_user_info = document.createElement('div');
        header_user_info.className = 'header-user-info';
        header_content.appendChild(header_user_info);

    var display_name = document.createElement('span');
        display_name.className = 'display-name';
        display_name.textContent = user_info.display_name;
        header_user_info.appendChild(display_name);

    var user_handle = document.createElement('span');
        user_handle.className = 'user-handle';
        user_handle.textContent = user_info.user_name;
        header_user_info.appendChild(user_handle);

    if (user_info.bio) {
      var user_bio = document.createElement('span');
          user_bio.className = 'bio';
          user_bio.innerHTML = user_info.bio;
          header_user_info.appendChild(user_bio);
    }

    if (user_info.location) {
      var user_location = document.createElement('span');
          user_location.className = 'location icons relative';
          user_location.textContent = user_info.location;
          header_user_info.appendChild(user_location);
    }

    if (user_info.bio_link)  {
      var user_personal_link = document.createElement('a');
          user_personal_link.className = 'personal-link icons relative';
          user_personal_link.href = user_info.bio_link;
          user_personal_link.target = '_blank';
          user_personal_link.textContent = user_info.bio_link;
          header_user_info.appendChild(user_personal_link);
    }

    var following_followers_container = document.createElement('div');
        following_followers_container.className = 'following-followers';
        header_content.appendChild(following_followers_container);

    var following_button = document.createElement('button');
        following_followers_container.appendChild(following_button);
    
    var following_span = document.createElement('span');
        following_span.className = 'following-amount';
        following_span.textContent = largeNumbersConverter(user_info.following);
        following_button.appendChild(following_span);
        following_button.textContent += ' Following';

    var followers_button = document.createElement('button');
        following_followers_container.appendChild(followers_button);
    
    var followers_span = document.createElement('span');
        followers_span.className = 'followers-amount';
        followers_span.textContent = largeNumbersConverter(user_info.followers);
        followers_button.appendChild(followers_span);
        followers_button.textContent += ' Followers';

    var header_profile_bridge = document.createElement('div');
        header_profile_bridge.className = 'header-profile-bridge';
        profile_container.appendChild(header_profile_bridge);

    var profile_area_header = document.createElement('div');
        profile_area_header.className = 'profile-area-header';
        header_profile_bridge.appendChild(profile_area_header);

    var profile_header_span = document.createElement('span');
        profile_header_span.className = 'ab-mid';
        profile_area_header.appendChild(profile_header_span);
    
    var user_content_container = document.createElement('div');
        user_content_container.className = 'user-profile-content';
        profile_container.appendChild(user_content_container);
    
    if (!user_info.private) {
      allRequestsToServers(COMMENTING_SYSTEM_PHP_URL, "GET", "access-for=social-media" +
                           "&social-media-requests=twitter-requests" +
                           "&action-to-perform=pull-users-timeline" +
                           "&q=" + user_info.user_id + 
                           "&token=" + user_info.access_token + 
                           "&secretToken=" + user_info.secret_token, 
                           "twitter", "pull-users-timeline", singlePostLibrary, user_info);
    }
    
    function singlePostLibrary(post_info_pull, user_info) {
      var user_single_post_container = document.createElement('div');
          user_single_post_container.className = 'single-post-container';

      if (post_info_pull.retweeted_status) {
        return singlePostLibrary(post_info_pull.retweeted_status, user_info);
      }

      var post_avi_button = document.createElement('button');
          post_avi_button.className = 'avi';
          user_single_post_container.appendChild(post_avi_button);

      var post_avi_image = document.createElement('img');
          post_avi_image.src = post_info_pull.user.profile_image_url_https;
          post_avi_button.appendChild(post_avi_image);

      var post_container = document.createElement('div');
          post_container.className = 'post-container';
          user_single_post_container.appendChild(post_container);

      var post_info = document.createElement('div');
          post_info.className = 'post-info';
          post_container.appendChild(post_info);

      var post_display_name = document.createElement('span');
          post_display_name.className = 'display-name';
          post_display_name.textContent = post_info_pull.user.name;
          post_info.appendChild(post_display_name);

      var post_handle_name = document.createElement('span');
          post_handle_name.className = 'user-handle';
          post_handle_name.textContent = post_info_pull.user.screen_name;
          post_info.appendChild(post_handle_name);

      var post_date = document.createElement('span');
          post_date.className = 'post-date';
          post_date.textContent = post_info_pull.created_at.split(' ').slice(1, 3).join(' ');
          post_info.appendChild(post_date);

      var post_content = document.createElement('div');
          post_content.className = 'post-content';
          post_container.appendChild(post_content);

      if (post_info_pull.text && post_info_pull.text != '') {
        var post_text = document.createElement('span');
            post_text.className = 'text';
            post_text.innerHTML = changeTwitterLinkInText(post_info_pull.text, 
                                                          post_info_pull.entities.urls,
                                                          post_info_pull.is_quote_status);
            post_content.appendChild(post_text);
      }

      function changeTwitterLinkInText(text, text_urls_info, quoted_status) {
        var text_array = text.split(' '),
            link_count = 0;

        for (var i = 0; i < text_array.length; i++) {

          if (text_array[i].substr(0, 8) == 'https://') {
            if (link_count < text_urls_info.length) {
              var link = document.createElement('a');
                  link.href =  text_urls_info[link_count].expanded_url;
                  link.target = '_blank';
                  link.textContent = text_urls_info[link_count].display_url;
                  text_array[i] = link.outerHTML;
            }

            if (i == text_array.length - 1  && ( quoted_status || link_count >= text_urls_info.length)) {
              text_array[i] = '';
            }

            link_count++;
          }
        }

        return text_array.join(' ');
      }

      if (post_info_pull.extended_entities && post_info_pull.extended_entities.media) {
        var media_container = document.createElement('div');
            media_container.className = 'media-container';
            post_content.appendChild(media_container);

        if (post_info_pull.extended_entities.media[0].type == 'photo') {
          var number_of_image = post_info_pull.extended_entities.media.length;
              media_container.className += ' images';

          if (number_of_image == 1) {
            media_container.className += ' one';
          }

          if (number_of_image > 1) {
            media_container.className += ' two-three-four';
          }

          if (number_of_image == 2) {
            media_container.className += ' two';
          }

          if (number_of_image == 3) {
            media_container.className += ' three three-four';
          }

          if (number_of_image == 4) {
            media_container.className += ' four three-four';
          }

          for (var i = 0; i < number_of_image; i++) {
            var media_span = document.createElement('span');
                media_span.className = 'media';
                media_container.appendChild(media_span);

            var image = document.createElement('img');
                image.src = post_info_pull.extended_entities.media[i].media_url_https;
                media_span.appendChild(image);
          }
        }

        if (post_info_pull.extended_entities.media[0].type == 'video') {
          media_container.className += ' video icons';

          var media_span = document.createElement('span');
              media_span.className = 'media';
              media_container.appendChild(media_span);

          var video = document.createElement('video');
              video.muted = true;
              media_span.appendChild(video);

          var video_source = document.createElement('source');
          for (var i = 0; i < post_info_pull.extended_entities.media[0].video_info.variants.length; i++) {
            if (post_info_pull.extended_entities.media[0].video_info.variants[i].bitrate == 320000) {
              video_source.src = post_info_pull.extended_entities.media[0].video_info.variants[i].url;
              video.appendChild(video_source);
            }
          } 
        }
      }

      if (post_info_pull.quoted_status) {
        var media_container = document.createElement('div');
            media_container.className = 'media-container quoted-tweet';
            post_content.appendChild(media_container);

        var quoted_status = post_info_pull.quoted_status;

        var quote_post_container = document.createElement('div');
            quote_post_container.className = 'post-container';
            media_container.appendChild(quote_post_container);

        var quote_post_info = document.createElement('div');
            quote_post_info.className = 'post-info';
            quote_post_container.appendChild(quote_post_info);

        var quote_display_name = document.createElement('span');
            quote_display_name.className = 'display-name';
            quote_display_name.textContent = quoted_status.user.name;
            quote_post_info.appendChild(quote_display_name);

        var quote_user_handle = document.createElement('span');
            quote_user_handle.className = 'user-handle';
            quote_user_handle.textContent = quoted_status.user.screen_name;
            quote_post_info.appendChild(quote_user_handle);

        var quote_content_container = document.createElement('div');
            quote_content_container.className = 'post-content';
            quote_post_container.appendChild(quote_content_container);

        if (quoted_status.text) {
          var quote_text = document.createElement('span');
              quote_text.className = 'text';
              quote_text.textContent.innerHTML = changeTwitterLinkInText(quoted_status.text,
                                                                         quoted_status.entities.urls,
                                                                         quoted_status.is_quote_status);
              quote_content_container.appendChild(quote_text);
        }

        if (quoted_status.entities.media) {
          var quote_media_post = document.createElement('div');
              quote_media_post.className = 'media-container images';
              quote_content_container.appendChild(quote_media_post);

          var number_of_image = quoted_status.entities.media.length;

          if (number_of_image == 1) {
            quote_media_post.className += ' one';
          }

          if (number_of_image > 1) {
            quote_media_post.className += ' two-three-four';
          }

          if (number_of_image == 2) {
            quote_media_post.className += ' two';
          }

          if (number_of_image == 3) {
            quote_media_post.className += ' three three-four';
          }

          if (number_of_image == 4) {
            quote_media_post.className += ' four three-four';
          }

          for (var i = 0; i < quoted_status.entities.media.length; i++) {
            var media_span = document.createElement('span');
                media_span.className = 'media';
                quote_media_post.appendChild(media_span);

            var quote_image = document.createElement('img');
                quote_image.src = quoted_status.entities.media[i].media_url_https;
                media_span.appendChild(quote_image);
          }
        }
      }

      var post_functions = document.createElement('div');
          post_functions.className = 'post-functions';
          post_container.appendChild(post_functions);

      var post_replies = document.createElement('span');
          post_replies.className = 'reply icons relative';
          post_functions.appendChild(post_replies);

      var post_reposts = document.createElement('span');
          post_reposts.className = 'retweets-count icons relative';
          post_reposts.textContent = largeNumbersConverter(post_info_pull.retweet_count);
          post_functions.appendChild(post_reposts);

      var post_likes = document.createElement('span');
          post_likes.className = 'likes-count icons relative';
          post_likes.textContent = largeNumbersConverter(post_info_pull.favorite_count);
          post_functions.appendChild(post_likes);

      user_content_container.appendChild(user_single_post_container);
    }
  }
  
  
  if (user_info.provider == 'instagram.com') {
    var header_content = document.createElement('div');
        header_content.className = 'header-content';
        header_container.appendChild(header_content);

    var avi_button = document.createElement('button');
        avi_button.className = 'avi';
        header_content.appendChild(avi_button);

    var avi_image = document.createElement('img');
        avi_image.src = user_info.profile_picture;
        avi_button.appendChild(avi_image);

    var right_function_buttons_container = document.createElement('div');
        right_function_buttons_container.className = 'right-function-buttons';
        header_content.appendChild(right_function_buttons_container);

    var relation_to_user_button = document.createElement('button');
        relation_to_user_button.className = 'follow relation-to-user';
        relation_to_user_button.addEventListener('click', function() {
          if ($(this).hasClass('follow')) {
            followUser(user_info);
            $(this).removeClass('follow');
            $(this).addClass('following'); 
          }
          else if ($(this).hasClass('following') && $('.ios-prompt').length == 0) {
            $(this).closest('.tabs, .social-media-embed-container').append(iosPromptLibrary('Unfollow', user_info));
            $(this).closest('.tabs, .social-media-embed-container').addClass('ios-prompt-parent-transform');
          }
        });
        right_function_buttons_container.appendChild(relation_to_user_button);

    var header_user_info = document.createElement('div');
        header_user_info.className = 'header-user-info';
        header_content.appendChild(header_user_info);

    var display_name = document.createElement('span');
        display_name.className = 'display-name';
        display_name.textContent = user_info.display_name;
        header_user_info.appendChild(display_name);

    var user_handle = document.createElement('span');
        user_handle.className = 'user-handle';
        user_handle.textContent = user_info.user_name;
        header_user_info.appendChild(user_handle);

    if (user_info.bio) {
      var user_bio = document.createElement('span');
          user_bio.className = 'bio';
          user_bio.textContent = user_info.bio;
          header_user_info.appendChild(user_bio);
    }

    if (user_info.bio_link)  {
      var user_personal_link = document.createElement('a');
          user_personal_link.className = 'personal-link';
          user_personal_link.href = user_info.bio_link;
          user_personal_link.target = '_blank';
          user_personal_link.textContent = user_info.bio_link;
          header_user_info.appendChild(user_personal_link);
    }

      var following_followers_container = document.createElement('div');
          following_followers_container.className = 'following-followers';
          header_content.appendChild(following_followers_container);

      var following_button = document.createElement('button');
          following_followers_container.appendChild(following_button);

      var following_span = document.createElement('span');
          following_span.className = 'following-amount';
          following_span.textContent = largeNumbersConverter(user_info.following);
          following_button.textContent += ' Following';
          following_button.appendChild(following_span);

      var followers_button = document.createElement('button');
          following_followers_container.appendChild(followers_button);

      var followers_span = document.createElement('span');
          followers_span.className = 'followers-amount';
          followers_span.textContent = largeNumbersConverter(user_info.followers);
          followers_button.textContent += ' Followers';
          followers_button.appendChild(followers_span);

      var header_profile_bridge = document.createElement('div');
          header_profile_bridge.className = 'header-profile-bridge';
          profile_container.appendChild(header_profile_bridge);

      var profile_area_header = document.createElement('div');
          profile_area_header.className = 'profile-area-header';
          header_profile_bridge.appendChild(profile_area_header);

      var profile_header_span = document.createElement('span');
          profile_header_span.className = 'ab-mid';
          profile_area_header.appendChild(profile_header_span);
    
    var user_content_container = document.createElement('div');
        user_content_container.className = 'user-profile-content';
        profile_container.appendChild(user_content_container);
    
    if (!user_info.private) {
      allRequestsToServers(COMMENTING_SYSTEM_PHP_URL, "GET", "access-for=social-media" +
                           "&social-media-requests=instagram-requests" +
                           "&action-to-perform=pull-users-timeline" +
                           "&q=" + user_info.access_token,
                           "instagram", "pull-users-timeline", singlePostLibrary, user_info);
    }
    
    function singlePostLibrary(post_info_pull, user_info) {
      var user_single_post_container = document.createElement('div');
          user_single_post_container.className = 'single-post-container';

        var post_container = document.createElement('div');
            post_container.className = 'post-container';
            user_single_post_container.appendChild(post_container);

        var post_header = document.createElement('div');
            post_header.className = 'post-header';
            post_container.appendChild(post_header);

        var post_avi_button = document.createElement('button');
            post_avi_button.className = 'avi';
            post_header.appendChild(post_avi_button);

        var post_avi_image = document.createElement('img');
            post_avi_image.src = user_info.profile_picture;
            post_avi_button.appendChild(post_avi_image);

        var post_handle_name = document.createElement('span');
            post_handle_name.className = 'user-handle';
            post_handle_name.textContent = user_info.user_name;
            post_header.appendChild(post_handle_name);

        var post_date = document.createElement('span');
            post_date.className = 'post-date';
            post_date.textContent = getTimeElapse(((Date.now()/1000) - post_info_pull.created_time));
            post_header.appendChild(post_date);

        var post_content = document.createElement('div');
            post_content.className = 'post-content';
            post_container.appendChild(post_content);

        var media_container = document.createElement('div');
            media_container.className = 'media-container';
            post_content.appendChild(media_container);

        var media_span = document.createElement('span');
            media_span.className = 'media';
            media_container.appendChild(media_span);

        if (post_info_pull.type == 'image') {
          media_container.className += ' images';

          var image = document.createElement('img');
              image.src = post_info_pull.images.low_resolution.url;
              media_span.appendChild(image);
        }

        if (post_info_pull.type == 'video') {
          media_container.className += ' video icons';

          var video = document.createElement('video');
              video.muted = true;
              media_span.appendChild(video);

          var video_source = document.createElement('source');
              video_source.src = post_info_pull.videos.low_bandwidth.url;
              video.appendChild(video_source);
        }

        // INSTAGRAM MULTIPLE VIDEOS OR IMAGES POST
        if (post_info_pull.carousel_media) {
          for (var i = 0; i < 1; i++) {
            if (post_info_pull.carousel_media[i].type == 'image') {
              media_container.className += ' images';

              var image = document.createElement('img');
                  image.src = post_info_pull.carousel_media[i].images.low_resolution.url;
                  media_span.appendChild(image);
            }

            if (post_info_pull.carousel_media[i].type == 'video') {
              media_container.className += ' video icons';

              var video = document.createElement('video');
                  video.muted = true;
                  media_span.appendChild(video);

              var video_source = document.createElement('source');
                  video_source.src = post_info_pull.carousel_media[i].videos.low_bandwidth.url;
                  video.appendChild(video_source);
            }
          }
        }

        if (post_info_pull.caption && post_info_pull.caption.text != '') {
          var post_content_handle_name = document.createElement('span');
              post_content_handle_name.className = 'user-handle';
              post_content_handle_name.textContent = user_info.user_name;
              post_content.appendChild(post_content_handle_name);

          var post_text = document.createElement('span');
              post_text.className = 'text';
              post_text.textContent = post_info_pull.caption.text;
              post_content.appendChild(post_text);
        }

      user_content_container.appendChild(user_single_post_container);
    }
  }
  
  
  if (user_info.provider == 'tumblr.com') {
    var header_image = document.createElement('div');
        header_image.className = 'header-image';
        header_image.src = user_info.header_image;
        header_container.appendChild(header_image);

    var header_content = document.createElement('div');
        header_content.className = 'header-content';
        header_container.appendChild(header_content);

    var avi_button = document.createElement('button');
        avi_button.className = 'avi';
        header_content.appendChild(avi_button);

    var avi_image = document.createElement('img');
        avi_image.src = user_info.profile_picture;
        avi_button.appendChild(avi_image);

    var right_function_buttons_container = document.createElement('div');
        right_function_buttons_container.className = 'right-function-buttons';
        header_content.appendChild(right_function_buttons_container);

    var relation_to_user_button = document.createElement('button');
        relation_to_user_button.className = 'follow relation-to-user';
        relation_to_user_button.addEventListener('click', function() {
          if ($(this).hasClass('follow')) {
            followUser(user_info);
            $(this).removeClass('follow');
            $(this).addClass('following'); 
          }
          else if ($(this).hasClass('following') && $('.ios-prompt').length == 0) {
            $(this).closest('.tabs, .social-media-embed-container').append(iosPromptLibrary('Unfollow', user_info));
            $(this).closest('.tabs, .social-media-embed-container').addClass('ios-prompt-parent-transform');
          }
        });
        right_function_buttons_container.appendChild(relation_to_user_button);

    var header_user_info = document.createElement('div');
        header_user_info.className = 'header-user-info';
        header_content.appendChild(header_user_info);

    var display_name = document.createElement('span');
        display_name.className = 'display-name';
        display_name.textContent = user_info.display_name;
        header_user_info.appendChild(display_name);

    var user_handle = document.createElement('span');
        user_handle.className = 'user-handle';
        user_handle.textContent = user_info.user_name;
        header_user_info.appendChild(user_handle);

    if (user_info.bio) {
      var user_bio = document.createElement('span');
          user_bio.className = 'bio';
          user_bio.textContent = user_info.bio;
          header_user_info.appendChild(user_bio);
    }
    
    var user_content_container = document.createElement('div');
        user_content_container.className = 'user-profile-content';
        profile_container.appendChild(user_content_container);
    
    if (!user_info.private) {
      allRequestsToServers(COMMENTING_SYSTEM_PHP_URL, "GET", "access-for=social-media" +
                           "&social-media-requests=tumblr-requests" +
                           "&action-to-perform=pull-users-timeline" +
                           "&q=" + user_info.access_token,
                           "tumblr", "pull-users-timeline", singlePostLibrary, user_info);
    }
      
    function singlePostLibrary(post_info_pull, user_info) {
      var user_single_post_container = document.createElement('div');
          user_single_post_container.className = 'single-post-container';

        if (post_info_pull.state == 'private') {
          return;
        }

        var post_container = document.createElement('div');
            post_container.className = 'post-container';
            user_single_post_container.appendChild(post_container);

        var post_header = document.createElement('div');
            post_header.className = 'post-header';
            post_container.appendChild(post_header);

        var post_avi_button = document.createElement('button');
            post_avi_button.className = 'avi';
            post_header.appendChild(post_avi_button);

        var post_avi_image = document.createElement('img');
            post_avi_image.src = user_info.profile_picture;
            post_avi_button.appendChild(post_avi_image);

        var post_handle_name = document.createElement('span');
            post_handle_name.className = 'user-handle';
            post_handle_name.textContent = user_info.user_name;
            post_header.appendChild(post_handle_name);

        if (post_info_pull.source_title) {
          var reblog_user_handle = document.createElement('span');
              reblog_user_handle.className = 'reblog icons relative';
              reblog_user_handle.textContent = post_info_pull.source_title;
              post_header.appendChild(reblog_user_handle);
        }

        var post_content = document.createElement('div');
            post_content.className = 'post-content';
            post_container.appendChild(post_content);

        if (post_info_pull.type == 'text') {
          if (post_info_pull.title) {
            var post_title = document.createElement('span');
                post_title.className = 'post-title';
                post_title.textContent = post_info_pull.title;
                post_content.appendChild(post_title);
          }

          var post_text = document.createElement('span');
              post_text.className = 'text';
              post_text.innerHTML += post_info_pull.body;
              post_content.appendChild(post_text);
        }

        if (post_info_pull.type == 'photo') {
          var media_container = document.createElement('div');
              media_container.className = 'media-container images';
              post_content.appendChild(media_container);

          for (var i = 0; i < 1; i++) {
            var media_span = document.createElement('span');
                media_span.className = 'media';
                media_container.appendChild(media_span);

            var image = document.createElement('img');
                image.src = post_info_pull.photos[i].alt_sizes[4].url;
                media_span.appendChild(image);

            if (post_info_pull.photos[i].caption) {
              var image_caption = document.createElement('span');
                  image_caption.textContent = post_info_pull.photos[i].caption;
                  media_span.appendchild(image_caption);
            }
          }
        }

        if (post_info_pull.type == 'video') {
          if (post_info_pull.video_type == 'tubmlr') {
            var media_container = document.createElement('div');
                media_container.className = 'media-container video icons';
                post_content.appendChild(media_container);

            var media_span = document.createElement('span');
                media_span.className = 'media';
                media_container.appendChild(media_span);

            var video = document.createElement('video');
                video.muted = true;
                media_span.appendChild(video);

            var video_source = document.createElement('source');
                video_source.src = post_info_pull.video_url;
                video.appendChild(video_source);
          }

          else {
            var video_source = document.createElement('a');
                video_source.href = post_info_pull.permalink_url;
                video_source.target ='_blank';
                video_source.textContent = post_info_pull.permalink_url;
                post_content.appendChild(video_source);
          }
        }

        if (post_info_pull.type == 'quote') {
          var post_text = document.createElement('span');
              post_text.className = 'text';
              post_text.innerHTML += "\"" + post_info_pull.text + "\"";
              post_content.appendChild(post_text);

          var quote_source = document.createElement('span');
              quote_source.classname = 'source';
              quote_source.innerHTML += "- " + post_info_pull.source;
              post_content.appendChild(quote_source);
        }

        if (post_info_pull.type == 'answer') {
          var question_avi_button = document.creteElement('button');
              question_avi_button.className = 'avi';
              post_content.appendChild(question_avi_button);

          var question_avi_image = document.ceateElement('img');
              question_avi_image.src = post_info_pull.asking_image;
              question_avi_button.appendChild(question_avi_image);

          var question_handle_name = document.createElement('span');
              question_handle_name = 'user-handle';
              question_handle_name.textContent = post_info_pull.asking_name;
              post_content.appendChild(question_handle_name);

          var question_text = document.createElement('span');
              question_text.className = 'post-question';
              question_text.innerHTML += post_info_pull.question;
              post_content.appendChild(question_text);

          var answer = document.createElement('span');
              answer.className = 'post-answer';
              answer.innerHTML += post_info_pull.answer;
              post_content.appendChild(answer);
        }

        if (post_info_pull.type == 'link') {
          var media_container = document.createElement('div');
              media_container.className = 'media-container link';
              post_content.appendChild(media_container);

          var link = document.createElement('a');
              link.href = post_info_pull.url;
              link.target = '_blank';
              link.textContent = post_info_pull.url;
              media_container.appendChild(link);

          if (post_info_pull.excerpt) {
            link.textContent = '';

            var link_publisher = document.createElement('span');
                link_publisher.className = 'link-publisher';
                link_publisher.textContent = post_info_pull.publisher;
                link.appendChild(link_publisher);

            if (post_info_pull.link_image) {
              var link_image = document.createElement('img');
                  link_image.src = post_info_pull.link_image;
                  link.appendChild(link_image);
            }

            var link_info = document.createElement('div');
                link_info.className ='post-info';
                link.appendChild(link_info);

            var link_title = document.createElement('span');
                link_title.className = 'link-title';
                link_title.textContent - post_info_pull.title;
                link_info.appendChild(link_title);

            var link_excerpt = document.createElement('span');
                link_excerpt.className = 'text'
                link_excerpt.textContent = post_info_pull.excerpt;
                link_info.appendChild(link_excerpt);

            if (post_info_pull.link_author) {
              var link_author = document.createelement('span');
                  link_author.className = 'link-author';
                  link_author.textContent = post_info_pull.link_author;
                  link_info.appendChild(link_author);
            }
          }
        }

        if (post_info_pull.type == 'audio') {
          var media_container = document.createElement('div');
              media_container.className = 'media-container audio';
              post_content.appendChild(media_container);

          var media_container_info = document.createElement('div');
              media_container_info.className = 'post-info';
              media_container.appendChild(media_container_info);

          var audio_title = document.createElement('span');
              audio_title.classname = 'audio-title';
              audio_title.textContent = post_info_pull.track_name;
              media_container_info.appendChild(audio_title);

          if (post_info_pull.artist) {
            var artist_name = document.createElement('span');
                artist_name.className = 'artist-name';
                artist_name.textContent = post_info_pull.artist;
                media_container_info.appendChild(artist_name);
          }

          var audio_cover_button = document.createElement('button');
              audio_cover_button.className = 'audio-cover icons relative';
              media_container.appendChild(audio_cover_button);

          if (post_info_pull.album_art) {
            var audio_cover_image = document.createElement('img');
                audio_cover_image.src = post_info_pull.album_art;
                audio_cover_button.appendChild(audio_cover_image);
          }

          if (post_info_pull.source_title) {
            var source = document.createElement('span');
                source.classname = 'source';
                source.textContent =post_info_pull.source_title;
                media_container.appendChild(source);
          }
        }

        if (post_info_pull.type == 'chat') {
          if (post_info_pull.title) {
            var post_title = document.createElement('span');
                post_title.className = 'post-title';
                post_title.textContent = post_info_pull.title;
                post_content.appendChild(post_title);
          }

          for (var i = 0; i < post_info_pull.dialogue.length; i++) {
            var label = document.createElement('b');
                label.textContent = post_info_pull.dialogue[i].label;
                post_content.appendChild(label);

            var sentence = document.createElement('span');
                sentence.textContent = post_info_pull.dialogue[i].phrase;
                post_content.appendCild(sentence);
          }
        }

        if (post_info_pull.trail) {
          for (var i = 0; i < post_info_pull.trail.length; i++) {
            var post_caption_container = document.createElement('div');
                post_caption_container.className = 'caption-container';
                post_content.appendChild(post_caption_container);

            var post_caption_avi = document.createElement('button');
                post_caption_avi.className = 'avi';
                post_caption_container.appendChild(post_caption_avi);

            var post_caption_avi_image = document.createElement('img');
                post_caption_avi_image.src = post_info_pull.trail[i].blog.avatar_image;
                post_caption_avi.appendChild(post_caption_avi_image);

            var caption_handle_name = document.createElement('span');
                caption_handle_name.className = 'user-handle';
                caption_handle_name.textContent = post_info_pull.trail[i].blog.name;
                post_caption_container.appendChild(caption_handle_name);

            var caption_text = document.createElement('span');
                caption_text.className = 'text';
                caption_text.innerHTML = post_info_pull.trail[i].content_raw;
                post_caption_container.appendChild(caption_text);
          }
        }

        var post_functions = document.createElement('div');
            post_functions.className = 'post-functions';
            post_container.appendChild(post_functions);

        var post_note = document.createElement('span');
            post_note.className = 'notes-count relative';
            post_note.textContent = largeNumbersConverter(post_info_pull.note_count);
            post_functions.appendChild(post_note);

        var post_replies = document.createElement('span');
            post_replies.className = 'share icons relative';
            post_functions.appendChild(post_replies);

        var post_reposts = document.createElement('span');
            post_reposts.className = 'reblog icons relative';
            post_functions.appendChild(post_reposts);

        var post_likes = document.createElement('span');
            post_likes.className = 'like icons relative';
            post_functions.appendChild(post_likes);

      user_content_container.appendChild(user_single_post_container);
    }
  }
  
  var see_more_button = document.createElement('a');
      see_more_button.className = 'see-more';
      see_more_button.target = '_blank';
      see_more_button.href = user_info.url;
      see_more_button.textContent = 'See more of ';
      profile_container.appendChild(see_more_button);
  
  var see_more_button_display_name = document.createElement('span');
      see_more_button_display_name.className = 'display-name icons relative';
      see_more_button_display_name.textContent = user_info.display_name;
      see_more_button.appendChild(see_more_button_display_name);
  
  return profile_container;
}
