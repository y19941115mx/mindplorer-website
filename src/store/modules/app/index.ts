import { nextTick } from 'vue';
import { defineStore } from 'pinia';
import { fetchDictinary } from '@/service';

type SysDictionary = Record<string, ApiDictionary.SysDictionaryDetail[]>;

interface AppState {
  /** 重载页面(控制页面的显示) */
  reloadFlag: boolean;
  /** 项目配置的抽屉可见状态 */
  settingDrawerVisible: boolean;
  /** 侧边栏折叠状态 */
  siderCollapse: boolean;
  /** vertical-mix模式下 侧边栏的固定状态 */
  mixSiderFixed: boolean;
  sysDictionary: SysDictionary;
}

export const useAppStore = defineStore('app-store', {
  state: (): AppState => ({
    reloadFlag: true,
    settingDrawerVisible: false,
    siderCollapse: true,
    mixSiderFixed: false,
    sysDictionary: {}
  }),
  actions: {
    /**
     * 重载页面
     * @param duration - 重载的延迟时间(ms)
     */
    async reloadPage(duration = 0) {
      this.reloadFlag = false;
      await nextTick();
      if (duration) {
        setTimeout(() => {
          this.reloadFlag = true;
        }, duration);
      } else {
        this.reloadFlag = true;
      }
      setTimeout(() => {
        document.documentElement.scrollTo({ left: 0, top: 0 });
      }, 100);
    },
    /** 打开设置抽屉 */
    openSettingDrawer() {
      this.settingDrawerVisible = true;
    },
    /** 关闭设置抽屉 */
    closeSettingDrawer() {
      this.settingDrawerVisible = false;
    },
    /** 切换抽屉可见状态 */
    toggleSettingDrawerVisible() {
      this.settingDrawerVisible = !this.settingDrawerVisible;
    },
    /** 设置侧边栏折叠状态 */
    setSiderCollapse(collapse: boolean) {
      this.siderCollapse = collapse;
    },
    /** 折叠/展开 侧边栏折叠状态 */
    toggleSiderCollapse() {
      this.siderCollapse = !this.siderCollapse;
    },
    /** 设置 vertical-mix模式下 侧边栏的固定状态 */
    setMixSiderIsFixed(isFixed: boolean) {
      this.mixSiderFixed = isFixed;
    },
    /** 设置 vertical-mix模式下 侧边栏的固定状态 */
    toggleMixSiderFixed() {
      this.mixSiderFixed = !this.mixSiderFixed;
    },
    /** 获取和更新全局数据字典 */
    async getDictinary(typeStr: string) {
      if (this.sysDictionary[typeStr]) {
        return;
      }

      const { data } = await fetchDictinary(typeStr);
      if (data) {
        const dictionaryDetails = data.resysDictionary.sysDictionaryDetails;
        const dictionary: SysDictionary = {};
        dictionary[typeStr] = dictionaryDetails;
        // 更新状态
        this.sysDictionary = { ...this.sysDictionary, ...dictionary };
      }
    }
  }
});
