/* =====================================================
   CERTIFICATES.JS
===================================================== */

const certificatesGrid = document.querySelector("#certificates-grid");

async function loadCertificates(){

    try{

        const response = await fetch("./data/certificates.json");

        const certificates = await response.json();

        renderCertificates(certificates);

    }

    catch(error){

        console.error("Erro ao carregar certificados.", error);

    }

}

function renderCertificates(certificates){

    certificatesGrid.innerHTML = "";

    certificates.forEach(certificate => {

        const card = document.createElement("article");

        card.className = "certificate-card";

        card.innerHTML = `

            <span class="certificate-category">
                ${certificate.category}
            </span>

            <h3>${certificate.title}</h3>

            <span class="certificate-platform">
                ${certificate.platform}
            </span>

            <span class="certificate-year">
                ${certificate.year}
            </span>

            <p>${certificate.description}</p>

        `;

        certificatesGrid.appendChild(card);

    });

}

loadCertificates();