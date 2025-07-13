export class TodoItem{
    constructor(title, description, dueDate, priority){
        this.todoItemId = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isCompleted = false;
    }

    toggleComplete() {
        this.complete = !this.complete;
        return;
    }

    updateTitle(newTitle) {
        this.title = newTitle;
        return;
    }

    updateDescription(newDescription) {
        this.description = newDescription;
        return;
    }

    updateDueDate(newDueDate) {
        this.dueDate = newDueDate;
        return;
    }

    updatePriority(newPriority) {
        this.priority = newPriority;
        return;
    }

    getID() {
        return this.id;
    }

    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.description;
    }

    getDueDate() {
        return this.dueDate;
    }

    getPriority() {
        return this.priority;
    }

    isComplete() {
        return this.complete;
    }
}