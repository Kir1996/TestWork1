(function() {
    let Head = ('.header')
     
    (window).scroll(function() {
      if((this).scrollTop() > 1) {
       Head.addClass('header_fixed')
      } else {
       Head.removeClass('header_fixed')
      }
    });
   });

   export default Head