<script setup>
const timelines = ref([
  {
    content: "07:12 税務署前バス",
    memo: "",
    url: "",
  },
  {
    content: "07:40 大森駅発電車",
    memo: "",
    url: "",
  },
  {
    content: "08:24 東京駅新幹線発",
    memo: "朝ごはんは新幹線で",
    url: "",
  },
  {
    content: "11:30 新潟佐渡汽船発",
    memo: "受付番号: 382178D",
    url: "",
  },
  {
    content: "関口家へ",
    memo: "",
    url: "",
  },
  {
    content: "昼食",
    memo: "元郵便局にできたうどん屋",
    url: "https://goo.gl/maps/w15FBYmg3q8hB5Jv7",
  },
  {
    content: "太陽堂に陸人のグローブ買いに行く",
    memo: "",
    url: "",
  },
  {
    content: "喜昇堂",
    memo: "パンを買っておく",
    url: "https://goo.gl/maps/QHPj3416GBinz3Ro7",
  },
  {
    content: "じいじとキャッチボール",
    memo: "河原田のグラウンドで",
    url: "",
  },
  {
    content: "夕食",
    memo: "焼きとりやじま",
    url: "https://goo.gl/maps/Y55krDymw1FVaXCn7",
  },
])
</script>
<template>
  <div>
    <timeline :dating="'8/1（火）'" :timelines="timelines" />
  </div>
</template>
