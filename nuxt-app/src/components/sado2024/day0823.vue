<script setup>
const timelines = ref([
  {
    content: "11:15 佐渡汽船発（12:22着）",
    memo: "",
    url: "",
  },
  {
    content: "13:23 新潟発新幹線（15:28着）",
    memo: "",
    url: "",
  },
])
</script>
<template>
  <div>
    <timeline :dating="'8/23（金）'" :timelines="timelines" />
  </div>
</template>
