define({ "api": [
  {
    "type": "get",
    "url": "/api/books/getChapter",
    "title": "获取书籍章节列表",
    "description": "<p>根据书籍id获取书籍章节</p>",
    "name": "getChapter",
    "group": "Books",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\" : \"true\",\n    \"result\" : {\n        books: []\n    }\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/books/getChapter/123"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/api/books.js",
    "groupTitle": "Books"
  },
  {
    "type": "get",
    "url": "/api/books/getChapterInfo",
    "title": "获取章节内容",
    "description": "<p>根据书籍id和章节id 获取章节内容</p>",
    "name": "getChapterInfo",
    "group": "Books",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "bookId",
            "description": "<p>书籍id</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "chapterId",
            "description": "<p>章节id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\" : \"true\",\n    \"result\" : {\n        chapterInfo: {}\n    }\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/books/getChapterInfo"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/api/books.js",
    "groupTitle": "Books"
  },
  {
    "type": "get",
    "url": "/api/books/getHotList",
    "title": "获取热门小说",
    "description": "<p>获取热门小说</p>",
    "name": "getHotList",
    "group": "Books",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>书籍数量 默认10</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\" : \"true\",\n    \"result\" : {\n        books: []\n    }\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/books/getHotList"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/api/books.js",
    "groupTitle": "Books"
  },
  {
    "type": "get",
    "url": "/api/books/getList",
    "title": "获取书籍列表",
    "description": "<p>获取书籍列表</p>",
    "name": "getList",
    "group": "Books",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "classify",
            "description": "<p>分类：0=&gt;全部， 1=&gt;武侠仙侠， 2=&gt;玄幻奇幻， 3=&gt; 都市小说 默认 0</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "orderBy",
            "description": "<p>排序规则：1=&gt;月票， 2=&gt;点击， 3=&gt; 字数  默认1</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "pageNum",
            "description": "<p>当前分页 默认 1</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页书籍数量 默认20</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\" : \"true\",\n    \"result\" : {\n        books: []\n    }\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/books/getList"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/api/books.js",
    "groupTitle": "Books"
  },
  {
    "type": "get",
    "url": "/api/books/getListById/:bookId",
    "title": "根据bookId获取书籍",
    "description": "<p>根据bookId获取书籍</p>",
    "name": "getListById",
    "group": "Books",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\" : \"true\",\n    \"result\" : {\n        books: []\n    }\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/books/getListById/11111"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/api/books.js",
    "groupTitle": "Books"
  },
  {
    "type": "get",
    "url": "/api/books/getNewList",
    "title": "获取最新上架小说",
    "description": "<p>获取最新上架小说</p>",
    "name": "getNewList",
    "group": "Books",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>书籍数量 默认10</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\" : \"true\",\n    \"result\" : {\n        books: []\n    }\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/books/getNewList"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/api/books.js",
    "groupTitle": "Books"
  },
  {
    "type": "post",
    "url": "/api/users/login",
    "title": "登录",
    "description": "<p>登录</p>",
    "name": "login",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "loginName",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "loginPass",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\" : \"true\",\n    \"result\" : {\n        \"name\" : \"loginName\",\n        \"password\" : \"loginPass\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/users/login"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/api/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/users/register",
    "title": "注册",
    "description": "<p>注册</p>",
    "name": "register",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "registerName",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "registerPass",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repeatPass",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\" : \"true\",\n    \"result\" : {\n        \"name\" : \"registerName\",\n        \"password\" : \"registerPass\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/users/register"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/api/users.js",
    "groupTitle": "User"
  }
] });
