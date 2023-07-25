<template>
    <div class="login-page">
      <div class="background-container"></div>
      <div class="content">
        <h1 class="login-title">车辆智能监控系统</h1>
        <form @submit.prevent="login" class="login-form">
          <div class="form-group">
            <label for="username" class="label">用户名:</label>
            <input type="text" id="username" v-model="username" required>
          </div>
          <div class="form-group">                                            
            <label for="password" class="label">密码:</label>
            <input type="password" id="password" v-model="password" required>         
          </div>  
          <button type="submit" class="login-button">登录</button>
        </form>
      </div>
    </div>
  </template>
  
  <script> 
  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login() {
        if (this.username === 'admin' && this.password === 'admin') {
          // 用户名和密码正确，跳转至主页
          this.$router.push('/home')
        } else {
          // 用户名或密码错误，弹出错误提示信息
          alert('用户名或密码错误')
        }
      }
    }
  }
  </script>
  
  <style src="@/assets/css/login-page.css" scoped></style>