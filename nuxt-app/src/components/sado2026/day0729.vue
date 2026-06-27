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
    <timeline :dating="'7/29（火）'" :timelines="timelines" />
  </div>
</template>
