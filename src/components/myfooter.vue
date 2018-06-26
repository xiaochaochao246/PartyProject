<template>
  <div class="myfooter">
    <router-link to="/index" :class="{active: $route.name ==='index'}">
        <div class="item">
          <i class="iconfont icon-dangwugongkai"></i>
        </div>
        <h2>
          首页
        </h2>
    </router-link>
    <router-link to="/notice" :class="{active: $route.name ==='notice'}">
        <div class="item">
          <i class="iconfont icon-xiazai16"></i>
        </div>
        <h2>
          通知早知道
        </h2>
    </router-link>
    <router-link to="/myparty" :class="{active: $route.name ==='myparty'}">
        <div class="item">
          <i class="iconfont icon-user"></i>
        </div>
        <h2>
          我的党建
        </h2>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "myfooter"
}
</script>

<style scoped>
.myfooter{
  height:44px;
  z-index:2;
  width:100%;
  text-align: center;
  background-color: #fff;
}
.item{
  padding-top:8px;
}
i{
  font-size: 18px;
}
  h2{
    font-weight: 400;
    font-size: 12px;
  }
  a{
    width: 125px;
    color: rgb(104, 100, 100);
  }
  a.router-link-active.active{
    color: #f00;
    border-top:2px solid #f00;
  }
</style>

