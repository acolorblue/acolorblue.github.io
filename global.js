// GLOBAL VARIABLES
var ios = navigator.userAgent.match(/iPhone/i) ||
          navigator.userAgent.match(/iPad/i) ||
          navigator.userAgent.match(/iPod/i),
    android = navigator.userAgent.match(/Android/i),
    subtract1,
    add1;




// ADD CLASSES 'scale-down hide' TO ELEMENT 
function addScaleDownAndHide(targetElement) {
  $(targetElement).addClass('scale-down hide');
}
