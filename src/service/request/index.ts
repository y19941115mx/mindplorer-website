import { getServiceEnvConfig } from '~/.env-config';
import { createRequest, createHookRequest } from './request';

const { url, urlPattern, secondUrl, secondUrlPattern } = getServiceEnvConfig(import.meta.env);

const isHttpProxy = import.meta.env.VITE_HTTP_PROXY === 'Y';

export const request = createRequest({ baseURL: isHttpProxy ? urlPattern : url });

export const secondRequest = createRequest({ baseURL: isHttpProxy ? secondUrlPattern : secondUrl });

export const hookRequest = createHookRequest({ baseURL: isHttpProxy ? urlPattern : url }); // 获取数据并返回请求状态：钩子函数endload()与loading状态

export const mockRequest = createRequest({ baseURL: '/mock' });
