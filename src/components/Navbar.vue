<template>
  <div>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-4">
          <a href="#" @click.prevent="goHome">
            <img src="https://az804957.vo.msecnd.net/doc/Content/Images/4/common/sp_logo.png" alt />
          </a>
        </div>
        <div class="col-8 text-right navbar mb-2">
          <ul>
            <li class="d-inline h6 px-3 border-right border-primary">網站導覽</li>
            <li class="d-inline h6 px-3 border-right border-primary">重大政策</li>
            <li class="d-inline h6 px-3 border-right border-primary">公開資訊</li>
            <li class="d-inline h6 px-3 border-right border-primary">意見信箱</li>
            <li class="d-inline h6 px-3 border-right border-primary">API</li>
            <li class="d-inline h6 px-3">登入填報</li>
            <li class="d-inline px-3">
              <img
                src="https://az804957.vo.msecnd.net/doc/Content/Images/4/common/sp_share_icon1.png"
              />
              <img
                class="px-2"
                src="https://az804957.vo.msecnd.net/doc/Content/Images/4/common/sp_share_icon2.png"
              />
              <img
                src="https://az804957.vo.msecnd.net/doc/Content/Images/4/common/sp_share_icon4.png"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">
.navbar ul li {
  vertical-align: middle;
}
.navbar ul li img {
  vertical-align: middle;
}
</style>