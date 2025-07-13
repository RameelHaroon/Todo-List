export class Project {
  constructor(name) {
    this.projectId = crypto.randomUUID();
    this.name = name;
    this.todoItems = [];
  }

  addTodo(todo) {
    this.todoItems.push(todo);
  }

  removeItem(todoId) {
    this.todoItems = this.todoItems.filter((element) => element.id !== todoId);
  }

  getTodos() {
    return this.todoItems;
  }

  getId(){
    return this.projectId;
  }
}