import Vue from 'vue'
import myAxios from './base'
import mine from './base'
import allApi from './allApi'
import router from '.././router'
import { Toast } from 'mint-ui';
var xhr={
  get:function (url,params) {
    return new Promise((resolve, reject) =>{
      myAxios.get(allApi[url],{params}).then(res=>{
        //console.log(res.data);
        // if(res.data.code==200){
          resolve(res)
       //  }
       //  else {
       //    router.push({path:'/login'})
       // }
      }).catch((err=>{
        console.log(err)
        reject(err)
      }))
    })
  },
  post:function (url,data) {
    return new Promise((resolve,reject) => {
      myAxios.post(allApi[url],data).then(res => {
        resolve(res.data)
      }).catch((err) => {
        console.log(err)
        reject(err)
      })
    })
  },
  qiniuGet(){
    return new Promise((resolve,reject) => {
      myAxios.get('http://localhost:3000/upload').then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

Vue.prototype.$axios=xhr;
