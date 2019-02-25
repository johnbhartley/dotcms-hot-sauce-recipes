import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Recipes.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
    },
    {
      path: '/recipes',
      name: 'recipes',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/Recipes.vue'),
    },
    {
      path: '/recipes/:id',
      name: 'recipe-id',
      component: () => import('./views/Recipe.vue'),
    },
    {
      path: '/recipe/:slug',
      name: 'recipe-slug',
      component: () => import('./views/RecipeSlug.vue'),
    },
    {
      path: '/search/:query',
      name: 'searched',
      component: () => import('./views/Search.vue'),
    },
    {
      path: '/search/',
      name: 'search',
      component: () => import('./views/Search.vue'),
    },
  ],
});
