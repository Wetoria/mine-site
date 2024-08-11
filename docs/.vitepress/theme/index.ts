// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import VLastupdated from '../../../components/Layout/VLastupdated.vue';
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';
import mediumZoom from 'medium-zoom';
import { onMounted, watch, nextTick } from 'vue';

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
  },
  setup() {
    // Get frontmatter and route
    const { frontmatter } = useData();
    const route = useRoute();

    const {
      VITE_giscus_repoId,
      VITE_giscus_categoryId,
    } = import.meta.env;

    // giscus配置
    giscusTalk(
      {
        repo: 'Wetoria/my-site',
        repoId: VITE_giscus_repoId,
        category: 'Announcements',
        categoryId: VITE_giscus_categoryId,
        mapping: 'pathname',
        inputPosition: 'top',
        lang: 'zh-CN',
      },
      {
        frontmatter, route
      },
      //默认值为true，表示已启用，此参数可以忽略；
      //如果为false，则表示未启用
      //您可以使用“comment:true”序言在页面上单独启用它
      true
    );

    // #region 图片缩放
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
    // #endregion 图片缩放
  },
} satisfies Theme
