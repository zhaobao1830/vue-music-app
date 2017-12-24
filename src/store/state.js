/**
 * 状态管理
 */
import {playMode} from 'common/js/config'
import {loadSearch} from 'common/js/cache'

const state = {
  singer: {},
  playing: false, // 播放
  fullScreen: false, // 全屏
  playlist: [], // 当前播放列表
  sequenceList: [], // 顺序列表
  mode: playMode.sequence, // 播放状态
  currentIndex: -1, // 当前播放的索引
  disc: {},
  topList: {},
  searchHistory: loadSearch()
}
export default state
