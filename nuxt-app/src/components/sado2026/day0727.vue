<script setup>
const timelines = ref([
  {
    content: "10:00",
    memo: "注文番号　：#1272259\n申込日　：2026/06/27\n利用国・エリア　：日本国内\n出国日／利用開始日　：2026/07/27\n返却日　：2026/08/02\n受取予定場所　：スマホ修理工房 グランデュオ蒲田店\n返却予定場所　：スマホ修理工房 グランデュオ蒲田店\n料金　：¥2,102 JPY",
    url: "",
  },
  {
    content: "11:40 東京発新幹線（13:43着）",
    memo: "10号車　8番D席、E席、7番D席、E席",
    url: "",
  },
  {
    content: "14:40 新潟佐渡汽船発",
    memo: "ジェットフォイル 1階 1番\nE席・F席・G席・H席",
    url: "",
  },
])
</script>
<template>
  <div>
    <timeline :dating="'7/27（日）'" :timelines="timelines" />
  </div>
</template>
