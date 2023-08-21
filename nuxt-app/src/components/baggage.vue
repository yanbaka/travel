<script setup>
const props = defineProps({ items: [] })
</script>
<template>
    <div>
        <h2>もちもの</h2>
        <ul>
            <li v-for="(item, i) in items" :key="i">
                <label>
                    <input type="checkbox">
                    {{item.name}}
                </label>
            </li>
        </ul>
    </div>
</template>
<style scoped>
    ul {
        list-style: none;
        padding-left: 0;
    }
</style>