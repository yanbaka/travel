<script setup>
    const timelines = ref([
  {
    content: "相川のおじさんの船で釣り体験",
    memo: "",
    url: "",
  },
  {
    content: "11:15 佐渡汽船発",
    memo: "",
    url: "",
  },
  {
    content: "13:23 新潟発新幹線",
    memo: "",
    url: "",
  },
])
</script>
<template>
<div>
    <h2>8/5（土）</h2>
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