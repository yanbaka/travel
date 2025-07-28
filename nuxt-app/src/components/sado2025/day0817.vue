<script setup>
const timelines = ref([
  {
    content: "09:13 税務署前バス（09:33着）",
    memo: "",
    url: "",
  },
  {
    content: "09:40 大森駅発（09:59着）",
    memo: " ",
    url: "",
  },
  {
    content: "8:22 東京駅新幹線発（10:21着）",
    memo: "6号車 3番A席、6号車 3番B席",
    url: "",
  },
  {
    content: "11:30 新潟佐渡汽船発（12:37着）",
    memo: "受付番号: 502121E",
    url: "",
  },
])
</script>
<template>
  <div>
    <timeline :dating="'8/17（日）'" :timelines="timelines" />
  </div>
</template>
