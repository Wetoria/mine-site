<template>
  <div class="VLastupdatedContainer" v-if="params">
    <p class="lastupdated">Last updated: {{ updated.format('YYYY-MM-DD HH:mm') }}</p>
  </div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress';
import dayjs from 'dayjs';
import { ref } from 'vue';

const { params } = useData();
const updated = ref()
if (params?.value?.lastModified) {
  updated.value = dayjs(params.value?.lastModified)
}
</script>

<style lang="scss" scoped>
.VLastupdatedContainer {
  padding: 12px 0px;

  .lastupdated {
    line-height: 24px;
    font-size: 14px;
    font-weight: 500;
    color: var(--vp-c-text-2);
  }
}
</style>
