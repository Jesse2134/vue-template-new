<template>
  <section>
    <el-header>
      <!--<a class="logo" href="/" :title="title"><img src="@/assets/images/logo.png" alt="DataShow"/>-->
      <!--</a>-->
      <a href="#" class="logo">
        <small>Template</small>
      </a>
      <el-dropdown class="user-info" trigger="click">
        <span class="el-dropdown-link">
          admin
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>修改密码</el-dropdown-item>
          <el-dropdown-item>
            <div @click="logout">退出登录</div>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
  </section>
</template>
<script>
export default {
  name: "DHeader",
  props: {
    title: {
      type: String,
      required: true
    },
    logout: {
      type: Function
    }
  }
};
</script>

