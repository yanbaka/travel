<script setup>
const timelines = ref([
  {
    content: "朝食",
    memo: "実家のお店で",
    url: "",
  },
  {
    content: "タコさん公園",
    memo: "プールあり",
    url: "https://goo.gl/maps/drAMzX8uXCJjpWBCA",
  },
  {
    content: "宿根木",
    memo: "茶房 やました",
    url: "https://goo.gl/maps/5R5A97wWS5sHznQe9",
  },
  {
    content: "たらい船",
    memo: "",
    url: "",
  },
  {
    content: "夕食",
    memo: "「弁慶」か「まるいし」",
    url: "",
  },
  {
    content: "相川に宿泊",
    memo: "",
    url: "",
  },
])
</script>
<template>
  <div>
    <timeline :dating="'8/4（金）'" :timelines="timelines" />
  </div>
</template>
