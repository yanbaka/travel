<script setup>
const timelines = ref([
  {
    content: "06:46 / 07:06 税務署前バス",
    memo: "07:00 / 07:20 蒲田駅着",
    url: "",
  },
  {
    content: "07:41 大森駅発電車",
    memo: "08:01 東京駅着",
    url: "",
  },
  {
    content: "08:40 東京駅発新幹線",
    memo: "09:44 越後湯沢駅着",
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
