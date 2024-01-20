<script setup>
import TodoForm from "@/components/TodoForm.vue";
import TodoItems from "@/components/TodoItems.vue";
import TodoFilter from "@/components/TodoFilter.vue";
</script>

<template>
  <main id="todo-container">
    <h1>Todo App</h1>
    <TodoForm/>
    <TodoItems/>
    <TodoFilter/>
  </main>
</template>

<style scoped>
h1 {
  text-align: center;
  color: #af7eeb;
  margin: 0;
}

#todo-container {
  background-color: #ffffff;
  padding: 18px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  min-height: 200px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
}
</style>
