import type { Plugin } from 'vue'

import Button from './components/Button/Button.vue'

interface PluginOptions {}

const plugin: Plugin = {
  install(app, options: PluginOptions) {
    app.component('CButton', Button)
  },
}

export { Button }

export type { PluginOptions }
export default plugin
