<script setup>
import * as checkbox from '@zag-js/checkbox'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed } from 'vue'

const [state, send] = useMachine(checkbox.machine({ id: '1' }))

const api = computed(() =>
  checkbox.connect(state.value, send, normalizeProps),
)
</script>

<template>
  <label class="bg-red-500 hover:bg-blue-500 text-black" v-bind="api.rootProps">
    <span v-bind="api.labelProps">
      Input is
      <span v-if="api.isChecked"> checked</span>
      <span v-else> unchecked</span>
    </span>
    <input v-bind="api.inputProps">
    <div v-bind="api.controlProps" />
  </label>
</template>
