import Vue from 'vue';
import Router from 'vue-router';
import ListUser from '../views/ListUser';
import RegisterUser from '../views/RegisterUser';
import User from '../views/User';

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
    },
    {
      path: '/user/:id',
      name: 'user',
      component: User,
      menu: true
    }
  ],
});

export default router;
