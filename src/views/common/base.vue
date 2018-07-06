<script>
import Utils from "@/utils";

export default {
  data() {
    return {
      baseLoading: null
    };
  },
  methods: {
    // 全局loading
    closeLoading() {
      this.baseLoading && this.baseLoading.close();
    },
    // 启动全局loading
    startLoading(text) {
      this.baseLoading = this.$loading({
        lock: true,
        text: text,
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.2)"
      });
      setTimeout(() => {
        this.baseLoading.close();
      }, 2000);
    },

    // 格式化时间
    formatDate(params) {
      return Utils.formatDate(new Date(params), "yyyy-MM-dd hh:mm:ss");
    },

    // 获取当地时间
    getLocalDate(time) {
      return Utils.getLocalDate(time);
    },

    // message 信息提示
    msgSuccess(message) {
      this.$message.success({
        message: message
      });
    },

    msgError(message) {
      this.$message.error({
        message: message
      });
    },

    msgWarning(message) {
      this.$message.warning({
        message: message
      });
    },

    msgInfo(message) {
      this.$message.info({
        message: message
      });
    },

    // 表单验证未通过
    validWarning() {
      this.messageWarning("请检查您的输入");
    },

    // 请求失败
    sysError(err) {
      if (err.response && err.response.status === 401) {
        let user = Cookie.set("user");
        this.$message.warning({
          message: "登录已失效, 请重新登录"
        });
        this.$router.replace({
          path: "/login",
          query: { redirect: this.$route.path }
        });
        Cookie.set("user");
      } else if (err.response && err.response.status === 500) {
        this.$message.error({
          message: "网络错误, 请稍候再试"
        });
      } else {
        this.$message.error({
          message: "系统出错或请求超时"
        });
      }
      this.closeLoading();
    },

    // 请求返回后的回调处理
    handleRes(res, show) {
      if (res.result.code === 0) {
        if (show) {
          this.messageSuccess("操作成功");
        }
        return true;
      } else {
        if (show) {
          this.messageError(res.result.msg);
        }
        return false;
      }
    }
  },
  created() {
    this.startLoading("拼命加载中...");
  },
  mounted() {
    //this.closeLoading();
  }
};
</script>

<style>
</style>
