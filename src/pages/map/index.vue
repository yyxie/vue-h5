<template>
  <div class="amap-page-container">
    <el-amap vid="amapDemo" :center="center" :map-manager="amapManager" :zoom="zoom" :events="events" class="amap-demo">
    </el-amap>
  </div>
</template>
<script>
  /* eslint-disable no-undef,no-unused-vars */

  // NPM 方式
  import {AMapManager} from 'vue-amap'

  let amapManager = new AMapManager()

  export default {
    data: function () {
      return {
        zoom: 12,
        center: [121.59996, 31.197646],
        amapManager,
        events: {
          init: function (map) {
            AMapUI.loadUI(['overlay/SimpleMarker'], function (SimpleMarker) {
              const marker = new SimpleMarker({
                map: map,
                position: map.getCenter()
              })
            })
          }
        }
      }
    }
  }
</script>
<style>
  .amap-page-container .amap-demo {
    height: 300px;
  }
</style>
