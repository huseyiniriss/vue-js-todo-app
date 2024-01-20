<script setup>
import {ref} from 'vue'
import {v4 as uuidv4} from 'uuid';
import {useTodoStore} from "@/store/todoStore.js";

const todoStore = useTodoStore();
const todo = ref('')
const onClickAdd = () => {
  if (!todo.value) return alert('Please enter a todo');
  const item = {
    todo: todo.value,
    id: uuidv4(),
    completed: false,
  }
  todoStore.add(item);
  todo.value = '';
}
</script>

<template>
  <section id="todo-form">
    <input type="text" placeholder="Add a todo" v-model="todo"/>
    <button type="submit" @click="onClickAdd">Add</button>
  </section>
</template>

<style scoped>
#todo-form {
  display: flex;
  gap: 4px;
}

#todo-form input {
  flex: 1;
  padding: 8px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  font-size: 16px;
}
</style>