<script setup>
const timelines = ref([
  {
    content: "10:13 税務署前バス",
    memo: "",
    url: "",
  },
  {
    content: "10:35 大森駅",
    memo: "",
    url: "",
  },
  {
    content: "昼食",
    memo: "だるま",
    url: "https://goo.gl/maps/PHcn7PdZhbZieoNcA",
  },
])
</script>
<template>
  <div>
    <timeline :dating="'08/23（水）'" :timelines="timelines" />
  </div>
</template>
