import Vue from 'vue';
import Router from 'vue-router';
import Register from '@/components/Register';
import Login from '@/components/Login';
import Grills from '@/components/Grills/Index';
import CreateGrill from '@/components/CreateGrill';
import ViewGrill from '@/components/ViewGrill';
import EditGrill from '@/components/EditGrill';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/grills',
      name: 'grills',
      component: Grills,
    },
    {
      path: '/grills/create',
      name: 'grills-create',
      component: CreateGrill,
    },
    {
      path: '/grill/:grillId',
      name: 'grill',
      component: ViewGrill,
    },
    {
      path: '/grill/:grillId/edit',
      name: 'grill-edit',
      component: EditGrill,
    },
    {
      path: '*',
      redirect: 'grills',
    },
  ],
});
