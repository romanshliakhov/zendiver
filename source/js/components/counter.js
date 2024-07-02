const counters = document.querySelectorAll('.counter');

counters.forEach(function(item) {
    const elementHeight = item.offsetHeight;
    const end = +item.dataset.max;

    function startInterval(intervalValue, startValue, step = 1) {
        const interval = setInterval(function() {
            startValue += step;

            if (startValue >= end) {
                clearInterval(interval);
            }

            item.innerHTML = startValue;
        }, intervalValue);  
    }

    window.addEventListener('scroll', function onScroll() {
        const elementTop = item.getBoundingClientRect().top;
        const elementVisibleHeight = window.innerHeight - elementTop;
        const visiblePercentage = (elementVisibleHeight / elementHeight) * 100;

        if (visiblePercentage >= 30) {
            window.removeEventListener('scroll', onScroll);

            const startValue = 0;

            setTimeout(function() {
                if (end > 150) {
                    startInterval(200, startValue, 15);
                } else if (end > 50) {
                    startInterval(190, startValue, 2);
                } else {
                    startInterval(210, startValue, 1);
                }
            }, 1250);
        }
    });
});