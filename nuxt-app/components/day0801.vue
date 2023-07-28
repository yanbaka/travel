<script setup>
    const timelines = ref([
  {
    content: "08:24 東京駅新幹線発",
    memo: "朝ごはんは新幹線で",
    url: "",
  },
  {
    content: "11:30 新潟佐渡汽船発",
    memo: "",
    url: "",
  },
  {
    content: "関口家へ",
    memo: "",
    url: "",
  },
  {
    content: "昼食",
    memo: 'とんかつ中堀',
    url: "https://goo.gl/maps/SvNtLTm28pf6im6B6",
  },
  {
    content: "太陽堂に陸人のグローブ買いに行く",
    memo: "",
    url: "",
  },
  {
    content: "じいじとキャッチボール",
    memo: "河原田のグラウンドで",
    url: "",
  },
  {
    content: "夕食",
    memo: "",
    url: "",
  },
])
</script>
<template>
<div>
    <h2>8/1（火）</h2>
    <table class="table">
      <thead>
        <tr>
            <th>予定</th>
            <th>メモ</th>
            <th>URL</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(timeline, i) in timelines" :key="i" >
          <td>{{timeline.content}}</td>
          <td>{{timeline.memo}}</td>
          <th><nuxt-link :to="timeline.url" target="_blank">{{timeline.url}}</nuxt-link></th>
        </tr>
      </tbody>
    </table>

</div>
</template>
