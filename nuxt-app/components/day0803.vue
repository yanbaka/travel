<script setup>
    const timelines = ref([
  {
    time: "",
    content: "二つ亀海水浴場",
    memo: "",
  },
  {
    time: "",
    content: "昼食（大野亀ロッジ）",
    memo: "https://goo.gl/maps/fSAi4sfdKAMkrbJt8",
  },
  {
    time: "",
    content: "たらい船？",
    memo: "",
  },
  {
    time: "",
    content: "宿根木",
    memo: "古民家カフェ",
  },
  {
    time: "",
    content: "畑野の温泉",
    memo: "https://goo.gl/maps/hPDrAP91JuNuJyjg9",
  },
])
</script>
<template>
<div>
    <h2>8/3（木）</h2>
    <table class="table">
      <thead>
        <tr>
            <th>時間</th>
            <th>予定</th>
            <th>メモ</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(timeline, i) in timelines" :key="i" >
          <th>{{timeline.time}}</th>
          <td>{{timeline.content}}</td>
          <td>{{timeline.memo}}</td>
        </tr>
      </tbody>
    </table>

</div>
</template>
<style scoped>
    .table th, .table td {
        padding: 8px;
        border: 1px solid #000;
    }
</style>