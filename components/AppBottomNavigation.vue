<script setup lang="ts">
import { Icon } from '@iconify/vue'

const screens = [
  { title: 'Resumo', value: '/', icon: 'material-symbols:show-chart' },
  { title: 'Tasks', value: '/tasks', icon: 'material-symbols:stylus-note-outline-rounded' },
  { title: 'Saved', value: '/saved', icon: 'material-symbols:bookmark-outline' },
]
</script>

<template>
  <VSheet class="fixed bottom-0 h-20 w-full grid  grid-cols-4 items-center z-50">
    <div
      v-for="screen in screens"
      :key="screen.icon"
      class="flex items-center flex-col h-[60px] hover:cursor-pointer"
    >
      <VBtn
        icon="mdi-account-supervisor-outline"
        variant="text"
        class="text-none"
        height="32"
        width="56"
        :active="screen.value === $route.path"
        rounded="pill"
        active-color="primary"
        @click="$router.push(screen.value)"
      >
        <Icon
          :icon="screen.icon"
          width="24"
        />
      </VBtn>
      <p class="text-xs text-center mt-1 font-medium">
        {{ screen.title }}
      </p>
    </div>
  </VSheet>
</template>
