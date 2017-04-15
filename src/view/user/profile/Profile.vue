<template>
  <div>
    <div>this is user profile ddd</div>
    <div @click="showAlert()">测试 alert</div>
  </div>
</template>

<script type="text/ecmascript-6">

  import router from '@/router'
  import Vue from 'vue'
  import {AlertPlugin} from 'vux'
  Vue.use(AlertPlugin);
  export default {
    data () {
      return {}
    },
    created: function () {
      console.log('created');
      console.log(this.$route)
      console.log(this.$route.params)
      setTimeout(function () {
        console.log('执行一段 异步 请求');
      }, 3000)
    },
    methods: {
      showAlert: function () {
        this.$vux.alert.show({
          title: 'Vux is Cool',
          content: 'Do you agree?',
          onShow () {
            console.log('Plugin: I\'m showing')
          },
          onHide () {
            console.log('Plugin: I\'m hiding')
          }
        })
      },
      components: {}
    }
  }
</script>

<style lang="scss" scoped type="text/css">
</style>
