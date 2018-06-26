<template>
  <div class="myparty">
    <top>我的党建</top>
    <div class="container">
      <div class="banner">
        <div class="img-wrap" v-show="isShow">
          <img src="../assets/img/yuan.png" alt="">
        </div>
        <div class="img-wrap" v-show="isLogin">
          <img :src="arr.avatar" alt="">
        </div>
        <router-link to= "/login">
          <div class="f1" v-show="isShow">
          你还未登录，请登录
          </div>
        </router-link>
        <div class="f1" v-show="isLogin">
          {{arr.userName}}
          </div>
      </div>
    </div>
    <div class="content">
        <div class="item" @click="inform">
        <div class="item1">
          <img src="../assets/img/person.png" alt="">
        </div>
        <p>个人信息</p>
        <i class="iconfont icon-right"></i>
        </div>
        <div class="item" @click="scores">
        <div class="item1">
          <img src="../assets/img/lxjf.png" alt="">
        </div>
        <p>个人量化积分</p>
        <i class="iconfont icon-right"></i>
      </div>
        <div class="item" @click="updatepwd">
        <div class="item1">
          <img src="../assets/img/xgmm.png" alt="">
        </div>
        <p>修改密码</p>
        <i class="iconfont icon-right"></i>
      </div>
        <div class="item">
        <div class="item1">
          <img src="../assets/img/icon3.png" alt="">
        </div>
        <p>党费缴纳</p>
        <i class="iconfont icon-right"></i>
      </div>
    </div>
    <div class="btn" v-show="isLogin">
      <mt-button type="danger" size="large" @click="exit">退出登录</mt-button>
    </div>
  </div>
</template>
<script>
import top from "../components/top.vue"
export default {
  name: 'myparty',
  data(){
    return{
      isShow:false,
      isLogin:true,
      arr:[],
    }
  },
  components:{
     top
    },
  methods:{
    getSession(){
      this.$axios.get('getSess').then(res=>{
        //console.log(res);
        this.arr=res.data.data;
      })
    },
    islog(){
      this.$axios.get('islogin').then(res=>{
        if(res.data.code==200){
          this.isLogin=true;
        }else{
          this.isLogin=false;
          this.isShow=true
        }
      })
    },
    updatepwd(){
      this.$axios.get('islogin').then(res=>{
        if(res.data.code==200){
          this.$router.push('/updatepwd')
        }else{
          this.$router.push('/login')
        }
      })
    },
    scores(){
      this.$axios.get('islogin').then(res=>{
        if(res.data.code==200){
          this.$router.push('/scores')
        }else{
          this.$router.push('/login')
        }
      })
    },
    inform(){
      this.$axios.get('islogin').then(res=>{
        if(res.data.code==200){
          this.$router.push('/inform')
        }else{
          this.$router.push('/login')
        }
      })
    },
    exit(){
      this.$axios.post('loginout').then(res=>{
        this.$router.push('/login')
      })
    },
  },
  mounted(){
    this.islog()
    this.getSession()
  }
}
</script>
<style scoped>
.myparty{
  overflow: hidden;
}
  .container{
    padding-top:44px;
  }
  .banner{
    height:150px;
    text-align: center;
    background-color: #c50206;
    color:#fff;
  }
  .banner .img-wrap{
    height:62.5px;
    width: 375px;
    padding-top:41.5px;
  }
  .banner .img-wrap img{
    height:65px;
    width:65px;
    border-radius: 50%;
  }
  .banner .f1{
    margin-top:10px;
    color:#fff;
  }

  .content{
    display: flex;
    flex-flow: column;
    width:375px;
    height:200px;
  }
  .content .item{
    display: flex;
    flex-flow: row;
    height:50px;
    width:375px;
    color:#666;
    border-bottom:1px solid rgb(189, 175, 175);
  }
  .content .item .item1 img{
    height:32px;
    padding:10px 0 0 10px;
  }
   p{
    padding-left:15px;
    line-height: 50px;
    font-size: 16px;
  }
  .content .item i{
    position: absolute;
    right:10px;
    line-height: 50px;
  }
  .btn{
    margin-top:50px;
  }
</style>


