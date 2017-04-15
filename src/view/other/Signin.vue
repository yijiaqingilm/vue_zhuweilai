<template>
  <div id="signin">

    <label for="">{{test}}</label>

    <div><label for="">用户名</label><input type="text" v-model="user.username"></div>
    <div><label for="">密码</label><input type="text" v-model="user.password"></div>
    <div @click="login()" class="login">
      登陆
    </div>
    <div>
      注册
    </div>
    <div>
      <router-link to="/user/profile">跳转到user</router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import router from '@/router'
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
          console.log(router);
          console.log('xxx');
          router.push({path: 'user/profile', query: {userId: 123}});
        });
      }
    },
    components: {}
  }
</script>

<style lang="scss" scoped type="text/css">
  #signin {
    width: 100%;
  }

  .header {
    background-color: black;
  }

  .login {
    width: 100px;
    margin: 0 auto;
    text-align: center;
  }
</style>
