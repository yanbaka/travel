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
    content: "10:15 東京駅新幹線発（12:17着）",
    memo: "9号車 12番A席、B席、C席",
    url: "",
  },
  {
    content: "12:55 新潟佐渡汽船発（14:02着）",
    memo: "受付番号: 401783D",
    url: "",
  },
  {
    content: "ソフトクリーム",
    memo: "",
    url: "",
  },
  {
    content: "プール下見",
    memo: "",
    url: "",
  },
  {
    content: "食堂",
    memo: "",
    url: "",
  },
  {
    content: "星空鑑賞",
    memo: "",
    url: "",
  },
  {
    content: "温泉",
    memo: "",
    url: "",
  },
])
</script>
<template>
  <div>
    <timeline :dating="'8/18（日）'" :timelines="timelines" />
  </div>
</template>
