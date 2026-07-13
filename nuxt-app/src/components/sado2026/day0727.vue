<script setup>
const timelines = ref([
  {
    content: "11:40 東京発新幹線（13:43着）",
    memo: "10号車　8番D席、E席、7番D席、E席",
    url: "",
  },
  {
    content: "14:40 新潟佐渡汽船発",
    memo: "ジェットフォイル 1階 1番\nE席・F席・G席・H席",
    url: "",
  },
])
</script>
<template>
  <div>
    <timeline :dating="'7/27（日）'" :timelines="timelines" />
  </div>
</template>
