<template>
  <el-footer class="footer" height="40px">&nbsp;&nbsp;
    {{copyRight}}
    <small><a href="https://pc.qq.com/detail/1/detail_2661.html" target="_blank" title="下载Chrome安装包">{{download}}</a></small>
    <small>
      &nbsp;&nbsp;{{support}}
      <a class="logo-meishu" href="http://www.meishutech.com" target="_blank" :title="meishu">{{meishu}}</a>
    </small>
  </el-footer>
</template>
<script>
import "@/assets/css/footer.css";

export default {
  data() {
    return {
      copyRight: "©2018 中国东方航空",
      download: "建议使用 Chrome60+ (点击下载)",
      support: "技术支持:",
      meishu: "美数信息科技"
    };
  }
};
</script>

