学习到的东西  https://static.galileo.xiaojukeji.com/static/tms/shield/Vue.js_music_xmind.png

src结构分析

  api 放置获取真实数据

    config.js 一些基础配置
    recommend.js 通过引用jsonp插件，抓取QQ音乐的真实数据
  base 基础组件模块库（实际项目中，把这些封装成npm模块）

    scroll 滚动组件
    slider 轮播图组件
  common 放字体、图标、js。css的

    fonts 字体文件夹
    images 图片文件夹
  js

    dom.js 放置一些操作dom的方法，比如addClass、hasClss
    jsonp.js 对jsonp模块进行加工，对外暴露一个jsonp方法
    singer.js 封装singer类 singer.vue用
    song.js  封装song类 singer-detail.vue用
  stylus css

    base.styl 基础css配置，比如字体类型
    icon.styl 图标字体
    index.styl 用来加载其他css文件
    mixin.styl 一些常用的css，传入不同的参数，显示不同的效果
    reset.styl 重置css
    variable.styl 颜色定义 字体定义
  components 功能组件文件夹

    m-header 头部组件
    music-list 音乐列表组件
    play 播放器组件
       create-keyframe-animation
    rank 排行页面组件
    recommend 推荐组件
    search 查询组件
    singer 歌手页面组件
    singer-detail 歌手详情页面组件
    tab tab组件
  store vuex的配置

