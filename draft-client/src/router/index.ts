import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../pages/HomeView.vue";
import TeamList from "../pages/TeamListPage.vue";
import TeamDetail from "../pages/TeamDetailPage.vue";
import PlayerDetail from '@/components/PlayerDetail.vue';
import PlayerList from '@/components/PlayerList.vue';
import PickDetail from '@/components/PickDetail.vue';
import PickList from '@/components/PickList.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  { path: "/picks", name: 'picks', component: PickList },
  { path: "/pick/:id",  component: PickDetail, props: true },
  { path: "/players", name: 'players', component: PlayerList },
  { path: "/player/:id", component: PlayerDetail, props: true },
  { path: "/teams", name: 'teams', component: TeamList },
  { path: "/team/:id", component: TeamDetail, props: true },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
