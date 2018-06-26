<template>
  <div class="heart">
    <top>心得总结</top>
    <div class="content" v-show="noup">
      <div class="img-wrap" >
        <div v-for="item in arr">
          <img :src="item.img">
        </div>
      </div>
      <el-upload
        class="avatar-uploader"
        action="https://upload-z1.qiniup.com"
        :show-file-list="false"
        :on-success="upload"
        :data="{token:token}">
        <img v-if="formData.img" :src="formData.img" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </div>
    <mt-button size="large" type="danger" @click="heartadd" v-show="noup">提交审核</mt-button>
    <div class="container" v-show="up">
      <div class="im">
      <img src="../assets/img/reviewing.png" alt="">
      </div>
      <p>正在审核中.....</p>
      <div class="btn" @click="back">关闭</div>
    </div>
  </div>
</template>
<script>
  import top from "../components/top.vue"
  export default {
    name: "heart",
    data() {
      return {
        formData:{
          img:''
        },
        arr:{},
        token: '',
        noup:true,
        up:false
      }
    },
    components: {
      top
    },
    methods: {
      back(){
        this.$router.go(-1)
      },
      upload(res) {
        this.formData.img = "http://p6ysctecz.bkt.clouddn.com/" + res.key
      },
      getToken() {
        this.$axios.qiniuGet().then(res => {
          this.token = res.data;
        })
      },
      heartadd(){
        this.$axios.post('heartadd',this.formData).then(res=>{
          if(res.data.status==0){
            this.up=true;
            this.noup=false;
          }else if(res.data.status==2 || res.data.status==1 ||
            !res.data.status){
            this.noup=true;
            this.up=false;
          }
        })
      },
      getheart(){
        this.$axios.get('getHeart').then(res=>{
          this.arr=res.data.data;
        })
      }
    },
    created() {
      this.getToken();
      this.getheart();
    }
  }
</script>
<style>
  .avatar-uploader .el-upload {
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader-icon {
    border: 1px dashed #d3caca;
    margin: 10px 0 10px 10px;
    font-size: 28px;
    color: #b8bec7;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  .avatar {
    margin: 10px 0 10px 10px;
    width: 100px;
    height: 100px;
    display: block;
  }
</style>
<style scoped>
  .img-wrap{
    display: flex;

    flex-direction:row;
    flex-wrap: wrap;
    height:100%;
    width:375px;
  }
  .img-wrap img {
    width: 100px;
    height: 100px;
    margin: 10px 0 10px 20px;
  }
  .heart {
    overflow: hidden;
  }
  .content {
    display: flex;
    flex-flow: column;
    padding-top: 44px;
  }
  .container{
    margin-top: 80px;
    width:375px;
    height:300px;
  }
  .container img{
    width:120px;
    height:120px;
    margin:0 128px;
  }
  .container p{
    padding-top:20px;
    height:20px;
    font-size:14px;
    text-align: center;
  }
  .btn{
    width:200px;
    height:50px;
    line-height: 50px;
    background-color:#c50206;
    text-align: center;
    color: #fff;
    margin:85px 90px;
    border-radius: 10px;
    font-size: 16px;
   }
</style>


