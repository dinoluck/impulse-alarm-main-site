<script setup lang="ts">
const props = defineProps({
  variant: {
    type: String,
    default: 'blue',
  },
  icon: {
    type: Boolean,
    default: false,
  },
  link: {
    type: Boolean,
    default: false,
  },
  action: {
    type: String,
    default: '',
  },
})
const defineVariant = computed(() => {
  switch (props.variant) {
    case 'blue':
      return 'text-white bg-app-blue-1'
    case 'white':
      return 'bg-white text-black hover:ring-4 hover:ring-app-blue-1'
    case 'green':
      return 'bg-[#1EC2A6] text-white'
    case 'black':
      return 'bg-black text-white ring-2 hover:ring-4 ring-[#808080]'
    default:
      return 'text-white bg-app-blue-1'
  }
})
const defineComponent = computed(() => {
  return props.link ? 'NuxtLink' : 'button'
})
</script>

<template>
  <NuxtLink
    v-if="defineComponent === 'NuxtLink'"
    :class="[
      defineVariant,
      icon ? 'flex items-center space-x-4' : '',
      'px-5 py-2 font-bold duration-100 rounded-md hover:bg-opacity-90',
    ]"
    :to="action"
  >
    <svg
      v-if="icon"
      class="w-5 h-5 mr-2 -ml-1"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
    <slot />
  </NuxtLink>
  <button v-else>
    <svg
      v-if="icon"
      class="w-5 h-5 mr-2 -ml-1"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
    <slot />
  </button>
</template>
