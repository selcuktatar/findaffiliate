<script setup lang="ts">
const header = 'Find the Best Affiliate programs'
const description = 'Discover new opportunities, and maximize your affiliate marketing potential.'
const boldDescription = 'We have more than 100+ programs.'
const promotionText = '@twselcuk'
const promotionLink = 'https://x.com/twselcuk'
const message = ''
</script>
<template>
  <div class="text-center pt-10 md:pt-20 mx-auto max-w-screen-lg">
    <p class="font-extrabold text-4xl md:text-6xl ">{{ header }}</p>

    <p class="pt-4 text-lg md:text-xl mx-auto max-w-screen-md">
      {{ description }}
      <span class="font-semibold">{{ boldDescription }}</span>
    </p>
    <p class="pt-2 text-lg md:text-xl">Made by ➡️
      <nuxt-link :to="promotionLink" external class="font-semibold text-black hover:text-gray-500">
        {{ promotionText }}
      </nuxt-link>
    </p>

    <div class="flex flex-col md:flex-row items-center justify-center pt-4 max-w-screen-sm md:max-w-screen-lg mx-auto">
      <UInput type="email" name="email" placeholder="hello@findaffiliate.co" required class="mb-4 md:mb-0 md:mr-4"/>
      <UButton
        color="primary"
        variant="outline"
        @click="console.log(1)">
        Sign up newsletter
      </UButton>
    </div>
    <p class="pt-2">{{message}}</p>
  </div>
</template>