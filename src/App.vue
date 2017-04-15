<template>
  <div id="app" class="app">
    <!-- :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')" -->
    <XHeader class='header'>登陆</XHeader>
    <transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
      <router-view></router-view>
    </transition>
    <div v-transfer-dom>
      <loading v-model="isLoading"></loading>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  import {LoadingPlugin, Loading, TransferDom, XHeader} from 'vux'
  import {mapState} from 'vuex'
  Vue.use(LoadingPlugin)
  export default {
    name: 'app',
    directives: {
      TransferDom
    },
    data () {
      return {
        test: 'hihi',
        show: false,
        text: '加载中'
      }
    },
    created: function () {
      console.log('hihihi骄傲');
    },
    methods: {},
    components: {Loading, XHeader},
    computed: {
      ...mapState({
        isLoading: (state) => {
          return state.VuxModule.isLoading
        },
        direction: state => state.VuxModule.direction
      })
    }
  }
</script>

<style lang="scss" scoped type="text/css">
  @import "res/css/reset.css";
  @import "res/css/animate.css";
  @import "app.scss";

  .vux-pop-out-enter-active,
  .vux-pop-out-leave-active,
  .vux-pop-in-enter-active,
  .vux-pop-in-leave-active {
    will-change: transform;
    transition: all 500ms;
    height: 100%;
    top: 46px;
    position: absolute;
    backface-visibility: hidden;
    perspective: 1000;
  }

  .vux-pop-out-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  .vux-pop-out-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .vux-pop-in-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .vux-pop-in-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
</style>
