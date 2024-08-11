// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import VLastupdated from '../../../components/Layout/VLastupdated.vue';

// @ts-expect-error 类型 “ImportMeta” 上不存在属性 “glob”
const modules = import.meta.glob("./../../../components/**/*.vue", { eager: true });

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      // 'doc-top': () => h('div' , 'doc-top'),
      // 'doc-bottom': () => h('div' , 'doc-bottom'),
      // 'doc-footer-before': () => h('div' , 'doc-footer-before'),
      // 'doc-before': () => h('div' , 'doc-before'),
      // 'doc-after': () => h('div' , 'doc-after'),
      // 'sidebar-nav-before': () => h('div' , 'sidebar-nav-before'),
      // 'sidebar-nav-after': () => h('div' , 'sidebar-nav-after'),
      // 'aside-top': () => h('div' , 'aside-top'),
      // 'aside-bottom': () => h('div' , 'aside-bottom'),
      // 'aside-outline-before': () => h('div' , 'aside-outline-before'),
      // 'aside-outline-after': () => h('div' , 'aside-outline-after'),
      // 'aside-ads-before': () => h('div' , 'aside-ads-before'),
      // 'aside-ads-after': () => h('div' , 'aside-ads-after'),
      // 'layout-top': () => h('div' , 'layout-top'),
      // 'layout-bottom': () => h('div' , 'layout-bottom'),
      // 'nav-bar-title-before': () => h('div' , 'nav-bar-title-before'),
      // 'nav-bar-title-after': () => h('div' , 'nav-bar-title-after'),
      // 'nav-bar-content-before': () => h('div' , 'nav-bar-content-before'),
      // 'nav-bar-content-after': () => h('div' , 'nav-bar-content-after'),
      // 'nav-screen-content-before': () => h('div' , 'nav-screen-content-before'),
      // 'nav-screen-content-after': () => h('div' , 'nav-screen-content-after'),

      'doc-before': () => h(VLastupdated),

    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
      for (const path in modules) {
        const mod = modules[path];
        const paths = path.split("/");
        const moduleName = paths[paths.length - 1].replace(".vue", "");
        app.component(moduleName, mod.default);
      }
  }
} satisfies Theme
