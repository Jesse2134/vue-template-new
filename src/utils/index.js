import Cookies from 'js-cookie'

class Utils {
  // 对象比较排序
  static compareObj(prop, type) {
    return function (fir, sec) {
      let firOrder = fir['settings'][prop] ? parseInt(fir['settings'][prop]) : Number.MAX_VALUE;
      let secOrder = sec['settings'][prop] ? parseInt(sec['settings'][prop]) : Number.MAX_VALUE;
      if (firOrder < secOrder) {
        return type === 'desc' ? 1 : -1;
      } else if (firOrder > secOrder) {
        return type === 'desc' ? -1 : 1;
      } else {
        return 0;
      }
    };
  }
  // 格式化时间
  static formatDate(date, fmt) {
    let o = {
      "M+": date.getMonth() + 1, //月份
      "d+": date.getDate(), //日
      "h+": date.getHours(), //小时
      "m+": date.getMinutes(), //分
      "s+": date.getSeconds(), //秒
      "q+": Math.floor((date.getMonth() + 3) / 3), //季度
      "S": date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (let k in o) {
      if (new RegExp("(" + k + ")").test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      }
    }
    return fmt;
  }
  // 获取本地时间
  static getLocalDate(timestamp) {
    let parseTime = Date.parse(timestamp.replace(/-/g, "/"));
    let instance = new Date(parseTime); //创建一个Date对象
    let localTime = instance.getTime();
    let localOffset = instance.getTimezoneOffset() * 60000; //获得当地时间偏移的毫秒数
    let utc = localTime + localOffset; //utc即GMT时间
    let offset = 16;
    let beijing = utc + (3600000 * offset);
    return new Date(beijing);
  }

  // 下载文件
  static downloadFile(data, fileName) {
    let a = document.createElement('a');
    document.body.appendChild(a);
    a.style = 'display: none';
    let blob = new Blob([data], {
        type: 'application/octet-stream'
      }),
      url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
  }

  // 设置Cookies
  static setCookies(key, val, day = 0.2) {
    Cookies.set(key, val, { expires: day});
  }

  // 获取Cookies
  static getCookies(key) {
    return Cookies.get(key);
  }

  static removeCookies(key){
    Cookies.remove(key);
  }
}

export default Utils;
