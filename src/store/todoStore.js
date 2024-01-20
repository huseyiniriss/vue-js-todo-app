import {defineStore} from "pinia";

export const FILTER_TYPES = {
    all: 'all',
    completed: 'completed',
    uncompleted: 'uncompleted',
}

const INIT_TODOS = [
    {
        todo: 'Learn Vue 3',
        id: '1',
        completed: true,
    },
    {
        todo: 'Learn Pinia',
        id: '2',
        completed: false,
    },
    {
        todo: 'Learn Vite',
        id: '3',
        completed: false,
    }
]
export const useTodoStore = defineStore('todo', {
    state: () => ({
        todos: INIT_TODOS,
        filterType: FILTER_TYPES.all,
    }), getters: {
        getTodos: (state) => {
            switch (state.filterType) {
                case FILTER_TYPES.completed:
                    return state.todos.filter(todo => todo.completed);
                case FILTER_TYPES.uncompleted:
                    return state.todos.filter(todo => !todo.completed);
                default:
                    return state.todos;
            }
        },
    }, actions: {
        add(todo) {
            this.todos.push(todo);
        },
        removeById(id) {
            this.todos = this.todos.filter(todo => todo.id !== id);
        },
        completeById(id) {
            this.todos = this.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            });
        },
        editById(id, newTodo) {
            this.todos = this.todos.map(todo => {
                if (todo.id === id) {
                    todo.todo = newTodo;
                }
                return todo;
            });
        },
        setFilter(type) {
            this.filterType = type;
        }
    },
});