<template>
  <div class="wrap">
    <top>登录</top>
    <div class="container">
      <div class="img-wrap">
        <img src="../assets/img/logo.png" alt="">
      </div>
      <div class="box">
        <input type="number" class="box_in" style="padding-left:5px;color:#fff"
               v-model="info.idCardNumber" placeholder="身份证号">
        <input type="password" class="box_in" style="padding-left:5px;;color:#fff"
               v-model="info.pwd" placeholder="密码">
        <div class="btn" @click="login">登录</div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Toast} from "mint-ui"
  import top from "../components/top.vue"
  import {setTimeout} from 'timers';

  export default {
    name: "login",
    data() {
      return {
        info: {
          idCardNumber: '',
          pwd: ''
        }
      }
    },
    components: {
      top
    },
    methods: {
      login() {
        this.$axios.post('login', this.info).then(res => {
          //console.log(res)
          if (res.code == 200) {
            Toast(res.msg);
            setTimeout(() => {
              this.$router.push('/myparty')
            })
          } else {
            Toast(res.msg);
            setTimeout(() => {
              this.$router.push('/login')
            })
          }
        })
      }
    }
  }
</script>
<style>
  input.box_in::-webkit-input-placeholder {
    color: #fff;
    font-size: 14px;
    padding-left: 8px;
  }
</style>

<style scoped>
  .wrap {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 375px;
    overflow: hidden;
    background-color: #c50206;
    background-size: 100% 100%;
  }

  .container {
    padding-top: 44px;
  }

  .container .img-wrap {
    margin: 25px auto;
    width: 236px;
  }

  .container .img-wrap img {
    width: 234px;
    height: 55px;
    margin: 0 auto;
  }

  .box {
    display: flex;
    flex-flow: column;
    align-content: space-around;
    margin: 25px auto;
    width: 300px;
    height: 300px;
  }

  input.box_in {
    border-radius: 5px;
    margin: 8px 0;
    width: 290px;
    height: 41.66px;
    background-color: #c50206;
    border: 1px solid yellow;
  }

  .box .btn {
    border-radius: 5px;
    margin: 10px 0;
    width: 300px;
    line-height: 41.66px;
    text-align: center;
    color: #fff;
    height: 41.66px;
    background-color: #e3574f;
  }
</style>
