<template>
  <Container>
    <header>
      <nav class="px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div
          class="flex items-center justify-center w-full py-2 border-b border-indigo-500 lg:justify-between lg:border-none"
        >
          <div class="flex items-center">
            <a href="#">
              <span class="sr-only">Impulse Alarm</span>
              <img
                class="w-auto h-20 lg:h-14"
                src="/assets/impulse-logo.png"
                alt=""
              />
            </a>
          </div>
          <div class="ml-10 space-x-4">
            <div class="hidden ml-10 space-x-8 lg:block">
              <a
                key="Solutions"
                href="#"
                class="text-sm font-bold text-white uppercase hover:text-indigo-50"
              >
                Home
              </a>
              <a
                key="Pricing"
                href="/about"
                class="text-sm text-white uppercase font-base hover:text-indigo-50"
              >
                About
              </a>
              <a
                key="Docs"
                href="/contact"
                class="text-sm text-white uppercase font-base hover:text-indigo-50"
              >
                Contact
              </a>
              <a
                key="Company"
                href="#"
                class="text-sm text-white uppercase font-base hover:text-indigo-50"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </Container>
</template>
