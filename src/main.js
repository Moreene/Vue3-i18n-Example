import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import zh from './localse/zh.json';
import en from './localse/en.json';


import App from './App.vue';
import router from './router';

const i18n = createI18n({
    legacy: false,// Composition api 寫法需加上
    locale: 'zh',// 預設語言
    fallbackLocale: 'zh',// 若有翻譯失敗的文字預設語言
    globalInjection: true,// 全域使用
    messages: { zh, en },
});
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);
app.mount('#app');
