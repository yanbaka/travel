<script setup>
const timelines = ref([
  {
    content: "09:10 トスラブ湯沢発送迎バス",
    memo: "09:20 中里スノーリゾート着",
    url: "",
  },
  {
    content: "10:00〜12:00 陸人スキーレッスン",
    memo: "中里スキー学校",
    url: "https://www.yuzawa-nakazato.com/winter/school/nakazato/",
  },
  {
    content: "16:20 中里スノーリゾート発送迎バス",
    memo: "16:30 トスラブ湯沢着",
    url: "",
  },
  {
    content: "17:00 トスラブ湯沢発送迎バス",
    memo: "17:25 越後湯沢駅着",
    url: "",
  },
  {
    content: "18:05 越後湯沢発新幹線",
    memo: "19:24 東京駅着",
    url: "",
  },
])
</script>
<template>
  <div>
    <timeline :dating="'2024/03/27（水）'" :timelines="timelines" />
  </div>
</template>
