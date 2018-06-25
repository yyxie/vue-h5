<template>
  <div class="counter-warp">
    <p>Vuex counter：{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
    <div class="test-border">
      <div>
        fffff
      </div>
    </div>

    <a href="/pages/index/main" class="home">去往首页</a>
    <view class="picker">
      当前选择
    </view>
  </div>
</template>

<script>
  // Use Vuex
  import store from './store'
  import './test.less'

  export default {
    data () {
      return {
        a: '1'
      }
    },
    computed: {
      count () {
        return this.a + store.state.count
      }
    },
    methods: {
      increment () {
        store.commit('increment')
      },
      decrement () {
        store.commit('decrement')
      },
      bindDateChange () {
        console.log('ddddd')
      }
    }
  }
</script>
<style>
  .counter-warp {
    text-align: center;
    margin-top: 100px;
  }

  .home {
    display: inline-block;
    margin: 100px auto;
    padding: 5px 10px;
    color: blue;
    border: 1px solid blue;
  }

  .test-border {
    background-color: dodgerblue;
    width: 500px;
    height: 500px;
    margin-top: 0.1px;
  }

</style>
