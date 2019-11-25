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
        let fileds = form.parse(req,  (err, fields, files) => {
           return fields;
        });
        let registerName = req.body.registerName;
        let registerPass = req.body.registerPass;
        let repeatPass = req.body.repeatPass;
        res.json({
            success: true,
            result: {
                name: registerName,
                password: registerPass
            }
        })


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