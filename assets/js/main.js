// for header 
$(function(){
    $(window).on("scroll", function(){
        if($(window).scrollTop() > 50){
            $(".navbar").addClass("active");
        }else{
            $(".navbar").removeClass("active");
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

    this.el.innerHTML = "<span class='wrap'>I'm " +this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
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


$(".owl-carousel").owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    margin: 20,
    // animateOut: 'fadeOut',
    // animateIn: 'fadeIn',
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 5000,
    smartSpeed: 2000,
    nav: true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:true
        },
        1000:{
            items:2,
            nav:true,
            loop:true
        }
    }
});
//end owl carousel



//water ripples
$('.js-section-home').ripples({
    resolution: 600,
    dropRadius: 20,
    perturbance: 0.04,
});


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
$(document).ready(function () {
    $('#demo-pie-1').pieChart({
        barColor: '#FF4F4F',
        trackColor: '#1E1E24',
        lineCap: 'round',
        size: 150,
        lineWidth: 10,
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
        size: 150,
        lineWidth: 10,
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
        size: 150,
        lineWidth: 10,
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
        size: 150,
        lineWidth: 10,
        animate: {
            duration: 1800,
            enabled: true
        },
        onStep: function (from, to, percent) {
            $(this.element).find('.pie-value').text(Math.round(percent) + '%');
        }
    });
});
//end progress section



// font menu with jump section 
$(document).ready(function() {
    $('a[href*=#]').bind('click', function(e) {
        e.preventDefault(); // prevent hard jump, the default behavior

        var target = $(this).attr("href"); // Set the target as variable

        // perform animated scrolling by getting top-position of target-element and set it as scroll target
        $('html, body').stop().animate({
                scrollTop: $(target).offset().top
        }, 600, function() {
                location.hash = target; //attach the hash (#jumptarget) to the pageurl
        });

        return false;
    });
});

$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();

    // Assign active class to nav links while scolling
    $('.jump').each(function(i) {
        if ($(this).position().top <= scrollDistance) {
            $('.nav-item a.active').removeClass('active');
            $('.nav-item a').eq(i).addClass('active');
        }
    });
}).scroll();
// font menu with jump section 