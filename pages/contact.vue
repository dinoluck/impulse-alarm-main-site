<script setup lang="ts">
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
const modal = reactive({
  show: false,
  padded: false,
  width: 'xl',
  type: '',
})

const more_info = (k: any, p = false) => {
  modal.show = true
  modal.padded = p
  modal.type = k
}

const close_modal = () => {
  modal.show = false
  modal.padded = false
  modal.type = ''
  modal.width = 'xl'
}

const message = reactive({
  sent: false,
})

const send_message = () => {
  setTimeout(() => (message.sent = true), 1500)
  setTimeout(() => (message.sent = false), 3500)
}
</script>

<template>
  <div class="relative">
    <div class="relative z-[3] mb-16">
      <div
        class="absolute top-0 left-0 w-full h-full z-0 background-clipped"
      ></div>
      <div class="relative flex z-5 py-16 mx-auto container max-w-5xl">
        <div class="bg-[#272727] text-white p-10 pb-16 z-10">
          <div class="mb-8 text-2xl font-medium">Here if you need us.</div>
          <div>
            <TabGroup>
              <TabList
                class="flex p-1 space-x-1 border border-gray-100 rounded-lg"
              >
                <Tab
                  key="customer-assistance"
                  v-slot="{ selected }"
                  as="template"
                >
                  <button
                    :class="[
                      'w-full py-1.5 text-xs leading-5 font-medium rounded-lg',
                      'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                      selected
                        ? 'bg-white shadow text-gray-700'
                        : 'text-gray-50 hover:bg-white/[0.12] hover:text-gray-100',
                    ]"
                  >
                    Customer
                    <span class="block md:inline-flex">Assistance</span>
                  </button>
                </Tab>
                <Tab key="general-inquires" v-slot="{ selected }" as="template">
                  <button
                    :class="[
                      'w-full py-1.5 text-xs leading-5 font-medium rounded-lg',
                      'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                      selected
                        ? 'bg-white shadow text-gray-700'
                        : 'text-gray-50 hover:bg-white/[0.12] hover:text-gray-100',
                    ]"
                  >
                    General
                    <span class="block md:inline-flex">Inquiries</span>
                  </button>
                </Tab>
              </TabList>

              <TabPanels class="mt-8">
                <TabPanel>
                  <p class="mb-8 text-xl font-bold">
                    Talk to a professional alarm technician in your area.
                  </p>
                  <p class="mb-8">
                    We understand it can be overwhelming trying to make security
                    decisions. Which is why we’re here for you when you need us.
                  </p>
                  <p class="mb-8">
                    We have professional alarm technicians near you standing by
                    to help with your security questions. We’ll make sure you
                    receive the best package that fits your budget, and
                    lifestyle.
                  </p>
                  <button
                    class="text-white bg-app-blue-1 flex items-center space-x-4 px-5 py-2 font-bold duration-100 rounded-md hover:bg-opacity-90"
                    @click="more_info('request_call')"
                  >
                    Request A Call
                  </button>
                </TabPanel>
                <TabPanel>
                  <p class="mb-8 text-xl font-bold">Let's talk.</p>
                  <p class="mb-8">
                    Not a current or prospective customer? No problem. For
                    potential partnerships, media inquiries, career
                    opportunities, or anything else, please just submit the form
                    below, and one of our company representatives will follow up
                    with you!
                  </p>
                  <div class="flex flex-col space-y-4">
                    <div>
                      <label
                        for="name"
                        class="block text-sm font-medium text-gray-100"
                        >Your name</label
                      >
                      <div class="mt-1">
                        <input
                          id="name"
                          type="text"
                          name="name"
                          class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm bg-transparent border-0 border-b border-indigo-500"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        for="email"
                        class="block text-sm font-medium text-gray-100"
                        >Email</label
                      >
                      <div class="mt-1">
                        <input
                          id="email"
                          type="text"
                          name="email"
                          class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm bg-transparent border-0 border-b border-indigo-500"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        for="phone"
                        class="block text-sm font-medium text-gray-100"
                        >Phone</label
                      >
                      <div class="mt-1">
                        <input
                          id="phone"
                          type="text"
                          name="phone"
                          class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm bg-transparent border-0 border-b border-indigo-500"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        for="message"
                        class="block text-sm font-medium text-gray-100"
                        >Your message</label
                      >
                      <div class="mt-1">
                        <textarea
                          id="message"
                          name="message"
                          riws="6"
                          class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm bg-transparent border-0 border-b border-indigo-500"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div class="flex items-center justify-end">
                      <div v-if="message.sent" class="text-sm text-gray-600">
                        Message sent.
                      </div>
                      <button
                        class="text-white bg-app-blue-1 flex items-center space-x-4 px-5 py-2 font-bold duration-100 rounded-md hover:bg-opacity-90"
                        @click="send_message"
                      >
                        Send Now
                      </button>
                    </div>
                  </div>
                </TabPanel>
              </TabPanels>
            </TabGroup>
          </div>
        </div>
        <div class="flex items-start justify-center h-full z-5 my-auto">
          <img src="/assets/ADT40792copy@2x.png" class="w-full -ml-5" />
        </div>
      </div>
    </div>

    <Modal
      :show="modal.show"
      :padded="modal.padded"
      :max-width="modal.width"
      @close="close_modal"
    >
      <div class="px-4 py-5 sm:p-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Want us to call you back?
        </h3>
        <div class="mt-2 max-w-xl text-sm text-gray-500">
          <p>Leave your phone number, preferred time, and we will reach out.</p>
        </div>
        <div class="mt-5 grid gap-5">
          <div class="w-full">
            <label for="phone_number" class="sr-only">Phone</label>
            <div class="relative rounded-md shadow-sm">
              <input
                id="phone_number"
                type="text"
                name="phone_number"
                class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 sm:text-sm border-gray-300 rounded-md"
                placeholder="(555) 987-6543"
              />
              <div class="absolute inset-y-0 right-0 flex items-center">
                <label for="country" class="sr-only">Time</label>
                <select
                  id="country"
                  name="country"
                  class="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pr-7 pl-3 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                >
                  <option selected>Morning</option>
                  <option>Noon</option>
                  <option>Afternoon</option>
                  <option>Evening</option>
                </select>
              </div>
            </div>
          </div>
          <div class="relative flex items-start">
            <div class="flex items-center h-5">
              <input
                id="consent"
                name="consent"
                type="checkbox"
                class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
            </div>
            <div class="ml-3 text-sm">
              <label for="consent" class="font-medium text-gray-700">
                By clicking this box, I agree to receive phone calls and/or text
                messages from Impulse Alarm at the phone number provided, even
                if I am on a Do Not Call list(s). I understand and agree that I
                may be contacted via cellular phone and/or automated technology.
              </label>
              <p class="text-gray-500">
                You are not required to provide this consent to make a purchase
                from us.
              </p>
            </div>
          </div>
          <button
            type="submit"
            class="mt-4 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-bold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            @click="modal.show = false"
          >
            Send request
          </button>
        </div>
      </div>
    </Modal>
  </div>
</template>
