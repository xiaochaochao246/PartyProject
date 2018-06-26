<template>
    <div class="info">
      <div class="top">
        <i class="iconfont icon-fanhui" @click="back3" style="position: absolute;left:10px;"></i>
        <p>个人信息</p>
        <p class="btt" @click="update(arr._id)">编辑</p>
      </div>
      <div class="container">
        <div class="item">
          <p>头像</p>
          <i><img :src="arr.avatar" alt=""></i>
        </div>
        <div class="item">
          <p>姓名</p>
          <i>{{arr.userName}}</i>
        </div>
        <div class="item">
          <p>身份证</p>
          <i>{{arr.idCardNumber}}</i>
        </div>
        <div class="item">
          <p>家庭住址</p>
          <i>{{arr.homeAddress}}</i>
        </div>
        <div class="item">
          <p>工作地址</p>
          <i>{{arr.workAddress}}</i>
        </div>
        <div class="item">
          <p>民族</p>
          <i>{{arr.nation}}</i>
        </div>
        <div class="item">
          <p>微信号</p>
          <i>{{arr.weChat}}</i>
        </div>
        <div class="item">
          <p>qq号</p>
          <i>{{arr.qqNumber}}</i>
        </div>
        <div class="item">
          <p>性别</p>
          <i>{{arr.sex}}</i>
        </div>
        <div class="item">
          <p>最高学历</p>
          <i>{{arr.education}}</i>
        </div>
        <div class="item">
          <p>职称</p>
          <i>{{arr.jobTitle}}</i>
        </div>
        <div class="item">
          <p>薪资水平</p>
          <i>{{arr.emolument}}</i>
        </div>
        <div class="item">
          <p>入党时间</p>
          <i>{{arr.enterPartyTime}}</i>
        </div>
        <div class="item">
          <p>党费最后缴纳时间</p>
          <i>{{arr.paymentTime}}</i>
        </div>
        <div class="item">
          <p>当前身份</p>
          <i>{{arr.partyStatus}}</i>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "information",
      data(){
          return{
            arr:[]
          }
      },
      methods:{
          back3(){
            this.$router.go(-1)
          },

        update(id){
          this.$router.push({path:'/info-edit',query:{id}})
        },
        getSession(){
          this.$axios.get('getSess').then(res=>{
            //console.log(res);
            this.arr=res.data.data;
          })
        },
      },
      created(){
          this.getSession();
      }
    }
</script>

<style scoped>
.info{
  overflow: hidden;
}
.container{
  z-index:5;
  margin-top:44px;
}
  .top{
    z-index:1;
    width:100%;
    background-color: #c50206;
    height: 44px;
    font-size:18px;
    font-weight: 500;
    text-align: center;
    line-height: 44px;
    color:#fff;
    position:fixed;
    top:0;
    left:0;
  }
  p.btt{
    width:55px;
    height: 44px;
    font-weight: 500;
    background-color: #c50206;
    font-size: 15px;
    line-height: 44px;
    position: absolute;
    right:5px;
    top:0;
  }
  .item{
    height:50px;
    border-bottom:1px solid rgb(189, 175, 175);
    color:#666;
  }
  .item p{
    width: 150px;
    font-size:14px;
    line-height:50px;
    position: absolute;
    left:15px;
  }
  .item i{
    position: absolute;
    right:15px;
    line-height: 50px;
  }
  .item img{
    width:28px;
    height:28px;
    padding-top:10px;
  }
</style>
