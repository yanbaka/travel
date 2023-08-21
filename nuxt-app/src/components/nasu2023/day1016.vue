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
])
</script>
<template>
  <div>
    <timeline :dating="'10/16（月）'" :timelines="timelines" />
  </div>
</template>
