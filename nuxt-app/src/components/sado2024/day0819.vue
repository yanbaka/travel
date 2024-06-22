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
    <timeline :dating="'8/19（月）'" :timelines="timelines" />
  </div>
</template>
