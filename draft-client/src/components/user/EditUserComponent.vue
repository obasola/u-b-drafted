<template>
  <h2>Edit User</h2>

  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="rules"
      label-width="120px"
      class="login-form"
    >
      <el-form-item label="First Name" prop="firstName">
        <el-input v-model="loginForm.firstName" placeholder="Enter your firstname"></el-input>
      </el-form-item>
      <el-form-item label="Last Name" prop="lastName">
        <el-input v-model="loginForm.lastName" placeholder="Enter your lastname"></el-input>
      </el-form-item>
      <el-form-item label="Username" prop="emailAddress">
        <el-input v-model="loginForm.emailAddress" placeholder="Enter your email address"></el-input>
      </el-form-item>
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


import { ref } from 'vue';
import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus';

const loginFormRef = ref<ElForm>();

const loginForm = ref({
  id: null,
  username: '',
  password: '',
  emailAdddress: '',
  firstName: '',
  lastName: '',
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
  loginFormRef.value?.validate((valid:any) => {
    if (valid) {
      // Submit login form
      console.log('User Edit form submitted');
      // You can handle form submission logic here, like sending the data to the server
    } else {
      console.log('User Edit form validation failed');
      return false;
    }
  });
};

</script>
  <!-- ******************* STYLE BEGINS HERE ******************** -->
  
  <!-- ******************* STYLE BEGINS HERE ******************** -->
  