<script setup>
const timelines = ref([
  {
    content: "朝食",
    memo: "",
    url: "",
  },
  {
    content: "ひまわり畑",
    memo: "",
    url: "https://goo.gl/maps/AXPXJQxcP1bTHhGh9",
  },
  {
    content: "達者の海水浴場",
    memo: "",
    url: "",
  },
  {
    content: "昼食",
    memo: "フルーツ＆カフェさいとう",
    url: "https://goo.gl/maps/7Ydystf8jGJaYpXd7",
  },
  {
    content: "スカイライン",
    memo: "",
    url: "",
  },
  {
    content: "キャッチボール",
    memo: "河原田グラウンド",
    url: "",
  },
  {
    content: "夕食",
    memo: "焼きとりやじま",
    url: "https://goo.gl/maps/Y55krDymw1FVaXCn7",
  },
  {
    content: "花火",
    memo: "",
    url: "",
  },
])
</script>
<template>
  <div>
    <timeline :dating="'8/2（水）'" :timelines="timelines" />
  </div>
</template>
