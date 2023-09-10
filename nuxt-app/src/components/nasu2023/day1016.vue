<script setup>
const timelines = ref([
  {
    content: "那須とりっくあーとぴあ",
    memo: "行かないかも",
    url: "https://goo.gl/maps/LUzdFMrSKty3ksXX6",
  },
  {
    content: "14:00 那須ハイランドパーク",
    memo: "",
    url: "https://goo.gl/maps/JZyATm1QrpYGjCaw8",
  },
  {
    content: "18:03 那須塩原発新幹線",
    memo: "",
    url: "",
  },
  {
    content: "19:16 東京駅着",
    memo: "",
    url: "",
  },
])
</script>
<template>
  <div>
    <timeline :dating="'10/16（月）'" :timelines="timelines" />
  </div>
</template>
