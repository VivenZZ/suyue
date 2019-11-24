
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
}
module.exports = new Users();