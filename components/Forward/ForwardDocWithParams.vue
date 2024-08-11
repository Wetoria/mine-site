<script setup>
import { useData } from "vitepress";
import { ref, onMounted } from "vue";

import { data as posts } from "./posts.data.ts";

const { params } = useData();

const targetPost = ref(posts.find((post) => post.url.replace(".html", "").replace(/^\/contents/, '') === params.value.filePath.replace(".md", "").replace(/^\/articles/, '')) || {});

onMounted(() => {
  document.title = `Wetoria - ${params.value.title}`
})
</script>

<template>
    <Forward-Doc
        :member="$params.member"
    >
        <div v-html="targetPost.html" />
    </Forward-Doc>
</template>
