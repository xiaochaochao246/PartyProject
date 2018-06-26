<template>
  <div class="score-detail">
    <top>积分明细</top>
    <div class="container">
      <div class="item" v-for="item in arr">
        <p>{{item.typeName}}</p>
        <span>{{item.createTime | time}}</span>
        <i>+{{item.score}}</i>
      </div>
    </div>
  </div>
</template>

<script>
  import top from '../components/top'
    export default {
        name: "score-detail",
      data(){
          return{
            arr:{}
          }
      },
      components:{
          top
      },
      methods:{
          getScore(){
            this.$axios.get('getScores').then(res=>{
              //console.log(res.data)
              this.arr=res.data.data;
            })
          }
      },
      created(){
          this.getScore();
      }
    }
</script>

<style scoped>
.score-detail{
  overflow: hidden;
}
.container{
  padding-top:44px;
}
  .item{
    width:343px;
    height:40px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    border:1px solid #ddd;
    padding:16px;
    border-bottom:1px solid rgb(189, 175, 175);
    position: relative;
    color:#444;
    background-color: #fff;
  }
  .item p{
    font-size:18px;

    margin-bottom:5px;
  }
  .item span{
    width:150px;
  }
  .item i{
    position: absolute;
    right:30px;
    top:15px;
    font-size:14px;
    color:#f00;
  }
</style>
