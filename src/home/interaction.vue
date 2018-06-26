<template>
  <div class="interaction">
    <top>党员云互动</top>
    <div class="container">
      <div class="item" v-for="item in arr" :key="item._id">
        <div class="item-head">
          <img :src="item.userAvatar" alt="">
          <div class="right">
            <p>{{item.userName}}</p>
            <span class="iconfont icon-shijianzhongbiao"></span>
            <span>{{item.updateTime | time}}</span>
            <span class="iconfont icon-laba"></span>
            <span>公开</span>
          </div>
          <div class="inter">
            党员互动
          </div>
        </div>
        <div class="content">
          {{item.content}}
        </div>
        <router-link :to="'/interact-detail?id='+item._id">
          <div class="item-bott">
            <i class="iconfont icon-xiaoxi"></i>
            <p>回复</p>
          </div>
        </router-link>
      </div>
      <div class="add" @click="chuxian">
        <i class="iconfont icon-jiahao"></i>
      </div>
    </div>
    <div class="int" v-show="show">
          <textarea name="content" v-model="formData.content" id="" cols="49" rows="10" style="outline: none;border:0;">
          </textarea><br/>
        <input type="submit" value="提交" @click="interactadd">
        <input type="button" value="取消"
           @click="isShow"    style="position: absolute;right: 15px;">
    </div>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui'
  import top from '../components/top'
    export default {
        name: "interaction",
      data(){
        return{
          formData:{
            content:'',
          },
          show:false,
          arr:{}
        }
      },
      components:{
          top
      },
      methods:{
        chuxian(){
          this.show=true;
        },
        interactadd(){
          this.$axios.post('interadd',this.formData).then(res=>{
            if(res.code==200){
              this.show=false;
              Toast(res.msg);
            }else{
              Toast(res.msg);
            }
          })
        },
        isShow(){
          this.show=false;
        },
        getData(){
          this.$axios.get('getInter').then(res=>{
            this.arr=res.data.data;
          })
        }
      },
      created(){
          this.getData();
      }
    }
</script>

<style scoped>
.container{
  position: relative;
  margin-top:44px;
  overflow: hidden;
}
  .item .item-head img{
    width:33.33px;
    height:33.33px;
    border-radius: 30px;
  }
  .item .item-head{
    display: flex;
    flex-direction: row;
  }
.item .item-head .inter{
  width:66px;
  height: 26px;
  border-radius: 10px;
  border:1px solid #f00;
  color:#f00;
  font-size: 12px;
  line-height: 26px;
  text-align: center;
  position: absolute;
  right:15px;
}
  .item .item-head .right{
    padding-left:10px;
  }
.item .item-head .right p{
  font-size: 18px;
  color:#000;
}
.item .content{
  width:100%;
  padding:10px 0;
}
.item .item-bott{
  position: absolute;
  right:15px;
  color:#000;
  display: flex;
  flex-direction: row;
  width:55px;
  justify-content: space-around;
}
  .item{
    background-color: #fff;
    margin-bottom:10px;
    padding:16px;
  }
  .add{
    position: fixed;
    bottom:100px;
    right: 10px;
    padding:5px;
  }
  .add i{
    font-size: 61px;
    color:#f00;
  }
.int{
  overflow: hidden;
  width:355px;
  position: fixed;
  bottom:0;
  background-color: #fff;
  padding:10px 10px 0 10px;
}
  .int textarea{
    background-color: #f1f1f1;
  }

</style>
