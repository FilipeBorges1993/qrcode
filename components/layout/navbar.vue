<script setup lang="ts">
    const showSideDrawer = ref(false);
    const router = useRouter();
    const string = ref('pimba');
</script>

<template>
<nav class="bg-gray-800" style="background-color:#00231a">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">

        <div class="flex flex-shrink-0 items-center">
          <img class="hidden h-8 w-auto lg:block" src="/img/logo.png">
        </div>

      </div>
    </div>
  </div>
</nav>


</template>
