<template>
  <Container class="relative">
    <GenericCard
      class="lg:h-[30rem] mx-auto pr-0 mb-28 pb-12 mt-16 lg:mt-32 shadow-md lg:max-w-5xl"
    >
      <div class="flex flex-wrap-reverse lg:flex-nowrap lg:justify-between">
        <div class="lg:w-[43%] 2xl:w-5/12 self-center mt-20">
          <p class="mb-5 text-sm font-bold text-app-blue-1">
            WE'VE GOT YOUR BACK
          </p>
          <p class="mb-8 text-3xl font-bold">
            Your security is our priority, backed by solid guarantees.
          </p>
          <p class="mb-12">
            Impulse Alarm is one of the country’s largest and fastest growing
            ADT Authorized Dealers.
          </p>
          <GenericButton :link="true" action="/about"
            >More About Us</GenericButton
          >
        </div>
        <div class="relative lg:flex-1 lg:h-full lg:w-auto">
          <img
            class="lg:absolute relative -top-5 right-0 w-auto h-[16rem] md:h-[30rem] lg:-right-16 2xl:-right-24 lg:-top-20 rounded-xl rounded-tl-none"
            src="/assets/couple_leavforwork_pourch@2x.png"
            alt=""
          />
        </div>
      </div>
    </GenericCard>
  </Container>
</template>
