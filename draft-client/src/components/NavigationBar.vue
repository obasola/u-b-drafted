<template>

    
    <div class="h-6" />
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
    >
      <el-menu-item index="/">Home</el-menu-item>
      <el-sub-menu index="2">
        <template #title>Draft</template>
        <el-sub-menu index="2-1">
          <template #title>Arizona Cardinals</template>
          <el-menu-item index="/picks/ac/1" >
          <router-link :to="{ name: 'PicksByRound'}">Round one</router-link>
          </el-menu-item>
          <el-menu-item index="/picks/ac/2" ><router-link :to="{ name: 'PicksByRound'}">Round two</router-link></el-menu-item>
          <el-menu-item index="/picks/ac/3" ><router-link :to="{ name: 'PicksByRound'}">Round three</router-link></el-menu-item>
          <el-menu-item index="/picks/ac/4" ><router-link :to="{ name: 'PicksByRound'}">Round four</router-link></el-menu-item>
          <el-menu-item index="/picks/ac/5" ><router-link :to="{ name: 'PicksByRound'}">Round five</router-link></el-menu-item>
          <el-menu-item index="/picks/ac/6" ><router-link :to="{ name: 'PicksByRound'}">Round six</router-link></el-menu-item>
          <el-menu-item index="/picks/ac/7" ><router-link :to="{ name: 'PicksByRound'}">Round seven</router-link></el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2-2">
          <template #title>Atlanta Falcons</template>
          <el-menu-item index="/picks/af/1" ><router-link :to="{ name: 'PicksByRound'}">Round one</router-link></el-menu-item>
          <el-menu-item index="/picks/af/2" ><router-link :to="{ name: 'PicksByRound'}">Round two</router-link></el-menu-item>
          <el-menu-item index="/picks/af/3" ><router-link :to="{ name: 'PicksByRound'}">Round three</router-link></el-menu-item>
          <el-menu-item index="/picks/af/4" ><router-link :to="{ name: 'PicksByRound'}">Round four</router-link></el-menu-item>
          <el-menu-item index="/picks/af/5" ><router-link :to="{ name: 'PicksByRound'}">Round five</router-link></el-menu-item>
          <el-menu-item index="/picks/af/6" ><router-link :to="{ name: 'PicksByRound'}">Round six</router-link></el-menu-item>
          <el-menu-item index="/picks/af/7" ><router-link :to="{ name: 'PicksByRound'}">Round seven</router-link></el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2-3">
          <template #title>Carolina Panthers</template>
          <el-menu-item index="picks/cp/1" ><router-link :to="{ name: 'PicksByRound'}">Round one</router-link></el-menu-item>
          <el-menu-item index="picks/cp/2" ><router-link :to="{ name: 'PicksByRound'}">Round two</router-link></el-menu-item>
          <el-menu-item index="picks/cp/3" ><router-link :to="{ name: 'PicksByRound'}">Round three</router-link></el-menu-item>
          <el-menu-item index="picks/cp/4" ><router-link :to="{ name: 'PicksByRound'}">Round four</router-link></el-menu-item>
          <el-menu-item index="picks/cp/5" ><router-link :to="{ name: 'PicksByRound'}">Round five</router-link></el-menu-item>
          <el-menu-item index="picks/cp/6" ><router-link :to="{ name: 'PicksByRound'}">Round six</router-link></el-menu-item>
          <el-menu-item index="picks/cp/7" ><router-link :to="{ name: 'PicksByRound'}">Round seven</router-link></el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2-4">
          <template #title>Chicago Bears</template>
          <el-menu-item index="picks/cb/1" ><router-link :to="{ name: 'PicksByRound'}">Round one</router-link></el-menu-item>
          <el-menu-item index="picks/cb/2" ><router-link :to="{ name: 'PicksByRound'}">Round two</router-link></el-menu-item>
          <el-menu-item index="picks/cb/3" ><router-link :to="{ name: 'PicksByRound'}">Round three</router-link></el-menu-item>
          <el-menu-item index="picks/cb/4" ><router-link :to="{ name: 'PicksByRound'}">Round four</router-link></el-menu-item>
          <el-menu-item index="picks/cb/5" ><router-link :to="{ name: 'PicksByRound'}">Round five</router-link></el-menu-item>
          <el-menu-item index="picks/cb/6" ><router-link :to="{ name: 'PicksByRound'}">Round six</router-link></el-menu-item>
          <el-menu-item index="picks/cb/7" ><router-link :to="{ name: 'PicksByRound'}">Round seven</router-link></el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      
      <el-sub-menu index="3">
        <template #title>Combine</template>
        <el-menu-item index="3-1">Wide Receivers</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="/players">Players</el-menu-item>
      <el-menu-item index="/teams">Teams</el-menu-item>
      <el-sub-menu index="6">
        <template #title>Schedules</template>
        <el-sub-menu index="6-1">
            <template #title>Site access</template>
          <el-menu-item index="/user/login"><router-link :to="{ name: 'Login' }">Log In</router-link></el-menu-item>
          <el-menu-item index="/user/logout"><router-link :to="{ name: 'Logout' }">Log Out</router-link></el-menu-item>
          <el-menu-item index="/user/list"><router-link :to="{  name: 'UserList'}">List Users</router-link></el-menu-item>
          <el-menu-item index="/user/register"><router-link :to="{name: 'AddUser'}">Register User</router-link></el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
    </el-menu>
  </template>

<script lang="ts" setup>
import { ref } from 'vue'
import 'element-plus/dist/index.css'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>