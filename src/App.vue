<template>
  <div id="app">
    <img src="./assets/logo.png">
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

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
