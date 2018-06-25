<template>
  <div class="container" @click="clickHandle('test click', $event)">
    <Swipe :autoplay="3000">
      <SwipeItem v-for="(image, index) in images" :key="index">
        <img v-lazy="image" class="swipe-img"/>
      </SwipeItem>
    </Swipe>
    <ul
      v-waterfall-lower="loadMore"
      waterfall-disabled="disabled"
      waterfall-offset="400"
    >
      <li v-for="(item, index) in list" :key="index">
        <Card
          title="标题"
          desc="描述"
          num="2"
          price="2.00"
          :thumb="imageURL"
        >
          <div slot="footer">
            <Button size="mini">{{item}}</Button>
            <Button size="mini">{{item}}</Button>
          </div>
        </Card>
      </li>
    </ul>
  </div>
</template>

<script>
  import card from '@/components/card'
  import {Swipe, SwipeItem, Card, Waterfall} from 'vant';

  export default {
    data () {
      return {
        motto: 'Hello World',
        userInfo: {},
        images: [
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527777119153&di=ded579e6a0b02905fa25ceaa54869a04&imgtype=0&src=http%3A%2F%2Fimage1.92bizhi.com%2Fart_vector-widescreen--01_06-2560x1600.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527777119153&di=f13faebe69df0c5f48b2594bbb8722b6&imgtype=0&src=http%3A%2F%2Fdl.bizhi.sogou.com%2Fimages%2F2012%2F04%2F11%2F155553.jpg'
        ],
        list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        disabled: false,
        imageURL: 'https://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg'
      }
    },

    components: {
      card,
      Swipe,
      SwipeItem,
      Card,
      Waterfall
    },
    directives: {
      WaterfallLower: Waterfall('lower')
    },
    methods: {
      clickHandle (msg, ev) {
        console.log('clickHandle:', msg, ev)
      },
      loadMore () {
        this.disabled = true;
        setTimeout(() => {
          for (let i = 0; i < 5; i++) {
            this.list.push(this.list.length);
          }
          this.disabled = false;
        }, 200);
      }
    },

    created () {
    },
    computed: {}
  }
</script>

<style scoped>
  .container {
    color: red;
  }
  .swipe-img {
    width:100%;
  }
</style>
