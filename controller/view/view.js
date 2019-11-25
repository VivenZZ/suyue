class View {
    constructor() {

    }
    // 登录
    index (req, res, next) {
        res.render('index');
    }
}
module.exports = new View();