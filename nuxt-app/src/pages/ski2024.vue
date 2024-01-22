<script setup>
    const confirm = [
        { name: 'チェックイン前（チェックアウト後）も送迎バス乗れるのか' },
        { name: 'トスラブ湯沢でリフト券買えるか。または割引券あるのか' },
        { name: 'エステ予約（利用日の2ヶ月前の20日から申し込み可）' },
    ]
    const baggage = [
        { name: '浮き輪' },
        { name: '水着👙' },
        { name: 'ゴーグル🥽' },
        { name: '水泳帽🏊‍♂️' },
        { name: 'パジャマ' },
        { name: '大人スキーウェア一式⛷' },
        { name: 'バスタオル' },
        { name: 'パソコン💻' },
        { name: 'パソコン充電器' },
        { name: '携帯充電器' },
        { name: 'ヘアアイロン' },
        { name: '腹巻' },
        { name: '薬💊' },
        { name: 'Suica' },
        { name: '子供の歯ブラシ🪥' },
    ]
    const link = [
        { name: 'トスラブ湯沢バス時刻表', url: 'https://www.its-kenpo.or.jp/documents/shisetsu/hoyou/chokuei/toslove_yuzawa/bus20231216.pdf' },
        { name: 'トスラブ湯沢レンタルスキー料金表', url: 'https://www.its-kenpo.or.jp/documents/shisetsu/hoyou/chokuei/toslove_yuzawa/rentalsukiing_ryokinhyo.pdf' },
    ]
</script>
<template>
  <div>
    <h2>宿泊場所</h2>
    <nuxt-link to="https://www.its-kenpo.or.jp/shisetsu/hoyou/chokuei/toslove_yuzawa/index.html" target="_blank">トスラブ湯沢</nuxt-link>
    <hr />
    <Ski2024Day0326 />
    <hr />
    <Ski2024Day0327 />
    <hr />
    <Checklist title="確認" :items="confirm" />
    <hr />
    <Checklist title="もちもの" :items="baggage" />
    <hr />
    <Links title="リンク" :items="link" />
  </div>
</template>