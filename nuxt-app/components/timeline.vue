<script setup>
const props = defineProps({ dating: "", timelines: [] })
</script>
<template>
  <div>
    <h2>{{ props.dating }}</h2>
    <table class="table">
      <thead>
        <tr>
          <th>予定</th>
          <th>メモ</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(timeline, i) in timelines" :key="i">
          <td>{{ timeline.content }}</td>
          <td>{{ timeline.memo }}</td>
          <th>
            <nuxt-link :to="timeline.url" target="_blank">{{ timeline.url }}</nuxt-link>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scope>
table {
  width: 100%;
  table-layout: fixed;
}
.table th,
.table td {
  padding: 8px;
  border: 1px solid #000;
  word-wrap: break-word;
}
</style>
