<script setup lang="ts">
import { onMounted, ref } from "vue";

const props = defineProps<{
    params?: any;
}>();

const docContainerRef = ref();
onMounted(() => {
    const doms = docContainerRef.value.querySelectorAll("[src]");

    doms.forEach((dom) => {
        const originSrc = dom.getAttribute("src") as string;

        const startsWithHttp = originSrc.startsWith('http')
        if (startsWithHttp) {
          return
        }

        const isDev = import.meta.env.DEV

        const assetsPath = isDev ? `${props.params.dir}/assets${originSrc.split("assets").pop()}` : `/assets${originSrc.split("assets").pop()}`
        dom.setAttribute("src", assetsPath);
    });
});
</script>

<template>
    <div
        ref="docContainerRef"
    >
        <slot />
    </div>
</template>

<style lang="scss" scoped>

</style>
