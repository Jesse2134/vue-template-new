<template>
<el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item> <router-link to="/home"><i class="fa fa-home"></i> </router-link></el-breadcrumb-item>
  <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index">{{item.title}}</el-breadcrumb-item>
</el-breadcrumb>
</template>
<script>
export default {
  name: "Breadcrumb",
  data: () => ({
    breadcrumbList: []
  }),
  watch: {
    $route: {
      handler() {
        this.getBreadcrumb();
      },
      deep: true
    }
  },
  methods: {
    getBreadcrumb() {
      this.breadcrumbList = [];
      const matched = this.$route.matched;
      if (matched.length <= 2) {
        this.breadcrumbList.push({
          title: this.$route.meta.title
        });
      } else if (matched.length > 2) {
        for (let i = 0; i < matched.length; i++) {
          if (i > 0 && matched[i].meta.title === matched[i - 1].meta.title) {
            continue;
          } else {
            this.breadcrumbList.push({
              title: matched[i].meta.title
            });
          }
        }
      }
    }
  },
  mounted() {
    this.getBreadcrumb();
  }
};
</script>
<style>
</style>
