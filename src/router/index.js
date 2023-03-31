import { createRouter, createWebHistory } from 'vue-router';
import ContactPage from '../pages/ContactPage.vue';
import HomePage from '../pages/HomePage.vue';
import LegalPage from '../pages/LegalPage.vue';
import EventPage from '../pages/EventPage.vue';

const delay = (t) => new Promise((r) => setTimeout(r, t)); // FF issue

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    }, {
      path: '/event',
      name: 'event',
      component: EventPage
    }, {
      path: '/contact',
      name: 'contact',
      component: ContactPage
    }, {
      path: '/mentions-legales',
      name: 'legal',
      component: LegalPage
    }
  ],
  async scrollBehavior(to, from, savedPosition) {
    await delay(0); // FF issue
    return { top: 0 };
  }
});

export default router;
