export type Region = {
  code: string
  name: string
  area: (typeof areas)[number]
  kana: string
}

export const areas = [
  '全国',
  '北海道',
  '東北',
  '関東',
  '中部',
  '近畿',
  '中国',
  '四国',
  '九州・沖縄',
] as const

export const regions: Region[] = [
  {
    code: '00000',
    name: '全国',
    area: '全国',
    kana: 'ぜんこく',
  },
  {
    code: '01000',
    name: '北海道',
    area: '北海道',
    kana: 'ほっかいどう',
  },
  {
    code: '02000',
    name: '青森県',
    area: '東北',
    kana: 'あおもりけん',
  },
  {
    code: '03000',
    name: '岩手県',
    area: '東北',
    kana: 'いわてけん',
  },
  {
    code: '04000',
    name: '宮城県',
    area: '東北',
    kana: 'みやぎけん',
  },
  {
    code: '05000',
    name: '秋田県',
    area: '東北',
    kana: 'あきたけん',
  },
  {
    code: '06000',
    name: '山形県',
    area: '東北',
    kana: 'やまがたけん',
  },
  {
    code: '07000',
    name: '福島県',
    area: '東北',
    kana: 'ふくしまけん',
  },
  {
    code: '08000',
    name: '茨城県',
    area: '関東',
    kana: 'いばらきけん',
  },
  {
    code: '09000',
    name: '栃木県',
    area: '関東',
    kana: 'とちぎけん',
  },
  {
    code: '10000',
    name: '群馬県',
    area: '関東',
    kana: 'ぐんまけん',
  },
  {
    code: '11000',
    name: '埼玉県',
    area: '関東',
    kana: 'さいたまけん',
  },
  {
    code: '12000',
    name: '千葉県',
    area: '関東',
    kana: 'ちばけん',
  },
  {
    code: '13000',
    name: '東京都',
    area: '関東',
    kana: 'とうきょうと',
  },
  {
    code: '14000',
    name: '神奈川県',
    area: '関東',
    kana: 'かながわけん',
  },
  {
    code: '15000',
    name: '新潟県',
    area: '中部',
    kana: 'にいがたけん',
  },
  {
    code: '16000',
    name: '富山県',
    area: '中部',
    kana: 'とやまけん',
  },
  {
    code: '17000',
    name: '石川県',
    area: '中部',
    kana: 'いしかわけん',
  },
  {
    code: '18000',
    name: '福井県',
    area: '中部',
    kana: 'ふくいけん',
  },
  {
    code: '19000',
    name: '山梨県',
    area: '中部',
    kana: 'やまなしけん',
  },
  {
    code: '20000',
    name: '長野県',
    area: '中部',
    kana: 'ながのけん',
  },
  {
    code: '21000',
    name: '岐阜県',
    area: '中部',
    kana: 'ぎふけん',
  },
  {
    code: '22000',
    name: '静岡県',
    area: '中部',
    kana: 'しずおかけん',
  },
  {
    code: '23000',
    name: '愛知県',
    area: '中部',
    kana: 'あいちけん',
  },
  {
    code: '24000',
    name: '三重県',
    area: '近畿',
    kana: 'みえけん',
  },
  {
    code: '25000',
    name: '滋賀県',
    area: '近畿',
    kana: 'しがけん',
  },
  {
    code: '26000',
    name: '京都府',
    area: '近畿',
    kana: 'きょうとふ',
  },
  {
    code: '27000',
    name: '大阪府',
    area: '近畿',
    kana: 'おおさかふ',
  },
  {
    code: '28000',
    name: '兵庫県',
    area: '近畿',
    kana: 'ひょうごけん',
  },
  {
    code: '29000',
    name: '奈良県',
    area: '近畿',
    kana: 'ならけん',
  },
  {
    code: '30000',
    name: '和歌山県',
    area: '近畿',
    kana: 'わかやまけん',
  },
  {
    code: '31000',
    name: '鳥取県',
    area: '中国',
    kana: 'とっとりけん',
  },
  {
    code: '32000',
    name: '島根県',
    area: '中国',
    kana: 'しまねけん',
  },
  {
    code: '33000',
    name: '岡山県',
    area: '中国',
    kana: 'おかやまけん',
  },
  {
    code: '34000',
    name: '広島県',
    area: '中国',
    kana: 'ひろしまけん',
  },
  {
    code: '35000',
    name: '山口県',
    area: '中国',
    kana: 'やまぐちけん',
  },
  {
    code: '36000',
    name: '徳島県',
    area: '四国',
    kana: 'とくしまけん',
  },
  {
    code: '37000',
    name: '香川県',
    area: '四国',
    kana: 'かがわけん',
  },
  {
    code: '38000',
    name: '愛媛県',
    area: '四国',
    kana: 'えひめけん',
  },
  {
    code: '39000',
    name: '高知県',
    area: '四国',
    kana: 'こうちけん',
  },
  {
    code: '40000',
    name: '福岡県',
    area: '九州・沖縄',
    kana: 'ふくおかけん',
  },
  {
    code: '41000',
    name: '佐賀県',
    area: '九州・沖縄',
    kana: 'さがけん',
  },
  {
    code: '42000',
    name: '長崎県',
    area: '九州・沖縄',
    kana: 'ながさきけん',
  },
  {
    code: '43000',
    name: '熊本県',
    area: '九州・沖縄',
    kana: 'くまもとけん',
  },
  {
    code: '44000',
    name: '大分県',
    area: '九州・沖縄',
    kana: 'おおいたけん',
  },
  {
    code: '45000',
    name: '宮崎県',
    area: '九州・沖縄',
    kana: 'みやざきけん',
  },
  {
    code: '46000',
    name: '鹿児島県',
    area: '九州・沖縄',
    kana: 'かごしまけん',
  },
  {
    code: '47000',
    name: '沖縄県',
    area: '九州・沖縄',
    kana: 'おきなわけん',
  },
] as const
