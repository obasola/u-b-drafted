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
          <el-menu-item index="/combine/ac1">Round one</el-menu-item>
          <el-menu-item index="/combine/ac2">Round two</el-menu-item>
          <el-menu-item index="/combine/ac3">Round three</el-menu-item>
          <el-menu-item index="/combine/ac4">Round four</el-menu-item>
          <el-menu-item index="/combine/ac5">Round five</el-menu-item>
          <el-menu-item index="/combine/ac6">Round six</el-menu-item>
          <el-menu-item index="/combine/ac7">Round seven</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2-2">
          <template #title>Atlanta Falcons</template>
          <el-menu-item index="/combine/af1">Round one</el-menu-item>
          <el-menu-item index="/combine/af2">Round two</el-menu-item>
          <el-menu-item index="/combine/af3">Round three</el-menu-item>
          <el-menu-item index="/combine/af4">Round four</el-menu-item>
          <el-menu-item index="/combine/af5">Round five</el-menu-item>
          <el-menu-item index="/combine/af6">Round six</el-menu-item>
          <el-menu-item index="/combine/af7">Round seven</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2-3">
          <template #title>Carolina Panthers</template>
          <el-menu-item index="2-3-1">Round one</el-menu-item>
          <el-menu-item index="2-3-2">Round two</el-menu-item>
          <el-menu-item index="2-3-3">Round three</el-menu-item>
          <el-menu-item index="2-3-3">Round four</el-menu-item>
          <el-menu-item index="2-3-3">Round five</el-menu-item>
          <el-menu-item index="2-3-3">Round six</el-menu-item>
          <el-menu-item index="2-3-3">Round seven</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2-4">
          <template #title>Chicago Bears</template>
          <el-menu-item index="2-4-1">Round one</el-menu-item>
          <el-menu-item index="2-4-2">Round two</el-menu-item>
          <el-menu-item index="2-4-3">Round three</el-menu-item>
          <el-menu-item index="2-4-3">Round four</el-menu-item>
          <el-menu-item index="2-4-3">Round five</el-menu-item>
          <el-menu-item index="2-4-3">Round six</el-menu-item>
          <el-menu-item index="2-4-3">Round seven</el-menu-item>
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
          <el-menu-item index="6-1-1">Log in</el-menu-item>
          <el-menu-item index="6-2-2">Log out</el-menu-item>
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