/** 请求服务的环境配置 */
type ServiceEnv = Record<ServiceEnvType, ServiceEnvConfig>;

/** 不同请求服务的环境配置 */
const serviceEnv: ServiceEnv = {
  dev: {
    url: 'http://localhost:7777', // request传入相对 URL地址会自动加上 url 字段设置的地址
    urlPattern: '/url-pattern', // 只需设置和secondUrlPattern不同即可，开启代理时 urlpattern会被替换，关闭代理时 urlpattern设置无效传入的 url地址作为请求的根地址
    secondUrl: 'http://localhost:8081',
    secondUrlPattern: '/second-url-pattern'
  },
  test: {
    url: 'http://localhost:8080',
    urlPattern: '/url-pattern',
    secondUrl: 'http://localhost:8081',
    secondUrlPattern: '/second-url-pattern'
  },
  prod: {
    url: 'http://localhost:8080',
    urlPattern: '/url-pattern',
    secondUrl: 'http://localhost:8081',
    secondUrlPattern: '/second-url-pattern'
  }
};

/**
 * 获取当前环境模式下的请求服务的配置
 * @param env 环境
 */
export function getServiceEnvConfig(env: ImportMetaEnv) {
  const { VITE_SERVICE_ENV = 'dev' } = env;

  const config = serviceEnv[VITE_SERVICE_ENV];

  return config;
}
