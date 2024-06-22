<script setup>
const timelines = ref([
  {
    content: "",
    memo: "",
    url: "",
  },
])
</script>
<template>
  <div>
    <timeline :dating="'8/20（火）'" :timelines="timelines" />
  </div>
</template>
