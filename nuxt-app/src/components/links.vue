<script setup>
const props = defineProps({ title: '', items: [] })
</script>
<template>
    <div>
        <h2>{{title}}</h2>
        <ul>
            <li v-for="(item, i) in items" :key="i">
                <label>
                    <a :href="item.url" target="_blank">
                        {{item.name}}
                    </a>
                </label>
            </li>
        </ul>
    </div>
</template>
<style scoped>
    ul {
        list-style: none;
        padding-left: 0;
        li {
            label {
                &::before {
                    content: "・";
                }
            }
        }
    }
</style>