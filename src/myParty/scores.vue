<template>
    <div class="score">
      <top>个人量化积分</top>
      <div class="container">
        <div class="banner">
          <p>51</p>
        </div>
        <div class="content">
          <router-link to="/scores-detail">
             <div class="item">
               <div class="item1">
                 <img src="../assets/img/lxjf.png" alt="">
               </div>
               <p>积分明细</p>
               <i class="iconfont icon-right"></i>
             </div>
          </router-link>
          <div class="it ite">
            <p>积分规则</p>
            <i class="iconfont icon-question"></i>
          </div>
          <div class="it">
            <p>登录APP</p>
            <i>10</i>
          </div>
          <div class="it">
            <p>查看新闻</p>
            <i>3</i>
          </div>
          <div class="it">
            <p>上交思想汇报经审核通过</p>
            <i>3</i>
          </div>
          <div class="it">
            <p>上交个人总结经审核通过</p>
            <i>3</i>
          </div>
          <div class="it">
            <p>上交心得总结经审核通过</p>
            <i>3</i>
          </div>
          <div class="it">
            <p>查看新闻</p>
            <i>0.1</i>
          </div>
          <div class="it">
            <p>查看党史</p>
            <i>10</i>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import top from '../components/top'
    export default {
        name: "scores",
      components:{
          top
      },
    }
</script>

<style scoped>
.score{
  overflow: hidden;
}
  .container{
    padding-top:44px;
  }
  .banner{
    position: relative;
    height:150px;
    background: url('../assets/img/jifen.png');
    color:#fff;
    background-size: 100%;
  }
  .banner p{
   text-align: center;
    position: absolute;
    bottom:50px;
    right:140px;
  }
.content{
  display: flex;
  flex-flow: column;
  width:375px;
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
  width:100px;
  padding-left:15px;
  line-height: 50px;
  font-size: 16px;
}
.content .item i{
  position: absolute;
  right:10px;
  line-height: 50px;
}
.it{
  height:34px;
  position: relative;
  border-bottom:1px solid rgb(189, 175, 175);
}
.it.ite{
  height:34px;
  position: relative;
  background-color: #d6d6d6;
  border-bottom:1px solid rgb(189, 175, 175);
}
.it p{
  width:200px;
  line-height:34px;
  color:#666;
}
  .it i{
    position: absolute;
    right:20px;
    top:7px;
    color:#f00;
    float:right;
    font-size:16px;
  }
</style>
