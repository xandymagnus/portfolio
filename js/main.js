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

/* ============================================
   SCROLL SPY
============================================ */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-menu a");

const sectionObserver =
    new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                const id = entry.target.id;

                navLinks.forEach(link=>{

                    link.classList.remove("active");

                    if(link.getAttribute("href") === "#" + id){

                        link.classList.add("active");

                    }

                });

            }

        });

    },{
        threshold:0.45
    });

sections.forEach(section=>{

    sectionObserver.observe(section);

});

/* ============================================
   BACK TO TOP
============================================ */

const backToTop =
    document.querySelector("#back-to-top");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 700){

        backToTop.classList.add("show");

    }

    else{

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

/* ============================================
   FECHAR MENUS COM ESC
============================================ */

window.addEventListener("keydown",(event)=>{

    if(event.key === "Escape"){

        languageMenu.classList.remove("show");

    }

});