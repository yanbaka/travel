<script setup>
    const baggage = [
        { name: '浮き輪' },
        { name: '水着👙' },
        { name: 'ゴーグル🥽' },
        { name: '水泳帽' },
        { name: 'ビーチサンダル🩴' },
        { name: 'パジャマ' },
        { name: 'バスタオル' },
        { name: 'パソコン💻' },
        { name: 'パソコン充電器' },
        { name: '携帯充電器' },
        { name: 'ヘアアイロン' },
        { name: '腹巻' },
        { name: '薬💊' },
        { name: 'Suica' },
        { name: 'IKEAのバッグ' },
        { name: '子供の歯ブラシ🪥' },
    ]
</script>
<template>
  <div>
    <h2>宿泊場所</h2>
    <nuxt-link to="https://www.itoenhotel.com/hoteloonoya/" target="_blank">ホテル大野屋</nuxt-link>
    <hr />
    <Atami2023Day0823 />
    <hr />
    <Atami2023Day0824 />
    <hr />
    <Atami2023Day0825 />
    <hr />
    <Baggage :items="baggage" />
  </div>
</template>