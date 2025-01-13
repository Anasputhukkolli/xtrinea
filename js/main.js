(function ($) {
  "use strict";
  // TOP Menu Sticky
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 400) {
      $("#sticky-header").removeClass("sticky");
      $("#back-top").fadeIn(500);
    } else {
      $("#sticky-header").addClass("sticky");
      $("#back-top").fadeIn(500);
    }
  });

  $(document).ready(function () {
    // mobile_menu
    var menu = $("ul#navigation");
    if (menu.length) {
      menu.slicknav({
        prependTo: ".mobile_menu",
        closedSymbol: "+",
        openedSymbol: "-",
      });
    }
    // blog-menu
    // $('ul#blog-menu').slicknav({
    //   prependTo: ".blog_menu"
    // });

    // review-active
    $(".slider_active").owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      autoplay: true,
      navText: [
        '<i class="ti-angle-left"></i>',
        '<i class="ti-angle-right"></i>',
      ],
      nav: true,
      dots: false,
      autoplayHoverPause: true,
      autoplaySpeed: 800,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        767: {
          items: 1,
        },
        992: {
          items: 1,
          nav: true,
        },
        1200: {
          items: 1,
        },
        1600: {
          items: 1,
          nav: true,
        },
      },
    });

    // review-active
    var brand_active = $(".brand_active");
    if (brand_active.length) {
      brand_active.owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        navText: [
          '<i class="ti-angle-left"></i>',
          '<i class="ti-angle-right"></i>',
        ],
        nav: false,
        dots: false,
        autoplayHoverPause: true,
        autoplaySpeed: 800,
        center: false,
        responsive: {
          0: {
            items: 1,
            nav: false,
          },
          767: {
            items: 3,
          },
          992: {
            items: 4,
          },
          1200: {
            items: 4,
          },
          1500: {
            items: 5,
          },
        },
      });
    }

    // for filter
    // init Isotope
    var $grid = $(".grid").isotope({
      itemSelector: ".grid-item",
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: 1,
      },
    });

    // filter items on button click
    $(".portfolio-menu").on("click", "button", function () {
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({ filter: filterValue });
    });

    //for menu active class
    $(".portfolio-menu button").on("click", function (event) {
      $(this).siblings(".active").removeClass("active");
      $(this).addClass("active");
      event.preventDefault();
    });

    // wow js
    new WOW().init();

    // counter
    $(".counter").counterUp({
      delay: 10,
      time: 10000,
    });

    /* magnificPopup img view */
    $(".popup-image").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });

    /* magnificPopup img view */
    $(".img-pop-up").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });

    /* magnificPopup video view */
    $(".popup-video").magnificPopup({
      type: "iframe",
    });

    // scrollIt for smoth scroll
    $.scrollIt({
      upKey: 38, // key code to navigate to the next section
      downKey: 40, // key code to navigate to the previous section
      easing: "linear", // the easing function for animation
      scrollTime: 600, // how long (in ms) the animation takes
      activeClass: "active", // class given to the active nav element
      onPageChange: null, // function(pageIndex) that is called when page is changed
      topOffset: 0, // offste (in px) for fixed top navigation
    });

    // scrollup bottom to top
    $.scrollUp({
      scrollName: "scrollUp", // Element ID
      topDistance: "4500", // Distance from top before showing element (px)
      topSpeed: 300, // Speed back to top (ms)
      animation: "slide", // Fade, slide, none
      animationInSpeed: 200, // Animation in speed (ms)
      animationOutSpeed: 200, // Animation out speed (ms)
      easingType: "linear",
      scrollText: '<i class="ti-angle-up"></i>', // Text for element
      activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
      easingType: "linear",
      scrollSpeed: 900,
      animation: "slide",
    });

    // blog-page

    //brand-active
    $(".brand-active").owlCarousel({
      loop: true,
      margin: 30,
      items: 1,
      autoplay: true,
      nav: false,
      dots: false,
      autoplayHoverPause: true,
      autoplaySpeed: 800,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        767: {
          items: 4,
        },
        992: {
          items: 7,
        },
      },
    });

    // blog-dtails-page

    //project-active
    $(".project-active").owlCarousel({
      loop: true,
      margin: 30,
      items: 1,
      // autoplay:true,
      navText: [
        '<i class="Flaticon flaticon-left-arrow"></i>',
        '<i class="Flaticon flaticon-right-arrow"></i>',
      ],
      nav: true,
      dots: false,
      // autoplayHoverPause: true,
      // autoplaySpeed: 800,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        767: {
          items: 1,
          nav: false,
        },
        992: {
          items: 2,
          nav: false,
        },
        1200: {
          items: 1,
        },
        1501: {
          items: 2,
        },
      },
    });

    if (document.getElementById("default-select")) {
      $("select").niceSelect();
    }

    //about-pro-active
    $(".details_active").owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      // autoplay:true,
      navText: [
        '<i class="ti-angle-left"></i>',
        '<i class="ti-angle-right"></i>',
      ],
      nav: true,
      dots: false,
      // autoplayHoverPause: true,
      // autoplaySpeed: 800,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        767: {
          items: 1,
          nav: false,
        },
        992: {
          items: 1,
          nav: false,
        },
        1200: {
          items: 1,
        },
      },
    });
  });

  // resitration_Form
  $(document).ready(function () {
    $(".popup-with-form").magnificPopup({
      type: "inline",
      preloader: false,
      focus: "#name",

      // When elemened is focused, some mobile browsers in some cases zoom in
      // It looks not nice, so we disable it:
      callbacks: {
        beforeOpen: function () {
          if ($(window).width() < 700) {
            this.st.focus = false;
          } else {
            this.st.focus = "#name";
          }
        },
      },
    });
  });

  //------- Mailchimp js --------//
  function mailChimp() {
    $("#mc_embed_signup").find("form").ajaxChimp();
  }
  mailChimp();

  // Search Toggle
  $("#search_input_box").hide();
  $("#search").on("click", function () {
    $("#search_input_box").slideToggle();
    $("#search_input").focus();
  });
  $("#close_search").on("click", function () {
    $("#search_input_box").slideUp(500);
  });
  // Search Toggle
  $("#search_input_box").hide();
  $("#search_1").on("click", function () {
    $("#search_input_box").slideToggle();
    $("#search_input").focus();
  });
  $(document).ready(function () {
    $("select").niceSelect();
  });

  const tilt = $(".js-tilt").tilt({
    maxTilt: 20,
    // perspective:    10,   // Transform perspective, the lower the more extreme the tilt gets.
    // easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    // scale:          1,      // 2 = 200%, 1.5 = 150%, etc..
    // speed:          500,    // Speed of the enter/exit transition.
    // transition:     true,   // Set a transition on enter/exit.
    // disableAxis:    null,   // What axis should be disabled. Can be X or Y.
    // reset:          true,   // If the tilt effect has to be reset on exit.
    // glare:          true,  // Enables glare effect
    // maxGlare:       1       // From 0 - 1.
  });

  var cursor = document.getElementById("cursor");
  document.addEventListener("mousemove", function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
  });
})(jQuery);

// jQuery for smooth scrolling
$(document).ready(function () {
  $(".single_nav").on("click", function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    var targetId = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(targetId).offset().top,
      },
      1000
    ); // 1000ms for smooth scrolling
  });
});

// Set the target date for the countdown
const targetDate = new Date("2025-02-07T00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days.toString().padStart(2, "0");
  document.getElementById("hours").innerText = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").innerText = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").innerText = seconds
    .toString()
    .padStart(2, "0");

  if (timeLeft < 0) {
    clearInterval(countdownInterval);
    document.querySelector(".countdown-timer").innerHTML =
      "<h2 class='text-danger'>The Game Has Started!</h2>";
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();
const buttons = document.querySelectorAll(".openPopup");
const customAlert = document.getElementById("customAlert");
const overlay = document.getElementById("overlay");
const loadingSpinner = document.getElementById("loadingSpinner");
const alertMessage = document.getElementById("alertMessage");

// Add a click event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default link behavior
    showLoadingSpinner(); // Show only the loading spinner initially
  });
});

// Function to show the loading spinner without showing customAlert initially
function showLoadingSpinner() {
  overlay.style.display = "block"; // Show overlay
  loadingSpinner.style.display = "block"; // Show loading spinner

  // Simulate loading process
  setTimeout(() => {
    showCustomAlert(); // Show the custom alert after loading
  }, 2000); // Delay of 2 seconds to simulate loading
}

// Function to show the custom alert with the message after loading
function showCustomAlert() {
  loadingSpinner.style.display = "none"; // Hide loading spinner
  customAlert.style.display = "block"; // Show the custom alert container
  alertMessage.style.display = "block"; // Show the alert message
}

// Function to close the custom alert
function closeAlert() {
  customAlert.style.display = "none";
  overlay.style.display = "none";
}
const chatbotIcon = document.getElementById("chatbot");
const chatPopup = document.getElementById("chatPopup");
const sendButton = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const chatBox = document.getElementById("chatBox");

if (!chatbotIcon || !chatPopup || !sendButton || !userInput || !chatBox) {
  console.error("One or more required elements are missing.");
  throw new Error("Chatbot initialization failed due to missing elements.");
}

let messageCount = 0; // Counter to track the number of messages

// Toggle chat popup visibility when clicking on the icon
chatbotIcon.addEventListener("click", (event) => {
  event.stopPropagation();
  const isPopupVisible = chatPopup.style.display === "block";

  if (isPopupVisible) {
    chatBox.innerHTML = ""; // Clear chat history
    messageCount = 0; // Reset message count
  }

  chatPopup.style.display = isPopupVisible ? "none" : "block";
});

// Handle user input and bot response
sendButton.addEventListener("click", () => {
  const userMessage = userInput.value.trim();
  if (userMessage) {
    displayMessage(escapeHTML(userMessage), "user"); // Sanitize user input
    messageCount++;

    setTimeout(() => {
      const botResponse = generateBotResponse(userMessage, messageCount);
      displayMessage(botResponse, "bot");
    }, 1000);

    userInput.value = ""; // Clear input field
  }
});

// Generate bot responses based on user input
function generateBotResponse(userMessage, count) {
  if (userMessage.includes("location") || userMessage.includes("place")) {
    return 'Here is the <a href="https://maps.app.goo.gl/X8sd3b5NNZR4aH7a9" target="_blank">Google Maps link</a>';
  }

  if (count === 1) {
    return "Hey, how can I help you?";
  }

  if (userMessage.includes("phone") || userMessage.includes("number") || userMessage.includes("call")) {
    return 'Call us at <a href="tel:+994775768">994775768</a>';
  }

  if (userMessage.includes("how are you") || userMessage.includes("what about you")) {
    return "I'm fine, glad to meet you!";
  }

  if (userMessage.includes("xt") || userMessage.includes("xtrinia")) {
    return "XT is a 3-day event with cultural, technical, and non-technical events.";
  }

  return "I'm here to assist you further.";
}

// Display messages in the chat box
function displayMessage(message, sender) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("message", sender);

  if (sender === "bot") {
    messageElement.innerHTML = message; // Allow bot to render HTML
  } else {
    messageElement.textContent = message; // Sanitize user messages
  }

  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
}

// Escape HTML to prevent XSS attacks
function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// Close the chat popup if clicked outside
document.addEventListener("click", (event) => {
  if (!chatPopup.contains(event.target) && event.target !== chatbotIcon) {
    chatPopup.style.display = "none";
    chatBox.innerHTML = ""; // Clear chat history
    messageCount = 0; // Reset message count
  }
});

// Prevent the popup from closing when clicking inside the chat window
chatPopup.addEventListener("click", (event) => {
  event.stopPropagation();
});
