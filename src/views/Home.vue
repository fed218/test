<template>
  <div>
    <section class="slider">
      <Carousel autoplay v-model="value">
        <Carousel-item>
          <img src="https://az804957.vo.msecnd.net/doc/homeindex4/sp_idx_slide_1.png" class="w-100" />
        </Carousel-item>
        <Carousel-item>
          <img src="https://az804957.vo.msecnd.net/doc/homeindex4/sp_idx_slide_2.png" class="w-100" />
        </Carousel-item>
        <Carousel-item>
          <img src="https://az804957.vo.msecnd.net/doc/homeindex4/sp_idx_slide_3.png" class="w-100" />
        </Carousel-item>
      </Carousel>
      <div class="main_cont text-center">
        <p class="h2 text-light">想去哪裡運動呢？</p>
        <p class="h5 text-light mt-3">全國運動場查詢</p>
        <ul class="mt-3">
          <li class="d-inline">
            <Select v-model="city" style="width:150px" @on-change="cityChange">
              <Option
                v-for="(item, index) in cityList"
                :value="item.value"
                :key="index"
              >{{ item.label }}</Option>
            </Select>
          </li>
          <li class="d-inline mx-1">
            <Select v-model="country" style="width:150px">
              <Option
                v-for="(item, index) in countryList"
                :value="item.value"
                :key="index"
              >{{ item.label }}</Option>
            </Select>
          </li>
          <li class="d-inline">
            <Input v-model="keyWord" placeholder="請輸入場館名稱或運動項目" style="width: 200px" />
          </li>
          <li class="d-inline pl-1">
            <Button type="primary" @click="search">搜尋</Button>
          </li>
        </ul>
      </div>
      <div class="cover"></div>
    </section>
    <section class="container my-5">
      <p class="h4 text-primary">運動場地</p>
      <div class="row mt-4">
        <div class="col mb-3 circle" v-for="(item, index) in circleArray" :key="index">
          <a href="#" @click.prevent="circleClick(item)">
            <img
              class="rounded-circle"
              :src="`https://az804957.vo.msecnd.net/doc/homeindex4/sp_idx_cate_${item.index}.jpg`"
              alt
            />
            <p class="text-center mt-3" style="width:148px">{{item.type}}</p>
          </a>
        </div>
      </div>
    </section>
    <section class="container mb-5">
      <Card>
        <p slot="title">
          <span class="h4 text-primary">精選場地</span>
        </p>
        <div class="row">
          <div class="col choice" v-for="(item, index) in choiceArray" :key="index">
            <img :src="item.img" alt />
            <p class="h5 text-primary">{{item.title}}</p>
            <p>{{item.address}}</p>
          </div>
        </div>
      </Card>
    </section>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {},
  data() {
    return {
      value: 0,
      keyWord: '',
      city: '全部縣市',
      cityList: [
        {
          value: '全部縣市',
          label: '全部縣市',
        },
      ],
      country: '全部行政區',
      countryList: [
        {
          value: '全部行政區',
          label: '全部行政區',
        },
      ],
      circleArray: [
        {
          type: '運動中心',
          index: 14,
        },
        {
          type: '籃球',
          index: 2,
        },
        {
          type: '足球',
          index: 3,
        },
        {
          type: '游泳',
          index: 4,
        },
        {
          type: '羽球',
          index: 5,
        },
        {
          type: '排球',
          index: 6,
        },
        {
          type: '網球',
          index: 7,
        },
        {
          type: '棒球',
          index: 8,
        },
        {
          type: '桌球',
          index: 9,
        },
        {
          type: '健身中心',
          index: 15,
        },
        {
          type: '跑步',
          index: 13,
        },
        {
          type: '高爾夫球',
          index: 11,
        },
      ],
      choiceArray: [
        {
          title: '太源國小籃球場',
          img: 'https://az804957.vo.msecnd.net/photogym/20140616163658_IMG_3023.JPG',
          address: '屏東縣枋寮鄉太源村太源路2之10號',
        },
        {
          title: '成德國中活動中心',
          img: 'https://az804957.vo.msecnd.net/photogym/20140731142748_DSC05806.JPG',
          address: '臺北市南港區東新街108巷23號',
        },
        {
          title: '四維國小田徑場',
          img: 'https://az804957.vo.msecnd.net/photogym/20140629114743_操場相片.jpg',
          address: '高雄市苓雅區青年一路103號',
        },
        {
          title: '海青工商桌球室',
          img: 'https://az804957.vo.msecnd.net/photogym/20140606153634_P1070843.JPG',
          address: '高雄市左營區左營大路1號',
        },
      ],
      area_data: {
        臺北市: ['中正區', '大同區', '中山區', '萬華區', '信義區', '松山區', '大安區', '南港區', '北投區', '內湖區', '士林區', '文山區'],
        新北市: [
          '板橋區',
          '新莊區',
          '泰山區',
          '林口區',
          '淡水區',
          '金山區',
          '八里區',
          '萬里區',
          '石門區',
          '三芝區',
          '瑞芳區',
          '汐止區',
          '平溪區',
          '貢寮區',
          '雙溪區',
          '深坑區',
          '石碇區',
          '新店區',
          '坪林區',
          '烏來區',
          '中和區',
          '永和區',
          '土城區',
          '三峽區',
          '樹林區',
          '鶯歌區',
          '三重區',
          '蘆洲區',
          '五股區',
        ],
        基隆市: ['仁愛區', '中正區', '信義區', '中山區', '安樂區', '暖暖區', '七堵區'],
        桃園市: ['桃園區', '中壢區', '平鎮區', '八德區', '楊梅區', '蘆竹區', '龜山區', '龍潭區', '大溪區', '大園區', '觀音區', '新屋區', '復興區'],
        新竹縣: ['竹北市', '竹東鎮', '新埔鎮', '關西鎮', '峨眉鄉', '寶山鄉', '北埔鄉', '橫山鄉', '芎林鄉', '湖口鄉', '新豐鄉', '尖石鄉', '五峰鄉'],
        新竹市: ['東區', '北區', '香山區'],
        苗栗縣: [
          '苗栗市',
          '通霄鎮',
          '苑裡鎮',
          '竹南鎮',
          '頭份鎮',
          '後龍鎮',
          '卓蘭鎮',
          '西湖鄉',
          '頭屋鄉',
          '公館鄉',
          '銅鑼鄉',
          '三義鄉',
          '造橋鄉',
          '三灣鄉',
          '南庄鄉',
          '大湖鄉',
          '獅潭鄉',
          '泰安鄉',
        ],
        臺中市: [
          '中區',
          '東區',
          '南區',
          '西區',
          '北區',
          '北屯區',
          '西屯區',
          '南屯區',
          '太平區',
          '大里區',
          '霧峰區',
          '烏日區',
          '豐原區',
          '后里區',
          '東勢區',
          '石岡區',
          '新社區',
          '和平區',
          '神岡區',
          '潭子區',
          '大雅區',
          '大肚區',
          '龍井區',
          '沙鹿區',
          '梧棲區',
          '清水區',
          '大甲區',
          '外埔區',
          '大安區',
        ],
        南投縣: ['南投市', '埔里鎮', '草屯鎮', '竹山鎮', '集集鎮', '名間鄉', '鹿谷鄉', '中寮鄉', '魚池鄉', '國姓鄉', '水里鄉', '信義鄉', '仁愛鄉'],
        彰化縣: [
          '彰化市',
          '員林鎮',
          '和美鎮',
          '鹿港鎮',
          '溪湖鎮',
          '二林鎮',
          '田中鎮',
          '北斗鎮',
          '花壇鄉',
          '芬園鄉',
          '大村鄉',
          '永靖鄉',
          '伸港鄉',
          '線西鄉',
          '福興鄉',
          '秀水鄉',
          '埔心鄉',
          '埔鹽鄉',
          '大城鄉',
          '芳苑鄉',
          '竹塘鄉',
          '社頭鄉',
          '二水鄉',
          '田尾鄉',
          '埤頭鄉',
          '溪州鄉',
        ],
        雲林縣: [
          '斗六市',
          '斗南鎮',
          '虎尾鎮',
          '西螺鎮',
          '土庫鎮',
          '北港鎮',
          '莿桐鄉',
          '林內鄉',
          '古坑鄉',
          '大埤鄉',
          '崙背鄉',
          '二崙鄉',
          '麥寮鄉',
          '臺西鄉',
          '東勢鄉',
          '褒忠鄉',
          '四湖鄉',
          '口湖鄉',
          '水林鄉',
          '元長鄉',
        ],
        嘉義縣: [
          '太保市',
          '朴子市',
          '布袋鎮',
          '大林鎮',
          '民雄鄉',
          '溪口鄉',
          '新港鄉',
          '六腳鄉',
          '東石鄉',
          '義竹鄉',
          '鹿草鄉',
          '水上鄉',
          '中埔鄉',
          '竹崎鄉',
          '梅山鄉',
          '番路鄉',
          '大埔鄉',
          '阿里山鄉',
        ],
        嘉義市: ['東區', '西區'],
        臺南市: [
          '中西區',
          '東區',
          '南區',
          '北區',
          '安平區',
          '安南區',
          '永康區',
          '歸仁區',
          '新化區',
          '左鎮區',
          '玉井區',
          '楠西區',
          '南化區',
          '仁德區',
          '關廟區',
          '龍崎區',
          '官田區',
          '麻豆區',
          '佳里區',
          '西港區',
          '七股區',
          '將軍區',
          '學甲區',
          '北門區',
          '新營區',
          '後壁區',
          '白河區',
          '東山區',
          '六甲區',
          '下營區',
          '柳營區',
          '鹽水區',
          '善化區',
          '大內區',
          '山上區',
          '新市區',
          '安定區',
        ],
        高雄市: [
          '楠梓區',
          '左營區',
          '鼓山區',
          '三民區',
          '鹽埕區',
          '前金區',
          '新興區',
          '苓雅區',
          '前鎮區',
          '小港區',
          '旗津區',
          '鳳山區',
          '大寮區',
          '鳥松區',
          '林園區',
          '仁武區',
          '大樹區',
          '大社區',
          '岡山區',
          '路竹區',
          '橋頭區',
          '梓官區',
          '彌陀區',
          '永安區',
          '燕巢區',
          '田寮區',
          '阿蓮區',
          '茄萣區',
          '湖內區',
          '旗山區',
          '美濃區',
          '內門區',
          '杉林區',
          '甲仙區',
          '六龜區',
          '茂林區',
          '桃源區',
          '那瑪夏區',
        ],
        屏東縣: [
          '屏東市',
          '潮州鎮',
          '東港鎮',
          '恆春鎮',
          '萬丹鄉',
          '長治鄉',
          '麟洛鄉',
          '九如鄉',
          '里港鄉',
          '鹽埔鄉',
          '高樹鄉',
          '萬巒鄉',
          '內埔鄉',
          '竹田鄉',
          '新埤鄉',
          '枋寮鄉',
          '新園鄉',
          '崁頂鄉',
          '林邊鄉',
          '南州鄉',
          '佳冬鄉',
          '琉球鄉',
          '車城鄉',
          '滿州鄉',
          '枋山鄉',
          '霧台鄉',
          '瑪家鄉',
          '泰武鄉',
          '來義鄉',
          '春日鄉',
          '獅子鄉',
          '牡丹鄉',
          '三地門鄉',
        ],
        宜蘭縣: ['宜蘭市', '羅東鎮', '蘇澳鎮', '頭城鎮', '礁溪鄉', '壯圍鄉', '員山鄉', '冬山鄉', '五結鄉', '三星鄉', '大同鄉', '南澳鄉'],
        花蓮縣: ['花蓮市', '鳳林鎮', '玉里鎮', '新城鄉', '吉安鄉', '壽豐鄉', '秀林鄉', '光復鄉', '豐濱鄉', '瑞穗鄉', '萬榮鄉', '富里鄉', '卓溪鄉'],
        臺東縣: [
          '臺東市',
          '成功鎮',
          '關山鎮',
          '長濱鄉',
          '海端鄉',
          '池上鄉',
          '東河鄉',
          '鹿野鄉',
          '延平鄉',
          '卑南鄉',
          '金峰鄉',
          '大武鄉',
          '達仁鄉',
          '綠島鄉',
          '蘭嶼鄉',
          '太麻里鄉',
        ],
        澎湖縣: ['馬公市', '湖西鄉', '白沙鄉', '西嶼鄉', '望安鄉', '七美鄉'],
        金門縣: ['金城鎮', '金湖鎮', '金沙鎮', '金寧鄉', '烈嶼鄉', '烏坵鄉'],
        連江縣: ['南竿鄉', '北竿鄉', '莒光鄉', '東引鄉'],
      },
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      for (let item in this.area_data) {
        this.cityList.push({
          value: item,
          label: item,
        });
      }
    },
    circleClick(item) {
      this.keyWord = item.type;
      this.$router.push(`/search&City=${this.city}&Country=${this.country}&Name=${this.keyWord !== '' ? this.keyWord : 'none'}`);
    },
    search() {
      this.$router.push(`/search&City=${this.city}&Country=${this.country}&Name=${this.keyWord !== '' ? this.keyWord : 'none'}`);
    },
    cityChange() {
      if (this.city !== '全部縣市') {
        this.countryList = [
          {
            value: '全部行政區',
            label: '全部行政區',
          },
        ];
        this.area_data[this.city].forEach(item => {
          this.countryList.push({
            value: item,
            label: item,
          });
        });
      } else {
        this.countryList = [
          {
            value: '無',
            label: '無',
          },
        ];
        this.country = '無';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.slider {
  position: relative;
}
.cover {
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  left: 0;
  top: 0;
  width: 100%;
  height: 99%;
}
.main_cont {
  position: absolute;
  left: calc(50% - 284px);
  top: 30%;
  z-index: 2;
}
.ivu-card-head p {
  height: 30px;
  line-height: 30px;
}
.circle {
  width: 200px;
  height: 200px;
}
.circle img {
  width: 148px;
  height: 148px;
  opacity: 1;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.6);
}
.circle:hover img {
  width: 160px;
  height: 160px;
  opacity: 0.6;
  margin: 0;
  transition: all 0.5s;
}
.choice img {
  width: 220px;
  height: 131px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.6);
}
</style>
