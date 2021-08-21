import request from '@/utils/request' //引入封装好的 axios 请求

export function login(username, password) { //登录接口
  return request({ //使用封装好的 axios 进行网络请求
    url: 'http://localhost:8080/sell/admin/login',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin':'*'
    },
    data: { //提交的数据
      username:username,
      password:password
    },
    transformRequest: function(obj) {
      var str = [];
      for(var p in obj){
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
      return str.join("&");
    }
  })
}
