// GLOBAL VARIABLES
var ios = navigator.userAgent.match(/iPhone/i) ||
          navigator.userAgent.match(/iPad/i) ||
          navigator.userAgent.match(/iPod/i),
    android = navigator.userAgent.match(/Android/i),
    blackberry = navigator.userAgent.match(/BlackBerry/i),
    webOS = navigator.userAgent.match(/webOS/i),
    mobile = ios || android || blackberry || webOS,
    computer = !mobile,
    portrait = window.orientation == 0,
    landscape = window.orientation == -90 || window.orientation == 90,
    twitterInAppBrowser = navigator.userAgent.includes("Twitter"),
    instagramInAppBrowser = navigator.userAgent.includes("Instagram"),
    safari = navigator.userAgent.includes("Safari") && navigator.userAgent.includes("iPhone") || navigator.userAgent.includes("Macintosh"),
    chrome = navigator.userAgent.includes("Chrome"),
    firefox = navigator.userAgent.includes("Firefox"),
    device_width_longer = $('body').hasClass('width-longer'),
    device_height_longer = $('body').hasClass('height-longer'),
    space = " ",
    comma = ",",
    add,
    subtract,
    multiply,
    divide;




// DEVICE SPECIFICATIONS
function specifications() {       
  function device() {
  // COMPUTER
  if (computer) {
    $('body').addClass('computer');
  }       
            
  // MOBILE       
  if (mobile) {
    $('body').addClass('mobile');

    if (ios) {
      $('body').addClass(' ios');
    }

    if (android) {
      $('body').addClass(' android');
    }

    function portraitOrLandscape() {
      if (window.orientation == 0) {
        $('body').removeClass('landscape').addClass('portrait');
      }

      else if (window.orientation == -90 || 90) {
        $('body').removeClass('portrait').addClass('landscape');
      }
    }
    portraitOrLandscape();

    window.addEventListener('orientationchange', function() {
      portraitOrLandscape();
    });
    return;
  }
}
device();
             
          
  // BROWSER        
  function browser() {
    if (safari) {
      $('body').addClass(' safari');
    }

    if (chrome) {
      $('body').addClass(' chrome');
    }

    if (firefox) {
      $('body').addClass(' firefox');
    }
  }
  browser();
}




// ORIENTATION CHANGE
function orientationCheck() {
  portrait = $('body').width() < $('body').height();
  landscape = $('body').width() > $('body').height();
}




// CLOCK
function clock() {
         
setTimeout(function() {
  clockConversions();
}, 1000);
          
var clock_conversions_interval = setInterval(clockConversions, 10000);
function clockConversions() {
 var date = new Date(),
     month,
     day_of_month,
     year,
     weekday,
     hour, 
     minute,
     meridi
