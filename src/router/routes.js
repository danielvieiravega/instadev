const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'signin', component: () => import('pages/SignIn/Index.vue'), alias: '' },
      { path: 'my-area', component: () => import('pages/MyArea/Index.vue') },
      { path: 'main', component: () => import('pages/Main/Index.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
