const listpage: AuthRoute.Route = {
  name: 'listpage',
  path: '/listpage',
  component: 'self',
  meta: {
    title: '列表',
    icon: 'material-symbols:format-list-bulleted-rounded',
    order: 1,
    requiresAuth: true,
    singleLayout: 'basic',
    permissions: ['super', 'admin', 'user']
  }
};

export default listpage;
