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
    <timeline :dating="'08/25（金）'" :timelines="timelines" />
  </div>
</template>
