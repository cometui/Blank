import type { Plugin } from 'vue'

import Checkbox from './components/Checkbox/Checkbox.vue'
import Button from './components/Button/Button.vue'

interface PluginOptions {}

const plugin: Plugin = {
  install(app, options: PluginOptions) {
    app.component('BCheckBox', Checkbox)
    app.component('BButton', Button)
  },
}

export { Checkbox, Button }

export type { PluginOptions }
export default plugin
