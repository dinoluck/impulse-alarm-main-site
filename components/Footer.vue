<script setup lang="ts">
defineProps({
  slim: Boolean,
})
const go_to = (location: string) => {
  window.open(location, '_blank')
}
</script>

<template>
  <div>
    <div
      v-if="!slim"
      class="bg-[#272727] h-[28rem] text-white relative max-w-[86rem] mx-auto"
    >
      <Container class="flex items-center h-full">
        <img
          class="absolute w-full md:w-4/12 -top-16 md:-top-36"
          src="/assets/equip_hm_package@2x.png"
          alt=""
        />
        <div class="px-10 md:p-0 z-10">
          <p class="mb-8 text-lg font-bold">Select your custom alarm system</p>
          <p class="w-8/12 mb-8">
            Our packages allow you to create an alarm system that fits your
            needs.
          </p>
          <button
            class="text-white bg-app-blue-1 flex items-center space-x-4 px-5 py-2 font-bold duration-100 rounded-md hover:bg-opacity-90"
            icon
            variant="blue"
            @click="go_to('https://cloud.shop.impulsealarm.com')"
          >
            <svg
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
            View Alarm Packages
          </button>
        </div>
        <div
          class="w-full h-[24rem] md:h-[35rem] lg:h-[54rem] bg-app-blue-1 absolute bottom-0 right-0 z-0"
          style="clip-path: polygon(100% 49%, 0 100%, 100% 100%)"
        ></div>
      </Container>
    </div>
    <div class="bg-black text-gray-200 text-xs py-3 px-3 w-full">
      <Container>
        &copy; Impulse Alarm LLC {{ new Date().getFullYear() }} \
        <a href="/terms" class="cursor-pointer hover:text-indigo-200"
          >Terms & Conditions
        </a>
        \
        <a href="/terms" class="cursor-pointer hover:text-indigo-200"
          >Privacy Policy
        </a>
      </Container>
    </div>
  </div>
</template>
