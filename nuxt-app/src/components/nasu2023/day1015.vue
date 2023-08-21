<script setup>
const timelines = ref([
  {
    content: "07:12 税務署前バス",
    memo: "",
    url: "",
  },
  {
    content: "10: 新幹線",
    memo: "",
    url: "",
  },
  {
    content: "昼食",
    memo: "",
    url: "",
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
