 
   var deadline = 'Sep 10 2020 18:40:18 GMT-0400';
function time_remaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds};
}
function run_clock(id,endtime){
  var clock = document.getElementById(id);
  
  // get spans where our clock numbers are held
  var days_span = clock.querySelector('.days');
  var hours_span = clock.querySelector('.hours');
  var minutes_span = clock.querySelector('.minutes');
  var seconds_span = clock.querySelector('.seconds');

  function update_clock(){
    var t = time_remaining(endtime);
    
    // update the numbers in each part of the clock
    days_span.innerHTML = t.days;
    hours_span.innerHTML = ('0' + t.hours).slice(-2);
    minutes_span.innerHTML = ('0' + t.minutes).slice(-2);
    seconds_span.innerHTML = ('0' + t.seconds).slice(-2);
    
    if(t.total<=0){ clearInterval(timeinterval); }
  }
  update_clock();
  var timeinterval = setInterval(update_clock,1000);
}
run_clock('clockdiv',deadline);
  

 
    var swiper = new Swiper('.swiper-container1', {
      effect: 'cube',
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
  


var textWrapper = document.querySelector('.ml9 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml9 .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.ml9',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 4000


  });

anime.timeline({loop: true})
  .add({
    targets: '.ml15 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 1000,
    delay: (el, i) => 1200 * i
  }).add({
    targets: '.ml15',
    opacity: 0,
    duration: 1200,
    easing: "easeOutExpo",
    delay: 1000000
  });
  

    var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });

  