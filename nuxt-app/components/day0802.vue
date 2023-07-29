<script setup>
    const timelines = ref([
  {
    content: "朝食",
    memo: "実家？",
    url: "",
  },
  {
    content: "ひまわり畑",
    memo: "",
    url: "https://goo.gl/maps/AXPXJQxcP1bTHhGh9",
  },
  {
    content: "達者の海水浴場",
    memo: "",
    url: "",
  },
  {
    content: "昼食",
    memo: "",
    url: "",
  },
  {
    content: "キャッチボール",
    memo: "河原田グラウンド",
    url: "",
  },
  {
    content: "夕食",
    memo: "「弁慶」か「まるいし」",
    url: "",
  },
  {
    content: "花火",
    memo: "",
    url: "",
  },
])
</script>
<template>
<div>
    <h2>8/2（水）</h2>
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