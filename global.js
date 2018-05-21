// GLOBAL VARIABLES
var ios = navigator.userAgent.match(/iPhone/i) ||
          navigator.userAgent.match(/iPad/i) ||
          navigator.userAgent.match(/iPod/i),
    android = navigator.userAgent.match(/Android/i),
    mobile = ios || android,
    portrait,
    landscape,
    twitterInAppBrowser = navigator.userAgent.includes("Twitter"),
    instagramInAppBrowser = navigator.userAgent.includes("Instagram"),
    safariMobile = navigator.userAgent.includes("Safari") && navigator.userAgent.includes("iPhone"),
    desktop = !ios || android,
    chrome = navigator.userAgent.includes("Chrome"),
    firefox = navigator.userAgent.includes("Firefox"),
    space = " ",
    comma = ",",
    add,
    subtract,
    multiply,
    divide;




// ORIENTATION CHANGE
function orientationChange() {
  portrait = $('html').width() < $('html').height();
  landscape = $('html').width() > $('html').height();
}




// CLOCK
function clock() {
 var date = new Date(),
     month,
     day_of_month,
     year,
     weekday,
     hour, 
     minute,
     meridiem,
     am,
     pm,
     time,
     abbreviations,
     weekday_three_letters,
     weekday_one_letter,
     full_alphabetical_date,
     full_numeric_date,
     full_numeric_time,
     mac_os;
  
  
  function monthConversions() {
    month = date.getMonth();

      if (month == 0) {
        month = 'January';
      }

      if (month == 1) {
        month = 'February';
      }

      if (month == 2) {
        month = 'March';
      }

      if (month == 3) {
        month = 'April';
      }

      if (month == 4) {
        month = 'May';
      }

      if (month == 5) {
        month = 'June';
      }

      if (month == 6) {
        month = 'July';
      } 
      
      if (month == 7) {
        month = 'August';
      } 
      
      if (month == 8) {
        month = 'September';
      } 
      
      if (month == 9) {
        month = 'October';
      } 
      
      if (month == 10) {
        month = 'November';
      } 
      
      if (month == 11) {
        month = 'December';
      } 
  }
  monthConversions();
  
  
  function dayOfMonthConversions() {
    day_of_month = date.getDate();
  }
  dayOfMonthConversions();
  
  
  function yearConversions() {
    year = date.getFullYear();
  }
  yearConversions();
   
  
  function weekdayConversions() {
    weekday = date.getDay();
    
    if (weekday == 0) {
      weekday = 'Sunday';
    }

    if (weekday == 1) {
      weekday = 'Monday';
    }

    if (weekday == 2) {
      weekday = 'Tuesday';
    }

    if (weekday == 3) {
      weekday = 'Wednesday';
    }

    if (weekday == 4) {
      weekday = 'Thursday';
    }

    if (weekday == 5) {
      weekday = 'Friday';
    }

    if (weekday == 6) {
      weekday = 'Saturday';
    }
  }
  weekdayConversions();
  
  
  function hourConversions() {
    hour = date.getHours();
   
    if (hour >= 12) {
      hour -= 12;
    }
    
    if (hour == 0) {
      hour = 12;
    }
  }
  hourConversions();
  
  
  function minuteConversions() {
    minute = date.getMinutes();
    
    if (minute < 10) {
      minute = '0' + minute;
    } 
  }
  minuteConversions();
  
  
  function meridiemConversions() {
    am = date.getHours() < 12 || date.getHours() == 24,
    pm = date.getHours() >= 12 && date.getHours() < 24;
    
    if (am) {
      meridiem = 'AM';
    }

    if (pm) {
      meridiem = 'PM';
    }
  }
  meridiemConversions();
  
  
  function characterVariationsDestinction() {
    mac_os = $('.time').parents('.mac-os').length;
    
    full_alphabetical_date =  weekday + comma + space + month + space + day_of_month + comma + space + year;
    
    full_numeric_date =  month + "/" + day_of_month + "/" + year;
    
    weekday_three_letters = weekday.substr(0, 3);
    
    weekday_one_letter = weekday.substr(0, 1);
    
    full_numeric_time = hour + ':' + minute + space + meridiem;
  }
  characterVariationsDestinction();
  
  
  function placements() {
    $('.mac-os .menu-bar .time-container .time')[0].innerHTML = weekday_three_letters + space + full_numeric_time;
    
    if ($('.mac-os .menu-bar .time-container .full-date').length > 0) {
      $('.mac-os .menu-bar .time-container .full-date')[0].innerHTML = full_alphabetical_date;
    }
    

  }
  placements();
}




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
