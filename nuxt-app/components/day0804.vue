<script setup>
    const timelines = ref([
  {
    content: "佐和田海水浴場",
    memo: "",
    url: "",
  },
  {
    content: "昼食",
    memo: "元郵便局にできたうどん屋",
    url: "https://goo.gl/maps/w15FBYmg3q8hB5Jv7",
  },
  {
    content: "スカイライン",
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
