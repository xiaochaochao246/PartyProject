<template>
    <div class="info">
      <div class="top">
        <div class="top">
          <i class="iconfont icon-fanhui" @click="back4" style="position: absolute;left:10px;"></i>
          <p>个人信息修改</p>
          <p class="btt" @click="saveEdit">保存</p>
        </div>
      </div>
      <div class="container">
        <div class="item">
          <p>头像</p>
          <el-upload
            class="avatar-uploader"
            action="https://upload-z1.qiniup.com"
            :show-file-list="false"
            :on-success="upload"
            :data="{token:token}">
            <img v-if="formData.avatar" :src="formData.avatar" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
        <div class="item">
          <p>姓名</p>
          <input type="text" class="in" dir="rtl" v-model="formData.userName">
        </div>
        <div class="item">
          <p>身份证</p>
          <input type="text" class="in" dir="rtl" v-model="formData.idCardNumber">
        </div>
        <div class="item">
          <p>家庭住址</p>
          <input type="text" class="in" dir="rtl" v-model="formData.homeAddress">
        </div>
        <div class="item">
          <p>工作地址</p>
          <input type="text" class="in" dir="rtl" v-model="formData.workAddress">
        </div>
        <div class="item">
          <p>民族</p>
          <input type="text" class="in" dir="rtl" v-model="formData.nation">
        </div>
        <div class="item">
          <p>微信号</p>
          <input type="text" class="in" dir="rtl" v-model="formData.weChat">
        </div>
        <div class="item">
          <p>qq号</p>
          <input type="text" class="in" dir="rtl" v-model="formData.qqNumber">
        </div>
        <div class="item">
          <p>性别</p>
          <span class="icon">
            <input type="radio" name="sex" value="1" v-model="formData.sex">男
            <input type="radio" name="sex" value="0" v-model="formData.sex">女
          </span>
        </div>
        <div class="item">
          <p>最高学历</p>
          <input type="text" class="in" dir="rtl" v-model="formData.education">
        </div>
        <div class="item">
          <p>职称</p>
          <input type="text" class="in" dir="rtl" v-model="formData.jobTitle">
        </div>
        <div class="item">
          <p>薪资水平</p>
          <input type="text" class="in" dir="rtl" v-model="formData.emolument">
        </div>
        <div class="item">
          <p>入党时间</p>
          <el-date-picker
            format="yyyy/MM/dd"
            value-format="yyyy-MM-dd"
            v-model="formData.enterPartyTime"
            type="date"
            style="position:absolute;right:15px;width:135px; background-color: #f5f5f3">
          </el-date-picker>
        </div>
        <div class="item">
          <p>最后缴纳党费时间</p>
          <el-date-picker
            class="times"
            format="yyyy/MM/dd"
            value-format="yyyy-MM-dd"
            v-model="formData.paymentTime"
            type="date"
            style="position:absolute;right:15px; width:135px; background-color:#f5f5f3;">
          </el-date-picker>
        </div>
        <div class="item">
          <p>当前身份</p>
          <select name="partyStatus" id="partyStatus" v-model="formData.partyStatus">
            <option value="1">党员</option>
            <option value="2">预备党员</option>
            <option value="3">积极分子</option>
          </select>
        </div>
      </div>
    </div>
</template>

<script>
  import {Toast} from 'mint-ui'
    export default {
        name: "info-edit",
      data(){
          return{
            formData:{
              avatar:'',
              userName:'',
              idCardNumber:'',
              homeAddress:'',
              workAddress:'',
              nation:'',
              weChat:'',
              qqNumber:'',
              sex:'',
              education:'',
              jobTitle:'',
              emolument:'',
              enterPartyTime:'',
              paymentTime:'',
              partyStatus:''
            },
            token:''
          }
      },
      methods:{
        back4(){
          this.$router.go(-1)
        },
        upload(res) {
          this.formData.avatar = "http://p6ysctecz.bkt.clouddn.com/" + res.key
        },
        getToken() {
          this.$axios.qiniuGet().then(res => {
            this.token = res.data;
          })
        },
        getData(){
          this.$axios.get('getpartys',{id:this.$route.query.id}).then(res=>{
            this.formData=res.data.data[0]
          })
        },
        saveEdit(){
          let params={
            ...this.formData,
            id:this.$route.query.id
          }
          //上述代码约等于下述代码
          // let params = this.formData;
          // params.id = this.$route.query.id
          this.$axios.post('updatepartys', params).then(res => {
            if(res.code == 200){
              Toast("党员修改成功");
              setTimeout(() => {
                this.$router.push('/inform')
              },1000)
            }
          })
        }
      },
      created() {
        this.getToken();
        this.getData();
      }
    }
</script>
<style>
  .avatar-uploader .el-upload {
    border-radius: 6px;
    cursor: pointer;
    /*position: relative;*/
    overflow: hidden;
  }
  .avatar-uploader-icon {
    border: 1px dashed #d3caca;
    /*margin: 10px 0 10px 10px;*/
    position: absolute;
    right:15px;
    line-height: 28px;
    font-size: 28px;
    color: #b8bec7;
    width: 28px;
    height: 28px;
    text-align: center;
  }
  .avatar {
    position: absolute;
    right:15px;
    line-height: 50px;
    /*margin: 10px 0 10px 10px;*/
    width: 28px;
    height: 28px;
    display: block;
  }
</style>
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
    font-size:14px;
    line-height:50px;
    position: absolute;
    left:15px;
  }
  .item input.in{
    width:200px;
    height:50px;
    position: absolute;
    right:15px;
    border:0;
    outline: none;
    background-color: #f5f5f3;
  }
  .item span.icon{
    font-size: 14px;
    position: absolute;
    right:15px;
    line-height:50px;
  }
  .item select{
    height:50px;
    width:80px;
    position: absolute;
    right:15px;
    line-height:50px;
    border:0;
    outline: none;
    color:#666;
    background-color: #f5f5f3;
  }
  .item select option{
    overflow: hidden;
  }
</style>
