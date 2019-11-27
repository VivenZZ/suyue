const UserModule = require('../../models/users/users');
// 时间处理
const sd = require('silly-datetime');
// 加密
const crypto = require('crypto');
// 表单处理
const formidable = require('formidable');

class Users {
    constructor() {
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
        this.encryption = this.encryption.bind(this);
    }
    // 登录
    login (req, res, next) {
        const form = new formidable.IncomingForm();
        form.parse(req, async (err, fields, files) => {
            if (err) {
                res.send({
                    status: 0,
                    type: 'FORM_DATA_ERROR',
                    message: '表单信息错误'
                });
                return
            }
            let {registerName, registerPass} = fields;
            let password = this.encryption(registerPass);
            try {
                if (!registerName) {
                    throw new Error('用户名参数错误！')
                } else if (!registerPass) {
                    throw new Error('密码参数错误！')
                }

            } catch (err) {
                console.log(err.message, err);
                res.send({
                    status: 0,
                    type: 'GET_ERROR_PARAM',
                    message: err.message,
                });
                return
            }
            try {
                // 查询数据库 当前用户是否存在
                let user = await UserModule.findOne({user_name: registerName});
                if (user) {
                    // 用户存在
                    if (password == user.password){
                        console.log('登录成功');
                        res.send({
                            status: 1,
                            type: 'USER_HAS_EXIST',
                            message: '登录成功'
                        })
                    } else {
                        console.log('密码错误');
                        res.send({
                            status: 0,
                            type: 'USER_HAS_EXIST',
                            message: '密码错误'
                        })
                    }
                } else {
                    console.log('该用户不存在');
                    res.send({
                        status: 0,
                        type: 'USER_HAS_EXIST',
                        message: '该用户不存在'
                    })
                }
            } catch (err) {
                console.log('登录失败', err);
                res.send({
                    status: 0,
                    type: 'REGISTER_ADMIN_FAILED',
                    message: '登录失败',
                })
            }
        });
    }
    // 注册
    async register (req, res, next) {
        const form = new formidable.IncomingForm();
        form.parse(req,  async (err, fields, files) => {
            if (err) {
                res.send({
                    status: 0,
                    type: 'FORM_DATA_ERROR',
                    message: '表单信息错误'
                });
                return
            }
            let {registerName, registerPass, repeatPass} = fields;
            let password = this.encryption(registerPass);
            console.log(password)
            try {
                if (!registerName) {
                    throw new Error('用户名参数错误！')
                } else if (!registerPass) {
                    throw new Error('密码参数错误！')
                }
                if(registerPass !== repeatPass) {
                    throw new Error('两次输入的密码不一致！');
                }

            } catch (err) {
                console.log(err.message, err);
                res.send({
                    status: 0,
                    type: 'GET_ERROR_PARAM',
                    message: err.message,
                });
                return
            }
            
            try {
                // 查询数据库 当前用户是否存在
                let user = await UserModule.findOne({user_name: registerName});
                console.log(user)
                if (user) {
                    // 用户存在
                    console.log('注册用户已存在');
                    res.send({
                        status: 0,
                        type: 'USER_HAS_EXIST',
                        message: '该用户已经存在'
                    })
                } else {
                    // 用户不存在 注册用户
                    let newUser = {
                        user_name: registerName,
                        password: password,
                        create_time: sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss'),
                    };
                    await UserModule.create(newUser);
                    res.send({
                        status: 1,
                        message: '注册管理员成功',
                    })
                }
            } catch (err) {
                console.log('注册管理员失败', err);
                res.send({
                    status: 0,
                    type: 'REGISTER_ADMIN_FAILED',
                    message: '注册管理员失败',
                })
            }
        });
    }
    // 加密
    encryption (password) {
        // 处理加密~
        const newpassword = this.Md5(this.Md5(password).substr(2, 7) + this.Md5(password));
        return newpassword
    }
    Md5 (password) {
        const md5 = crypto.createHash('md5');
        return md5.update(password).digest('hex');
    }
}
module.exports = new Users();