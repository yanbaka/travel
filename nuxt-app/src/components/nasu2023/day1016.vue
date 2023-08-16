<script setup>
const timelines = ref([
  {
    content: "那須ハイランドパーク",
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
