<script setup>
    const list = [
        { title: '佐渡2023夏', path: '/summer2023' },
        { title: '熱海2023', path: '/atami2023' },
        { title: '那須2023', path: '/nasu2023' },
        { title: '湯沢スキー2024', path: '/ski2024' },
        { title: '佐渡2024夏', path: '/sado2024' },
    ]
</script>
<template>
    <ul>
        <li v-for="(item, i) in list" :key=i>
            <nuxt-link :to="item.path" target="_blank">{{item.title}}</nuxt-link>
        </li>
    </ul>
</template>