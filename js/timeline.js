/* =====================================================
   TIMELINE.JS
===================================================== */

const timelineContainer = document.querySelector("#timeline-container");
const timelineButtons = document.querySelectorAll(".timeline-button");

let timelineItems = [];

async function loadTimeline(){

    const response = await fetch("./data/timeline.json");

    timelineItems = await response.json();

    renderTimeline(timelineItems);

}

function renderTimeline(items){

    timelineContainer.innerHTML = "";

    items.forEach(item => {

        const card = document.createElement("article");

        card.className = `timeline-card ${item.type}`;

        card.innerHTML = `

            <span class="timeline-year">
                ${item.year}
            </span>

            <h3>${item.title}</h3>

            <h4>${item.institution}</h4>

            <p>${item.description}</p>

        `;

        timelineContainer.appendChild(card);

    });

}

/* FILTROS */

timelineButtons.forEach(button => {

    button.addEventListener("click", ()=>{

        timelineButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const filter = button.dataset.filter;

        if(filter === "all"){

            renderTimeline(timelineItems);

            return;

        }

        const filtered = timelineItems.filter(item => item.type === filter);

        renderTimeline(filtered);

    });

});

loadTimeline();