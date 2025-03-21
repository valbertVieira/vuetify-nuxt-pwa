<template>
  <VApp
    theme="light"
    class="select-none"
  >
    <VMain>
      <VContainer
        class="h-[calc(100dvh-80px)] overflow-y-auto overflow-x-hidden"
      >
        <NuxtPage />
      </VContainer>
    </VMain>

    <AppBottomNavigation />
  </VApp>
</template>
