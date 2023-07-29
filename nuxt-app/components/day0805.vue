<script setup>
const timelines = ref([
  {
    content: "相川のおじさんの船で釣り体験",
    memo: "",
    url: "",
  },
  {
    content: "11:15 佐渡汽船発",
    memo: "",
    url: "",
  },
  {
    content: "13:23 新潟発新幹線",
    memo: "",
    url: "",
  },
])
</script>
<template>
  <div>
    <timeline :dating="'8/5（土）'" :timelines="timelines" />
  </div>
</template>
