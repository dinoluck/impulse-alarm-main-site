<script setup lang="ts">
defineProps({
  icon: {
    type: [Array, Object, String],
    default: () => {
      return ''
    },
  },
  title: {
    type: String,
    default: '#1 in smart home security',
  },
  description: {
    type: String,
    default:
      'ADT has earned the honor of #1 smart home security provider* four years in a row.',
  },
  smallText: {
    type: String,
    default: '',
  },
  contentParentClass: {
    type: String,
    default: 'text-center',
  },
  parentClass: {
    type: String,
    default: 'lg:max-w-[20rem] flex justify-center',
  },
})
</script>
<template>
  <div :class="parentClass">
    <div :class="contentParentClass">
      <img
        v-if="icon"
        :src="icon.toString()"
        class="w-20 h-20 block mx-auto mb-8"
      />
      <p class="text-app-blue-1 font-bold mb-2 text-xs">{{ title }}</p>
      <p class="text-sm">
        {{ description }}
      </p>
      <p class="text-xs text-[#5D5D5D] mt-5">
        {{ smallText }}
      </p>
    </div>
  </div>
</template>
