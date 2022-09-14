/**
 * 获取首页数据
 * @returns - 返回boolean值表示是否发送成功
 */
import { request } from '../request';

export function fetchHomePage() {
  return request.get<ApiHomepage.HomePageResult>('/homepage/getHomePage');
}
