/**
 * 获取state，对state进行映射
 * 做了映射以后，就相当于在Vue组件的实例中挂在了一个属性，可以在组件的
 * computed里面，用...mapGetters来获取属性值
 */
export const singer = state => state.singer

export const playing = state => state.playing

export const fullScreen = state => state.fullScreen

export const playlist = state => state.playlist

export const sequenceList = state => state.sequenceList

export const mode = state => state.mode

export const currentIndex = state => state.currentIndex

export const currentSong = state => {
  return state.playlist[state.currentIndex] || {}
}

export const disc = state => state.disc

export const topList = state => state.topList
