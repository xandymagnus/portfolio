/* =====================================================
   MAIN.JS
===================================================== */

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit",(event)=>{

    event.preventDefault();

    alert("Mensagem enviada! (Em breve será integrado com um serviço de email)");

    contactForm.reset();

});