import {
  RouteRecordRaw,
  createRouter,
  createWebHashHistory,
} from 'vue-router';

import PicksPage from '../pages/pick/PicksPage.vue';
import EditPickPage from '../pages/pick/EditPickPage.vue';
import DraftPicksPage from '../pages/pick/DraftPicksPage.vue';
import ScorePage from '../pages/score/ScorePage.vue';
import EditScorePage from '../pages/score/EditScorePage.vue';
import IndexPage from '../pages/IndexPage.vue';
import EditPersonPage from '../pages/person/EditPersonPage.vue';

import ListPeoplePage from '../pages/person/ListPeoplePage.vue';

const routes: Array<RouteRecordRaw> = [
  {path: "/", name: "home", component: IndexPage,},
  {path: "/picks", name: "pick", component: PicksPage,},
  {path: "/picks/:team/:round", name: "picks", component: PicksPage,},
  {path: "/pick/edit", name: "pickEdit", component: EditPickPage,},
  {path: "/pick/draft", name: "pickDraft", component: DraftPicksPage,},

  {path: "/players", name: "pick", component: PicksPage,},
  {path: "/pick/edit", name: "pickEdit", component: EditPickPage,},
  {path: "/pick/draft", name: "pickDraft", component: DraftPicksPage,},
  
  {path: "/teams", name: "pick", component: PicksPage,},
  {path: "/pick/edit", name: "pickEdit", component: EditPickPage,},
  {path: "/pick/draft", name: "pickDraft", component: DraftPicksPage,},

  {path: "/scores", name: "pick", component: ScorePage,},
  {path: "/score/edit", name: "pickEdit", component: EditScorePage,},
  {path: "/score/draft", name: "pickDraft", component: DraftPicksPage,},

  {path: "/schedules", name: "pick", component: PicksPage,},
  {path: "/pick/edit", name: "pickEdit", component: EditPickPage,},
  {path: "/pick/draft", name: "pickDraft", component: DraftPicksPage,},

  {path: "/person/:id", name: "person", component: EditPersonPage,},
  {path: "/login", name: "Login", component: EditPersonPage,},
  {path: "/logout", name: "person", component: EditPersonPage,},
  {path: "/people", name: "person", component: ListPeoplePage,},
  {path: "/person", name: "person", component: EditPersonPage,},
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

