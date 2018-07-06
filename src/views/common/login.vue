<template>
  <div class="login">
    <div class="login-container">
      <el-card>
        <div slot="header" class="clearfix login-header">
          <p>用户登录</p>
        </div>
        <el-form
          autoComplete="on"
          :model="loginForm"
          :rules="loginRules"
          ref="loginForm"
          label-position="left"
          class="card-box login-form">
          <el-form-item prop="username">
            <el-input
              type="text"
              v-model.trim="loginForm.username"
              placeholder="请输入用户名"
              @keyup.enter.native="login">
              <template slot="prepend"><i class="fa fa-user"></i></template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              placeholder="请输入密码"
              v-model.trim="loginForm.password"
              @keyup.enter.native="login">
              <template slot="prepend"><i class="fa fa-lock"></i></template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" style="width: 100%" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
     <Footer></Footer>
  </div>
</template>
<script>
import "@/assets/css/login.css";
import Footer from "@/components/layout/footer";
import Utils from "@/utils";
import { _post } from "@/axios/api";

export default {
  components: {
    Footer
  },
  data() {
    const loginForm = {
      username: "",
      password: ""
    };
    return {
      loginForm: { ...loginForm },
      loginRules: {
        username: []
      }
    };
  },
  computed: {},
  watch: {},
  methods: {
    login() {
      let arg = {
        url: "https://www.apiopen.top/weatherApi?city=上海"
      };
      _post(arg)
        .then(res => {
          console.log(res);
          Utils.setCookies("token", "2122121212", 1);
          Utils.setCookies("role", "admin", 1);
          const path = this.$route.query.redirect
            ? this.$route.query.redirect
            : "/index";
          this.$router.push({ path: path });
        })
        .catch(err => {});
    }
  },
  created() {},
  mounted() {}
};
</script>
<style>


</style>

