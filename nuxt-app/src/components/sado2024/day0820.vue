<script setup>
const timelines = ref([
  {
    content: "大野亀食堂",
    memo: "昼食",
    url: "https://tabelog.com/niigata/A1501/A150103/15001198/",
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
    <timeline :dating="'8/20（火）'" :timelines="timelines" />
  </div>
</template>
