/* ============================================
   TYPING EFFECT
============================================ */

const typingElement =
    document.querySelector("#typing-text");

const texts = [

    "Desenvolvedor Full Stack JavaScript",
    "Back-end Python"
];

let textIndex = 0;
let characterIndex = 0;

function typeText(){

    const currentText = texts[textIndex];

    typingElement.textContent =
        currentText.slice(0,characterIndex);

    characterIndex++;

    if(characterIndex <= currentText.length){

        setTimeout(typeText,80);

    }

    else{

        setTimeout(deleteText,1800);

    }

}

function deleteText(){

    const currentText = texts[textIndex];

    typingElement.textContent =
        currentText.slice(0,characterIndex);

    characterIndex--;

    if(characterIndex >= 0){

        setTimeout(deleteText,40);

    }

    else{

        textIndex = (textIndex + 1) % texts.length;

        setTimeout(typeText,500);

    }

}

typeText();