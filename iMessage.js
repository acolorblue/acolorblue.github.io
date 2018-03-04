// USER HANDLE DETERMINE
function userHandleDetermine(targetElement) {
  user_handle = $(targetElement).closest('.single-message-container, .social-media-embed').find('.user-handle').first().text();
}




// SAME USER FUNCTION
function sameUser() {
  same_user = $('.user-handle').filter(function() {
    return $(this).text() == user_handle;
  });

  same_user_parent = same_user.parents('.single-message-container');
}




// SIGN OUT
$('button.sign-out').click(function() {
  this_button = $(this).closest('button.sign-out');
  iosPromptLibrary();
});




// RELATION TO USER 
$('.relation-to-user').click(function() {
  this_button = $(this).closest('.relation-to-user');
  userProvider(this_button);
  userHandleDetermine(this_button);
  iosPromptLibrary();
}); 




// MUTE USER
$('.mute-user').click(function() {
  this_button = $(this).closest('.mute-user');
  userHandleDetermine(this_button);
  iosPromptLibrary();
});



// DELETE
$('button.delete').click(function() {
  this_button = $(this).closest('button.delete');
  comment_to_delete = $(this).closest('.single-message-container');
  iosPromptLibrary();
});




// WINDOW ON LOAD
window.onload = function() {
  sameUser();
}
