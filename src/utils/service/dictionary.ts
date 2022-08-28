import { useAppStore } from '~/src/store';

/**
 * 返回 Label 编码对应的标签中文名称 label与标签值 value
 * @param labelId 标签编码（sex-1-0）
 */
export async function filterLabel(labelId: string) {
  const store = useAppStore();
  const [dictKey, dictValue, value] = labelId.split('-');

  await store.getDictinary(dictKey);
  const { sysDictionary } = store;

  function filterDict(dictValue: string) {
    const matchDictValues = sysDictionary[dictKey].filter(item => (item.value.toString() as string) === dictValue);
    return matchDictValues[0].label;
  }

  const label = filterDict(dictValue);

  return {
    label,
    value
  };
}
