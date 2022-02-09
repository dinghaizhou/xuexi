import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

// 混入 _init 初始化方法
initMixin(Vue)
// $set/$watch/$delete
stateMixin(Vue)
// $emit/$on/$off/$once
eventsMixin(Vue)
// $forceUpdate/$destory/_update
lifecycleMixin(Vue)
// $nextTick/_render()
renderMixin(Vue)

export default Vue
