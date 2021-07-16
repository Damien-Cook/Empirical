$(document).ready(function(){    
    $('.hero-wrapper').slick({
        infinite: true,
        autoplay: true
    });

    // $('#contact_form').submit(function(e) {
    //   e.preventDefault();
    //   var first_name = $('#fname').val();
    //   var last_name = $('#lname').val();
    //   var phone_number = $('#phone').val();
    //   var email = $('#email').val();
    //   var password = $('#password').val();
  
    //   $(".error").remove();
  
    //   if (first_name.length < 1) {
    //     $('#first_name').after('<span class="error">This field is required</span>');
    //   }
    //   if (last_name.length < 1) {
    //     $('#last_name').after('<span class="error">This field is required</span>');
    //   }
    //   if (phone_number.length < 1) {
    //     $('#phone').after('<span class="error">This field is required</span>');
    //   }
    //   if (email.length < 1) {
    //     $('#email').after('<span class="error">This field is required</span>');
    //   } else {
    //     var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
    //     var validEmail = regEx.test(email);
    //     if (!validEmail) {
    //       $('#email').after('<span class="error">Enter a valid email</span>');
    //     }
    //   }
    //   if (password.length < 8) {
    //     $('#password').after('<span class="error">Password must be at least 8 characters long</span>');
    //   }
    // });

    $('form[id="second_form"]').validate({
      rules: {
        fname: 'required',
        lname: 'required',
        phone: 'required',
        subject: 'required',
        email: {
          required: true,
          email: true,
        },
        password: {
          required: true,
          minlength: 8,
        }
      },
      messages: {
        fname: 'This field is required',
        lname: 'This field is required',
        phone: 'This field is required',
        subject: 'Please enter some text.',
        email: 'Enter a valid email.',
        password: {
        minlength: 'Password must be at least 8 characters long'
        }
      },
      submitHandler: function(form) {
        form.submit();
      }
    });
  
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
    console.log("sticky");
  } 
  else {
    header.classList.remove("sticky");
    console.log("nonsticky");
  }
}

function scrollProgress() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
} 