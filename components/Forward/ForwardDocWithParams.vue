<script setup>
import { useData } from "vitepress";
import { ref } from "vue";

import { data as posts } from "./posts.data.ts";

const { params } = useData();

const targetPost = ref(posts.find((post) => post.url.replace(".html", "") === params.value.filePath.replace(".md", "")) || {});

</script>

<template>
    <Forward-Doc
        :member="$params.member"
    >
        <div v-html="targetPost.html" />
    </Forward-Doc>
</template>
