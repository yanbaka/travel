<script setup>
const timelines = ref([
  {
    content: "弁慶",
    memo: "昼食",
    url: "",
  },
  {
    content: "焼肉",
    memo: "",
    url: "",
  },
])
</script>
<template>
  <div>
    <timeline :dating="'8/21（木）'" :timelines="timelines" />
  </div>
</template>
