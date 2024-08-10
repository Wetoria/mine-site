import { postsSidebarWithLocale } from "../../../components/Forward/DocData";

import type { DefaultTheme, LocaleSpecificConfig } from "vitepress";

// REF https://vitepress.dev/reference/default-theme-config
export const themeConfig: DefaultTheme.Config = {
    // REF https://vitepress.dev/reference/default-theme-config#docfooter
    docFooter: {
      prev: "Prev",
      next: "Next",
    },

    outlineTitle: "Outline",

    // REF https://vitepress.dev/reference/default-theme-config#lastupdatedtext
    lastUpdatedText: "Last updated",

    // REF https://vitepress.dev/reference/default-theme-config#darkmodeswitchlabel
    darkModeSwitchLabel: "Dark",

    // REF https://vitepress.dev/reference/default-theme-config#sidebarmenulabel
    sidebarMenuLabel: "List",

    // REF https://vitepress.dev/reference/default-theme-config#langmenulabel
    langMenuLabel: "Languages",

    // nav: [
    // ],

    sidebar: {
      "/en/articles/": [
        ...postsSidebarWithLocale.en,
      ],
    },
};

export const localeConfig: LocaleSpecificConfig<DefaultTheme.Config> & { label: string; link?: string } = {
    label: "English",
    lang: "en", // 设置 `<html>` 标签 lang 属性
    dir: "/en/",

    themeConfig,
};

export default {
  localeConfig,
};
