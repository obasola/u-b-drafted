import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/pages/misc/HomeView.vue";
import TeamList from "@/pages/team/TeamListPage.vue";
import TeamDetail from "@/pages/team/TeamDetailPage.vue";
import PlayerDetail from '@/components/player/PlayerDetail.vue';
import PlayerList from '@/components/player/PlayerList.vue';
import PickDetail from '@/components/pick/PickDetail.vue';
import PlayerEdit from '@/components/player/PlayerEdit.vue';
import PlayerCreate from '@/components/player/PlayerCreate.vue';
import PlayerAwardsList from '../components/player/PlayerAwardsList.vue';

import PickList from '@/components/pick/PickList.vue';
import ScheduleList from '@/components/schedule/ScheduleList.vue';
import ScheduleDetail from '@/components/schedule/ScheduleDetail.vue';
import ScheduleCreate from '@/components/schedule/ScheduleCreateOrEdit.vue';

import CombineScoreList from '@/components/combine/CombineScoreList.vue';
import CombineScoreDetail from '@/components/combine/CombineScoreForm.vue';
import PlayerAwardForm from '@/components/player/PlayerAwardForm.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  { path: "/picks", name: 'picks', component: PickList },
  { path: "/pick/:id",  component: PickDetail, props: true },

  { path: '/players', name:"players", component: PlayerList },
  { path: '/player/:id', component: PlayerDetail, props: true },
  { path: '/player/create', name: 'playerCreate',  component: PlayerCreate },
  { path: '/player/:id/edit', component: PlayerEdit, props: true },
  { path: '/player/:id/awards', component: PlayerDetail, props: true },
  { path: '/playerAwards', name: 'playerAwards', component: PlayerAwardsList },
  { path: '/playerAwardCreate', name: 'playerAwardCreate', component: PlayerAwardForm},

  { path: "/teams", name: 'teams', component: TeamList },
  { path: "/team/:id", component: TeamDetail, props: true },

  { path: '/schedules', name: "schedules", component: ScheduleList },
  { path: '/schedule/:id', name: "viewSchedule", component: ScheduleDetail, props: true },
  { path: '/schedule/create', name: "createSchedule", component: ScheduleCreate },

  { path: '/combine-scoreList', name: "combineScores", component: CombineScoreList },
  { path: '/combine-score', name: "conbineScore", component: CombineScoreDetail, props: true },
  { path: '/combine-score/:id', name: "conbineScoreDetail", component: CombineScoreDetail, props: true },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/pages/misc/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
