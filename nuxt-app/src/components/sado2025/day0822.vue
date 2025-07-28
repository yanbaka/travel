<script setup>
const timelines = ref([
  {
    content: "ボヌール",
    memo: "昼食",
    url: "",
  },
  {
    content: "14:35 佐渡汽船発（15:42着）",
    memo: "",
    url: "",
  },
  {
    content: "17:04 新潟発新幹線（19:00着）",
    memo: "10号車　9番D席、E席、10番D席、E席",
    url: "",
  },
])
</script>
<template>
  <div>
    <timeline :dating="'8/22（金）'" :timelines="timelines" />
  </div>
</template>
