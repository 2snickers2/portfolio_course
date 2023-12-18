
document.addEventListener('DOMContentLoaded', function(){
    let script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = function(){
    particlesJS("snow", {
    "particles": {
    "number": {
    "value": 80,
    "density": {
    "enable": true,
    "value_area": 400
    }
    },
    "color": {
    "value": "#ffffff"
    },
    "opacity": {
    "value": 0.7,
    "random": false,
    "anim": {
    "enable": false
    }
    },
    "size": {
    "value": 5,
    "random": true,
    "anim": {
    "enable": false
    }
    },
    "line_linked": {
    "enable": false
    },
    "move": {
    "enable": true,
    "speed": 5,
    "direction": "bottom",
    "random": true,
    "straight": false,
    "out_mode": "out",
    "bounce": false,
    "attract": {
    "enable": true,
    "rotateX": 300,
    "rotateY": 1200
    }
    }
    },
    "interactivity": {
    "events": {
    "onhover": {
    "enable": false
    },
    "onclick": {
    "enable": false
    },
    "resize": false
    }
    },
    "retina_detect": true
    });
    }
    document.head.append(script);
   });
console.log("Hello world")

document.querySelector('.burger').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.menu_item').classList.toggle('open');
});


