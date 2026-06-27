<script setup>
const timelines = ref([
  {
    content: "14:35 佐渡汽船発",
    memo: "ジェットフォイル 1階 12番\nE席・F席・G席・H席",
    url: "",
  },
  {
    content: "16:30 新潟発新幹線（18:40着）",
    memo: "",
    url: "",
  },
])
</script>
<template>
  <div>
    <timeline :dating="'8/1（土）'" :timelines="timelines" />
  </div>
</template>
