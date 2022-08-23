const detailpage: AuthRoute.Route = {
  name: 'detailpage',
  path: '/detailpage',
  component: 'self',
  meta: {
    title: '详情页',
    requiresAuth: true,
    singleLayout: 'basic',
    permissions: ['super', 'admin', 'user'],
    icon: 'majesticons:checkbox-list-detail',
    order: 3
  }
};

export default detailpage;
