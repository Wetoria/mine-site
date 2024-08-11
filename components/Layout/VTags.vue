<template>
  <div class="tag_list">
    <span
      v-for="(tag, index) of tags"
      class="tag_item"
      :style="getTypeColor(tag?.type || index)"
    >
      {{ tag?.text || tag }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  tags: string[] | Array<{ text: string, type: keyof TagType}>
}>()

console.log('tags is ', props.tags, Object.keys(TagType))

const typeList = ref<Array<{
  backgroundColor: string
  color: string
}>>([
  {// 紫 0
    backgroundColor: `rgba(151, 98, 245, 0.31)`,
    color: `#a472fc`,
  },
  {// 蓝 1
    backgroundColor: `rgba(76, 136, 255, 0.28)`,
    color: `#70a0ff`,
  },
  {// 绿 2
    backgroundColor: `rgba(84, 194, 72, 0.22)`,
    color: `#6dd162`,
  },
  {// 黄 3
    backgroundColor: `rgba(245, 226, 49, 0.16)`,
    color: `#fcd456`,
  },
  {// 红 4
    backgroundColor: `rgba(240, 91, 86, 0.28)`,
    color: `#fa7873`,
  },
  {// 灰 5
    backgroundColor: `rgba(67, 67, 67, 0.4)`,
    color: `#a6a6a6`,
  },
])

const getTypeColor = (index: number) => {
  const isInType = typeof index === 'string' && index in TagType
  const list = typeList.value
  const colorConfig = isInType ? list[TagType[index]] : list[index % list.length]
  return colorConfig
}
</script>

<script lang="ts">
export enum TagType {
  purple = 0,
  blue = 1,
  green = 2,
  yellow = 3,
  red = 4,
  grey = 5
}
</script>

<style lang="scss" scoped>
.tag_list {
  display: flex;
  gap: var(--vip-gap);
  flex-wrap: wrap;

  .tag_item {
    padding: 0px var(--vip-gap);
    border-radius: 6px;
  }
}
</style>
