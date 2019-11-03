<template>
  <div>
    <Spin size="large" fix v-if="spinShow">
      <i class="fas fa-spinner fa-pulse fa-3x"></i>
      <div class="h6">Loading</div>
    </Spin>
    <section>
      <img
        class="w-100"
        src="https://az804957.vo.msecnd.net/doc/Content/Images/4/pages/pg_top_img.jpg"
        alt
      />
    </section>
    <section class="container my-5">
      <Card>
        <p slot="title">
          <span class="h4 text-primary">搜尋結果</span>
        </p>
        <div slot="extra">
          <Button type="primary" class="mr-2">
            <i class="fas fa-bars"></i> 後台模式
          </Button>
          <Button>
            <i class="fas fa-bars"></i> 前台模式
          </Button>
        </div>
        <Table :columns="columns1" :data="data1"></Table>
        <div class="d-flex mt-4">
          <Page :total="total" class="ml-auto" @on-change="changePage"></Page>
        </div>
      </Card>

      <Modal v-model="modal1" title="編輯" @on-ok="update">
        <label>
          場館名稱：
          <Input v-model="temp.name" style="width: 300px" />
        </label>
        <label class="my-3">
          場館地址：
          <Input v-model="temp.address" style="width: 300px" />
        </label>
        <label>
          聯絡電話：
          <Input v-model="temp.tel" style="width: 300px" />
        </label>
      </Modal>
    </section>
  </div>
</template>

<script>
export default {
  name: 'search',
  components: {},
  data() {
    return {
      temp: [],
      modal1: false,

      spinShow: false,

      total: 0,

      columns1: [
        {
          title: '場館名稱',
          key: 'name',
          align: 'center',
          render(row, column, index) {
            return <span>{column.row.name}</span>;
          },
        },
        {
          title: '場館地址',
          key: 'address',
          align: 'center',
        },
        {
          title: '聯絡電話',
          key: 'tel',
          align: 'center',
        },
        {
          title: '操作',
          key: 'action',
          width: 200,
          render: (h, params) => {
            return h('div', [
              h(
                'Button',
                {
                  props: {
                    type: params.row.$isEdit ? 'warning' : 'info',
                    size: 'small',
                    icon: '',
                  },
                  style: {
                    marginRight: '5px',
                  },
                  on: {
                    click: () => {
                      if (params.row.$isEdit) {
                        this.openUpdate(params.row);
                      } else {
                        this.openUpdate(params.row);
                      }
                    },
                  },
                },
                params.row.$isEdit ? '保存' : '編輯'
              ),
            ]);
          },
        },
      ],
      data1: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    openUpdate(item) {
      this.temp = Object.assign({}, item);
      this.modal1 = true;
    },
    update() {
      this.data1.forEach((item, index) => {
        if (item.id === this.temp.id) {
          this.data1[index].name = this.temp.name;
          this.data1[index].address = this.temp.address;
          this.data1[index].tel = this.temp.tel;
        }
      });
    },
    changePage(page) {
      this.data1 = [];
      this.spinShow = true;

      const pagePath = `${this.$route.params.City !== '全部縣市' ? '&City=' + this.$route.params.City : ''}${
        this.$route.params.Country !== '全部行政區' && this.$route.params.Country !== '無' ? '&Country=' + this.$route.params.Country : ''
      }${this.$route.params.Name !== 'none' ? '&Name=' + this.$route.params.Name : ''}`;

      const api = `https://iplay.sa.gov.tw/odata/GymSearch?$format=application/json;odata.metadata=none${pagePath}&$skip=${page === 1 ? 0 : page * 10}`;
      this.$http.get(api).then(response => {
        response.data.value.forEach(item => {
          this.data1.push({
            name: item.Name,
            address: item.Address,
            tel: item.OperationTel,
          });
        });
        this.spinShow = false;
      });
    },
    getData() {
      this.data1 = [];
      this.spinShow = true;

      const allPath = `${this.$route.params.City !== '全部縣市' ? '&City=' + this.$route.params.City : ''}${
        this.$route.params.Country !== '全部行政區' && this.$route.params.Country !== '無' ? '&Country=' + this.$route.params.Country : ''
      }${this.$route.params.Name !== 'none' ? '&Keyword=' + this.$route.params.Name : ''}`;

      const pagePath = `${this.$route.params.City !== '全部縣市' ? '&City=' + this.$route.params.City : ''}${
        this.$route.params.Country !== '全部行政區' && this.$route.params.Country !== '無' ? '&Country=' + this.$route.params.Country : ''
      }${this.$route.params.Name !== 'none' ? '&Name=' + this.$route.params.Name : ''}`;

      let api = `https://iplay.sa.gov.tw/api/GymSearchAllList?$format=application/json;odata.metadata=none${allPath}`;
      this.$http.get(api).then(response => {
        this.total = response.data.length;

        api = `https://iplay.sa.gov.tw/odata/GymSearch?$format=application/json;odata.metadata=none${pagePath}`;
        this.$http.get(api).then(response => {
          response.data.value.forEach(item => {
            this.data1.push({
              name: item.Name,
              address: item.Address,
              tel: item.OperationTel,
              id: item.GymID,
            });
          });
          this.spinShow = false;
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.ivu-card-head p {
  height: 30px;
  line-height: 30px;
}
</style>
