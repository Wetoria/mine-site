// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

// @ts-expect-error 类型 “ImportMeta” 上不存在属性 “glob”
const modules = import.meta.glob("./../components/**/*.vue", { eager: true });

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
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
