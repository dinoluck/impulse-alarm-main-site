<script setup lang="ts">
const go_to = (location: string) => {
  window.open(location, '_blank')
}
</script>

<template>
  <div class="relative lg:mb-28 overflow-hidden w-full pb-16">
    <div class="absolute w-full h-full bg-white clip-path shadow-sm">
      <img
        class="absolute z-0 h-full w-auto object-cover lg:left-[10rem] lg:top-12"
        src="/assets/Better_house.svg"
      />
    </div>
    <container>
      <div
        class="flex justify-center flex-wrap lg:flex-nowrap lg:justify-between lg:h-[500px] mb-12 lg:mb-0 relative z-[3]"
      >
        <div class="relative w-full lg:w-auto lg:flex-1 h-full">
          <img
            class="relative lg:absolute w-full lg:h-[30rem] rounded-xl rounded-tl-none"
            src="/assets/woman_daughter_Panel1211@2x.png"
            alt=""
          />
        </div>
        <div class="lg:flex lg:justify-end w-full lg:w-6/12 lg:pr-20">
          <div class="flex items-center justify-center flex-col">
            <InfoWithIcon
              title="Professionals that truly care"
              description="Each of us takes great pride in helping to protect our local communities, one home at a time."
              icon="/assets/icon_shield_check.svg"
            />
            <button
              class="text-white bg-app-blue-1 flex items-center space-x-4 px-5 py-2 font-bold duration-100 rounded-md hover:bg-opacity-90"
              @click="go_to('/contact')"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </container>
  </div>
</template>
