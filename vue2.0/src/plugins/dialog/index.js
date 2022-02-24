/**
 * 当 install 方法被同一个插件多次调用，插件将只会被安装一次。
 */

import Dialog from './dialog.vue'

export default {
    install(Vue) {
        Vue.prototype.$showDialog = (options) => {
            // 构造弹窗实例，并挂在DOM上
            let DialogConstrcutor = Vue.extend(Dialog);
            let vm = new DialogConstrcutor({propsData: {title: options.title}}).$mount();
            
            document.body.appendChild(vm.$el);

            // 弹窗关闭 移除DOM，摧毁弹窗实例。
            vm.close = () => {
                options.cancel && options.cancel();
                document.body.removeChild(vm.$el);
                vm.$destroy()
            }
        }
    }
}