import "./css/projectDOMHandler.css";
import binImage from "./images/bin.png";

export function renderProjects(parentDOMElement, projectList) {
  console.log(`Rendering ${projectList.length} project(s)`);

  // Clear existing content
  parentDOMElement.innerHTML = "";

  // Create project list container
  const list = document.createElement("div");
  list.classList.add("project-list");

  // Helper to create a single project element
  function createProjectElement(project) {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");
    projectDiv.dataset.projectId = project.projectId;

    const title = document.createElement("h3");
    title.textContent = project.name;

    const binImg = document.createElement("img");
    binImg.classList.add("bin-icon");
    binImg.src = binImage;
    binImg.alt = "Bin-icon";
    binImg.dataset.projectId = project.projectId;

    const addImg = document.createElement("img");
    addImg.classList.add("add-icon");
    addImg.src = binImage;
    addImg.alt = "Add-icon";
    addImg.dataset.projectId = project.projectId;

    projectDiv.append(title, binImg);
    return projectDiv;
  }

  // Render all projects
  projectList.forEach((project) => {
    const projectElement = createProjectElement(project);
    list.appendChild(projectElement);
  });

  parentDOMElement.appendChild(list);
}
