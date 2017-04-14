<template>
  <div id="signin">
    <label for="">{{test}}</label>

    <div><label for="">用户名</label><input type="text" v-model="user.username"></div>
    <div><label for="">密码</label><input type="text" v-model="user.password"></div>
    <div @click="login()">
      登陆
    </div>
    <div>
      注册
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        user: {
          username: '',
          password: ''
        },
        test: 'hi'
      }
    },
    methods: {
      login: function () {
        this.$http.post('/zhuweilai/api/user/login', this.user).then((response) => {
          var result = response.body;
          var data = result.data;
          console.log('hihi');
          console.log(data);
        });
      }
    }
  }
</script>

<style lang="scss" scoped type="text/css">
</style>
