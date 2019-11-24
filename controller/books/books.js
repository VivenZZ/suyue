
class Books {
    constructor() {

    }
    getList (req, res, next) {
        let classify = req.query.classify ? req.query.classify : 0;
        let orderBy = req.query.orderBy ? req.query.orderBy : 1;
        let pageNum = req.query.pageNum ? req.query.pageNum : 1;
        let pageSize = req.query.pageSize ? req.query.pageSize : 20;
        console.log(`classify:${classify},orderBy:${orderBy},pageNum:${pageNum},pageSize:${pageSize},`);
        res.json({
            success: true,
            result: {
                books: [
                    {
                        _id: 1092215615165,
                        name: '极道天魔',
                        author: '逆苍天',
                        classify: 1,
                        description: '讲述一个魔道人雄的故事！',
                        newChapter: '第三百八十三章 你说的不算！',
                        upTime: '2019/11/22 19:00',
                        hot: 20122,
                        wordNumber: '九十八万',
                        clickNumber: 211222,
                        recommend: 1002
                    },
                    {
                        _id: 1092215615165,
                        name: '极道天魔',
                        author: '逆苍天',
                        classify: 1,
                        description: '讲述一个魔道人雄的故事！',
                        newChapter: '第三百八十三章 你说的不算！',
                        upTime: '2019/11/22 19:00',
                        hot: 20122,
                        wordNumber: '九十八万',
                        clickNumber: 211222,
                        recommend: 1002
                    }
                ]
            }
        });
    };
    getListById (req, res, next) {
        let bookId = req.params.bookId;
        console.log(bookId)
        res.json({
            success: true,
            result: {
                books: [
                    {
                        _id: 1092215615165,
                        name: '极道天魔',
                        author: '逆苍天',
                        description: '讲述一个魔道人雄的故事！',
                        newChapter: '第三百八十三章 你说的不算！',
                        upTime: '2019/11/22 19:00',
                        hot: 20122,
                        wordNumber: '九十八万',
                        clickNumber: 211222,
                        recommend: 1002
                    }
                ]
            }
        });
    };
    getHotList (req, res, next) {
        let pageSize = req.query.pageSize ? req.query.pageSize : 10;
        console.log(`pageSize:${pageSize},`);
        res.json({
            success: true,
            result: {
                books: [
                    {
                        _id: 1092215615165,
                        name: '极道天魔',
                        author: '逆苍天',
                        classify: 1,
                        description: '讲述一个魔道人雄的故事！',
                        newChapter: '第三百八十三章 你说的不算！',
                        upTime: '2019/11/22 19:00',
                        hot: 20122,
                        wordNumber: '九十八万',
                        clickNumber: 211222,
                        recommend: 1002
                    },
                    {
                        _id: 1092215615165,
                        name: '极道天魔',
                        author: '逆苍天',
                        classify: 1,
                        description: '讲述一个魔道人雄的故事！',
                        newChapter: '第三百八十三章 你说的不算！',
                        upTime: '2019/11/22 19:00',
                        hot: 20122,
                        wordNumber: '九十八万',
                        clickNumber: 211222,
                        recommend: 1002
                    }
                ]
            }
        });
    };
    getNewList (req, res, next) {
        let pageSize = req.query.pageSize ? req.query.pageSize : 10;
        console.log(`pageSize:${pageSize},`);
        res.json({
            success: true,
            result: {
                books: [
                    {
                        _id: 1092215615165,
                        name: '极道天魔',
                        author: '逆苍天',
                        classify: 1,
                        description: '讲述一个魔道人雄的故事！',
                        newChapter: '第三百八十三章 你说的不算！',
                        upTime: '2019/11/22 19:00',
                        hot: 20122,
                        wordNumber: '九十八万',
                        clickNumber: 211222,
                        recommend: 1002
                    },
                    {
                        _id: 1092215615165,
                        name: '极道天魔',
                        author: '逆苍天',
                        classify: 1,
                        description: '讲述一个魔道人雄的故事！',
                        newChapter: '第三百八十三章 你说的不算！',
                        upTime: '2019/11/22 19:00',
                        hot: 20122,
                        wordNumber: '九十八万',
                        clickNumber: 211222,
                        recommend: 1002
                    }
                ]
            }
        });
    };
    getChapter(req, res, next) {
        let bookId = req.params.bookId;
        console.log(bookId);
        res.json({
            success: true,
            result: {
                chapter: [
                    {
                        chapterId: '12382248122',
                        title: '第一章 我是谁？',
                    },
                    {
                        chapterId: '12382248123',
                        title: '第二章 你是谁？',
                    }
                ]
            }
        })
    };
    getChapterInfo(req, res, next) {
        let bookId = req.query.bookId;
        let chapterId = req.query.chapterId;
        console.log(`bookId:${bookId},chapterId:${chapterId}`);
        res.json({
            success: true,
            result: {
                chapterInfo: {
                    chapterId: 468309217,
                    chapterTitle: "第3章 生死簿给你看",
                    content: "<p>　　苏恬心凑过去看了一眼，那个本子上面还真有她的名字和出生年月日。<p>　　苏恬心从小是在孤儿院长大的。<p>　　听院长妈妈说，是有人把她放在孤儿院门口的。<p>　　篮子里放了一张小纸条，上面只写了她的出生年月日，具体的时间没有写。<p>　　而眼前这本‘生死簿’上却详细的记录了出生的时辰。<p>　　此刻她的心情有些微妙，她从来都没想过，有一天会是在这种情况下知道自己完整的出生信息的。<p>　　“看，上面清清楚楚的写着2018年9月23日也就是今天。<p>　　上午八点二十五分零七秒，现在，你死亡的时间。<p>　　没有疑问就跟我走吧。”<p>　　勾魂使把生死簿上苏恬心的那一页拿到她眼前，让她仔细确认了一下。<p>　　他这也是按照生死簿上的记录办事。<p>　　这个小姑娘看起来长得挺乖的，应该不会再出什么幺蛾子了吧？<p>　　“嗯，我跟你走……”<p>　　苏恬心声音闷闷的，事实摆在眼前，她还有什么可争的。<p>　　生死簿上写的清清楚楚，她的出身日期，死亡日期，就连死亡原因‘车祸’都标明了，她只有23年的寿命。<p>　　还真是短啊……<p>　　看着苏恬心这么配合，勾魂使总算松了一口气。<p>　　又完成一单，这个月的业绩完成！<p>　　按理说这‘生死簿’是不能随便拿出来给人和鬼看的。<p>　　可他都有三个月没按时完成任务了。<p>　　连着被扣了三个月的奖金，他最近穷的很，这个月要是再完成不了业绩估计又得赊账买酒喝了。<p>　　今日他也是看这个小姑娘好哄，想着她要是能老实配合，就是看一眼也无妨的。<p>　　反正魂魄都勾到下面去了，过了奈何桥一碗孟婆汤下去就什么都不记得，也没人知道他今天的违规操作的。<p>　　现在的凡人执念太深，总是不想好好配合去下面。<p>　　大量的魂魄滞留人间成了鬼魂，时间长了就容易影响人间的秩序，到时候还是他们的麻烦。<p>　　阎王是最怕麻烦的了。<p>　　为了避免以后麻烦他，就出台了这么一个勾魂业绩和奖金评职称挂钩的制度。<p>　　勾魂使的权限有限，他们只能带走那些心甘情愿都得魂魄。<p>　　以前没这制度的时候大家都是得过且过。<p>　　愿意走的他们把魂一勾完事，现在就得绞尽脑汁想办法尽量劝服这些魂魄了。<p>　　像苏恬心现在遇上的这位勾魂使，只是给她看了一眼‘生死簿’的这种小的违规操作，那其实都不算什么事的。<p>　　有的勾魂使为了完成业绩，还有别的手段呢。<p>　　“来，在这儿签个字，咱们就完成手续了。”<p>　　勾魂使不知道从哪儿变出了一支签字笔让苏恬心在一个单子上签字。<p>　　苏恬心想着勾魂使还挺与时俱进的，她还以为他们用的还是毛笔呢。<p>　　刚要乖乖的上前签下名字，就听到一个好听的声音：“且慢！”<p>　　再次条件反射般的回头，苏恬心就看到一个长相清俊，着长袍，束着冠的男子走了过来，从她手里把那支笔抽走了。<p>　　这位是……鬼？人？仙？<p>　　苏恬心有点懵……<p>　　“你要干嘛？”<p>　　勾魂使看着到手的业绩要飞，哪里能忍？"
                }
            }
        })
    };
}
module.exports = new Books();