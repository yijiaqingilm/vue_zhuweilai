<template>
  <div id="loading">
    {{show}}
    <div class="modal" v-if="show===true">
      <div class="loading"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {}
    },
    props: ['show'],
    methods: {}
  }
</script>

<style lang="scss" scoped type="text/css">
  @import "loading.scss";
</style>
