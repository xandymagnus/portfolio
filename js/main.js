/* =====================================================
   MAIN.JS
===================================================== */

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit",(event)=>{

    event.preventDefault();

    alert("Mensagem enviada! (Em breve será integrado com um serviço de email)");

    contactForm.reset();

});

/* ============================================
   COUNTERS
============================================ */

const counters =
    document.querySelectorAll(".counter");

const counterObserver =
    new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            animateCounter(entry.target);

            counterObserver.unobserve(entry.target);

        });

    });

counters.forEach(counter=>{

    counterObserver.observe(counter);

});

function animateCounter(counter){

    const target =
        Number(counter.dataset.target);

    let current = 0;

    function update(){

        current += target / 50;

        if(current < target){

            counter.textContent =
                Math.ceil(current);

            requestAnimationFrame(update);

        }

        else{

            counter.textContent = target + "+";

        }

    }

    update();

}