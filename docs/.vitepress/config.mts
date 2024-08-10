import { defineConfig } from 'vitepress'
import zh from './configs/zh';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Wetoria",
  description: "👋 Hi there, I am Vip.",
  appearance: 'dark',
  cleanUrls: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'mastodon', link: 'https://c7.io/@Wetoria' },
      { icon: 'github', link: 'https://github.com/Wetoria' },
      { icon: 'twitter', link: 'https://twitter.com/Wetoriav' },
    ]
  },

  locales: {
    root: zh.localeConfig,
    en: {
      label: 'English',
      lang: 'en'
    },
  },
  vite: {
    server: {
      host: '0.0.0.0',
      port: 5174,
    },
    build: {
      rollupOptions: {
          output: {
              assetFileNames: (assetInfo) => {
                  // 检查文件的扩展名，避免对图片文件生成哈希
                  if (/\.(?:png|jpg|jpeg|gif|svg)$/.test(assetInfo.name as string)) {
                      return "assets/[name][extname]"; // 图片文件不包含哈希
                  }
                  return "assets/[name]-[hash][extname]"; // 其他文件使用默认命名方式
              },
          },
      },
    },
  },
})
