<script setup>
const timelines = ref([
  {
    content: "XX:XX 税務署前バス",
    memo: "",
    url: "",
  },
  {
    content: "XX:XX 大森駅発電車",
    memo: "",
    url: "",
  },
  {
    content: "XX:XX 東京駅発新幹線",
    memo: "",
    url: "",
  },
  {
    content: "10:15 越後湯沢駅発送迎バス",
    memo: "10:40 トスラブ湯沢着",
    url: "",
  },
  {
    content: "12:15 トスラブ湯沢発送迎バス",
    memo: "12:25 中里スノーリゾート着",
    url: "https://www.yuzawa-nakazato.com/winter/",
  },
  {
    content: "16:20 中里スノーリゾート発送迎バス",
    memo: "16:30 トスラブ湯沢着",
    url: "",
  },
])
</script>
<template>
  <div>
    <timeline :dating="'2024/03/26（火）'" :timelines="timelines" />
  </div>
</template>
