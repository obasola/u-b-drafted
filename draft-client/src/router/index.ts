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
import LogoutPage from '../pages/person/LogoutPage.vue';
import ListPeoplePage from '../pages/person/ListPeoplePage.vue';

const routes: Array<RouteRecordRaw> = [
  {path: "/", name: "home", component: IndexPage,},
  {path: "/picks",              name: "PickList", component: PicksPage,},
  {path: "/picks/:team/:round", name: "PicksByRound", component: PicksPage, props: true},
  {path: "/pick/edit",          name: "PickEdit", component: EditPickPage,},
  {path: "/pick/draft",         name: "PickDraft", component: DraftPicksPage,},

  {path: "/players",            name: "PlayerList", component: PicksPage,},
  {path: "/player/edit",        name: "PlayerEdit", component: EditPickPage,},
  {path: "/player/draft",       name: "PlayerDraft", component: DraftPicksPage,},
  
  {path: "/teams",              name: "TeamList", component: PicksPage,},
  {path: "/team/edit",          name: "TeamEdit", component: EditPickPage,},
  {path: "/team/draft",         name: "TeamDraft", component: DraftPicksPage,},

  {path: "/scores",             name: "CombineList", component: ScorePage,},
  {path: "/score/:id",          name: "CombineEdit", component: EditScorePage, props: true},
  {path: "/score/edit",         name: "CombineEdit", component: EditScorePage,},
  {path: "/score/draft",        name: "CombineDraft", component: DraftPicksPage,},

  {path: "/schedules",          name: "ScheduleList", component: PicksPage,},
  {path: "/schedule/edit",      name: "ScheduleEdit", component: EditPickPage,},
  {path: "/schedule/draft",     name: "ScheduleDraft", component: DraftPicksPage,},

  {path: "/person/:id",         name: "PersonById", component: EditPersonPage, props: true},
  {path: "/login",              name: "Login", component: EditPersonPage,},
  {path: "/logout",             name: "Logout", component: LogoutPage,},
  {path: "/people",             name: "PeopleList", component: ListPeoplePage,},
  {path: "/person",             name: "PersonEdit", component: EditPersonPage,},
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

