<script setup lang="ts">
import SearchBar from "~/components/SearchBar.vue";

const pageData = ref()
useHead({
  title: 'Simplest way to find the Best Affiliate programs - Find Affiliate',
  meta: [
    { name: 'Simplest way to find the Best Affiliate programs', content: 'Simplest way to find the Best Affiliate programs' }
  ],
})
onMounted(async () => {
  const { data: page } = await useAsyncData('index', () => {
    return queryCollection('pages')
        .where('stem', '=', 'index')
        .first()
  })
  console.log(page.value)
  pageData.value = page
})


</script>
<template>
  <div>
    <Hero />
    <SearchBar />

  </div>
</template>
