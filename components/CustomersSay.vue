<script setup lang="ts">
import { StarIcon } from '@heroicons/vue/24/solid'
const testimonials = [
  {
    person: 'Jennifer D.',
    text: '“We recently had an ADT alarm system installed in our home by Impulse Alarm. I have to say that I am really impressed by how everything went. We had TONS of questions about the system. Every question and concern were answered in a way we could understand.”',
    src: '/assets/testimonial_jennifer@2x.png',
  },
  {
    person: 'June B.',
    text: '“My technician was super nice and friendly. He showed up on time, explained how the alarms worked and he was really patient. I would highly recommend them. Thank you, Impulse Alarm.”',
    src: '/assets/testimonial_juneB@2x.png',
  },
  {
    person: 'Sauce G.',
    text: '“Peace of mind but even better customer service… Getting deep sleep is priceless. Being able to activate alarm from phone is a plus, so thank you for helping me set that up. Highly recommended!”',
    src: '/assets/testimonial_sauceG@2x.png',
  },
]
</script>

<template>
  <Container class="relative lg:h-[800px]">
    <div class="px-10 md:p-0">
      <p class="mb-5 text-sm font-bold text-app-blue-1">CREDIBILITY</p>
      <p class="mb-12 text-2xl font-bold">What our customers say</p>
    </div>
    <img
      class="lg:absolute lg:w-auto lg:h-[30rem] left-0 lg:-left-40 rounded-xl rounded-tl-none"
      src="/assets/testimonials_family_atdoor@2x.png"
      alt=""
    />
    <div class="flex flex-wrap lg:flex-nowrap lg:justify-end lg:mt-24">
      <GenericCard
        v-for="(item, i) in testimonials"
        :key="i"
        class="w-full lg:w-[30%] relative z-[3] opacity-[.96] py-5 px-2 flex flex-col"
      >
        <div class="mb-7 text-sm leading-7">
          {{ item.text }}
        </div>
        <div class="flex space-x-4 mt-auto">
          <img :src="`${item.src}`" alt="" class="w-16 h-16 rounded-full" />
          <div>
            <p class="mb-1">{{ item.person }}</p>
            <div class="flex">
              <StarIcon
                v-for="(itemToFive, idxToFive) in 5"
                :key="idxToFive + itemToFive"
                class="w-6 h-6 text-yellow-300"
              />
            </div>
          </div>
        </div>
      </GenericCard>
    </div>
  </Container>
</template>
