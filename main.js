
/* Sliding Pages */
$(document).ready(function() {
  var slideNum = $('.page').length,
    wrapperWidth = 100 * slideNum,
    slideWidth = 100 / slideNum;
  $('.wrapper').width(wrapperWidth + '%');
  $('.page').width(slideWidth + '%');

  $('a.scrollitem').click(function() {
    $('a.scrollitem').removeClass('selected');
    $(this).addClass('selected');

    var slideNumber = $($(this).attr('href')).index('.page'),
      margin = slideNumber * -100 + '%';

    $('.wrapper').animate({
      marginLeft: margin
    }, 1000);
    return false;
  });
});

/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});

/* Hide Nav Bar */
function hideNav() {
  document.getElementById("Nav").classList.add('w3-hide');
}

/* Unhide Nav Bar */
function unhideNav() {
  document.getElementById("Nav").classList.remove('w3-hide');
  document.body.className = document.body.className.replace("noscroll","");
}

/* Modal Image Gallery */
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}

/* Typed JS */
$(document).ready(function() {
    var options = {
        strings: ["Hi, I'm Kwong.^1000",
         "Welcome.^2000",
        ],
        typeSpeed: 60,
        backSpeed: 30,
        smartBackspace: true,
    }

    var typed = new Typed("#typed", options);
});
