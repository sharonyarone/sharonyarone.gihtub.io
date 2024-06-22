$(document).ready(function () {
  /***************** Waypoints ******************/

  $(".wp1").waypoint(
    function () {
      $(".wp1").addClass("animated fadeInLeft");
    },
    {
      offset: "75%",
    }
  );
  $(".wp2").waypoint(
    function () {
      $(".wp2").addClass("animated fadeInRight");
    },
    {
      offset: "75%",
    }
  );
  $(".wp3").waypoint(
    function () {
      $(".wp3").addClass("animated fadeInLeft");
    },
    {
      offset: "75%",
    }
  );
  $(".wp4").waypoint(
    function () {
      $(".wp4").addClass("animated fadeInRight");
    },
    {
      offset: "75%",
    }
  );
  $(".wp5").waypoint(
    function () {
      $(".wp5").addClass("animated fadeInLeft");
    },
    {
      offset: "75%",
    }
  );
  $(".wp6").waypoint(
    function () {
      $(".wp6").addClass("animated fadeInRight");
    },
    {
      offset: "75%",
    }
  );
  $(".wp7").waypoint(
    function () {
      $(".wp7").addClass("animated fadeInUp");
    },
    {
      offset: "75%",
    }
  );
  $(".wp8").waypoint(
    function () {
      $(".wp8").addClass("animated fadeInLeft");
    },
    {
      offset: "75%",
    }
  );
  $(".wp9").waypoint(
    function () {
      $(".wp9").addClass("animated fadeInRight");
    },
    {
      offset: "75%",
    }
  );

  /***************** Initiate Flexslider ******************/
  $(".flexslider").flexslider({
    animation: "slide",
  });

 

  /***************** Tooltips ******************/
  $('[data-toggle="tooltip"]').tooltip();

  /***************** Nav Transformicon ******************/

  /* When user clicks the Icon */
  $(".nav-toggle").click(function () {
    $(this).toggleClass("active");
    $(".header-nav").toggleClass("open");
    event.preventDefault();
  });
  /* When user clicks a link */
  $(".header-nav li a").click(function () {
    $(".nav-toggle").toggleClass("active");
    $(".header-nav").toggleClass("open");
  });

  /***************** Header BG Scroll ******************/

  $(function () {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();

      if (scroll >= 20) {
        $("section.navigation").addClass("fixed");
        $("header").css({
          "border-bottom": "none",
          padding: "27px 0",
        });
        $(".member-actions").css({
          top: "33px",
        });
        $("header .navicon").css({
          top: "34px",
        });
      } else {
        $("section.navigation").removeClass("fixed");
        $("header").css({
          "border-bottom": "solid 1px rgba(255, 255, 255, 0.2)",
          padding: "35px 0",
        });
        $(".member-actions").css({
          top: "41px",
        });

        $("header .navicon").css({
          top: "48px",
        });
      }
    });
  });
  /***************** Smooth Scrolling ******************/

  $(function () {
    $("a[href*=#]:not([href=#])").click(function () {
      if (
        location.pathname.replace(/^\//, "") ===
          this.pathname.replace(/^\//, "") &&
        location.hostname === this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top - 90,
            },
            2000
          );
          return false;
        }
      }
    });
  });



  /********************** Toggle Map Content **********************/
  $("#btn-show-map1").click(function () {
    $("#map-content1").toggleClass("toggle-map-content");
    $("#btn-show-content1").toggleClass("toggle-map-content");
  });
  $("#btn-show-content1").click(function () {
    $("#map-content1").toggleClass("toggle-map-content");
    $("#btn-show-content1").toggleClass("toggle-map-content");
  });

  $("#btn-show-map2").click(function () {
    $("#map-content2").toggleClass("toggle-map-content");
    $("#btn-show-content2").toggleClass("toggle-map-content");
  });
  $("#btn-show-content2").click(function () {
    $("#map-content2").toggleClass("toggle-map-content");
    $("#btn-show-content2").toggleClass("toggle-map-content");
  });



});

// alert_markup
function alert_markup(alert_type, msg) {
  return (
    '<div class="alert alert-' +
    alert_type +
    '" role="alert">' +
    msg +
    '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span>&times;</span></button></div>'
  );
}

document.getElementById("ouvrirInvit").addEventListener("click", function () {
  var elementCible = document.getElementById("premierePage");
  elementCible.style.display = "none";

  var elementCible = document.getElementById("deuxiemePage");
  elementCible.style.display = "block";

  var audio = new Audio("./music.mp3");
  // Lecture de la musique
  audio.play();

  //confettis
  const defaults = {
    spread: 360,
    ticks: 100,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    shapes: ["heart"],
    colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
  };

  confetti({
    ...defaults,
    particleCount: 50,
    scalar: 2,
  });

  confetti({
    ...defaults,
    particleCount: 25,
    scalar: 3,
  });

  confetti({
    ...defaults,
    particleCount: 10,
    scalar: 4,
  });
});
function ouvrirItineraire() {
  var elementCible = document.getElementById("deuxiemePage");
  elementCible.style.display = "none";

  var elementCible = document.getElementById("troisiemePage");
  elementCible.style.display = "block";

  window.scrollTo(0, 0);
}

document
  .getElementById("retourDeuxiemePage")
  .addEventListener("click", function () {
    var elementCible = document.getElementById("troisiemePage");
    elementCible.style.display = "none";

    var elementCible = document.getElementById("deuxiemePage");
    elementCible.style.display = "block";
  });
