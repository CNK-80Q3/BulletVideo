<template>
  <div id="regist">
    <div class="container">
      <el-form ref="form" :model="form" label-width="0px" style="width: 600px">
        <el-form-item>
          <el-input v-model="form.name" placeholder="昵称" />
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.name" placeholder="密码" show-password />
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="form.name"
            placeholder="确认密码"
            show-password
            size="medium"
          />
        </el-form-item>
        <el-input
          placeholder="请输入手机号"
          v-model="input3"
          class="input-with-select"
        >
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="餐厅名" value="1"></el-option>
            <el-option label="订单号" value="2"></el-option>
            <el-option label="用户电话" value="3"></el-option>
          </el-select>
          <el-button slot="append">获取验证码</el-button>
        </el-input>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Regist",
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        select: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style lang="less" scoped>
#regist {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aqua;

  .container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
}
</style>
