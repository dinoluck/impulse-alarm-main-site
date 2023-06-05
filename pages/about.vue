<script setup lang="ts"></script>
<template>
  <div class="relative bg-gray-100">
    <div class="w-full relative">
      <div
        class="bg-clipper-one w-full h-full bg-[#1F99E0] absolute top-0 left-0 z-0"
      ></div>
      <Container class="pb-48 relative z-1">
        <p
          class="relative z-[1] text-white text-3xl font-bold py-12 leading-10 w-full md:w-[45%] px-3"
        >
          Founded in 2015, Impulse Alarm is one of the country’s largest and
          fastest growing ADT Authorized Dealers.
        </p>
      </Container>
    </div>

    <Container class="relative -mt-40 min-h-[400px]">
      <div class="relative">
        <InfoWithImg
          text-margins="mt-32"
          class="relative z-[3]"
          component="div"
          title="PROFESSIONAL SERVICE"
          description="As an ADT Authorized Dealer, we have the ability to sell and install ADT-monitored smart home security systems."
          src="/assets/about_adt_app_arming@2x.png"
          flipped
        />
      </div>
    </Container>

    <div class="w-full relative min-h-[350px]">
      <div
        class="bg-clipper-two bg-white absolute top-0 left-0 w-full h-full z-0"
      ></div>

      <Container class="relative z-10">
        <div class="relative">
          <InfoWithImg
            text-margins="mt-32"
            class="relative z-[3]"
            component="div"
            title="LOCAL TEAMS"
            description="We work with an elite team of local sales representatives and installation technicians."
            src="/assets/about_auth_dealer@2x.png"
          />
        </div>
      </Container>
    </div>

    <div class="w-full relative pt-[50px]">
      <div
        class="bg-clipper-three bg-white absolute top-0 left-0 w-full h-full z-0"
      ></div>

      <Container class="relative">
        <div class="relative">
          <InfoWithImg
            text-margins="mt-56"
            class="relative z-[3]"
            component="div"
            title="COMMUNITY"
            description="Each of us takes great pride in helping to protect our local communities, one home at a time."
            src="/assets/about_yardsignlifestyle_HighRes@2x.png"
            flipped
          />
        </div>
        <three-features class="relative z-[3] mt-12" />
      </Container>
    </div>

    <!-- <InfoWithImg />
            <InfoWithImg flipped /> -->
    <div class="w-full relative">
      <div
        class="bg-clipper-four bg-white absolute top-0 left-0 w-full h-full z-0"
      ></div>
      <div class="relative z-1 pt-24">
        <Container class="text-center pb-24 mt-64">
          <div class="mb-20">
            <p class="mb-8 text-sm font-bold text-app-blue-1">PRINCIPLES</p>
            <p class="text-2xl font-bold lg:text-lg">Why we do this</p>
          </div>
          <p class="mb-8 text-3xl font-black">
            “That call from ADT helped save our lives. And the fast response of
            the fire department helped save our house.”
          </p>
          <p class="italic text-gray-500">- Amy S., Wayne Township, IN</p>
        </Container>
        <Container class="text-center mt-12 text-xs text-gray-500 py-6">
          <p>
            License Information: AL-AESBL#23-001964, AZ-ROC323598/BTR21603,
            AR-CMPY.0002910, CA- ACO 5070, FL-EG13000774, GA-LVA206146, IL-
            127.001772/124.001005, MA-SS002890, NC-CSA461559- NV-88146, NJ-
            34BX00023700, NM- 399060, OK- AC440802, SC- BAC 13816, TN- 12719,
            TX- B07298001, UT- 10742080-6501, WY- TLV-A-21046
          </p>
        </Container>
      </div>
    </div>
  </div>
  <Footer :slim="true" />
</template>
<style>
.bg-clipper-one {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 70%);
}
.bg-clipper-two {
  clip-path: polygon(0 20%, 100% 0, 100% 100%, 0 100%);
}
.bg-clipper-three {
  clip-path: polygon(0 0, 100% 0, 100% 20%);
}
.bg-clipper-four {
  clip-path: polygon(0 20%, 100% 0, 100% 100%, 0% 100%);
}
</style>
