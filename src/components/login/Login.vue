<template>
    <div class="login_container">
        <div class="login_model" >
            <Form ref="formInline" :model="formInline" :rules="ruleInline" >
                <FormItem prop="user">
                    <Input type="text" v-model="formInline.username" placeholder="请输入用户名">
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem prop="password">
                    <Input type="password" v-model="formInline.password" placeholder="请输入密码">
                        <Icon type="ios-locked-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="resetInfo">重置</Button>
                </FormItem>
            </Form>
        </div>
    </div>
</template>
<script>
    var querystring = require('querystring');
    export default {
        name: 'Login',
        data() {
            return {
                formInline: {
                    username: '',
                    password: ''
                },
                ruleInline: {
                    username: [
                        { required: true, message: '请填写用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请填写密码.', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码必须大于6个字符', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                let formInfo = this.formInline;
                let _this = this;
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$http.post('/kbis/datasource/login', querystring.stringify(formInfo)).then(function (response) {
                            if (response.data.code === 502 && response.data.success) {
                                _this.$Message.success('登录成功');
                                let name = response.data.data[1].realName;
                                localStorage.setItem('userInfo', JSON.stringify(name));
                                _this.$router.push('/');
                            } else {
                                _this.$Message.error('登录失败');
                            }
                            
                        })
                    } else {
                    }
                })
            },
            resetInfo() {
                this.formInline.username = "";
                this.formInline.password = "";
            }
        }
    }
</script>
<style scoped>

.login_container {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: pink;
    background: url('../../images/starBucks.jpg') no-repeat;
}
.login_model {
    border: 2px solid #ccc;
    padding: 100px;
    position: absolute;
    top: 40%;
    right: 10%;
    box-shadow: 8px 8px 5px 2px slategrey;
}
</style>
