let express = require('express');
let router = express.Router();
let users = require('../../controller/users/users');

router.post('/login', users.login);
/**
 * @api {post} /api/users/login 登录
 * @apiDescription 登录
 * @apiName login
 * @apiGroup User
 * @apiParam {string} loginName 用户名
 * @apiParam {string} loginPass 密码
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "success" : "true",
 *      "result" : {
 *          "name" : "loginName",
 *          "password" : "loginPass"
 *      }
 *  }
 * @apiSampleRequest http://localhost:3000/api/users/login
 * @apiVersion 1.0.0
 */

router.post('/register', users.register);
/**
 * @api {post} /api/users/register 注册
 * @apiDescription 注册
 * @apiName register
 * @apiGroup User
 * @apiParam {string} registerName 用户名
 * @apiParam {string} registerPass 密码
 * @apiParam {string} repeatPass 密码
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "success" : "true",
 *      "result" : {
 *          "name" : "registerName",
 *          "password" : "registerPass"
 *      }
 *  }
 * @apiSampleRequest http://localhost:3000/api/users/register
 * @apiVersion 1.0.0
 */

module.exports = router;