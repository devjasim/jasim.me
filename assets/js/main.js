// for header 
$(function(){
    $(window).on("scroll", function(){
        if($(window).scrollTop() > 50){
            $(".navbar").addClass("block");
        }else{
            $(".navbar").removeClass("block");
        }
    });
});


// typewrite
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = "<span class='wrap'>I'm " +this.txt+ " | " + '</span>';

    var that = this;
    var delta = 100 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 800;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    document.body.appendChild(css);
};


$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        autoplay: false,
        loop: true,
        margin: 20,
        smartSpeed:1000,
        nav: true,
        pagination:false,
        dots:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:2
            }
        }
    });
})
//end owl carousel



//water ripples
$(document).ready(function(){
    $('.js-section-home').ripples({
        resolution: 600,
        dropRadius: 20,
        perturbance: 0.04,
    });
})


$('.skillbar').skillBars({
    from:0,
    to:false,
    speed:2000,
    interval:100,
    decimals:0,
    onUpdate:null,
    onComplete:null,
    classes:{
        skillBarBar:'.skillbar-bar',
        skillBarPercent:'.skill-bar-percent',
    }
});

// round skill bar 
    $('#demo-pie-1').pieChart({
        barColor: '#FF4F4F',
        trackColor: '#1E1E24',
        lineCap: 'round',
        size: 120,
        lineWidth: 6,
        animate: {
            duration: 1800,
            enabled: true
        },
        onStep: function (from, to, percent) {
            $(this.element).find('.pie-value').text(Math.round(percent) + '%');
        }
    });
    $('#demo-pie-2').pieChart({
        barColor: '#FF4F4F',
        trackColor: '#1E1E24',
        lineCap: 'round',
        size: 120,
        lineWidth: 6,
        animate: {
            duration: 1800,
            enabled: true
        },
        onStep: function (from, to, percent) {
            $(this.element).find('.pie-value').text(Math.round(percent) + '%');
        }
    });
    $('#demo-pie-3').pieChart({
        barColor: '#FF4F4F',
        trackColor: '#1E1E24',
        lineCap: 'round',
        size: 120,
        lineWidth: 6,
        animate: {
            duration: 1800,
            enabled: true
        },
        onStep: function (from, to, percent) {
            $(this.element).find('.pie-value').text(Math.round(percent) + '%');
        }
    });
    $('#demo-pie-4').pieChart({
        barColor: '#FF4F4F',
        trackColor: '#1E1E24',
        lineCap: 'round',
        size: 120,
        lineWidth: 6,
        animate: {
            duration: 1800,
            enabled: true
        },
        onStep: function (from, to, percent) {
            $(this.element).find('.pie-value').text(Math.round(percent) + '%');
        }
    });
//end progress section





$(document).ready(function() {
    $('a[href*=#]').bind('click', function(e) {
            e.preventDefault(); // prevent hard jump, the default behavior

            var target = $(this).attr("href"); // Set the target as variable

            // perform animated scrolling by getting top-position of target-element and set it as scroll target
            $('html, body').stop().animate({
                    scrollTop: $(target).offset().top
            }, 1500, function() {
                    location.hash = target; //attach the hash (#jumptarget) to the pageurl
            });

            return false;
    });
});

$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();

    // Assign active class to nav links while scolling
    $('.jump').each(function(i) {
            if ($(this).position().top <= scrollDistance +60) {
                    $('.nav-item a.active').removeClass('active');
                    $('.nav-item a').eq(i).addClass('active');
            }
    });
}).scroll();





$(document).ready(function(){
	var $grid = $('.grid-group').isotope({
		itemSelector: '.grid',
		masonry: {
		  columnWidth:1,
		}
	  });
	
	  // filter items on button click
	  $('.filter-button').on( 'click', 'button', function() {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});
});



$(document).ready(function(){
    $('.menu-button').click(function(){
        $('.navbar').toggleClass('active');
    })
})


// scrolling animation 
$(document).ready(function(){
    var options = {
        animateThreshold: .5,
        scrollPollInterval:1
    }
    $('.aniview').AniView(options);
})
// scrolling animation 
