import request from '@/utils/request.js'

// 此处用于存放所有登陆相关的接口请求
// 1. 获取图形验证码 按需导出(调用时按需导入)
export const getPicCode = () => {
  // 必须 return 用于调用时接收结果
  return request.get('/captcha/image')
}

// 2. 获取短信验证码
export const getMsgCode = (captchaCode, captchaKey, mobile) => {
  return request.post('/captcha/sendSmsCaptcha', {
    form: {
      captchaCode,
      captchaKey,
      mobile
    }
  })
}

// 3. 登录接口
export const codeLogin = (mobile, smsCode) => {
  return request.post('/passport/login', {
    form: {
      isParty: false, // 是否存在第三方用户信息
      mobile, // 手机号
      partyData: {}, // 三方登录信息，默认为：{}
      smsCode // 短信验证码， 测试环境验证码为：246810
    }
  })
}
