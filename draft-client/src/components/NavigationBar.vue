<template>

    
    <div class="h-6" />
    <el-menu
      :default-active="activeIndex2"
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
          <el-menu-item index="/picks/ac/1" :route="{name: 'PicksByRound'}">Round one</el-menu-item>
          <el-menu-item index="/picks/ac/2" :route="{name: 'PicksByRound'}">Round two</el-menu-item>
          <el-menu-item index="/picks/ac/3" :route="{name: 'PicksByRound'}">Round three</el-menu-item>
          <el-menu-item index="/picks/ac/4" :route="{name: 'PicksByRound'}">Round four</el-menu-item>
          <el-menu-item index="/picks/ac/5" :route="{name: 'PicksByRound'}">Round five</el-menu-item>
          <el-menu-item index="/picks/ac/6" :route="{name: 'PicksByRound'}">Round six</el-menu-item>
          <el-menu-item index="/picks/ac/7" :route="{name: 'PicksByRound'}">Round seven</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2-2">
          <template #title>Atlanta Falcons</template>
          <el-menu-item index="/picks/af/1" :route="{name: 'PicksByRound'}">Round one</el-menu-item>
          <el-menu-item index="/picks/af/2" :route="{name: 'PicksByRound'}">Round two</el-menu-item>
          <el-menu-item index="/picks/af/3" :route="{name: 'PicksByRound'}">Round three</el-menu-item>
          <el-menu-item index="/picks/af/4" :route="{name: 'PicksByRound'}">Round four</el-menu-item>
          <el-menu-item index="/picks/af/5" :route="{name: 'PicksByRound'}">Round five</el-menu-item>
          <el-menu-item index="/picks/af/6" :route="{name: 'PicksByRound'}">Round six</el-menu-item>
          <el-menu-item index="/picks/af/7" :route="{name: 'PicksByRound'}">Round seven</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2-3">
          <template #title>Carolina Panthers</template>
          <el-menu-item index="picks/cp/1" :route="{name: 'PicksByRound'}">Round one</el-menu-item>
          <el-menu-item index="picks/cp/2" :route="{name: 'PicksByRound'}">Round two</el-menu-item>
          <el-menu-item index="picks/cp/3" :route="{name: 'PicksByRound'}">Round three</el-menu-item>
          <el-menu-item index="picks/cp/4" :route="{name: 'PicksByRound'}">Round four</el-menu-item>
          <el-menu-item index="picks/cp/5" :route="{name: 'PicksByRound'}">Round five</el-menu-item>
          <el-menu-item index="picks/cp/6" :route="{name: 'PicksByRound'}">Round six</el-menu-item>
          <el-menu-item index="picks/cp/7" :route="{name: 'PicksByRound'}">Round seven</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2-4">
          <template #title>Chicago Bears</template>
          <el-menu-item index="picks/cb/1" :route="{name: 'PicksByRound'}">Round one</el-menu-item>
          <el-menu-item index="picks/cb/2" :route="{name: 'PicksByRound'}">Round two</el-menu-item>
          <el-menu-item index="picks/cb/3" :route="{name: 'PicksByRound'}">Round three</el-menu-item>
          <el-menu-item index="picks/cb/4" :route="{name: 'PicksByRound'}">Round four</el-menu-item>
          <el-menu-item index="picks/cb/5" :route="{name: 'PicksByRound'}">Round five</el-menu-item>
          <el-menu-item index="picks/cb/6" :route="{name: 'PicksByRound'}">Round six</el-menu-item>
          <el-menu-item index="picks/cb/7" :route="{name: 'PicksByRound'}">Round seven</el-menu-item>
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
          <el-menu-item index="/user/list"><router-link :to="{ name: 'PeopleList' }">List Users</router-link></el-menu-item>
          <el-menu-item index="/user/register"  :route="{name: 'AddUser'}">Register User</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
    </el-menu>
  </template>

<script lang="ts" setup>
import { ref } from 'vue'
import 'element-plus/dist/index.css'

const activeIndex = ref('1')
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>