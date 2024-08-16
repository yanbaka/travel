<script setup>
const timelines = ref([
  {
    content: "ボヌール",
    memo: "昼食",
    url: "https://tabelog.com/niigata/A1501/A150103/15015091/",
  },
  {
    content: "プール",
    memo: "",
    url: "",
  },
  {
    content: "弁慶",
    memo: "夕食",
    url: "https://tabelog.com/niigata/A1501/A150103/15010290/",
  },
])
</script>
<template>
  <div>
    <timeline :dating="'8/19（月）'" :timelines="timelines" />
  </div>
</template>
