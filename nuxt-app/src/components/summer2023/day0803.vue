<script setup>
const timelines = ref([
  {
    content: "朝食",
    memo: "",
    url: "",
  },
  {
    content: "二つ亀海水浴場",
    memo: "",
    url: "",
  },
  {
    content: "昼食",
    memo: "大野亀ロッジ",
    url: "https://goo.gl/maps/fSAi4sfdKAMkrbJt8",
  },
  {
    content: "河原田で遊ぶ",
    memo: "",
    url: "",
  },
  {
    content: "夕食",
    memo: "実家でBBQ？",
    url: "",
  },
  {
    content: "畑野の温泉",
    memo: "",
    url: "https://goo.gl/maps/hPDrAP91JuNuJyjg9",
  },
])
</script>
<template>
  <div>
    <timeline :dating="'8/3（木）'" :timelines="timelines" />
  </div>
</template>
