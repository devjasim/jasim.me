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




$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:false
        }
    }
})



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

$(function() {
    $('.chart').easyPieChart({
      // The color of the curcular bar. You can pass either a css valid color string like rgb, rgba hex or string colors. But you can also pass a function that accepts the current percentage as a value to return a dynamically generated color.
      barColor: '#ef1e25',
      // The color of the track for the bar, false to disable rendering.
      trackColor: '#f2f2f2',
      // The color of the scale lines, false to disable rendering.
      scaleColor: '#dfe0e0',
      // Defines how the ending of the bar line looks like. Possible values are: butt, round and square.
      lineCap: 'round',
      // Width of the bar line in px.
      lineWidth: 3,
      // Size of the pie chart in px. It will always be a square.
      size: 110,
      // Time in milliseconds for a eased animation of the bar growing, or false to deactivate.
      animate: 1000,
      // Callback function that is called at the start of any animation (only if animate is not false).
      onStart: $.noop,
      // Callback function that is called at the end of any animation (only if animate is not false).
      onStop: $.noop
    });
    $('.updatePieCharts').on('click', function(e) {
      e.preventDefault();
      var newValue = Math.floor(100 * Math.random());
      $('.chart').data('easyPieChart').update(newValue);
      $('span', $('.chart')).text(newValue);
    });
  });