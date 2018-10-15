<template>
  <div>
    <top>流动党员找组织</top>
    <div class="kong"></div>
    <div class="map-wrap">
      <div id="bd"></div>
    </div>
  </div>

</template>

<script>
  import top from '../components/top.vue'

  export default {
    name: "Map",
    components: {
      top
    },
    data() {
      return {
        map: 'null'
      }
    },
    methods: {
      initMap() {
        //初始化一个地图容器
        var mp = new BMap.Map('bd');
        //创建地图和缩放比例
        mp.centerAndZoom(new BMap.Point(114.012878, 33.010254), 19);
        //创建一个标记点对象
        var marker = new BMap.Marker(new BMap.Point(114.012878, 33.010254));
        //将标记点添加到地图
        mp.addOverlay(marker);
        //增加一个缩放
        var top_right_navigation = new BMap.NavigationControl({
          anchor: BMAP_ANCHOR_TOP_RIGHT,
          type: BMAP_NAVIGATION_CONTROL_ZOOM,
          offset: new BMap.Size(20, 60)
        });
        //将缩放对象添加到地图
        mp.addControl(top_right_navigation);
        //添加一个文字说明
        var label = new BMap.Label("黄淮学院南区", {offset: new BMap.Size(20, -10)});
        //将文字说明用到标记点上
        marker.setLabel(label);
        //初始化一个定位对象
        var geolocationControl = new BMap.GeolocationControl();
        //将定位对象用到地图
        mp.addControl(geolocationControl);
      }
    },
    created() {
      this.$nextTick(() => {
        this.initMap()
      })
    }
  }
</script>

<style scoped>
  html {
    /*width: 100%;*/
    height: 100%;
  }

  body {
    /*width: 100%;*/
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .map-wrap {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
  }

  #bd {
    z-index: 0;
    width: 100%;
    height: 100%;
  }
</style>
