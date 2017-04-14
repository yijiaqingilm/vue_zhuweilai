<template>
  <div id="app" class="app">
    <router-view></router-view>
  </div>
</template>

<script>

  let setArr = function () {
    let result = [];
    let minVal = 2;
    let maxVal = 32;
    for (let i = minVal; i < maxVal; i++) {
      result.push(i);
    }
    return result;
  }
  let fn = function (n) {
    let result = [];
    let arr = setArr();
    for (let i = 0; i < n; i++) {
      var index = Math.floor(Math.random() * arr.length);
      result.push(arr[index]);
      arr.splice(index, 1);
    }
    return result;
  }
  console.log(fn(30));
  export default {
    name: 'app'
  }
</script>

<style lang="scss" scoped type="text/css">
  @import "res/css/reset.css";
  @import "res/css/animate.css";
  @import "app.scss";
</style>
