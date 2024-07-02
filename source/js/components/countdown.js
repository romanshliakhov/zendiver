import vars from '../_vars';
const {timers} = vars;

timers && timers.forEach(function(item){  
  const itemDate = item.getAttribute('data-time');
  const countDownDate = new Date(itemDate).getTime();
  
  const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;
  
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    
    
    if(!item.classList.contains('stop')){
      item.querySelector('.h2o-timer__days').innerText = formatedValue(days,10) + ' :';
      item.querySelector('.h2o-timer__hours').innerText = formatedValue(hours,10) + ' :';
      item.querySelector('.h2o-timer__minutes').innerText = formatedValue(minutes, 10) + ' :';
      item.querySelector('.h2o-timer__seconds').innerText = formatedValue(seconds, 10);
  }
  if(item.querySelector('.h2o-timer__days').innerText === ':'){
    item.querySelector('.h2o-timer__days').innerText = '';
  }
  }, 1000);
})

function formatedValue(value, countValue) {
  if(value === 0){
    value = '';

    return value;
  }
  return value < countValue ? '0' + value : '' + value
}
