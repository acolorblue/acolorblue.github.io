// USER HANDLE DETERMINE
function userHandleDetermine(targetElement) {
  user_handle = $(targetElement).closest('.single-message-container, .social-media-embed').find('.user-handle').first().text();
}




// SIGN OUT
$('button.sign-out').click(function() {
  this_button = $(this).closest('button.sign-out');
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
