<script setup>
import {FILTER_TYPES, useTodoStore} from "@/store/todoStore.js";
import {computed} from "vue";

const todoStore = useTodoStore();
const filterType = computed(() => todoStore.filterType);
const filters = Object.values(FILTER_TYPES);
</script>

<template>
  <section id="todo-filter">
    <button v-for="filter in filters" type="button" :class="{selected: filterType===filter}"
            @click="todoStore.setFilter(filter)">{{ filter }}
    </button>
  </section>
</template>

<style scoped>
#todo-filter {
  display: flex;
  gap: 4px;
  justify-self: flex-end;
}

#todo-filter button {
  flex: 1;
  text-transform: capitalize;
}

#todo-filter button.selected {
  background-color: #cccccc;
  color: #000000;
}
</style>