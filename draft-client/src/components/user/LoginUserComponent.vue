<template>
  <h2>Login Form</h2>

  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="rules"
      label-width="120px"
      class="login-form"
    >
      <el-form-item label="Username" prop="username">
        <el-input v-model="loginForm.username" placeholder="Enter your username"></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input
          v-model="loginForm.password"
          placeholder="Enter your password"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
  <!-- ******************* SCRIPT BEGINS HERE ******************** -->
  <script setup lang="ts">
console.log("List User entry point");

<script setup>
import { ref } from 'vue';
import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus';

const loginForm = ref({
  username: '',
  password: ''
});

const rules = {
  username: [
    { required: true, message: 'Please enter your username', trigger: 'blur' }
  ],
  password: [
    { required: true, message: 'Please enter your password', trigger: 'blur' }
  ]
};

const submitForm = () => {
  $refs.loginForm.validate((valid) => {
    if (valid) {
      // Submit login form
      console.log('Login form submitted');
      // You can handle form submission logic here, like sending the data to the server
    } else {
      console.log('Login form validation failed');
      return false;
    }
  });
};

</script>
  <!-- ******************* STYLE BEGINS HERE ******************** -->
  