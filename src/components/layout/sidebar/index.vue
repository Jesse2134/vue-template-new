<template>
  <el-aside class="aside">
    <div class="collapse-bar"
         :class="{retract:collapsed}"
         @click="change">
      <i class="fa fa-cog fa-bars"></i>
    </div>

    <el-menu
      router
      @select="select"
      :unique-opened="true"
      class="sub-menu"
      :default-active="defaultActive"
      :collapse="collapsed"
      ref="AsideElMenu"
      background-color="#333743"
      text-color="#fff">
      <!-- 菜单项 -->
      <sidebar-item :routes="asideRoutes"></sidebar-item>
    </el-menu>
  </el-aside>
</template>

<script>
  import SidebarItem from "./SidebarItem";

  export default {
    name: "Sidebar",
    components: { SidebarItem },
    props: {
      isCollapse: {
        type: Boolean,
        default: false
      },
      asideRoutes: {
        type: Array
      }
    },
    watch: {
      $route: {
        handler() {
          this.changeActive();
        },
        deep: true
      }
    },
    data() {
      return {
        collapsed: false,
        defaultActive: ""
      };
    },
    methods: {
      change() {
        this.collapsed = !this.collapsed;
      },
      select(index){
        if(index !== this.$route.path){
          this.$root.startLoading('加载中...');
        }
      },
      changeActive() {
        let matched = this.$route.matched;
        if(matched && matched.length >= 1){
          this.$refs[
            "AsideElMenu"
            ].activeIndex = this.defaultActive
            = matched[matched.length-1].redirect || matched[matched.length-1].path;
        }
      }
    },
    mounted() {
      this.collapsed = this.isCollapse;
      this.changeActive();
    }
  };
</script>
