<template>
  <div class="life">
      <top>掌上组织生活</top>
      <div class="wrap">
        <img src="../assets/img/timg.jpg" alt="">
        <div class="box">
            <div class="row-one">
                <router-link to="/study">
                  <div class="item">
                    <img src="../assets/img/icon1.png" alt="">
                    <p>政治学习</p>
                  </div>
                </router-link>
                
                  <div class="item" @click="report">
                    <img src="../assets/img/icon2.png" alt="">
                    <p>思想汇报</p>
                  </div>
                  <div class="item" @click="heart">
                    <img src="../assets/img/icon3.png" alt="">
                    <p>心得总结</p>
                  </div>
            </div>
            <div class="row-two">
                  <div class="item">
                    <img src="../assets/img/icon4.png" alt="">
                    <p>民主评议</p>
                  </div>
                <router-link to="/map">
                  <div class="item">
                    <img src="../assets/img/icon5.png" alt="">
                    <p>流动党员找组织</p>
                  </div>
                </router-link>
            </div>
        </div>
      </div>
  </div>
</template>
<script>
import top from "../components/top.vue"
export default {
  name:"life",
  components:{
      top
  },
  methods:{
    report(){
      this.$axios.get('islogin').then(res=>{
        if(res.data.code==200){
          this.$router.push('/reports')
        }else{
          this.$router.push('/login')
        }
      })
    },
    heart(){
      this.$axios.get('islogin').then(res=>{
        if(res.data.code==200){
          this.$router.push('/heart')
        }else{
          this.$router.push('/login')
        }
      })
    }
  }
}
</script>
<style scoped>
.life{
    overflow: hidden;
}
.wrap{
    padding-top:44px;
}
.wrap img{
    width:375px;
    height:186px;
}
.item{
    display: flex;
    align-content: space-around;
    justify-content: space-around;
    flex-flow: column;
    width:125px;
    height:130px;
}
.row-one, .row-two{
    padding-top:10px;
    display: flex;
    flex-flow: row;
    width:375px;
    height:130px;
}
.item img{
    padding-left:20px;
    height:85px;
    width:85px;
}
p{
    text-align: center;
    color:#000;
}
</style>


