<script setup>
const timelines = ref([
  {
    content: "マリンスパあたみ",
    memo: "",
    url: "https://www.marinespa.com/food/",
  },
])
</script>
<template>
  <div>
    <timeline :dating="'08/24（木）'" :timelines="timelines" />
  </div>
</template>
