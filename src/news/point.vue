<template>
  <div class="point">
    <top>党建一点通</top>
    <div class="container">
      <div class="content" v-for="item in arr" :key="item._id">
        <router-link :to="'/point-detail?id='+item._id">
          <img :src="item.img" alt=""/>
          <div class="local">
            <p v-text="item.title"></p>
            <div class="createAt">{{item.createTime | time}}</div>
          </div>
          <div class="coun">
            <i class="iconfont icon-yanjing"></i>
            <span class="coun_right">{{item.desc}}</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
  import top from "../components/top.vue"

  export default {
    name: "point",
    data() {
      return {
        arr: {}
      }
    },
    components: {
      top
    },
    methods: {
      getData() {
        this.$axios.get('getNews', {type: "党建一点通"}).then(res => {
          this.arr = res.data.data;
        })
      },
    },
    mounted() {
      this.getData();
    }
  }
</script>
<style scoped>
  .point {
    overflow: hidden;
  }

  .container {
    margin-top: 44px;
  }

  a {
    position: relative;
    display: flex;
    width: 365px;
    height: 100px;
    padding: 10px 0 0 10px;
    float: left;
    flex-flow: row;
    border-bottom: 2px solid #ddd;
  }

  .content img {
    width: 80px;
    height: 80px;
  }

  .content .local {
    margin: 0 10px;
    color: #000;
    line-height: 20px;
    font-size: 14px;
  }

  .content .local .createAt {
    position: absolute;
    left: 105px;
    bottom: 16px;
    font-weight: bold;
    font-size: 12px;
    color: #999;
  }

  .coun {
    position: absolute;
    right: 10px;
    display: flex;
    padding-top: 66px;
    padding-right: 10px;
    height: 20px;
    font-size: 12px;
    color: #000;
    float: right;
  }

  span.coun_right {
    padding-left: 5px;
  }
</style>


