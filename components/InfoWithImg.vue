<script setup lang="ts">
defineProps({
  flipped: {
    type: Boolean,
    default: false,
  },
  component: {
    type: String,
    default: 'container',
  },
  textMargins: {
    type: String,
    default: 'mt-10 lg:mt-24',
  },
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  src: {
    type: String,
    default: 'http://placeimg.com/640/480/business',
  },
})
</script>
<template>
  <div>
    <div
      class="flex justify-center flex-wrap lg:flex-nowrap lg:justify-between lg:max-h-[700px] mb-12 lg:mb-0 px-4 md:px-0"
      :class="flipped ? 'flex-row-reverse' : ''"
    >
      <div
        class="relative w-full lg:w-auto lg:flex-1 h-full"
        :class="flipped ? 'lg:relative lg:right-16' : ''"
      >
        <img
          class="relative lg:absolute w-full h-auto object-cover rounded-xl rounded-tl-none"
          :src="src"
          alt=""
        />
      </div>
      <div
        class="w-full lg:w-6/12"
        :class="[
          !flipped ? 'lg:pr-20 lg:flex lg:justify-end' : '',
          textMargins,
        ]"
      >
        <info-with-icon
          :title="title"
          :description="description"
          parent-class="lg:w-9/12"
          content-parent-class="text-left"
          class="relative z-[3]"
        />
      </div>
    </div>
  </div>
</template>
