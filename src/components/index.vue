<template>
  <div class="idx">
      <!-- 头部部分开始 -->
    <div class="header">
      <div class="imgtop">
        <img src="../assets/img/logo.png" alt="">
        <router-link to="/login">
          <span class="log" v-show="isLogin">
           登录
          </span>
        </router-link>
      </div>
    </div>
    <!-- 头部部分结束 -->
    <div class="container">
      <!-- 轮播图部分开始 -->
    <div class="slider">
      <mt-swipe :auto="4000"  style="position:relative;">
        <mt-swipe-item v-for="item in arr" :key="item._id">
          <img :src="item.img">
          <p v-html="item.title"></p>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 轮播图部分结束 -->
    <!-- 六宫格开始 -->
    <div class="bar">
      <div class="row row-one">
        <router-link to="/newseye">
          <div class="item-wrap">
            <div class="item item1"><i class="iconfont icon-news"></i></div>
            <p>信工新闻眼</p>
          </div>
        </router-link>
        <router-link to="/life">
          <div class="item-wrap">
            <div class="item item2"><i class="iconfont icon-iconfontzhizuobiaozhun023104"></i></div>
            <p>掌上组织生活</p>
          </div>
        </router-link>
        <router-link to="/interaction">
          <div class="item-wrap">
          <div class="item item3"><i class="iconfont icon-bhjhudong"></i></div>
          <p>党员云互动</p>
        </div>
        </router-link>
      </div>
      <div class="row row-two">
        <router-link to="/point">
          <div class="item-wrap">
          <div class="item item4"><i class="iconfont icon-msnui-switch"></i></div>
          <p>党建一点通</p>
        </div>
        </router-link>
        <router-link to="/member">
          <div class="item-wrap">
          <div class="item item5"><i class="iconfont icon-shipin"></i></div>
          <p>党员亮身份</p>
        </div>
        </router-link>
        <router-link to="/history">
          <div class="item-wrap">
          <div class="item item6"><i class="iconfont icon-news"></i></div>
          <p>党史上的今天</p>
        </div>
        </router-link>
      </div>
    </div>
    <!-- 六宫格结束 -->
    <!-- banner开始 -->
    <div class="banner">
      <img src=".././assets/img/banner02.png" alt="">
    </div>
    <!-- banner结束 -->
    <div class="box">
      <div class="box-left">

      </div>
      <div class="box-right">
        <div class="box-right-top">
          <router-link to="">

          </router-link>
          <router-link to="">

          </router-link>
        </div>
        <div class="box-right-bottom">
          <router-link to="">

          </router-link>
          <router-link to="">

          </router-link>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'index',
  data () {
    return {
      arr:[],
      isLogin:true
    }
  },
  methods:{
    getimg(){
      this.$axios.get('getSlider').then(res=>{
        this.arr=res.data.data
      })
    },
    islog(){
      this.$axios.get('islogin').then(res=>{
        if(res.data.code==200){
         this.isLogin=false
        }
      })
    }
  },
  mounted(){
    this.getimg()
    this.islog()
  }
}
</script>
<style>
.slider .mint-swipe{
  height:187.5px;
}

</style>
<style scoped>
.idx{
    overflow: hidden;
}
/* 头部开始 */
.imgtop{
  width: 100%;
}
.imgtop span.log{
  width:55px;
  height: 44px;
  font-weight: 500;
  background-color: #c50206;
  font-size: 15px;
  line-height: 44px;
  float: right;
  color:#fff;
}
.imgtop img{
  width:130px;
  padding:6px 8px;
  height:30px;
}
.header{
  z-index:1;
  width:100%;
  height:44px;
  background-color: #c50206;
  position:fixed;
  top:0;
  left:0;
  right:0;
}
/* 头部结束 */
.container{
  z-index:10;
  margin-top:44px;
}
/* 轮播图部分开始 */
.slider img{
  height:187.5px;
  width:375px;
}
.slider p{
  color:#fff;
  font-size:12px;
  padding:3px;
  position:absolute;
  bottom:0;
  left:0;
  width:100%;
  background-color:rgba(0,0,0,.5);
}
/* 轮播图部分结束 */
/* 六宫格部分开始 */
.bar{
  height:187.5px;
  width:100%;
  display: flex;
  flex-flow: column;
  align-content: space-around;
  justify-content:space-around;
  background-image: url("../assets/img/bt_bg.png");
  background-size:100%;
}
.row.row-one{
  display: flex;
  justify-content: space-around;
}
.row.row-two{
  display: flex;
  justify-content: space-around;
}
.item{
  height:50px;
  width: 50px;
  display: flex;
  justify-content: space-around;
  margin:0 auto;
  line-height: 50px;

}
.item-wrap i{
  font-size: 23px;
  color:#ffffff;
}
.item-wrap{
  height:75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  align-content: space-around;
}
.item-wrap p{
  font-size: 12px;
  width:75px;
  text-align: center;
  color: #666666;
}
.bar .item-wrap .item.item1{
  border-radius: 50%;
  background-color: #fda005;
}
.bar .item-wrap .item.item2{
  border-radius: 30%;
  background-color: #f463a4;
}
.bar .item-wrap .item.item3{
  border-radius: 30%;
  background-color: #ff7360;
}
.bar .item-wrap .item.item4{
  border-radius: 30%;
  background-color: #01d2bc;
}
.bar .item-wrap .item.item5{
  border-radius: 30%;
  background-color: #e11b1c;
}
.bar .item-wrap .item.item6{
  border-radius: 30%;
  background-color: #85cb68;
}
/* 六宫格部分结束 */
/* banner开始 */
.banner img{
  display:block;
  width:375px;
  height:90px;
}
/* banner结束 */
/* box开始 */
.box{
  display: flex;
  height:158px;
  padding-bottom:10px;
  background:url('../assets/img/tese.png');
  background-size:100%;
  margin-bottom:35px;
}

.box .box-left{
  flex:1;
}
.box .box-right{
  flex:2;
  width:100%;
  height:100%;
}
.box .box-right .box-right-top{
  display:flex;
  width:100%;
  height:50%;
}
.box .box-right .box-right-top a.router-link-exact-active.router-link-active{
  flex:1;
  height:100%;
}
.box .box-right .box-right-top a.router-link-exact-active.router-link-active{
  flex:1;
  height:100%;
}
.box .box-right .box-right-bottom{
  display:flex;
  width:100%;
  height:50%;
}
.box .box-right .box-right-bottom a.router-link-exact-active.router-link-active{
  flex:1;
  height:100%;
}
.box .box-right .box-right-bottom a.router-link-exact-active.router-link-active{
  flex:1;
  height:100%;
}
/* box结束 */
</style>


