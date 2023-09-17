$.fn.dropdown = (function() {
    var $bsDropdown = $.fn.dropdown;
    return function(config) {
        if (typeof config === 'string' && config === 'toggle') { // dropdown toggle trigged
            $('.has-child-dropdown-show').removeClass('has-child-dropdown-show');
            $(this).closest('.dropdown').parents('.dropdown').addClass('has-child-dropdown-show');
        }
        var ret = $bsDropdown.call($(this), config);
        $(this).off('click.bs.dropdown'); // Turn off dropdown.js click event, it will call 'this.toggle()' internal
        return ret;
    }
})();

$(function() {
    $('.dropdown [data-toggle="dropdown"]').on('click', function(e) {
        $(this).dropdown('toggle');
        e.stopPropagation(); // do not fire dropdown.js click event, it will call 'this.toggle()' internal
    });
    $('.dropdown').on('hide.bs.dropdown', function(e) {
        if ($(this).is('.has-child-dropdown-show')) {
        	$(this).removeClass('has-child-dropdown-show');
            e.preventDefault();
        }
        e.stopPropagation();    // do not need pop in multi level mode
    });

    function runningSince(startDate, mainContent) {
      let days, hours, minutes, seconds;

      startDate = new Date(startDate).getTime();

      if (isNaN(startDate)) {
    	   return;
      }

      setInterval(calculate2, 1000);

      function calculate2() {
        let endDate = new Date();
        endDate = endDate.getTime();

        let timeRemaining = parseInt((endDate - startDate) / 1000);

        if (timeRemaining >= 0) {
          document.getElementById("runningSince").style.display = "block";
          months = parseInt(timeRemaining / 2592000);
          timeRemaining = (timeRemaining % 2592000);

          days = parseInt(timeRemaining / 86400);
          timeRemaining = (timeRemaining % 86400);

          hours = parseInt(timeRemaining / 3600);
          timeRemaining = (timeRemaining % 3600);

          minutes = parseInt(timeRemaining / 60);
          timeRemaining = (timeRemaining % 60);

          seconds = parseInt(timeRemaining);

          parent  = document.getElementById('runningSince');
          months2 = parent.getElementsByClassName("months");
          days2 = parent.getElementsByClassName("days");
          hours2 = parent.getElementsByClassName("hours");
          minutes2 = parent.getElementsByClassName("minutes");
          seconds2 = parent.getElementsByClassName("seconds");

          for(var i=0;i<days2.length;i++){
            months2[i].innerHTML = parseInt(months, 10);
            days2[i].innerHTML = ("0" + days).slice(-2);
            hours2[i].innerHTML = ("0" + hours).slice(-2);
            minutes2[i].innerHTML = ("0" + minutes).slice(-2);
            seconds2[i].innerHTML = ("0" + seconds).slice(-2);
          }

        } else {
          document.getElementById("runningSince").style.display = "none";
        }
      }
    }

    if (window.location.pathname.substring(1) == "crazy.html" || window.location.pathname.substring(1) == "crazy") {
      runningSince('11/03/2019 12:00:00 AM UTC');
    } else if (window.location.pathname.substring(1) == "stable.html" || window.location.pathname.substring(1) == "stable") {
      runningSince('01/11/2020 07:00:00 PM UTC');
    } else if (window.location.pathname.substring(1) == "hextew.html" || window.location.pathname.substring(1) == "hextew") {
      runningSince('01/21/2020 12:00:00 AM UTC');
    } else if (window.location.pathname.substring(1) == "stableth.html" || window.location.pathname.substring(1) == "stableth") {
      runningSince('02/03/2020 12:00:00 AM UTC');
    } else if (window.location.pathname.substring(1) == "hexrise.html" || window.location.pathname.substring(1) == "hexrise") {
      runningSince('02/23/2020 12:00:00 AM UTC');
    } else if (window.location.pathname.substring(1) == "hexmax.html" || window.location.pathname.substring(1) == "hexmax") {
      runningSince('03/29/2020 12:00:00 AM UTC');
    } else if (window.location.pathname.substring(1) == "infinitew.html" || window.location.pathname.substring(1) == "infinitew") {
      runningSince('04/12/2020 12:00:00 AM UTC');
    } else if (window.location.pathname.substring(1) == "infinihex.html" || window.location.pathname.substring(1) == "infinihex") {
      runningSince('05/23/2020 11:00:00 PM UTC');
    } else if (window.location.pathname.substring(1) == "tewkenity.html" || window.location.pathname.substring(1) == "tewkenity") {
      runningSince('06/27/2020 11:00:00 PM UTC');
    // } else if (window.location.pathname.substring(1) == "staking.html" || window.location.pathname.substring(1) == "staking") {
    //   runningSince('04/25/2020 11:00:00 PM UTC');
    // } else if (window.location.pathname.substring(1) == "tewkentrx.html" || window.location.pathname.substring(1) == "tewkentrx") {
    //   runningSince('09/12/2020 11:00:00 PM UTC');
    }
});
