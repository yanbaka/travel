<script setup>
const timelines = ref([
  {
    content: "8:22 東京駅新幹線発（10:21着）",
    memo: "8号車　9番D席、E席",
    url: "",
  },
  {
    content: "11:30 新潟佐渡汽船発（12:37着）",
    memo: "受付番号: 502141E 1階9番L席、1階9番M席",
    url: "",
  },
  {
    content: "長三郎",
    memo: "昼食",
    url: "",
  },
  {
    content: "焼き鳥やじま",
    memo: "夕食",
    url: "",
  },
])
</script>
<template>
  <div>
    <timeline :dating="'8/20（水）'" :timelines="timelines" />
  </div>
</template>
