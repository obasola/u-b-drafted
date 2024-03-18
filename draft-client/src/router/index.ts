import {
  RouteRecordRaw,
  createRouter,
  createWebHashHistory,
} from 'vue-router';
import PicksPage from '../pages/pick/PicksPage.vue';
import EditPickPage from '../pages/pick/EditPickPage.vue';
import DraftPicksPage from '../pages/pick/DraftPicksPage.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: "/pick", name: "pick", component: PicksPage,
  },
  {
    path: "/pick/edit", name: "pickEdit", component: EditPickPage,
  },
  {
    path: "/pick/draft", name: "pickDraft", component: DraftPicksPage,
  },
  
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
