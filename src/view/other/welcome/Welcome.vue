<!--页面 welcome -->
<template>
  <div class="welcome">
    <div class="wrap">
      <div class="register">立即注册</div>
      <div class="login">
        <div class="label">已有筑未来账号</div>
        <div class="login" ><router-link to="/signin">立即登录</router-link></div>
        <div class="test">xxxx</div>
        <div class="test2">dddd</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {}
    }
  }
</script>

<style lang="scss" scoped type="text/css">
  @import "welcome.scss";
  @import "test.css";
  .test2{
    width:200px;
    height:300px;
  }
</style>
