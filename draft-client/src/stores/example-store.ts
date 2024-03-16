// src/store/todos.ts
import { defineStore } from 'pinia';

export const useTodosStore = defineStore('todos', {
  state: () => ({
    todos: [],
  }),

    async create(todo: { title: string }) {
      // Implement API call to add todo
    },

    actions: {
      async readMany() {
        // Implement API call to fetch todos
      },

    async update(todo: { id: number; title: string }) {
      // Implement API call to update todo
    },

    async delete(id: number) {
      // Implement API call to delete todo
    },
  },
});
