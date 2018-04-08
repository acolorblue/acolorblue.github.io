// GLOBAL VARIABLES
var this_button,
    comment_to_delete,
    social_media_provider,
    user_handle_text,
    same_user,
    same_user_parent,
    user_relation,
    current_user_relation;




// USER HANDLE DETERMINE
function userHandleDetermine(targetElement) {
  user_handle_text = $(targetElement).closest('.single-message-container, .profile-container').find('.user-handle').first().text();
}




// SAME USER FUNCTION
function sameUser() {
  same_user = $('.user-handle').filter(function() {
    return $(this).text() == user_handle_text;
  });

  same_user_parent = same_user.parents('.single-message-container, .profile-container');
}




// USER RELATION DETERMINE
function userRelationDetermine() {
   current_user_relation = $(this).closest('.single-message-container, .profile-container').find('.user-relation');
}




// SIGN OUT
$('button.sign-out').click(function() {
  this_button = $(this);
  iosPromptLibrary();
});




// BUTTON AVI IN COMMENTS
$('button.avi.in-comments').click(function() {
  this_button = $(this);
  userProvider(this_button);
  userHandleDetermine(this);
  userRelationDetermine();
  socialMediaEmbedLibrary();
});



// RELATION TO USER 
$('.user-relation').click(function() {
  this_button = $(this);
  userProvider(this_button);
  userHandleDetermine(this_button);
  iosPromptLibrary();
}); 




// MUTE USER
$('.mute-user').click(function() {
  this_button = $(this);
  userHandleDetermine(this_button);
  iosPromptLibrary();
});



// DELETE
$('button.delete').click(function() {
  this_button = $(this);
  comment_to_delete = $(this).closest('.single-message-container');
  iosPromptLibrary();
});
