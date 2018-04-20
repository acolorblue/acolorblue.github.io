// GLOBAL VARIABLES
var ios = navigator.userAgent.match(/iPhone/i) ||
          navigator.userAgent.match(/iPad/i) ||
          navigator.userAgent.match(/iPod/i),
    android = navigator.userAgent.match(/Android/i),
    space = " ",
    add,
    subtract,
    multiply,
    divide;




// ADD CLASSES 'scale-down hide' TO ELEMENT 
function addScaleDownAndHide(targetElement) {
  $(targetElement).addClass('scale-down hide');
}




// SUBTRACT OR ADD 1
function arithmetic(targetElement, integer) {
  add = parseInt($(targetElement).height()) + integer,
  subtract = parseInt($(targetElement).height()) - integer,
  multiply = parseInt($(targetElement).height()) * integer,
  divide =  parseInt($(targetElement).height()) / integer;
}
