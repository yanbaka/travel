<script setup>
const timelines = ref([
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
    content: "XX:XX 越後湯沢発新幹線",
    memo: "",
    url: "",
  },
  {
    content: "XX:XX 東京駅着",
    memo: "",
    url: "",
  },
])
</script>
<template>
  <div>
    <timeline :dating="'2024/03/27（水）'" :timelines="timelines" />
  </div>
</template>
