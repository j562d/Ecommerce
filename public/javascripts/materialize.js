  $(document).ready(function() {
       $(".jumbotron").hide();
});

$(document).ready(function() {
      $(".jumbotron").fadeIn(1500);
});

        // setTimeout(function() {
        //   $('.animate-bottom').fadeIn(600);
        //   $('.animate-bottom').show();
        // }, 1800);


        // setTimeout(function() {
        //   $('#loader').hide();
        // }, 1500);


    $(document).ready(function(){
      $('.slider').slider();
    });


  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });

    // $(document).ready(function(){
    //   $('.slider').slider();
    // });

    $(".button-collapse").sideNav();


$('.carousel.carousel-slider').carousel({fullWidth: true});

    $(document).ready(function(){
      $('.carousel').carousel();
    });


$('.carousel.carousel-slider').carousel({fullWidth: true});


var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}



  // Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();


