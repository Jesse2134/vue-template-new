<template>
  <el-container class="layout-container">
    <el-header class="header">
      <router-link to="/index" tag="div">
        <a class="logo" :title="title"><img src="@/assets/images/logo.svg" alt="中国东方航空"/>
          <small>{{title}}</small>
        </a>
      </router-link>
      <el-dropdown class="user-info">
        <span class="el-dropdown-link">
          {{user && user.username}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <div @click="openUpdatePassDialog()">
              重置密码
            </div>
          </el-dropdown-item>
          <el-dropdown-item>
            <div @click="logout">
              退出登录
            </div>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-container>
      <Sidebar
        :isCollapse="isCollapse"
        v-if="asideShow"
        ref="AsideMenu"
        :asideRoutes="asideRoutes"
        collapse-transition>
      </Sidebar>
      <el-container>
        <el-main>
          <!--面包屑-->
          main
        </el-main>
      </el-container>
    </el-container>
    <Footer></Footer>
  </el-container>
</template>
<script>
  import '@/assets/css/layout.css'
  import Sidebar from "@/components/layout/sidebar";
  import Footer from "@/components/layout/footer";
  import Routers from "@/router/module";

  export default {
    components: {
      Sidebar,
      Footer
    },
    data() {
      return {
        title: 'Template',
        user: {
          username: 'admin'
        },
        asideShow: true,
        isCollapse: false,
        asideRoutes: ''
      }
    },
    methods: {
      logout() {

      },
      openUpdatePassDialog() {

      }
    },
    created(){
      this.asideRoutes = Routers;
    }
  }
</script>
