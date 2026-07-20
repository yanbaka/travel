<script setup>
const timelines = ref([
  {
    content: "18時から、焼き鳥やじま",
    memo: "",
    url: "",
  },
])
</script>
<template>
  <div>
    <timeline :dating="'7/29（火）'" :timelines="timelines" />
  </div>
</template>
