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
        { name: '薬（目薬、塗り薬）💊' },
        { name: '喘息の機械と薬' },
        { name: 'Suica' },
        { name: '子供の歯ブラシ🪥' },
        { name: 'グローブ、ボール' },
        { name: 'UNO' },
        { name: '保険証' },
        { name: 'ビデオカメラ' },
        { name: 'ビデオカメラ充電' },
        { name: 'ポケットwifi' },
        { name: '犬の抱っこ紐🐕' },
        { name: '地球儀のビーチボール🏖️' },
        { name: '舌下の薬💊' },
    ]
    const link = [
        { name: '金井運動公園プール🏊‍♂️', url: 'https://maps.app.goo.gl/Z5mVFn2afW9nfwK66' },
        { name: 'ボヌール（パフェ）', url: 'https://maps.app.goo.gl/cPazh2TFdpTiavWq8' },
        { name: '長三郎', url: 'https://maps.app.goo.gl/Cy5F1EHHngt9TMPb7' },
        { name: 'とんかつ中堀🐖', url: 'https://maps.app.goo.gl/ghQf5cWL5JfdbJ298' },
        { name: '大野亀ロッジ', url: 'https://maps.app.goo.gl/gQonSzf3Aq5hi1Qh6' },
        { name: '喜昇堂パン工房', url: 'https://maps.app.goo.gl/9pAkgd4mZ2wUmQNs9' },
        { name: '椎崎温泉', url: 'https://maps.app.goo.gl/Gobi6U1cZbJvDNeg9' },
        { name: '古民家空間 京町亭', url: 'https://maps.app.goo.gl/56ajezuvzqjQAveX9' },
        { name: '金福', url: 'https://maps.app.goo.gl/V7UJpdxken1RwL6B7'},
        { name: '森のハイジカレー', url: ''},
    ]
    const gift = [
        { name: 'だいきゆうだい',  },
        { name: 'はやと',  },
        { name: '剣🥎',  },
        { name: '会社',  },
        { name: '遠藤家',  },
        { name: 'えん君',  },
    ]
</script>
<template>
  <div>
    <Sado2026Day0727 />
    <hr />
    <Sado2026Day0728 />
    <hr />
    <Sado2026Day0729 />
    <hr />
    <Sado2026Day0730 />
    <hr />
    <Sado2026Day0731 />
    <hr />
    <Sado2026Day0801 />
    <hr />
    <Checklist title="もちもの" :items="baggage" />
    <hr />
    <Links title="行きたい場所" :items="link" />
    <hr />
    <Checklist title="おみやげ" :items="gift" />
  </div>
</template>
