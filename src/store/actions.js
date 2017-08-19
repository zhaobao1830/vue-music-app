/**
 * 异步操作或者是对mutation进行封装
 */
import * as types from './mutation-types'

// @commit function
// @state 属性
export const selectPlay = function ({commit, state}, {list, index}) {
  commit(types.SET_SEQUENCE_LIST, list) // 顺序List
  commit(types.SET_PLAYLIST, list) // playList
  commit(types.SET_CURRENT_INDEX, index) // current_index 当前播放的index
  commit(types.SET_FULL_SCREEN, true) // 播放器是否全屏
  commit(types.SET_PLAYING_STATE, true) // 是否播放
}
