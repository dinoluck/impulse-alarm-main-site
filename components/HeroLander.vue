<script setup lang="ts">
const settings = reactive({
  classes: {
    typing: '',
    cursor: '',
  },
  delays: {
    typing: 200,
    erasing: 100,
  },
  indexes: {
    text: 0,
    char: 0,
  },
  images: [
    'hero_home.jpg',
    'hero_family.jpg',
    'hero_pets.jpg',
    'hero_loved_ones.jpg',
  ],
  types: ['home', 'family', 'pets', 'loved ones'],
  typed: '',
})

const typing = () => {
  if (settings.indexes.char < settings.types[settings.indexes.text].length) {
    settings.typed += settings.types[settings.indexes.text].charAt(
      settings.indexes.char
    )
    settings.indexes.char++

    setTimeout(typing, settings.delays.typing)
  } else {
    setTimeout(erasing, settings.delays.erasing + 1200)
  }
}

const erasing = () => {
  if (settings.indexes.char > 0) {
    settings.typed = settings.types[settings.indexes.text].substring(
      0,
      settings.indexes.char - 1
    )
    settings.indexes.char--

    setTimeout(erasing, settings.delays.erasing)
  } else {
    settings.indexes.text++

    if (settings.indexes.text >= settings.types.length)
      settings.indexes.text = 0

    setTimeout(typing, settings.delays.typing + 200)
  }
}

onMounted(() => {
  console.log('we mounted.')
  setTimeout(typing, 10)
})

const go_to = (location: string) => {
  window.open(location, '_blank')
}
</script>

<template>
  <div class="bg-[#1F99E0] lg:overflow-hidden h-screen sm:h-auto">
    <div class="mx-auto max-w-7xl lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:gap-8">
        <div class="lg:-mb-16 lg:m-0 relative overflow-hidden">
          <div
            class="h-[16rem] w-full lg:max-w-none lg:px-0 lg:h-[32rem] overflow-hidden"
          >
            <transition
              enter-from-class="opacity-0"
              leave-to-class="opacity-0"
              leave-from-class="opacity-100"
            >
              <img
                :key="settings.indexes.text"
                class="lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-auto lg:max-w-none object-cover transition-all duration-1000 ease-in-out z-10"
                :src="`/assets/${settings.images[settings.indexes.text]}`"
                alt=""
              />
            </transition>
            <div
              class="hidden lg:block h-full w-full absolute from-transparent to-[#1F99E0] bg-gradient-to-r z-20"
            ></div>
          </div>
        </div>
        <div
          class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center"
        >
          <div class="py-8 lg:py-24">
            <p
              class="text-xl text-center lg:text-left text-gray-800 xl:text-2xl"
            >
              <span class="font-bold">Impulse Alarm</span> partners with
              <span class="font-bold">ADT</span> to help you protect your
            </p>
            <h1
              class="mt-4 text-6xl tracking-tight font-extrabold text-900 sm:mt-5 sm:text-6xl lg:mt-4 xl:text-7xl"
            >
              <span class="block uppercase text-center lg:text-left">
                {{ settings.typed }}
                <span class="inline-flex ml-2">&nbsp;</span>
              </span>
            </h1>
            <div
              class="mt-10 sm:mt-12 flex flex-row items-center justify-center lg:justify-start"
            >
              <button
                class="text-white bg-app-blue-1 flex items-center space-x-4 px-5 py-2 font-bold duration-100 rounded-md hover:bg-opacity-90"
                icon
                variant="blue"
                @click="go_to('https://shop.impulsealarm.com')"
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
