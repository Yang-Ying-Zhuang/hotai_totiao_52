<template>
  <div class="login">
    <div class="container">
      <img src="../assets/avatar.jpg" alt class="avatar" />
      <el-form :model="user" :rules="rules" ref="user" class="demo-ruleForm">
        <el-form-item prop="username">
          <el-input v-model="user.username" prefix-icon="el-icon-user-solid" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="user.password" prefix-icon="el-icon-key" placeholder="请输入密码"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" class="login-btn" @click="myclick">登录</el-button>
    </div>
  </div>
</template>

<script>
import { login } from "../apis/user";
import regeneratorRuntime from "@/apis/runtime";
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 8, message: "长度在 3 到 8 个字符", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    myclick() {
      this.$refs.user.validate(async (valid, obj) => {
        // console.log(valid, obj);
        if (valid) {
          let res = await login(this.user);
          console.log(res);
          if (res.data.statusCode == 401) {
            this.$message.error(res.data.message);
          } else {
            this.$message.success(res.data.message);
          }
        }else{
          this.$message({message:"数据输入不合法", type:"warning"})
          return false
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #2f4050;

  .container {
    position: absolute;
    left: 0;
    right: 0;
    width: 400px;
    padding: 0px 40px 35px 40px;
    margin: 200px auto;
    background: white;
    .avatar {
      position: relative;
      left: 50%;
      width: 120px;
      height: 120px;
      margin-left: -60px;
      margin-top: -60px;
      box-sizing: border-box;
      border-radius: 50%;
      border: 10px solid #fff;
      box-shadow: 0 1px 5px #ccc;
      overflow: hidden;
    }
    .login-btn {
      width: 100%;
    }
  }
}
</style>