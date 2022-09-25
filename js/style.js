$(document).ready(function () {
  // Navbar

  $(".navbar-toggler").click(function () {
    $(".navbar-nav").animate({
      top : "0px"
    },1000);
    $(".btnClose").fadeOut();
  });

  $(".btnClose").click(function () {
    $(".navbar-nav").animate({
      top : "-1000px"
    },1000);
  });

  $(".nav-link").click(function () {
    $(".navbar-nav").animate({
      top : "-450px"
    },500);
  });

  // Show Video

  $(".showVideoBtn").click(function () {
      $(".myvideo").css({
        visibility : "visible",
      });
      $('#bodyFlow').css({ overflow : "hidden" });
    });
  $(".close").click(function () {
    $(".myvideo").css({
      visibility : "hidden",
    });
    $('#bodyFlow').css({ overflow : "auto" });
  });

  //  Fix Menu

  let screenHeight = $(window).height();
  $(window).scroll(function () {
      let current = $(window).scrollTop();

      if (current > screenHeight -100) {
          $(".header").addClass("header-fix");
          $(".topBtn").addClass("animate__animated animate__bounce").css({ visibility : "visible"})
      }else{
        $(".header").removeClass("header-fix");
        setActive("particles-js");
        $(".topBtn").css({
          visibility: "hidden"
        });
      }
  });

  //  Scroll setAtive Way Point

      function setActive(current) {
        $(".nav-link").removeClass("activebtn");
        $(`.nav-link[href='#${current}']`).addClass("activebtn");
      }

    function scroll() {
        let currentSection = $("section[id]");
        currentSection.waypoint(function (direction) {
            if (direction === "down") {
                let currentSectionId = $(this.element).attr('id');
                setActive(currentSectionId);
            }
        },{offset : "0px"});

        currentSection.waypoint(function (direction) {
          if (direction === "up") {
              let currentSectionId = $(this.element).attr('id');
              setActive(currentSectionId);
          }
      },{offset : "-1px"});

    }
scroll();

    // Typed Js

    var typed = new Typed('.element', {
        strings: ['Hein Htet Aung','Web Developer', 'Ui/Ux Desinger',],
        typeSpeed : 150,
        backSpeed : 10,
        loop : true
      });

      // Filter Js

      var $grid = $('.item-details').isotope({
        // options
      });
      // filter items on button click
      $('.filter-button').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
      });

      // Counter-Up

      $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // Venobox

    $('.venobox').venobox({
      framewidth : '400px',                            // default: ''
      frameheight: '300px',                            // default: ''
      border     : '10px',                             // default: '0'
      titleattr  : 'data-title',                       // default: 'title'
      numeratio  : true,                               // default: false
      infinigall : true,                               // default: false
      share      : ['facebook', 'twitter', 'download'] // default: []
    });

    //  animate

    wow = new WOW(
      {
      boxClass:     'wow',      // default
      animateClass: 'animate__animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true,        // default
      infinigall:   true,
    }
    );
    wow.init();

  // Particles bg

    particlesJS('particles-js',

    {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 500
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 1,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 5,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "remove"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true,  }

  );

        //  loading

      $(window).on("load", function () {
        $(".loading").fadeOut(500);
        $(this).remove();
      });

    $('#jq').LineProgressbar({
      percentage:70,
      radius: '3px',
      height: '10px',
      fillBackgroundColor: '#4A5FC1',
      ShowProgressCount:true,
      duration: 10000,
      });
      $('#html').LineProgressbar({
      percentage:90,
      radius: '3px',
      height: '10px',
      fillBackgroundColor: '#4A5FC1',
      ShowProgressCount:true,
      duration: 10000,
      });
      $('#css').LineProgressbar({
      percentage:80,
      radius: '3px',
      height: '10px',
      fillBackgroundColor: '#4A5FC1',
      ShowProgressCount:true,
      duration: 10000,
      });


      $(".btnClick").on("click",function () {$('.btnClick').removeClass("active"); $(this).addClass("active");});

});
