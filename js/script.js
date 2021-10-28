$(document).ready(function(){    
  $('.hero-wrapper').slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
  responsive: [
    {
      breakpoint: 1320,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    }
    ]
  });

  $('#burger').click(function(e) {
    e.preventDefault();
    if($('nav').hasClass('mob')) {
      $('nav').removeClass('mob');
    } else {
        $('nav').addClass('mob');
    }

  });

  if($('form[id="contact_form"]').length > 0) {
    $('form[id="contact_form"]').validate({
      rules: {
        fname: 'required',
        adr: 'required',
        subject: 'required',
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        fname: 'This field is required',
        adr: 'This field is required',
        subject: 'Please enter some text.',
        email: 'Enter a valid email.',
        password: {
          minlength: 'Password must be at least 8 characters long'
        }
      },
      submitHandler: function (form) {
        form.submit();
      }
    });
  }
  
 });

window.onscroll = function() {
  stickyHeader();
  scrollProgress();
}

function stickyHeader() {
  var header = document.getElementById("myHeader");
  var sticky = header.offsetTop;
  if(window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } 
  else {
    header.classList.remove("sticky");
  }
}

function scrollProgress() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
} 

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

$(document).ready(function(){
  var controller = new ScrollMagic.Controller();
  var revealElements = document.getElementsByClassName("digit");
  for (var i=0; i<revealElements.length; i++) { // create a scene for each element
    new ScrollMagic.Scene({
      triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
      offset: 50,												 // start a little later
      triggerHook: 0.9,
    })
        .setClassToggle(revealElements[i], "visible") // add class toggle
        // .addIndicators({name: "digit " + (i+1) })       // add indicators (requires plugin)
        .addTo(controller);
  }
});
