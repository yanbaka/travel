<script setup>
    const timelines = ref([
  {
    content: "二つ亀海水浴場",
    memo: "",
    url: "",
  },
  {
    content: "昼食",
    memo: "大野亀ロッジ",
    url: "https://goo.gl/maps/fSAi4sfdKAMkrbJt8",
  },
  {
    content: "たらい船？",
    memo: "",
    url: "",
  },
  {
    content: "宿根木",
    memo: "茶房 やました",
    url: "https://goo.gl/maps/5R5A97wWS5sHznQe9",
  },
  {
    content: "畑野の温泉",
    memo: "",
    url: "https://goo.gl/maps/hPDrAP91JuNuJyjg9",
  },
])
</script>
<template>
<div>
    <h2>8/3（木）</h2>
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