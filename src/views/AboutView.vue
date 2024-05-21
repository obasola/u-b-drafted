import { useCounterStore } from '../../../../draft-client-vue/src/store/index';
<template>
  <div class="about">
    <h1>About</h1>
    <div>
      <Calendar v-model="store.date" dateFormat="MM dd yy" showTime hourFormat="12"/>
    </div>
    <br />
    <hr />
    <div>The count {{ store.count }} is: {{ store.oddEven() }}</div>
  </div>
</template>

<script setup lang="js">
  import { useCounterStore } from "@/stores/counter";
  
  
const store = new useCounterStore();
</script>
<style>
.about {
  text-align: center;
  font-weight: bold;
  font-size: 32pt;
}
</style>
