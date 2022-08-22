const homepage: AuthRoute.Route = {
  name: 'homepage',
  path: '/homepage',
  component: 'self',
  meta: {
    title: '首页',
    requiresAuth: true,
    singleLayout: 'basic',
    permissions: ['super', 'admin', 'user'],
    icon: 'ic:round-home',
    order: 0
  }
};

export default homepage;
