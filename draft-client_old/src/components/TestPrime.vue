// src/components/ExampleComponent.vue
<template>
  <div>
    <InputText v-model="inputValue" placeholder="Enter text" />
    <Button label="Click Me" @click="handleClick" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const inputValue = ref('');

    const handleClick = () => {
      console.log(inputValue.value);
    };

    return {
      inputValue,
      handleClick,
    };
  },
});
</script>

<style scoped>
/* Add your styles here */
</style>
