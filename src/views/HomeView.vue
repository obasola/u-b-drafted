<template>
  <div class="home">
    <h1>Home</h1>
    <div class="count">{{ store.count }}</div>
    <div class="button">
      <button @click="store.decrement" class="buttons">-</button>
      <button @click="store.increment" class="buttons">+</button>
    </div>
    <hr />
    <div>The count is: {{ store.oddEven() }}</div>
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";

const store = new useCounterStore();

</script>

<style>
.home {
  text-align: center;
  font-weight: bold;
  font-size: 32pt;
}
.buttons {
  font-size: 40px;
  margin: 10px;
  padding: 20px;
  background-color: #181818;
  border: none;
}
.count {
  font-size: 60px;
  margin: 20px;
}
</style>
