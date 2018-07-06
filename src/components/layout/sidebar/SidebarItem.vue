<template>
  <section>
    <template v-for="route in routes" v-if="route.meta && !route.meta.hidden && route.children">
      <!-- 单层路由 -->
      <el-menu-item v-if="hasOneShowingChildren(route.children) && !route.children[0].children"
                    :index="route.path + '/' + route.children[0].path" :key="route.path">
        <i :class="route.iconClass"></i>
        <span slot="title">{{route.children && route.children[0].meta.title}}</span>
      </el-menu-item>

      <el-submenu v-if="route.children && !hasOneShowingChildren(route.children)" :index="route.path" :key="route.name">
        <template slot="title">
          <!--外层-->
          <i :class="route.iconClass" v-if="!inner"></i>
          <span slot="title" :class="{'outer-title':!inner}">{{route.meta&&route.meta.title}}</span>
        </template>

        <template v-for="child in route.children" v-if="child.meta&&!child.meta.hidden">
          <!--递归-->
          <sidebar-item v-if="child.children&&child.children.length > 0" :routes="[child]" :key="child.path" :inner="true"></sidebar-item>

          <!--当前-->
          <el-menu-item v-else :index="route.path+ '/'+ child.path" :key="child.path">
            <!--<i :class="child.iconClass"></i>-->
            <span slot="title">{{child.meta&&child.meta.title}}</span>
          </el-menu-item>
        </template>
      </el-submenu>

    </template>
  </section>
</template>
<script>
  export default {
    name: "SidebarItem",
    props: {
      routes: {
        type: Array
      },
      inner: Boolean
    },
    methods: {
      hasOneShowingChildren(children) {
        const showingChildren = children.filter(item => {
          return !item.meta.hidden
        });
        return showingChildren.length === 1
      }
    }
  };
</script>
<style>

</style>
