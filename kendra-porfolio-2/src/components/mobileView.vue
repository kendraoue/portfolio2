<template>
  <div
    class="flex flex-col h-screen overflow-hidden justify-center items-center bg-gray-100"
  >
    <h1 class="text-2xl font-bold">Mobile View</h1>

    <!-- Centered square -->
    <div class="w-24 h-24 bg-blue-500 rounded-lg"></div>

    <!-- Centered bottom nav -->
    <nav
      class="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex gap-6 bg-white shadow-md p-4 rounded-xl"
    >
      <button class="p-3 bg-gray-200 rounded-lg w-16 h-16">About</button>
      <button class="p-3 bg-gray-200 rounded-lg w-16 h-16">Projects</button>
      <button class="p-3 bg-gray-200 rounded-lg w-16 h-16">Resume</button>
    </nav>
  </div>
</template>
