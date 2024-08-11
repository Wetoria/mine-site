import { defineConfig } from 'vitepress'
import zh from './configs/zh';
import en from './configs/en';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Wetoria",
  description: "👋 Hi there, I am Vip. I'm using siyuan-note to log my LifeLog and as my secondary brain.",
  appearance: 'dark',
  cleanUrls: true,

  themeConfig: {
    outline: 'deep',

    nav: [
      { text: 'Home', link: '/zh/' },
      { text: 'About Me', link: '/zh/about/' },
    ],

    socialLinks: [
      { icon: 'mastodon', link: 'https://c7.io/@Wetoria' },
      { icon: 'github', link: 'https://github.com/Wetoria' },
      {
        icon: {
          svg: '<svg t="1723280964706" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8523" width="16" height="16"><path d="M977.2 208.2c33.4 36.2 48.8 79.4 46.6 131.4v404.8c-0.8 52.8-18.4 96.2-53 130.2-34.4 34-78.2 51.8-131 53.4H184.04c-52.9-1.6-96.42-19.6-130.56-54.4C19.364 838.8 1.534 793 0 736.4V339.6c1.534-52 19.364-95.2 53.48-131.4C87.62 175.5 131.14 157.54 184.04 156h58.76L192.1 104.38c-11.5-11.46-17.26-26-17.26-43.58 0-17.6 5.76-32.12 17.26-43.594C203.6 5.736 218.2 0 235.8 0s32.2 5.736 43.8 17.206L426.2 156h176l149-138.794C763.4 5.736 778.4 0 796 0c17.6 0 32.2 5.736 43.8 17.206 11.4 11.474 17.2 25.994 17.2 43.594 0 17.58-5.8 32.12-17.2 43.58L789.2 156h58.6c52.8 1.54 96 19.5 129.4 52.2z m-77.6 139.4c-0.8-19.2-7.4-34.8-21.4-47-10.4-12.2-28-18.8-45.4-19.6H192.1c-19.18 0.8-34.9 7.4-47.16 19.6-12.28 12.2-18.8 27.8-19.56 47v388.8c0 18.4 6.52 34 19.56 47s28.76 19.6 47.16 19.6H832.8c18.4 0 34-6.6 46.6-19.6 12.6-13 19.4-28.6 20.2-47V347.6z m-528.6 85.4c12.6 12.6 19.4 28.2 20.2 46.4V546c-0.8 18.4-7.4 33.8-19.6 46.4-12.4 12.6-28 19-47.2 19-19.2 0-35-6.4-47.2-19-12.2-12.6-18.8-28-19.6-46.4v-66.6c0.8-18.2 7.6-33.8 20.2-46.4 12.6-12.6 26.4-19.2 46.6-20 18.4 0.8 34 7.4 46.6 20z m383 0c12.6 12.6 19.4 28.2 20.2 46.4V546c-0.8 18.4-7.4 33.8-19.6 46.4-12.2 12.6-28 19-47.2 19-19.2 0-34.8-6.4-47.2-19-14-12.6-18.8-28-19.4-46.4v-66.6c0.6-18.2 7.4-33.8 20-46.4 12.6-12.6 28.2-19.2 46.6-20 18.4 0.8 34 7.4 46.6 20z" p-id="8524"></path></svg>',
        },
        link: "https://space.bilibili.com/1905493",
      },
      {
        icon: {
          svg: '<svg t="1723281454804" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16739" width="16" height="16"><path d="M0 511.425C0 229.46 229.407 0 511.436 0c281.976 0 511.425 229.46 511.425 511.425 0 281.987-229.45 511.441-511.425 511.441C229.407 1022.866 0 793.406 0 511.431z m410.525 33.228h122.164c0-28.688-13.547-45.495-13.547-45.495H413.127c2.518-51.968 4.775-118.669 5.58-143.443h100.848s-0.549-42.627-11.766-42.627H330.522s10.674-55.74 24.895-80.342c0 0-52.924-2.858-70.985 67.636-18.056 70.494-45.14 113.12-48.013 120.905-2.869 7.785 15.595 3.689 23.39 0 7.8-3.688 43.086-16.394 53.342-65.572h54.815c0.737 31.164 2.91 126.683 2.226 143.443H257.353c-16.002 11.473-21.337 45.495-21.337 45.495h128.972c-5.381 35.568-14.822 81.424-28.03 105.733-20.923 38.526-32.01 73.77-107.509 134.432 0 0-12.309 9.017 25.85 5.736 38.16-3.276 74.272-13.113 99.303-63.112 13.009-25.997 26.467-58.974 36.963-92.42l-0.037 0.124 106.277 122.212s13.95-32.784 3.694-68.854l-78.786-88.116-26.665 19.701-0.032 0.1c7.409-25.945 12.732-51.587 14.389-73.9l0.12-1.636z m148.02-244.694v424.678h44.659l18.29 51.121 77.402-51.121h97.546V299.959H558.55z m191.253 378.514H699.12l-63.216 41.848-14.937-41.848H605.19V346.15h144.609v332.314z" p-id="16740"></path></svg>',
        },
        link: "https://www.zhihu.com/people/wetoria",
      },
      { icon: 'twitter', link: 'https://twitter.com/Wetoriav' },
    ]
  },

  locales: {
    zh: zh.localeConfig,
    en: en.localeConfig,
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
