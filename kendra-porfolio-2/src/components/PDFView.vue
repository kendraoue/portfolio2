<template>
  <div class="w-full h-full">
    <iframe
      :src="`/pdfjs-3.4.120-dist/web/viewer.html?file=${documentUrl}`"
      class="w-full h-full"
    ></iframe>
  </div>
</template>

<script setup>
import { ref } from "vue";

const documentUrl = ref("/Kendra Ouellet Resume.pdf");
</script>
