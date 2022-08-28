/**
 * 获取全局数据字典
 * @param type - 字典的英文名
 * @returns - 返回boolean值表示是否发送成功
 */
import { request } from '../request';

export function fetchDictinary(type: string) {
  return request.get<ApiDictionary.SysDictionaryData>('/sysDictionary/findSysDictionary', { params: { type } });
}
