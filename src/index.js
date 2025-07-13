import { ProjectManager } from "./projectManager.js";
import { renderProjects } from "./projectDOMHandler.js";
import "./css/index.css";

// === Setup ===
const leftPanel = document.querySelector("#left-panel");
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
    } 
    
    else if (target.closest(".project")) {
        const projectId = target.closest(".project").dataset.projectId;
        console.log(`Clicked on project with ID: ${projectId}`);
        // You can call a selectProject(id) here if needed
    }
}

// === Event Listener ===
document.addEventListener("click", handleClick);
