import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  const date = new Date();
  
  function increment() {
    count.value++;
  }

  function decrement() {
    if (count.value > 0) {
      count.value--;
    }
  }

  function oddEven() {
    if (count.value % 2 === 0) return "Even";
    return "Odd";
  }
  return { count, date, doubleCount, increment, decrement, oddEven };
});
