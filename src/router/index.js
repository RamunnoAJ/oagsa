import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CompanyView from '../views/CompanyView.vue';
import CatalogoView from '../views/CatalogoView.vue';
import NewsView from '../views/NewsView.vue';
import ContactView from '../views/ContactView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: HomeView,
    },
    {
      path: '/empresa',
      name: 'empresa',
      component: CompanyView,
    },
    {
      path: '/catalogo',
      name: 'catalogo',
      component: CatalogoView,
    },
    {
      path: '/novedades',
      name: 'novedades',
      component: NewsView,
    },
    {
      path: '/contactenos',
      name: 'contactenos',
      component: ContactView,
    },
  ],
});

export default router;
