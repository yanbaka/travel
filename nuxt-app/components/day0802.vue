<script setup>
    const timelines = ref([
  {
    time: "",
    content: "朝食",
    memo: "",
  },
  {
    time: "",
    content: "ひまわり畑",
    memo: "https://goo.gl/maps/AXPXJQxcP1bTHhGh9",
  },
  {
    time: "",
    content: "達者の海水浴場",
    memo: "",
  },
  {
    time: "",
    content: "キャッチボール",
    memo: "河原田グラウンド",
  },
  {
    time: "",
    content: "夕食（お寿司）",
    memo: "「弁慶」か「まるいし」",
  },
  {
    time: "",
    content: "花火",
    memo: "",
  },
])
</script>
<template>
<div>
    <h2>8/2（水）</h2>
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