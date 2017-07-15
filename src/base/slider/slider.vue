<template>
  <div class="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import {addClass} from 'common/js/dom'

  export default {
    props: {
      loop: {  // 能否循环轮播
        type: Boolean,
        default: true
      },
      autoPlay: {  // 是否自动轮播
        type: Boolean,
        default: true
      },
      interval: {  // 自动轮播间隔
        type: Number,
        default: 4000
      }
    },
    mounted () {
      setTimeout(() => {
        this._setSliderWidth()
        this._initSlider()
      }, 20)
    },
    methods: {
      _setSliderWidth () {
        this.children = this.$refs.sliderGroup.children
        let width = 0
        let sliderWidth = this.$refs.sliderGroup.clientWidth
        for (var i = 0; i < this.children.length; i++) {
          let child = this.children[i]
          addClass(child, 'slider-item')
          child.style.width = sliderWidth + 'px'
          width += sliderWidth
        }
        //  当可以轮播的时候，长度是正常长度的2倍，这个是轮播图的内容
        if (this.loop) {
          width += 2 * sliderWidth
        }
        this.$refs.sliderGroup.style.width = width + 'px'
      },
      _initSlider () {

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "~common/stylus/variable"

  .slider
    min-height: 1px
    .slider-group
      position: relative
      overflow: hidden
      white-space: nowrap
      .slider-item
        float: left
        box-sizing: border-box
        overflow: hidden
        text-align: center
        a
          display: block
          width: 100%
          overflow: hidden
          text-decoration: none
        img
          display: block
          width: 100%
</style>
