//如果你的项目有多语言功能,你将在这里处理语言

import Vue from 'vue';
import VueI18n from 'vue-i18n';

import enLocale from './en-US'  //英语
import zhLocale from './zh-CN'  //中文
import twLocale from './zh-TW'  //繁体  如果需要更多，按照该格式书写并引入

// 如果你使用相关插件,如 element-UI
// import elementEnlocale from 'element-ui/lib/locale/lang/en'
// import elementZhlocale from 'element-ui/lib/locale/lang/zh-CN'
// import elementTwlocale from 'element-ui/lib/locale/lang/zh-TW'

Vue.use(VueI18n);

const messages = {
  'en-US': {
    ...enLocale
    // ...elementEnlocale
  },
  'zh-TW': {
    ...twLocale
    // ...elementZhlocale
  },
  'zh-CN': {
    ...zhLocale
    // ...elementTwlocale
  },
}

const i18n = new VueI18n({
 // locale: Cookies.getCookie('language') || 'zh-CN', //默认为中文
  messages
})

export default i18n
