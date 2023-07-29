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
    <h2>8/4（金）</h2>
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
