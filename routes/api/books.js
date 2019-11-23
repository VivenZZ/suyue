let express = require('express');
let router = express.Router();
let books = require('../../controller/books/books');

router.get('/getList', books.getList);
/**
 * @api {get} /api/books/getList 获取书籍列表
 * @apiDescription 获取书籍列表
 * @apiName getList
 * @apiGroup Books
 * @apiParam {number} classify 分类：0=>全部， 1=>武侠仙侠， 2=>玄幻奇幻， 3=> 都市小说 默认 0
 * @apiParam {number} orderBy 排序规则：1=>月票， 2=>点击， 3=> 字数  默认1
 * @apiParam {number} pageNum 当前分页 默认 1
 * @apiParam {number} pageSize 每页书籍数量 默认20
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "success" : "true",
 *      "result" : {
 *          books: []
 *      }
 *  }
 * @apiSampleRequest http://localhost:3000/api/books/getList
 * @apiVersion 1.0.0
 */

router.get('/getListById/:bookId', books.getListById);
/**
 * @api {get} /api/books/getListById/:bookId 根据bookId获取书籍
 * @apiDescription 根据bookId获取书籍
 * @apiName getListById
 * @apiGroup Books
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "success" : "true",
 *      "result" : {
 *          books: []
 *      }
 *  }
 * @apiSampleRequest http://localhost:3000/api/books/getListById/11111
 * @apiVersion 1.0.0
 */

router.get('/getHotList', books.getHotList);
/**
 * @api {get} /api/books/getHotList 获取热门小说
 * @apiDescription 获取热门小说
 * @apiName getHotList
 * @apiGroup Books
 * @apiParam {number} pageSize 书籍数量 默认10
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "success" : "true",
 *      "result" : {
 *          books: []
 *      }
 *  }
 * @apiSampleRequest http://localhost:3000/api/books/getHotList
 * @apiVersion 1.0.0
 */

router.get('/getNewList', books.getNewList);
/**
 * @api {get} /api/books/getNewList 获取最新上架小说
 * @apiDescription 获取最新上架小说
 * @apiName getNewList
 * @apiGroup Books
 * @apiParam {number} pageSize 书籍数量 默认10
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "success" : "true",
 *      "result" : {
 *          books: []
 *      }
 *  }
 * @apiSampleRequest http://localhost:3000/api/books/getNewList
 * @apiVersion 1.0.0
 */

router.get('/getChapter/:bookId', books.getChapter);
/**
 * @api {get} /api/books/getChapter 获取书籍章节列表
 * @apiDescription 根据书籍id获取书籍章节
 * @apiName getChapter
 * @apiGroup Books
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "success" : "true",
 *      "result" : {
 *          books: []
 *      }
 *  }
 * @apiSampleRequest http://localhost:3000/api/books/getChapter/123
 * @apiVersion 1.0.0
 */

router.get('/getChapterInfo', books.getChapterInfo);
/**
 * @api {get} /api/books/getChapterInfo 获取章节内容
 * @apiDescription 根据书籍id和章节id 获取章节内容
 * @apiName getChapterInfo
 * @apiGroup Books
 * @apiParam {number} bookId 书籍id
 * @apiParam {number} chapterId 章节id
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "success" : "true",
 *      "result" : {
 *          chapterInfo: {}
 *      }
 *  }
 * @apiSampleRequest http://localhost:3000/api/books/getChapterInfo
 * @apiVersion 1.0.0
 */

module.exports = router;
