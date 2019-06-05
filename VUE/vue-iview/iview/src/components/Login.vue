<template>
    <div class="login">
        <!-- ref类似于获取dom结构操作 -->
        <i-form ref="formLogin" :model="formLogin" :rules="formLoginRules" class="card-box">
            <Form-item class="formLogin-title">
                <h3>系统登录</h3>
            </Form-item>
            <Form-item prop="username">
                <i-input type="text" v-model="formLogin.username" placeholder="Username">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </i-input>
            </Form-item>
            <Form-item prop="password">
                <i-input type="password" v-model="formLogin.password" placeholder="Password">
                    <Icon type="ios-locked-outline" slot="prepend"></Icon>
                </i-input>
            </Form-item>
            <Form-item>
                <Checkbox v-model="formLogin.remember">记住密码</Checkbox>
            </Form-item>
            <Form-item>
                <Row>
                    <Col :xs="{ span: 4, offset: 6 }">
                        <i-button type="primary" @click="handleSubmit('formLogin')">登陆</i-button>
                    </Col>
                    <Col :xs="{ span: 4, offset: 6 }">
                        <i-button type="primary" @click="formLoginReset('formLogin')">重置</i-button>
                    </Col>
                </Row>
            </Form-item>
        </i-form>
    </div>
</template>
<script>
export default {
    name: 'Login',
    data() {
        return {
            formLogin: {
                username: '',
                password: '',
                remember: false
            },
            formLoginRules: {
                username: [
                    {
                        required: true,
                        message: "please fill in the username",
                        trigger: "blur"
                    }
                ],
                password: [
                    {
                        required: true,
                        message: "please fill in the password",
                        trigger: "blur"
                    },
                    {
                        type: 'string',
                        min: 6, 
                        message: '密码长度不能小于6位', 
                        trigger: 'blur' 
                    }
                ]
            }
        }
        
    },
    methods: {
        handleSubmit (name) {
            // 校验 本地存储左上角有名字
            this.$refs[name].validate(valid => {
                sessionStorage.setItem('user', JSON.stringify(this.formLogin.username))
            })
            if (valid) {
                // 
                this.$Message.success('提交成功')
                this.$router.push({ path: '/table' })
            } else {
                this.$Message.error('验证失败')
            }

            if (this.formLogin.remember) {
                sessionStorage.setItem('username', JSON.stringify(this.formLogin.username))
                sessionStorage.setItem('password', JSON.stringify(this.formLogin.password))
            } else {
                sessionStorage.removeItem('username')
                sessionStorage.removeItem('password')
            }
        }
    }
    // 规则属性
    
    // 没挂载前执行的，所以无法操作dom结构。created() {
    //     console.log(this.$ref.tset)
    // }
};
</script>

<style scoped>
.login {
    width: 100%;
    height: 100%;
    background: url(../assets/bg.jpg) no-repeat;
    background-size: cover;
    overflow: hidden;
}
.card-box {
  padding: 20px;
  /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin-bottom: 20px;
  background-color: #f9fafc;
  margin: 180px auto;
  width: 400px;
  border: 2px solid #8492a6;
}

.title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
.formLogin-title {
  text-align: center;
  font-size: 28px;
}
.formLogin-title h3 {
  font-size: 18px;
}
.login-no-bottom {
  margin-bottom: 10px;
}
</style>