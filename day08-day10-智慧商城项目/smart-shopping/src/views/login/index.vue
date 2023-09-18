<template>
  <div class="login">
    <!-- 头部 - NavBar -->
    <van-nav-bar title="会员登录" left-arrow right-text="测试" @click-left="$router.go(-1)" />
    <!-- 主体 -->
    <div class="container">
      <div class="title">
        <h3>手机号登陆</h3>
        <p>未注册的手机号登陆后将自动注册</p>
      </div>

      <!-- 注册表单 -->
      <div class="form">
        <div class="form-item">
          <input v-model="mobile" class="inp" maxlength="11" placeholder="请输入手机号码" type="text" />
        </div>
        <div class="form-item">
          <!-- 对用户输入的验证码，进行双向绑定 -->
          <input v-model="picCode" class="inp" maxlength="5" placeholder="请输入图形验证码" type="text" />
          <!-- 当图片有的时候才渲染 -->
          <img v-if="picUrl" :src="picUrl" @click="getPicCode" alt="" />
        </div>
        <div class="form-item">
          <input v-model="msgCode" class="inp" placeholder="请输入短信验证码" type="text" />
          <button @click="getCode">
            {{ second === totalSecond ? '获取验证码' : second + '秒后重新发送' }}
          </button>
        </div>
      </div>

      <!-- 登录键-回车也可以 -->
      <div @click="login" @keyup.enter="login" class="login-btn">登录</div>
    </div>
  </div>
</template>

<script>
import { getPicCode, getMsgCode, codeLogin } from '@/api/login.js' // 全局api
import { Toast } from 'vant'

export default {
  name: 'LoginIndex',
  data () {
    return {
      mobile: '', // 手机号
      picCode: '', // 用户输入的图形验证码
      picKey: '', // 将来请求传递的图形验证码的唯一标识
      picUrl: '', // 存储请求渲染的图片地址
      totalSecond: 60, // 总秒数
      second: 60, // 当前秒数，开启定时器对 second--
      timer: null, // 定时器id
      msgCode: '' // 短信验证码
    }
  },
  async created () {
    // 组件创建完成时，获取一次验证码图片
    this.getPicCode()
  },
  methods: {
    // 获取图形验证码
    async getPicCode () {
      // res.data.base64
      // 有this,代表时这个局部的，没有this,代表的是全局的
      const { data: { base64, key } } = await getPicCode()
      this.picUrl = base64 // 存储地址
      this.picKey = key // 存储唯一标识

      Toast('获取图形验证码成功！') // 组件内组件外均可导入后调用
      // 本质：将方法，注册挂载到了Vue原型上 Vue.prototype.$toast = xxx
      // this.$toast('获取成功') // 必须组件内调用
      // this.$toast.success('成功文案')
      // this.$toast.fail('失败文案')
    },
    // 校验 手机号 和 图形验证码 是否合法
    // 通过校验，返回true，不通过则false
    vaildFn () {
      if (!/^1[3-9]\d{9}$/.test(this.mobile)) {
        this.$toast('请输入正确的手机号！')
        return false
      }
      if (!/^\w{4}$/.test(this.picCode)) {
        this.$toast('请输入正确的图形验证码！')
        return false
      }
      // 成功后，返回true
      return true
    },
    // 获取短信验证码
    async getCode () {
      if (!this.vaildFn()) {
        this.getPicCode() // 错误时，刷新图形验证码
        // 如果没通过校验，就没必要往下走了
        return false
      }
      // 目前没有定时器开着，且 totalSecond 和 second 一致(秒数归位) 才可以倒计时
      if (!this.timer && this.second === this.totalSecond) {
        // 发请求 (预期：希望如果响应的status非200，最好抛出一个promise错误，await只会等待成功的promise)
        await getMsgCode(this.picCode, this.picKey, this.mobile)

        this.$toast('短信发送成功，注意查收')

        // 开启定时器
        this.timer = setInterval(() => {
          // console.log('定时器开启中')
          this.second--

          if (this.second <= 0) {
            clearInterval(this.timer)
            this.timer = null // 重置定时器id
            this.second = this.totalSecond // 归为
          }
        }, 1000)
      }
    },
    // 登录
    async login () {
      if (!this.vaildFn()) {
        return
      }
      if (!/^\d{6}$/.test(this.msgCode)) {
        this.$toast('请输入正确的手机验证码')
        return
      }

      const res = await codeLogin(this.mobile, this.msgCode)
      // 获取信息成功，登录提交数据
      this.$store.commit('user/setUserInfo', res.data) // token,userId
      this.$toast('登录成功')

      // 进行判断,看地址栏有无回跳地址backUrl
      // (1) 如果有  => 说明是其他页面，拦截到登录页的，需要回跳
      // (2) 如果没有 => 正常去首页
      const url = this.$route.query.backUrl || '/'
      this.$router.replace(url)
    }
  },
  // 离开页面，清除定时器
  destroyed () {
    // 当倒计时还没完，但离开了登录页(已被销毁)，要把定时器清掉
    clearInterval(this.timer)
  }
}
</script>

<style lang="less" scoped>
.container {
  padding: 49px 29px;

  // 标题样式
  .title {
    margin-bottom: 20px;
    h3 {
      font-size: 26px;
      font-weight: normal;
    }
    p {
      line-height: 40px;
      font-size: 14px;
      color: #b8b8b8;
    }
  }

  // 填写表单样式
  .form-item {
    border-bottom: 1px solid #f3f1f2;
    padding: 8px;
    margin-bottom: 14px;
    display: flex;
    align-items: center;
    .inp {
      display: block;
      border: none;
      outline: none; // 不显示外边框
      height: 32px;
      font-size: 14px;
      flex: 1;
    }
    img {
      width: 94px;
      height: 31px;
    }
    button {
      height: 31px;
      border: none;
      font-size: 13px;
      color: #cea26a;
      background-color: transparent;
      padding-right: 9px;
    }
  }

  .login-btn {
    width: 100%;
    height: 42px;
    margin-top: 39px;
    background: linear-gradient(90deg, #ecb53c, #ff9211); // 线性渐变
    color: #fff;
    border-radius: 39px;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
    letter-spacing: 2px; // 设置字符之间的间距
    display: flex;
    justify-content: center; // flex布局水平对齐
    align-items: center; // 垂直对齐
  }
}
</style>
