学习到的东西  https://static.galileo.xiaojukeji.com/static/tms/shield/Vue.js_music_xmind.png

src结构分析

  api 放置获取真实数据

    config.js 一些基础配置
    rank.js 排行页面获取相关数据
    recommend.js 通过引用jsonp插件，抓取QQ音乐的真实数据,这部分保存的是推荐页面的数据
    search.js 搜索页面获取相关数据
    song.js 歌曲页面获取相关数据
  base 基础组件模块库（实际项目中，把这些封装成npm模块）

    listview 歌手页面列表组件
    loading loading组件
    no-result 没有结果组件
    progress-bar 播放器progress-bar进度条组件
    progress-circle 播放器progress-circle圆形进度条组件
    search-box 搜索输入框组件
    scroll 滚动组件
    slider 轮播图组件
    song-list 歌曲列表页
  common 放字体、图标、js。css的

    fonts 字体文件夹
    images 图片文件夹
  js

    cache.js 搜索页面用到的方法
    config.js 配置文件
    mixin.js vue中的mixin文件，我的理解是：在Vue中如果多个组件要实现相同逻辑，可以使用mixin，把方法写到mixin,
             如果组件使用了这个mixin,就会把代码添加到这个组件里，组件里同名的方法（必须实现）可以覆盖掉mixin里的方法
    dom.js 放置一些操作dom的方法，比如addClass、hasClss
    jsonp.js 对jsonp模块进行加工，对外暴露一个jsonp方法
    singer.js 封装singer类 singer.vue用
    song.js  封装song类 singer-detail.vue用
    util.js 封装一些操作方法
  stylus css

    base.styl 基础css配置，比如字体类型
    icon.styl 图标字体
    index.styl 用来加载其他css文件
    mixin.styl 一些常用的css，传入不同的参数，显示不同的效果
    reset.styl 重置css
    variable.styl 颜色定义 字体定义
  components 功能组件文件夹

    disc 歌单详情页组件
    m-header 头部组件
    music-list 音乐列表组件
    play 播放器组件
       create-keyframe-animation
    rank 排行页面组件
    recommend 推荐组件
    search 查询组件
    singer 歌手页面组件
    singer-detail 歌手详情页面组件
    suggest 搜索结果页面
    tab tab组件
    top-list 排行详情页
  store vuex的配置

