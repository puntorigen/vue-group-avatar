import GroupAvatar from "@/components/GroupAvatar";

function install() {
    if (install.installed) return
    install.installed = true
    Vue.component('GroupAvatar', component)
}

const plugin = { install }

let GlobalVue = null

if (typeof window !== "undefined") {
    GlobalVue = window.Vue
}

if (typeof global !== "undefined") {
    GlobalVue = global.vue
}

if (GlobalVue) {
    GlobalVue.user(plugin)
}

component.install = install

export default component