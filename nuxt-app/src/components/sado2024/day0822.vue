<script setup>
const timelines = ref([
  {
    content: "焼き鳥",
    memo: "夕食",
    url: "https://tabelog.com/niigata/A1501/A150103/15010985/",
  },
])
</script>
<template>
  <div>
    <timeline :dating="'8/22（木）'" :timelines="timelines" />
  </div>
</template>
