<script setup>
    const baggage = [
        { name: '浮き輪' },
        { name: '水着👙' },
        { name: 'ゴーグル🥽' },
        { name: '水泳帽🏊‍♂️' },
        { name: 'パジャマ' },
        { name: 'バスタオル' },
        { name: 'パソコン💻' },
        { name: 'パソコン充電器' },
        { name: '携帯充電器' },
        { name: 'ヘアアイロン' },
        { name: '薬💊' },
        { name: 'Suica' },
        { name: '子供の歯ブラシ🪥' },
    ]
    const link = [
        { name: '金井運動公園プール🏊‍♂️', url: 'https://maps.app.goo.gl/Z5mVFn2afW9nfwK66' },
        { name: 'ボヌール（パフェ）', url: 'https://maps.app.goo.gl/cPazh2TFdpTiavWq8' },
        { name: 'とんかつ中堀🐖', url: 'https://maps.app.goo.gl/ghQf5cWL5JfdbJ298' },
        { name: '大野亀ロッジ', url: 'https://maps.app.goo.gl/gQonSzf3Aq5hi1Qh6' },
    ]
</script>
<template>
  <div>
    <Sado2024Day0818 />
    <hr />
    <Sado2024Day0819 />
    <hr />
    <Sado2024Day0820 />
    <hr />
    <Sado2024Day0821 />
    <hr />
    <Sado2024Day0822 />
    <hr />
    <Sado2024Day0823 />
    <hr />
    <Checklist title="もちもの" :items="baggage" />
    <hr />
    <Links title="行きたい場所" :items="link" />
  </div>
</template>