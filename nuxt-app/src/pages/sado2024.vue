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
        { name: '長三郎', url: 'https://maps.app.goo.gl/Cy5F1EHHngt9TMPb7' },
        { name: '小川のひまわり園🌻', url: 'https://maps.app.goo.gl/htkRgfEmtW9EZTeE6' },
        { name: '喜昇堂パン工房', url: 'https://maps.app.goo.gl/9pAkgd4mZ2wUmQNs9' },
        { name: '食事処ひぐち・樋口食堂', url: 'https://maps.app.goo.gl/oN3mKCqJP7h1PtqJ9' },
        { name: '椎崎温泉', url: 'https://maps.app.goo.gl/Gobi6U1cZbJvDNeg9' },
        { name: '無名異焼', url: '' },
    ]
    const gift = [
        { name: 'しゅうや',  },
        { name: 'だいきゆうだい',  },
        { name: 'はやと',  },
        { name: '剣🥎',  },
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
    <hr />
    <Checklist title="おみやげ" :items="gift" />
  </div>
</template>