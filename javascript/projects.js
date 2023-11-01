const projects = [
  {
    name: "Bahay",
    description:
      "A website that provides resources regarding homelessness in New Jersey.",
    imgSrc: "/images/projects/gwc-bahay.png",
    sourceCode: "https://github.com/rachelgapasin/gwc-give-back-project",
    demo: "https://bahay.netlify.app",
  },
  {
    name: "Wordist Dictionary",
    description:
      "A dictionary app built in React by integrating a dictionary API and an images API.",
    imgSrc: "/images/projects/wordist-dictionary.png",
    sourceCode: "https://github.com/rachelgapasin/dictionary",
    demo: "https://wordist.netlify.app",
  },
  {
    name: "React Weather App",
    description:
      "A weather app built in React by integrating a weather API and using Bootstrap.",
    imgSrc: "/images/projects/react-weather-app.png",
    sourceCode: "https://github.com/rachelgapasin/react-weather-app",
    demo: "https://weather-or-not.netlify.app",
  },
  {
    name: "Monsta X Webpage",
    description:
      "A responsive webpage about my favorite K-pop group, built with HTML and vanilla CSS.",
    imgSrc: "/images/projects/monsta-x.png",
    sourceCode: "https://github.com/rachelgapasin/kpop-monsta-x",
    demo: "https://monstax.netlify.app",
  },
  {
    name: "World Clock App",
    description:
      "A world clock app built using HTML, CSS (Bootstrap), and Javascript (Moment.js).",
    imgSrc: "/images/projects/world-clock.png",
    sourceCode: "https://github.com/rachelgapasin/world-clock",
    demo: "https://rg-world-clock.netlify.app",
  },
  {
    name: "Vanilla Weather App",
    description:
      "A weather app built by integrating a weather API and using HTML, CSS, and Javascript.",
    imgSrc: "/images/projects/weather-app.png",
    sourceCode: "https://github.com/rachelgapasin/weather-app",
    demo: "https://rg-weather.netlify.app",
  },
];

function displayProjects() {
  const projectContainer = document.getElementById("project-container");

  projects.forEach((project) => {
    const projectDiv = document.createElement("div");

    projectDiv.className = "project col-xs-12 col-sm-6 col-md-4";
    projectDiv.innerHTML = `
      <div class="card">
        <img
          src="${project.imgSrc}"
          class="card-img-top"
          alt="${project.name}"
        />
        <div class="card-body">
          <h5 class="card-title">${project.name}</h5>
          <p class="card-text">
            ${project.description}
          </p>
          <div class="project-links">
            <a
              href="${project.sourceCode}"
              target="_blank"
              class="btn btn-secondary"
              >Code</a
            >
            <a
              href="${project.demo}"
              class="btn-primary"
              target="_blank"
              >Demo</a
            >
          </div>
        </div>
      </div>
    `;

    projectContainer.appendChild(projectDiv);
  });
}

window.onload = displayProjects;
