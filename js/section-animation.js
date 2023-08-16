// Les petites bulles à droite de l'écran avec un effet "Spy"
// + le changement de section quand on clique dessus

$(document).ready(function () {
  screenCheck();

  $(".scroll-control .one").click(function () {
    $.scrollify.move("#s-one");
  });
  $(".scroll-control .two").click(function () {
    $.scrollify.move("#s-two");
  });
  $(".scroll-control .three").click(function () {
    $.scrollify.move("#s-three");
  });
  $(".scroll-control .four").click(function () {
    $.scrollify.move("#s-four");
  });
});

$(window).on("resize", function () {
  screenCheck();
});

function applyScroll() {
  $.scrollify({
    section: ".scroll",
    sectionName: "section-name",
    easing: "easeOutExpo",
    scrollSpeed: 700,
    offset: 0,
    scrollbars: true,
    setHeights: true,
    overflowScroll: true,
    updateHash: false,
    touchScroll: true,
  });
}

function screenCheck() {
  var deviceAgent = navigator.userAgent.toLowerCase();
  var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
  if (agentID || $(window).width() <= 1024) {
    // pour les mobiles
    $.scrollify.destroy();
    $("section").removeClass("scroll").removeAttr("style");
    $.scrollify.disable();
  } else {
    //  pour les ordinateur
    $("section").addClass("scroll");
    applyScroll();
    $.scrollify.enable();
  }
}

function updateActiveBubble() {
  const sections = document.querySelectorAll("section.scroll");
  const bubbles = document.querySelectorAll(".scroll-control .bubble");

  sections.forEach((section, index) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    if (window.pageYOffset >= top && window.pageYOffset < top + height) {
      bubbles.forEach((bubble) => {
        bubble.classList.remove("active");
      });
      bubbles[index].classList.add("active");
    }
  });
}

// Mettre à jour les bulles actives lorsque l'utilisateur fait défiler la page
window.addEventListener("scroll", () => {
  updateActiveBubble();
});

// Mettre à jour les bulles actives lorsque la page est chargée
window.addEventListener("load", () => {
  updateActiveBubble();
});

// Animation quand on change de section en cliquant sur la navbar
$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

// Animation ScrollReveal

ScrollReveal().reveal(".items__header", {
  delay: 300,
});

ScrollReveal().reveal(".card__items", {
  delay: 400,
});

ScrollReveal().reveal(".card__items", {
  delay: 400,
});

ScrollReveal().reveal(".card__img", {
  delay: 400,
});

ScrollReveal().reveal(".container__project__scrollreveal", {
  delay: 400,
});

ScrollReveal().reveal(".container__contact__scrollreveal", {
  delay: 400,
});
