import { defineStore } from 'pinia';
import type { Todo } from '@/types/todo';

interface IState {
    todos: Todo[];
}

export const useTodoStore = defineStore('todo', {
    state: (): IState => ({
        todos: []
    }),
    actions: {
        addTask(content: string) {
            this.todos.push({
                id: Date.now(),
                isDone: false,
                isDeleted: false,
                content: content
            });
        },
        deleteTask(selectedId: number) {
            const todoIndex = this.todos.findIndex((todo) => todo.id === selectedId);

            if (todoIndex !== -1) {
                this.todos[todoIndex].isDeleted = true;
            }
        }
        //TODO: A function to compute deleted and finished item count
    }
});
