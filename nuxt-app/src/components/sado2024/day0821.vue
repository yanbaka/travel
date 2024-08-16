<script setup>
const timelines = ref([
  {
    content: "金山",
    memo: "",
    url: "",
  },
  {
    content: "西三川",
    memo: "砂金取り",
    url: "",
  },
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
