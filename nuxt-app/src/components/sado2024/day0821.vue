<script setup>
const timelines = ref([
  {
    content: "まるいし",
    memo: "夕食",
    url: "https://tabelog.com/niigata/A1501/A150103/15000177/",
  },
])
</script>
<template>
  <div>
    <timeline :dating="'8/21（水）'" :timelines="timelines" />
  </div>
</template>
