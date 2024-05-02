<template>
    <div>
      <el-menu :default-active="activeMenu" mode="horizontal" @select="handleMenuSelect">
        <el-submenu v-for="(submenu, index) in menuItems" :key="index" :index="submenu.index">
          <template #title>{{ submenu.name }}</template>
          <el-menu-item v-for="(item, itemIndex) in submenu.items" :key="itemIndex" :index="item.index">
            {{ item.name }}
          </el-menu-item>
        </el-submenu>
      </el-menu>

      <el-menu
      :default-active="selectedMenuItem"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleMenuSelect"
    >
      <el-menu-item index="/">Home</el-menu-item>
      <el-sub-menu index="2">
        <template #title>Draft</template>
        <el-submenu v-for="(submenu, index) in menuItems" :key="index" :index="submenu.index">
          <template #title>{{ submenu.name }}</template>
          <el-menu-item v-for="(item, itemIndex) in submenu.items" :key="itemIndex" :index="item.index">            
            <router-link :to="{ name: 'PicksByRound'}">{{ item.name }}</router-link>
          </el-menu-item>
        </el-submenu>
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
          <el-menu-item index="/user/register"><router-link :to="{'AddUser'}">Register User</router-link></el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
    </el-menu>
  
      <!-- Display the content based on the selected menu item -->
      <div v-if="selectedMenuItem">
        <h2>{{ selectedMenuItem.name }}</h2>
        <!-- Display other content related to the selected menu item -->
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  import { ElMenu, ElSubmenu, ElMenuItem } from 'element-plus';
  
  interface MenuItem {
    index: string;
    name: string;
  }
  
  interface SubmenuItem extends MenuItem {
    items: MenuItem[];
  }
  
  @Component({
    components: {
      ElMenu,
      ElSubmenu,
      ElMenuItem,
    },
  })
  export default class MenuWithTwoDimensionalArray extends Vue {
    menuItems: SubmenuItem[] = [
      {
        index: '1',
        name: 'Menu 1',
        items: [
          { index: '1-1', name: 'Submenu 1 Item 1' },
          { index: '1-2', name: 'Submenu 1 Item 2' },
          // Add more items as needed
        ],
      },
      {
        index: '2',
        name: 'Menu 2',
        items: [
          { index: '2-1', name: 'Submenu 2 Item 1' },
          { index: '2-2', name: 'Submenu 2 Item 2' },
          // Add more items as needed
        ],
      },
      // Add more submenus as needed
    ];
  
    activeMenu = '1';
  
    selectedMenuItem: MenuItem | null = null;
  
    handleMenuSelect(index: string): void {
      this.activeMenu = index;
      const menuItem = this.findMenuItem(index);
      if (menuItem) {
        this.selectedMenuItem = menuItem;
        // Handle any additional logic related to the selected menu item
      }
    }
  
    findMenuItem(index: string): MenuItem | null {
      for (const submenu of this.menuItems) {
        for (const item of submenu.items) {
          if (item.index === index) {
            return item;
          }
        }
      }
      return null;
    }
  }
  </script>
  
  <style scoped>
  /* Add your component styles here */
  </style>
  