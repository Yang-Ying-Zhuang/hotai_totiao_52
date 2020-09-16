// 引入axios
import myaxios from "../utils/axios.js"
import regeneratorRuntime from "../apis/runtime"



// 登录页
export const login = (data)=>{
  return myaxios ({
     method: "post",
     url:"/login",
     data
  })
}