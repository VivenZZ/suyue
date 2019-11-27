const mongoose = require( 'mongoose');

const Schema = mongoose.Schema;

// 定义书籍模型
let articleSchema = new mongoose.Schema({
    ID: String, // id
    href: String,
    chapterNumber: Number,
    bookId: String, // 书籍id
    title: String, // 书籍标题
    path: String // 书籍路径
});

articleSchema.index({id: 1});

const Article = mongoose.model('Article', articleSchema);


module.exports = Article;

