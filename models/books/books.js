const mongoose = require( 'mongoose');

const Schema = mongoose.Schema;

// 定义书籍列表模型
let booksSchema = new mongoose.Schema({
    ID: String, // 自动获取id
    name: String, // 名称
    href: String, // 地址
    Author: String, // 作者
    newChapter: String, // 最新章节
    uptime: String, // 更新时间
    description: String, // 简介
    img: String, // 封面图
    novelclass: String, // 分类
    imgPath: String, // 封面图本地路径
    hot: String,
    numbers: String,
    status: String // 状态 连载or完本
});

booksSchema.index({id: 1});

const Books = mongoose.model('Books', booksSchema);


module.exports = Books;

