/**
 * Created by Administrator on 2017/8/2.
 */
import * as types from './mutation-types'
const mutation = {
  [types.SET_SINGER] (state, singer) {
    state.singer = singer
  }
}
