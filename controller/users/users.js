const UserModule = require('../../models/users/users');
// 加密
const crypto = require('crypto');
// 表单处理
const formidable = require('formidable');

class Users {
    constructor() {

    }
    // 登录
    login (req, res, next) {
        let loginName = req.body.loginName;
        let loginPass = req.body.loginPass;
        res.json({
            success: true,
            result: {
                name: loginName,
                password: loginPass
            }
        });
    }
    // 注册
    register (req, res, next) {
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
                    console.log(111)
                    // 用户不存在 注册用户
                    let newUser = {
                        user_name: registerName,
                        password: repeatPass,
                        create_time: `2111/11/12`,
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
        // let registerName = req.body.registerName;
        // let registerPass = req.body.registerPass;
        // let repeatPass = req.body.repeatPass;
        // res.json({
        //     success: true,
        //     result: {
        //         name: registerName,
        //         password: registerPass
        //     }
        // })


    }
    // 加密
    encryption (password) {
        // 处理加密~
        let newPassword = this.Md5(this.Md5(password));
        return newPassword;
    }
    Md5 (password) {
        const md5 = crypto.createHash('Md5');
        return md5.update(password).digest('base64');
    }
}
module.exports = new Users();