<script lang="ts" setup>
import { ref } from 'vue'
import CaretDown from '@/components/icons/CaretDown.svg'

const props = defineProps<{
  list: any
  modelValue: string
}>()

const open = ref(false)

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

function clickBySelect(event) {
  open.value = false
  emit('update:modelValue', event)
}
</script>

<template>
  <div class="custom-select">
    <div :class="{ open: open }" class="selected" @click="open = !open">
      <p>
        {{ modelValue }}
      </p>
      <caret-down :class="{ rotate: open }" />
    </div>
    <div :class="{ selectHide: !open }" class="items">
      <p v-for="(option, i) of list" :key="i" @click="clickBySelect(i)">
        {{ i }}
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.custom-select {
  position: relative;

  .items {
    position: absolute;
    top: calc(100% + 8px);
    z-index: 2;
    display: flex;
    gap: 4px;
    flex-direction: column;
    background: var(--vt-c-white);
    box-shadow: 0 0 10px 0 var(--color-shadow);
    border-radius: 8px;
    right: 0;
    left: 0;
    padding: 10.5px 16px;
    max-height: 350px;
    overflow-y: scroll;
    overflow-x: hidden;

    p {
      cursor: pointer;
      color: var(--color-input-text);
      transition: color 0.3s;

      &:hover {
        color: var(--color-text);
      }
    }
  }

  .items.selectHide {
    display: none;
  }

  .selected {
    padding: 10.5px 16px;
    background: var(--vt-c-white);
    box-shadow: 0 0 10px 0 var(--color-shadow);
    border-radius: 8px;
    display: flex;
    gap: 8px;
    align-items: center;
    cursor: pointer;
    position: relative;

    svg {
      transition: transform 0.3s;
    }
  }
}

.rotate {
  transform: rotate(180deg);
}
</style>