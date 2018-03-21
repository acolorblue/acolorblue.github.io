// IOS PROMPT LIBRARY
function iosPromptLibrary() {
  if ($('.ios-prompt-container').length > 0) {
    $('.ios-prompt-container').remove();
  }
   
  var ios_prompt_container = document.createElement('div');
      ios_prompt_container.className = 'ios-prompt-container ab-mid';

  var ios_prompt = document.createElement('div');
      ios_prompt.className = 'ios-prompt';

  var notifier = document.createElement('div');
      notifier.className = 'notifier';

  var title = document.createElement('p');
      title.className = 'title';

  var description = document.createElement('span');
      description.className = 'description';
  
  var user_to_unfollow = document.createElement('p');
      user_to_unfollow.className = 'user-to-unfollow';
  
  var confirm_action = document.createElement('button');
      confirm_action.className = 'confirm-action';
  
  var confirm_action_container = document.createElement('div');
      confirm_action_container.className = 'confirm-action-container';
    
  var action_to_do = document.createElement('span');
      action_to_do.className = 'action-to-do ab-mid';

  var cancel_action = document.createElement('button');
      cancel_action.className = 'cancel-action';
   
  function iosPromptClose() {
    $(ios_prompt).addClass('hide');
    
    setTimeout(function() {
      $(ios_prompt).remove();
      $(ios_prompt_container).remove();
      $('.iphone-screen').removeClass('ios-prompt-parent-transform');
    }, 200);
  }
  
  if ($(this_button).hasClass('sign-out') ||
      $(this_button).parents('.private').length || 
      $(this_button).hasClass('following')  ||
      $(this_button).hasClass('mute-user') ||
      $(this_button).hasClass('delete')) {
    $('.iphone-screen').addClass('ios-prompt-parent-transform');
    $('.iphone-screen').append(ios_prompt_container);
    ios_prompt_container.appendChild(ios_prompt);
  }
  
  
  if ($(this_button).hasClass('sign-out')) {
    ios_prompt_container.className += ' launch translucent';
    ios_prompt.className += ' sign-out';
    confirm_action.className += ' icons-b';
    action_to_do.innerHTML = "click to sign out";
    cancel_action.className += ' icons-b';
    
    ios_prompt.appendChild(confirm_action_container);
    confirm_action_container.appendChild(confirm_action);
    confirm_action_container.appendChild(action_to_do);
    ios_prompt.appendChild(cancel_action);

    setTimeout(function() {
      $(ios_prompt_container).removeClass('launch');
    }, 10);

    $(confirm_action).click(function() {
      $(ios_prompt_container).addClass('confirmed');

      setTimeout(function() {
        iosPromptClose();
      }, 500);
      
      setTimeout(function() {
        $('.imessage').remove();
        location.reload();
      }, 500);
    });
  }

  
 
  if ($(this_button).hasClass('user-relation')) {
    sameUser();
    
    if ($(this_button).hasClass('follow')) {
        $(this_button).removeClass('follow');
        $(this_button).addClass('following');
        
      if (same_user) {
        $(same_user_parent).find('.user-relation').removeClass('follow');
        $(same_user_parent).find('.user-relation').addClass('following');
        
        if ($(same_user_parent).hasClass('private')) {
          $(same_user_parent).find('.user-relation').addClass('and-pending');
        }
      }
       
      if ($(this_button).parents('.private').length) {
          $(this_button).addClass('and-pending');
        
        ios_prompt.className += ' following-private-user middle scale-down hide';
        title.innerHTML = "Following Private User.";
        description.innerHTML = "You now follow this private user on ACOLORBLUE, however your follow request on " + social_media_provider + " is pending.";
        confirm_action.innerHTML = "Ok";
        cancel_action.innerHTML = "Unfollow";
        
        ios_prompt.appendChild(notifier);
        notifier.appendChild(title);
        notifier.appendChild(description);
        ios_prompt.appendChild(confirm_action);
        ios_prompt.appendChild(cancel_action);
        
        setTimeout (function() {
          $(ios_prompt).removeClass('scale-down hide');
        }, 10);
        
        $(confirm_action).click(function() {
          addScaleDownAndHide(ios_prompt);
          
          setTimeout (function() {
            iosPromptClose();
          }, 150);
        });
        
        $(cancel_action).click(function() {
          addScaleDownAndHide(ios_prompt);
          $(this_button).removeClass('following');
          $(this_button).addClass('follow');
        }); 
      }
    }
    
    else if ($(this_button).hasClass('following')) {
      
      setTimeout(function() { 
        ios_prompt.className += ' unfollow';
        user_to_unfollow.innerHTML = user_handle_text;
        confirm_action.innerHTML = "Unfollow";
        cancel_action.innerHTML = "Cancel";
        
        if ($(this_button).hasClass('and-pending')) {
          ios_prompt.className += ' and-cancel-request';
          confirm_action.innerHTML += " & Cancel follow request on " + social_media_provider;
        }
        
        ios_prompt.className += ' bottom';
      }, 150);
      
      ios_prompt.appendChild(user_to_unfollow);
      ios_prompt.appendChild(confirm_action);
      ios_prompt.appendChild(cancel_action);
      
      $(confirm_action).click(function() {
        $(this_button).removeClass('following');
        
        if ($(this_button).parents('.private')) {
          $(this_button).removeClass('and-pending');
        }
        
        $(this_button).addClass('follow');
        
        if (same_user) {
          $(same_user_parent).find('.user-relation').removeClass('following');
          
          if ($(same_user_parent).hasClass('private')) {
            $(same_user_parent).find('.user-relation').removeClass('and-pending');
          }
          
          $(same_user_parent).find('.user-relation').addClass('follow');
        }
        
        iosPromptClose();
      }); 
    } 
  }
  
  
  
  if ($(this_button).hasClass('mute-user')) {
    sameUser();
    
    ios_prompt.className += ' mute-user middle scale-down hide';
    title.innerHTML = "Muting User.";
    description.innerHTML = "You will no longer see " + user_handle_text + "'s comments.";
    confirm_action.innerHTML = "Mute";
    cancel_action.innerHTML = "Cancel";

    ios_prompt.appendChild(notifier);
    notifier.appendChild(title);
    notifier.appendChild(description);
    ios_prompt.appendChild(confirm_action);
    ios_prompt.appendChild(cancel_action);

    setTimeout (function() {
      $(ios_prompt).removeClass('scale-down hide');
    }, 10);

    $(confirm_action).click(function() { 
      $(this_button).siblings('.user-handle').addClass('muted');
      $(this_button).parents('.single-message-container').remove();
      
      if (same_user) {
        $(same_user_parent).find('.user-handle').addClass('muted');
        $(same_user_parent).remove();
      }

      addScaleDownAndHide(ios_prompt);
      
      setTimeout (function() {
        iosPromptClose();
      }, 150);
    });
 
    $(cancel_action).click(function() {
      addScaleDownAndHide(ios_prompt);
    }); 
  }
  
  

  if ($(this_button).hasClass('delete')) {
    
    setTimeout(function() {
      ios_prompt.className += ' delete';
      confirm_action.innerHTML = "Delete";
      cancel_action.innerHTML = "Cancel";

      if ($(this_button).parents('.single-message-container')) {
        ios_prompt.class += ' comment';
        confirm_action.innerHTML += " Comment";

        $(confirm_action).click(function() {
          comment_to_delete.remove();
          iosPromptClose();
        });
      }
      
      ios_prompt.className += ' bottom';
    }, 150);
    
    ios_prompt.appendChild(confirm_action);
    ios_prompt.appendChild(cancel_action);
  }

  
  $(cancel_action).click(function() {
    iosPromptClose();
  });
}
