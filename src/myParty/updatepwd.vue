<template>
    <div class="updatepwd">
      <top>修改密码</top>
      <div class="container">
        <div class="wrap">
          <div class="item">
            <p>旧密码：</p>
            <input type="text" style="padding-left:10px;color:#000"
                   class="ins" v-model="info.pwd">
          </div>
          <div class="item">
            <p>新密码：</p>
            <input type="text" style="padding-left:10px;color:#000"
                   class="ins" v-model="info.newPwd">
          </div>
          <div class="item">
            <p>确认密码：</p>
            <input type="text" style="padding-left:10px;color:#000"
                   class="ins" v-model="info.confirmPwd">
          </div>
        </div>
        <div class="btn">
          <mt-button type="danger" size="large" style="width:300px; background-color:#c50206" @click="updatepwd">确定</mt-button>
        </div>
      </div>
    </div>
</template>

<script>
  import {Toast} from 'mint-ui'
  import top from '../components/top'
    export default {
        name: "updatepwd",
      data(){
        return{
          info:{
            pwd:'',
            newPwd:'',
            confirmPwd:''
          }
        }
      },
      components:{
          top
      },
      methods:{
          updatepwd(){
            this.$axios.post('updatepwd',this.info).then(res=>{
              if(res.code==200){
                Toast(res.data);
                setTimeout(()=>{
                  this.$router.push('/login')
                },1500)
              }else{
                Toast(res.data);
              }
            })
          }
      },
    }
</script>

<style scoped>
  .container{
    margin-top:44px;
  }
  .wrap{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-content: space-around;
    width:375px;
    height:270px;
    align-items: center;
    margin:95px auto;
  }
  .wrap .item{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height:95px;
    width:290px;
  }
  .wrap .item input.ins{
    width:270px;
    outline: none;
    border-radius: 8px;
    height:40px;
    background-color: #fff;
    border:1px solid #d2d2d2;
  }
  .wrap .item p{
    font-size: 16px;
    color:#444;
  }
  .btn{
    width:305px;
    margin:-85px auto;
  }
</style>
