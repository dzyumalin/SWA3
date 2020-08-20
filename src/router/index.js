import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: () => import('../components/Login'),
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/List',
      name: 'List',
      component: () => import('../components/List'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Home',
      name: 'Home',
      component: () => import('../components/Home'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Register',
      name: 'Register',
      component: () => import('../components/Register'),
      meta: {
        requiresGuest: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if(!firebase.auth().currentUser) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }
  } else if(to.matched.some(record => record.meta.requiresGuest)) {
    if(firebase.auth().currentUser) {
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// });

export default router;
