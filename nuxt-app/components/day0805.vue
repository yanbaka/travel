<script setup>
    const timelines = ref([
  {
    time: "",
    content: "相川のおじさんの船で釣り体験",
    memo: "",
  },
  {
    time: "11:15",
    content: "佐渡汽船発",
    memo: "",
  },
  {
    time: "13:23",
    content: "新潟発新幹線",
    memo: "",
  },
])
</script>
<template>
<div>
    <h2>8/5（土）</h2>
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