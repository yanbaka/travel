<script setup>
const timelines = ref([
  {
    content: "11:30 佐渡汽船",
    memo: "おみやげ",
    url: "",
  },
  {
    content: "12:00 PRUM",
    memo: "往訪",
    url: "https://maps.app.goo.gl/z3foUJMu3p4Hz9V28",
  },
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
