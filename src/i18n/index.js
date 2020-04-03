import Vue from 'vue'
import VueI18n from 'vue-i18n'

import en from '@/assets/lang/en-US'
import zh from '@/assets/lang/zh-CN'

Vue.use(VueI18n)

const messages = {
  'en-us': {
    ...en,
  },
  'zh-cn': {
    ...zh,
  }
}
// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: localStorage.getItem('locale') || 'zh-cn', // set locale
  messages, // set locale messages
})


export default i18n

