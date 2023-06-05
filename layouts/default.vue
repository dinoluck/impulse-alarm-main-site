<script setup lang="ts">
defineProps({
  footer: Boolean,
})
</script>

<template>
  <div :class="{ 'min-h-screen': footer }" class="bg-slate-900">
    <NavBar />
    <main class="bg-slate-100">
      <slot />
    </main>
    <Footer v-if="footer" />
  </div>
</template>
