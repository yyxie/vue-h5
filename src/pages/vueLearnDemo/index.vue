<template>
  <div>
    <input v-model="inputVal" v-on:change="inputValChange">
    <span>{{inputVal}}</span>
    <span>{{count}}</span>
    <Button type="default">默认按钮</Button>
    <Icon name="success" />
    <Cir
      v-model="currentRate"
      color="#13ce66"
      fill="#fff"
      size="120px"
      layer-color="#eee"
      :text="text"
      :rate="rate"
      :speed="100"
      :clockwise="false"
      :stroke-width="60"
    />
  </div>
</template>

<script>
  import {Button, Icon, Circle} from 'vant'

  export default {
    components: {
      'Button': Button,
      'Icon': Icon,
      'Cir': Circle
    },
    data () {
      return {
        inputVal: 'eeeewfff',
        currentRate: 0,
        rate: 30
      }
    },
    computed: {
      count () {
        return this.inputVal.split('').reverse().join('')
      },
      text () {
        return this.currentRate.toFixed(0) + '%'
      }
    },
    methods: {
      inputValChange: function () {
        console.log('change')
      }
    },
    watch: {
      inputVal: function () {
        console.log('watch')
      }
    }
  }
</script>

<style>

</style>
