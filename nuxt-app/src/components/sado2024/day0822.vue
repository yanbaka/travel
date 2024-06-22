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
    <timeline :dating="'8/22（木）'" :timelines="timelines" />
  </div>
</template>
