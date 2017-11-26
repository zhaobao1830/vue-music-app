/**
 * 异步操作或者是对mutation进行封装
 */
import * as types from './mutation-types'
import {playMode} from 'common/js/config'
import {shuffle} from 'common/js/util'

// 找到当前歌曲的index在随机播放列表里对应的index
function findIndex (list, song) {
  return list.findIndex((item) => {
    return item.id === song.id
  })
}
// @commit function
// @state 属性
export const selectPlay = function ({commit, state}, {list, index}) {
  commit(types.SET_SEQUENCE_LIST, list) // 顺序List
  if (state.mode === playMode.random) {
    let randomList = shuffle(list)
    commit(types.SET_PLAYLIST, randomList) // playList
    index = findIndex(randomList, list[index])
  } else {
    commit(types.SET_PLAYLIST, list) // playList
  }
  commit(types.SET_CURRENT_INDEX, index) // current_index 当前播放的index
  commit(types.SET_FULL_SCREEN, true) // 播放器是否全屏
  commit(types.SET_PLAYING_STATE, true) // 是否播放
}

export const randomPlay = function ({commit}, {list}) {
  commit(types.SET_PLAY_MODE, playMode.random)
  commit(types.SET_SEQUENCE_LIST, list)
  let randomList = shuffle(list)
  commit(types.SET_PLAYLIST, randomList)
  commit(types.SET_CURRENT_INDEX, 0)
  commit(types.SET_FULL_SCREEN, true)
  commit(types.SET_PLAYING_STATE, true)
}
