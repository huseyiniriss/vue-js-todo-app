<script setup>

import {useTodoStore} from "@/store/todoStore.js";

const todoStore = useTodoStore();
const handleAction = (action, item) => {
  if (action === 'delete') {
    if (!confirm('Are you sure you want to delete this todo?')) return;
    todoStore.removeById(item.id)
  }
  if (action === 'complete') {
    todoStore.completeById(item.id)
  }
  if (action === 'edit') {
    const newTodo = prompt('Edit todo', item.todo);
    if (!newTodo) return;
    todoStore.editById(item.id, newTodo)
  }
};
</script>

<template>
  <section>
    <span v-show="todoStore.getTodos.length === 0" id="no-todos">No Todos</span>
    <ul id="todo-list">
      <li v-for="item in todoStore.getTodos" :key="item.id">
        <input type="checkbox" v-model="item.completed" @click="handleAction('complete', item)"/>
        <span :class="{completed: item.completed}">{{ item.todo }}</span>
        <button type="button" @click="handleAction('delete', item)">Delete</button>
        <button type="button" @click="handleAction('edit', item)">Edit</button>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
}

#todo-list {
  list-style: none;
  padding: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

#todo-list li {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 16px;
  color: #333333;
}

#todo-list li span {
  flex: 1;
}

#no-todos {
  display: block;
  text-align: center;
  color: #cccccc;
}
</style>