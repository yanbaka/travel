<script setup>
    const timelines = ref([
  {
    time: "",
    content: "佐和田海水浴場",
    memo: "",
  },
  {
    time: "",
    content: "昼食（元郵便局にできたうどん屋）",
    memo: "https://goo.gl/maps/w15FBYmg3q8hB5Jv7",
  },
  {
    time: "",
    content: "スカイライン",
    memo: "",
  },
  {
    time: "",
    content: "夕食（お寿司）",
    memo: "「弁慶」か「まるいし」",
  },
  {
    time: "",
    content: "相川に宿泊",
    memo: "",
  },
])
</script>
<template>
<div>
    <h2>8/4（金）</h2>
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