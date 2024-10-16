$(document).ready(function() {
 
  $(".owl-carousel").owlCarousel({
 
  loop: true, 

  nav: true,
  navText: ["<i class='fa-solid fa-left-long bg-primary rounded-start-pill text-white pt-1 pb-1 ps-3 pe-2'></i>", '<i class="fa-solid fa-right-long bg-primary rounded-end-pill text-white pt-1 pb-1 ps-2 pe-3"></i>'],
  responsive: {
      0: {
        items : 1
},
      480: {
        items:2
},
      768: {
         items: 2
}
  }
});
});


document.addEventListener('DOMContentLoaded', function() {
  const counts = document.querySelectorAll('.count');

  function startCounting(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        counts.forEach(count => {
          const endValue = parseInt(count.getAttribute('data-count'));
          let currentValue = 0;

          const interval = setInterval(() => {
            if (currentValue >= endValue) {
              clearInterval(interval);
              count.textContent = endValue;
            } else {
              currentValue += Math.ceil(endValue / 80);
              count.textContent = currentValue;
            }
          }, 10);
        });

        observer.unobserve(entry.target);
      }
    });
  }

  const observer = new IntersectionObserver(startCounting, {
    threshold: 0.5
  });

  observer.observe(document.getElementById('count-section'));
});


var form = document.getElementById('myForm');

function nameCheck(input) {
    var inputValue = input.value.trim();

    if (inputValue.length < 3) {
        input.nextElementSibling.innerText = 'Name must be at least 3 characters';
        input.nextElementSibling.style.color = 'red';
    } else {
        input.nextElementSibling.innerText = '';
    }
}

function emailCheck(input) {
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var inputValue = input.value;

    if (emailRegex.test(inputValue)) {
        input.nextElementSibling.innerText = '';
    } else {
        input.nextElementSibling.innerText = 'Enter a valid email';
        input.nextElementSibling.style.color = 'red';
    }
}

form.addEventListener('input', function(e) {
    if (e.target.id == 'userName') nameCheck(e.target);
    else if (e.target.id == 'userEmail') emailCheck(e.target);
});

