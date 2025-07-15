import { ProjectManager } from "./projectManager.js";
import { renderProjects } from "./projectDOMHandler.js";
import "./css/index.css";

// === Setup ===
const leftPanel = document.querySelector("#left-panel");
const rightPanel = document.querySelector("#right-panel");
const addProjectBtn = document.querySelector("#add-project-btn");
const closeBtn = document.querySelector("#close-btn");
const modal = document.querySelector("#modal");
const form = document.getElementById("form");
const manager = ProjectManager();

const projectContainerDiv = createProjectContainer();
leftPanel.appendChild(projectContainerDiv);

// === Initial Render ===
renderPage();

// === Functions ===

function createProjectContainer() {
  const div = document.createElement("div");
  div.classList.add("project-list");
  return div;
}

function renderPage() {
  projectContainerDiv.textContent = "";
  renderProjects(projectContainerDiv, manager.getProjects());
}

function handleClick(event) {
  const target = event.target;

  if (target.classList.contains("bin-icon")) {
    const projectId = target.dataset.projectId;
    console.log(`Delete project with ID: ${projectId}`);
    manager.deleteProject(projectId);
    renderPage();
  } else if (target.closest(".project")) {
    const clickedProject = target.closest(".project");

    // Remove existing selection
    document.querySelectorAll(".project.selected").forEach((project) => {
      project.classList.remove("selected");
    });

    // Add new selection
    clickedProject.classList.add("selected");

    const projectId = clickedProject.dataset.projectId;
    manager.selectProject(
      manager.getProjects().find((project) => project.projectId === projectId)
    );
  }
}

// === Event Listener ===
document.addEventListener("click", handleClick);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  manager.addProject(document.querySelector("#projectName").value);
  document.querySelector("#projectName").value = "";
  renderPage();
  modal.close();
});

addProjectBtn.addEventListener("click", () => {
  console.log("Showing Modal");
  modal.show();
});

closeBtn.addEventListener("click", () => {
  console.log("Closing Modal");
  modal.close();
});
