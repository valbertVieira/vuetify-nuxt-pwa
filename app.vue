<script setup lang="ts">
import { icons as MSymbolsCollection } from '@iconify-json/material-symbols'
import { addCollection } from '@iconify/vue'

// cadastra o pack de icones do google material symbol
addCollection(MSymbolsCollection)
</script>

<template>
  <section>
    <NuxtPwaManifest />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </section>
</template>
