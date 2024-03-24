<template>
  <div class="table-container">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="Name"></el-table-column>
      <el-table-column prop="age" label="Age"></el-table-column>
      <el-table-column prop="gender" label="Gender"></el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ElTable, ElTableColumn } from 'element-plus';

const tableData = ref([
  { name: 'John Doe', age: 30, gender: 'Male' },
  { name: 'Jane Smith', age: 25, gender: 'Female' },
  { name: 'Tom Brown', age: 40, gender: 'Male' },
]);

</script>

<style scoped>
.table-container {
  margin-top: 20px;
}
</style>
