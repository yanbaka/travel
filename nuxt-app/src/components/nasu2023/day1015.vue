<script setup>
const timelines = ref([
  {
    content: "08:52 税務署前バス",
    memo: "",
    url: "",
  },
  {
    content: "09:35 大森駅発電車",
    memo: "",
    url: "",
  },
  {
    content: "10:12 東京駅新幹線発",
    memo: "",
    url: "",
  },
  {
    content: "昼食",
    memo: "お食事処 平成",
    url: "https://goo.gl/maps/jhJwLRRijshcahoFA",
  },
  {
    content: "那須高原レンタカー",
    memo: "",
    url: "https://nasukogen-rentacar.com/",
  },
  {
    content: "13時くらい 那須高原 南ヶ丘牧場",
    memo: "",
    url: "https://goo.gl/maps/xayj5UEDjWCZke8X7",
  },
  {
    content: "15:00 ホテルへ",
    memo: "",
    url: "",
  },
])
</script>
<template>
  <div>
    <timeline :dating="'10/15（日）'" :timelines="timelines" />
  </div>
</template>
