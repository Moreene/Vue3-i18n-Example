# Vue3 i18n 使用範例
使用 Vue3 環境建立簡易的畫面練習多國語系切換

## 安裝與使用
1. `npm install vue-i18n@10`
2. 在 src 底下建立一個資料夾以放置各語系的 json 檔
3. 在 main.js 中引入各語系 json 檔及相關配置(請依個人專案調整)
    ```js
    import { createI18n } from 'vue-i18n';
    import zh from './localse/zh.json';
    import en from './localse/en.json';

    const i18n = createI18n({
      legacy: true,
      locale: 'zh',
      fallbackLocale: 'zh',
      globalInjection: true,
      messages: { zh, en }
    });

    app.use(i18n);
    ```
4. 將專案內需要切換的文字格式改為 `{{ $t('XXX') }}`

## 學習資源
* [官方文件](https://vue-i18n.intlify.dev/guide/introduction.html)
* [Youtube](https://www.youtube.com/watch?v=vKyvItjJhQI)

## 備註
此專案已安裝 unplugin-auto-import 的套件，所以不會在各頁面看到重複引入 vue 的方法  
若自行開發的專案未安裝此套件，需記得在頁面中引入相關方法，否則會報錯