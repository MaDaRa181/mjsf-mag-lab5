import { createRouter, createWebHistory } from 'vue-router';
import TodoPage from '../pages/TaskPage.vue';
import AboutPage from '../pages/AboutPage.vue';
import LoginPage from '../pages/LoginPage.vue';
import RegisterPage from '../pages/RegisterPage.vue';
import VerifyEmailPage from '../components/VerifyEmail.vue';
import { auth } from '../firebase';

const routes = [
  { path: '/', redirect: '/todo' },
  { path: '/todo', component: TodoPage, meta: { requiresAuth: true, requiresVerification: true } },
  { path: '/about', component: AboutPage },
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegisterPage },
  { path: '/verify-email', component: VerifyEmailPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const requiresVerification = to.matched.some(record => record.meta.requiresVerification);
  const currentUser = auth.currentUser;

  if (requiresAuth && !currentUser) {
    next('/login');
  } else if (requiresVerification && currentUser && !currentUser.emailVerified) {
    next('/verify-email');
  } else {
    next();
  }
});

export default router;
