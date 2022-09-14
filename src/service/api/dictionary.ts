/**
 * 获取全局数据字典
 * @param type - 字典的英文名
 * @returns - 返回 SysDictionaryData 数据
 */
import { request } from '../request';

export function fetchDictinary(type: string) {
  return request.get<ApiDictionary.SysDictionaryData>('/sysDictionary/findSysDictionary', { params: { type } });
}
