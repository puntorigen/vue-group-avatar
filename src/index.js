import GroupAvatar from "./components/GroupAvatar";

//Exportación de los componentes individualmente
export { GroupAvatar }

//Instalación de la librería como un plugin
function registerComponents(Vue) {
    Vue.component('GroupAvatar', GroupAvatar)
}

// Create module definition for Vue.use()
const plugin = {
    /* version: VERSION, */
    install(Vue, options) {
        const finalOptions = Object.assign({}, {
            installComponents: true,
            componentsPrefix: '',
        }, options)

        if (finalOptions.installComponents) {
            registerComponents(Vue, finalOptions.componentsPrefix)
        }
    },
}

export default plugin

// Auto-install
let GlobalVue = null
if (typeof window !== 'undefined') {
    GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue
}
if (GlobalVue) {
    GlobalVue.use(plugin)
}