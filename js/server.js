const projects = document.getElementById('projects-container');
const modals = document.getElementById('modals');
const loader = document.getElementById('loader');


fetch('https://backend-portfolio1.herokuapp.com/projects')
  .then(res => res.json())
  .then(data => generateProjects(data))



function generateProjects(project) {
  console.log(project);

  for (let i = 0; i < project.length; i += 1) {
    projects.innerHTML += `
    <div data-aos="zoom-in" class="col mb-4">
    <div class="card h-100" data-toggle="modal" data-target="#${project[i].ModalName}Modal">
      <img src="${project[i].Image.url}" class="card-img-top" alt="${project[i].Title}">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${project[i].Title}</h5>
        <p class="card-text">${project[i].Summary}</p>
        <a href="${project[i].Live}" target="_blank" class="btn mt-auto btn-block btn-dark">Live Site</a>
        <a href="${project[i].Code}" target="_blank" class="btn btn-block btn-outline-dark ">See
          Code</a>
      </div>
    </div>
    </div>
    `;

    modals.innerHTML += `
    <div class="modal fade" id="${project[i].ModalName}Modal" tabindex="-1" role="dialog" aria-labelledby="${project[i].ModalName}Modal" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">${project[i].Title}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">
          <img src="${project[i].Image.url}" class="card-img-top" alt="${project[i].Title} Project">
          ${project[i].LgSummary}
        </div>
        <div class="modal-footer">
          <a href="${project[i].Live}" target="_blank" class="btn mt-auto btn-block btn-dark">Live
            Site</a>
          <a href="${project[i].Code}" target="_blank" class="btn btn-block btn-outline-dark ">See
            Code</a>
        </div>
      </div>
    </div>
  </div>
    `

  }
  loader.style.display = "none";
};