// SIGN OUT
$('button.sign-out').click(function() {
  this_button = $(this).closest('button.sign-out');
  iosPromptLibrary();
});




// DELETE
$('button.delete').click(function() {
  this_button = $(this).closest('button.delete');
  comment_to_delete = $(this).closest('.single-message-container');
  iosPromptLibrary();
});
