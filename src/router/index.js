import Vue from 'vue';
import Router from 'vue-router';
import ListUser from '../views/ListUser';
import RegisterUser from '../views/RegisterUser';

// Application routes
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'listUsers',
      component: ListUser,
      menu: true,
    },
    {
      path: '/register',
      name: 'registerUser',
      component: RegisterUser,
      menu: true
    }
  ],
});

export default router;
