<script setup lang="ts">
const items = [
  {
    icon: '/assets/icon_home.svg',
    title: '#1 in smart home security',
    description:
      'ADT has earned the honor of #1 smart home security provider* four years in a row.',
    smallText:
      '*Source: Strategy Analytics. US Interactive Security - April 2017, 2018, 2019, 2020',
  },
  {
    icon: '/assets/icon_shield_check.svg',
    title: '24/7 professional monitoring',
    description:
      'Rest easy knowing that thousands of ADT employees are always ready to help in an emergency.',
  },
  {
    icon: '/assets/icon_ribbon_six.svg',
    title: '6-Month ADT Money-Back Guarantee*',
    description:
      'If ADT can’t resolve your system concerns, ADT will refund your installation and monitoring fees.*',
    smallText: '*Certain restrictions apply. See terms and conditions.',
  },
]
</script>
<template>
  <Container
    class="flex justify-center flex-wrap lg:flex-nowrap lg:justify-between mb-28"
  >
    <InfoWithIcon
      v-for="({ title, description, smallText, icon }, i) in items"
      :key="i"
      :icon="icon"
      :title="title"
      :description="description"
      :small-text="smallText"
      class="w-full lg:w-auto mt-5"
    />
  </Container>
</template>
