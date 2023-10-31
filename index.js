async function getGithubRepos() {
  const repos = await fetch(
    "https://api.github.com/users/lmiguelcolombo/repos"
  );

  const response = await repos.json();
  const divProjects = document.querySelector("#projects");

  response.forEach((repo) => {
    reposName = repo.name;
    url = repo.html_url;
    description = repo.description;
    divProjects.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
        <div class="card-body">
          <h5 class="card-title"><a href="${url}" target="_blank">${reposName}</a></h5>
          <p class="card-text">
            ${description}
          </p>
        </div>
      </div>`
    );
  });
}
