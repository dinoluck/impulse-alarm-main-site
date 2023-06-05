<script>
definePageMeta({
  middleware(to, from) {
    const termsRoutes = [
      '/terms-of-service',
      '/terms-and-service',
      '/tos',
      '/privacy',
      '/privacy-policy',
    ]
    if (termsRoutes.includes(to.fullPath)) {
      console.log('Should navigate away...')
      return navigateTo('/terms')
    } else {
      console.log('Page truly not found.')
    }
  },
})
</script>

<template>
  <div>
    <div class="w-screen h-screen flex items-center justify-center">
      Not Found
    </div>
  </div>
</template>
