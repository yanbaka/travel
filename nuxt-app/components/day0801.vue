<script setup>
    const timelines = ref([
  {
    time: "08:24",
    content: "東京駅新幹線発",
    memo: "朝ごはんは新幹線で",
  },
  {
    time: "11:30",
    content: "新潟佐渡汽船発",
    memo: "",
  },
  {
    time: "",
    content: "関口家へ",
    memo: "",
  },
  {
    time: "",
    content: "昼食（とんかつ中堀）",
    memo: 'https://goo.gl/maps/SvNtLTm28pf6im6B6',
  },
  {
    time: "",
    content: "太陽堂に陸人のグローブ買いに行く",
    memo: "",
  },
  {
    time: "",
    content: "じいじとキャッチボール",
    memo: "河原田のグラウンドで",
  },
  {
    time: "",
    content: "夕食",
    memo: "",
  },
])
</script>
<template>
<div>
    <h2>8/1（火）</h2>
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