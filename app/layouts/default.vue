<template>
    <header>
      <Navbar />
    </header>
    <main class="pt-6 md:pt-2 w-full md:w-7/7 p-6 bg-emerald-50">
      <slot />
    </main>
    <footer>
      <Footer />
    </footer>
</template>

<style scoped>
@media (max-width: 640px) {
  #main {
    width: 100%; /* Make the main content area full-width on smaller screens */
  }
}
</style>
