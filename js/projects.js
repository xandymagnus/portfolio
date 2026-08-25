/* =====================================================
   PROJECTS.JS
===================================================== */

const projectsGrid = document.querySelector("#projects-grid");
const filterButtons = document.querySelectorAll(".filter-button");

let projects = [];

/* CARREGAR JSON */

async function loadProjects(){

    try{

        const response = await fetch("./data/projects.json");

        projects = await response.json();

        renderProjects(projects);

    }

    catch(error){

        console.error("Erro ao carregar projetos:", error);

    }

}

/* RENDERIZAR */

function renderProjects(projectList){

    projectsGrid.innerHTML = "";

    projectList.forEach(project => {

        const technologies = project.technologies
            .map(technology =>
                `<span>${technology}</span>`
            )
            .join("");

        const card = document.createElement("article");

        card.className = "project-card";

        card.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-overlay"></div>
            </div>

            <div class="project-content">

                <h3>${project.title}</h3>

                <p>${project.description}</p>

                <div class="project-technologies">
                    ${technologies}
                </div>

                <div class="project-links">

                    <a href="${project.github}"
                       target="_blank"
                       class="project-link">

                        GitHub

                    </a>

                    <a href="${project.demo}"
                       target="_blank"
                       class="project-link">

                        Demo

                    </a>

                </div>

            </div>
        `;

        projectsGrid.appendChild(card);

    });

}

/* FILTROS */

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const filter = button.dataset.filter;

        if(filter === "all"){

            renderProjects(projects);

            return;

        }

        const filteredProjects = projects.filter(project =>

            project.category === filter

        );

        renderProjects(filteredProjects);

    });

});

/* INICIAR */

loadProjects();