const href: AuthRoute.Route = {
  name: 'href',
  path: '/href',
  component: 'self',
  meta: {
    title: '关于',
    requiresAuth: true,
    singleLayout: 'basic',
    hide: true
  }
};

export default href;
