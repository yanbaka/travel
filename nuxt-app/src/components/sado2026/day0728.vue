<script setup>
const timelines = ref([
  {
    content: "",
    memo: "森のハイジカレー",
    url: "",
  },
])
</script>
<template>
  <div>
    <timeline :dating="'7/28（月）'" :timelines="timelines" />
  </div>
</template>
