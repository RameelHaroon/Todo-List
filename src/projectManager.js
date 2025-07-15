import { Project } from "./Project";
import { TodoItem } from "./todos";

export const ProjectManager = (() => {
  return function () {
    let projects = [];
    let selectedProject = null;

    function addProject(name) {
      const project = new Project(name);
      projects.push(project);
      return project;
    }

    function addTodoItem(
      title,
      description,
      dueDate,
      priority,
      selectedProjectId
    ) {
      const newTodoItem = new TodoItem(
        title,
        description,
        dueDate,
        priority,
        selectedProjectId
      );
      const project = projects.find((p) => p.projectId === selectedProjectId);
      if (project) {
        project.addTodo(newTodoItem);
      }
    }

    function deleteProject(projectId) {
      projects = projects.filter((p) => p.projectId !== projectId);
      selectedProject = projects.length > 0 ? projects[0] : null;
    }

    function selectProject(project) {
      console.log(`Selecting project with ID: ${project.projectId}`);
      selectedProject = project;
    }

    function getSelectedProject() {
      return selectedProject;
    }

    function getProjects() {
      return projects;
    }

    // Create and select the default project
    let defaultProject = addProject("Default Project");
    selectedProject = defaultProject;

    return {
      addProject,
      addTodoItem,
      deleteProject,
      selectProject,
      getSelectedProject,
      getProjects,
    };
  };
})();
