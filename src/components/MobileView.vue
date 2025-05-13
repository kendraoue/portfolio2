<template>
  <div class="flex flex-col h-screen overflow-hidden bg-pink-200">
    <div
      class="flex flex-row items-center justify-center p-4 gap-4 mx-auto w-[75%] h-[15%] bg-pink-300 rounded-xl shadow-lg"
      style="
        position: absolute;
        top: 13%;
        left: 50%;
        transform: translate(-50%, -50%);
      "
    >
      <img
        :src="profilePicture"
        alt="Profile Picture"
        class="w-25 h-25 rounded-lg border-4 border-pink-500"
        style="
          border-image: url('/src/assets/images/flower-border.png') 30 round;
        "
      />
      <div class="flex flex-col gap-4">
        <p
          class="text-2xl font-bold Truckin-font text-pink-600 mb-4"
          style="text-shadow: 2px 2px 0px black"
        >
          Welcome to my portfolio!
        </p>
      </div>
    </div>
    <div
      class="flex items-center justify-center p-4 gap-8"
      style="
        position: absolute;
        top: 33%;
        left: 50%;
        transform: translate(-50%, -50%);
      "
    >
      <div class="flex flex-col gap-4">
        <button
          class="flex flex-col items-center p-3 bg-pink-400 text-white rounded-lg w-16 h-16 shadow-md"
          @click="openModal('github')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <g fill="none">
              <path
                d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
              />
              <path
                fill="white"
                d="M7.024 2.31a9 9 0 0 1 2.125 1.046A11.4 11.4 0 0 1 12 3c.993 0 1.951.124 2.849.355a9 9 0 0 1 2.124-1.045c.697-.237 1.69-.621 2.28.032c.4.444.5 1.188.571 1.756c.08.634.099 1.46-.111 2.28C20.516 7.415 21 8.652 21 10c0 2.042-1.106 3.815-2.743 5.043a9.5 9.5 0 0 1-2.59 1.356c.214.49.333 1.032.333 1.601v3a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-.991c-.955.117-1.756.013-2.437-.276c-.712-.302-1.208-.77-1.581-1.218c-.354-.424-.74-1.38-1.298-1.566a1 1 0 0 1 .632-1.898c.666.222 1.1.702 1.397 1.088c.48.62.87 1.43 1.63 1.753c.313.133.772.22 1.49.122L8 17.98a4 4 0 0 1 .333-1.581a9.5 9.5 0 0 1-2.59-1.356C4.106 13.815 3 12.043 3 10c0-1.346.483-2.582 1.284-3.618c-.21-.82-.192-1.648-.112-2.283l.005-.038c.073-.582.158-1.267.566-1.719c.59-.653 1.584-.268 2.28-.031Z"
              />
            </g>
          </svg>
          <span class="text-xs mt-1">GitHub</span>
        </button>
        <a
          href="https://www.linkedin.com/in/kendra-ouellet-7a8802261/"
          target="_blank"
          class="flex flex-col items-center justify-center p-3 bg-pink-500 text-white rounded-lg w-16 h-16 shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
            />
          </svg>
          <span class="text-xs mt-1">LinkedIn</span>
        </a>
      </div>
      <img
        :src="mohawkAlumni"
        alt="Mohawk Alumni"
        class="rounded-lg w-36 h-36 shadow-md"
        style="margin-left: 2.5rem"
      />
    </div>
    <div
      class="flex items-center justify-center mt-8"
      style="
        position: absolute;
        top: 63%;
        left: 50%;
        transform: translate(-50%, -50%);
      "
    >
      <img
        :src="skills"
        alt="Skills"
        class="rounded-lg shadow-md"
        style="transform: scale(1.5)"
      />
    </div>

    <!-- Modals -->
    <div
      v-if="visibleModal === 'about'"
      class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
    >
      <div
        class="p-6 bg-pink-100 rounded-lg shadow-lg w-[90%] max-w-md relative animate-grow"
      >
        <!-- Close Button -->
        <button
          class="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          @click="closeModal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <!-- Modal Content -->
        <div class="grid grid-cols-1 gap-4">
          <h2
            class="text-3xl font-bold Truckin-font text-purple-500 mb-4"
            style="text-shadow: 2px 2px 0px black"
          >
            Kendra Ouellet
          </h2>
          <p class="Truckin-font font-thin text-md text-gray-700 mb-4">
            Former dental assistant turned software developer, I bring empathy,
            precision, and a passion for solving real-world problems with clean,
            maintainable code.
          </p>
          <div class="grid grid-cols-2 gap-6">
            <div
              class="relative border-2 border-purple-500 p-4 rounded-lg col-span-2"
            >
              <div
                class="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white text-center w-16 h-16 rounded-full flex items-center justify-center shadow-md"
              >
                <img
                  src="/src/assets/images/Music.png"
                  alt="Music Icon"
                  class="w-8 h-8"
                />
              </div>
              <h2 class="text-xl Truckin-font text-purple-500 mb-2 mt-8">
                Music
              </h2>
              <p class="text-gray-700 mt-8">
                This is the content of the first card. Add your description
                here.
              </p>
            </div>
            <div class="relative border-2 border-purple-500 p-4 rounded-lg">
              <div
                class="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white text-center w-16 h-16 rounded-full flex items-center justify-center shadow-md"
              >
                <img
                  src="/src/assets/images/Controller.png"
                  alt="Controller Icon"
                  class="w-8 h-8"
                />
              </div>
              <h2
                class="text-xl Truckin-font text-purple-500 mb-2"
                style="margin-top: 1.2rem"
              >
                Gaming
              </h2>
              <p class="text-gray-700">
                This is the content of the second card. Add your description
                here.
              </p>
            </div>
            <div class="relative border-2 border-purple-500 p-4 rounded-lg">
              <div
                class="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white text-center w-16 h-16 rounded-full flex items-center justify-center shadow-md"
              >
                <img
                  src="/src/assets/images/Trees.png"
                  alt="Trees Icon"
                  class="w-8 h-8"
                />
              </div>
              <h2
                class="text-xl Truckin-font text-purple-500"
                style="margin-top: 1.2rem"
              >
                Outgoing
              </h2>
              <p class="text-gray-700">
                This is the content of the third card. Add your description
                here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="visibleModal === 'projects'"
      class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
    >
      <div
        class="p-6 bg-pink-100 rounded-lg shadow-lg w-[90%] max-w-md relative animate-grow"
      >
        <!-- Close Button -->
        <button
          class="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          @click="closeModal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <!-- Modal Content -->
        <div class="grid grid-cols-1 gap-4">
          <h2
            class="text-3xl font-bold Truckin-font text-purple-500 mb-4"
            style="text-shadow: 2px 2px 0px black"
          >
            Projects
          </h2>
          <p class="Truckin-font font-thin text-md text-gray-700 mb-4">
            Here are some of my projects. Explore the details below!
          </p>
          <div class="flex flex-col gap-6">
            <div
              v-for="item in items"
              :key="item.id"
              class="relative border-2 border-purple-500 p-4 Truckin-font rounded-lg"
            >
              <div
                class="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white text-center w-16 h-16 rounded-full flex items-center justify-center shadow-md"
              >
                <img :src="item.image" :alt="item.title" class="w-8 h-8" />
              </div>
              <h2
                class="text-xl Truckin-font text-purple-500 mb-2"
                style="margin-top: 1.2rem"
              >
                {{ item.title }}
              </h2>
              <p class="text-gray-700">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="visibleModal === 'resume'"
      class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
    >
      <div
        class="p-6 bg-pink-100 rounded-lg shadow-lg w-[90%] max-w-md relative animate-grow"
      >
        <!-- Close Button -->
        <button
          class="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          @click="closeModal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <!-- Modal Content -->
        <div
          class="grid grid-cols-1 gap-4 overflow-y-auto"
          style="
            max-height: 70vh;
            scrollbar-color: purple transparent;
            scrollbar-width: thin;
            padding-left: 1rem;
          "
        >
          <h2
            class="text-3xl font-bold Truckin-font text-purple-500 mb-4"
            style="text-shadow: 2px 2px 0px black"
          >
            My Resume
          </h2>
          <PDF :src="pdfSource" class="w-full h-[70vh]"></PDF>
        </div>
      </div>
    </div>

    <!-- Bottom Navigation -->
    <nav
      class="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex gap-6 bg-white shadow-md p-4 rounded-xl"
    >
      <button
        class="flex flex-col items-center p-3 bg-pink-400 text-white rounded-lg w-16 h-16 shadow-md"
        @click="openModal('about')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
        >
          <path
            fill="white"
            d="m19.5 1l-1.09 2.41L16 4.5l2.41 1.09L19.5 8l1.1-2.41L23 4.5l-2.4-1.09zM12 2C6.5 2 2 6.5 2 12v10h20V12c0-1.47-.33-2.87-.9-4.13l-1.24 2.72c.08.46.14.91.14 1.41c0 4.43-3.57 8-8 8s-8-3.57-8-8v-.13a10 10 0 0 0 5.74-5.56A10 10 0 0 0 17.5 10a10 10 0 0 0 1.33-.09l-1.48-3.26L12.6 4.5l3.53-1.6C14.87 2.33 13.47 2 12 2m-3 9.75A1.25 1.25 0 0 0 7.75 13A1.25 1.25 0 0 0 9 14.25A1.25 1.25 0 0 0 10.25 13A1.25 1.25 0 0 0 9 11.75m6 0A1.25 1.25 0 0 0 13.75 13A1.25 1.25 0 0 0 15 14.25A1.25 1.25 0 0 0 16.25 13A1.25 1.25 0 0 0 15 11.75"
          />
        </svg>
        <span class="text-xs mt-1">About</span>
      </button>
      <button
        class="flex flex-col items-center p-3 bg-pink-500 text-white rounded-lg w-16 h-16 shadow-md"
        @click="openModal('projects')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 64 64"
        >
          <g fill="#F8BBD0">
            <path
              d="M48.48 14c2.498 0 4.52 2.224 4.52 4.978v31.04c0 2.746-2.02 4.979-4.52 4.979H7.516C5.024 54.997 3 52.765 3 50.018V18.269c0-2.754 2.02-4.272 4.516-4.272"
            />
            <path
              d="M18.26 8c.842 0 1.525.75 1.525 1.68l10 10.709c0 .926-.684 1.678-1.525 1.678H4.522c-.84 0-1.521-.752-1.521-1.678V9.68c0-.93.682-1.68 1.521-1.68z"
            />
          </g>
          <path
            fill="white"
            d="M56.41 22.944c2.496 0 4.518 2.224 4.518 4.978l-6.967 22.1c-.76 1.979-3.02 4.979-5.52 4.979H7.516C5.024 55.001 3 52.769 3 50.022l6.969-22.1C11 26 12.989 22.944 15.485 22.944"
          />
        </svg>
        <span class="text-xs mt-1">Projects</span>
      </button>
      <button
        class="flex flex-col items-center p-3 bg-pink-600 text-white rounded-lg w-16 h-16 shadow-md"
        @click="openModal('resume')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 16 16"
        >
          <path
            fill="white"
            d="M8 4.5A1.25 1.25 0 1 0 8 2a1.25 1.25 0 0 0 0 2.5"
          />
          <path
            fill="white"
            d="M8 4.5c.597 0 1.13.382 1.32.949l.087.26a.22.22 0 0 1-.21.291h-2.39a.222.222 0 0 1-.21-.291l.087-.26a1.39 1.39 0 0 1 1.32-.949zm-3 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m.5 1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"
          />
          <path
            fill="white"
            fill-rule="evenodd"
            d="M2.33 1.64c-.327.642-.327 1.48-.327 3.16v6.4c0 1.68 0 2.52.327 3.16a3.02 3.02 0 0 0 1.31 1.31c.642.327 1.48.327 3.16.327h2.4c1.68 0 2.52 0 3.16-.327a3 3 0 0 0 1.31-1.31c.327-.642.327-1.48.327-3.16V4.8c0-1.68 0-2.52-.327-3.16A3 3 0 0 0 12.36.33C11.718.003 10.88.003 9.2.003H6.8c-1.68 0-2.52 0-3.16.327a3.02 3.02 0 0 0-1.31 1.31m6.87-.638H6.8c-.857 0-1.44 0-1.89.038c-.438.035-.663.1-.819.18a2 2 0 0 0-.874.874c-.08.156-.145.38-.18.819c-.037.45-.038 1.03-.038 1.89v6.4c0 .857.001 1.44.038 1.89c.036.438.101.663.18.819c.192.376.498.682.874.874c.156.08.381.145.819.18c.45.036 1.03.037 1.89.037h2.4c.857 0 1.44 0 1.89-.037c.438-.036.663-.101.819-.18c.376-.192.682-.498.874-.874c.08-.156.145-.381.18-.82c.037-.45.038-1.03.038-1.89v-6.4c0-.856-.001-1.44-.038-1.89c-.036-.437-.101-.662-.18-.818a2 2 0 0 0-.874-.874c-.156-.08-.381-.145-.819-.18c-.45-.037-1.03-.038-1.89-.038"
            clip-rule="evenodd"
          />
        </svg>
        <span class="text-xs mt-1">Resume</span>
      </button>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import PDF from "pdf-vue3";

import profilePicture from "@/assets/images/Kendra.png";
import mohawkAlumni from "@/assets/images/mohawkAlumni.jpeg";
import skills from "@/assets/images/Skills.png";
import material from "@/assets/images/material-symbols--event.png";
import chat from "@/assets/images/cil--chat-bubble.png";

// State to track the currently visible modal
const visibleModal = ref<string | null>(null);

// Function to open a modal
const openModal = (modalName: string) => {
  visibleModal.value = modalName;
};

// Function to close the modal
const closeModal = () => {
  visibleModal.value = null;
};

// Sample data for projects
const items = ref([
  {
    id: 1,
    image: material,
    title: "Tournament Team Manager",
    description:
      "A full-stack application built with React, Express, and MongoDB. It allows users to manage teams, tournaments, and profiles with role-based access control. Features include Discord OAuth login, team and tournament management, and role-based permissions for Admins and Team Members.",
  },
  {
    id: 2,
    image: chat,
    title: "GamerHub",
    description:
      "Developed a gaming social platform using Laravel (backend) and Vue 3 + Inertia.js (frontend). Integrated Steam API, group management, and event scheduling.",
  },
]);

// PDF source for the resume
const pdfSource = ref("/Resume.pdf");
</script>
<style>
@keyframes slide-in {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes grow {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.animate-slide-in {
  animation: slide-in 0.5s ease-out;
}

.animate-fade-in {
  animation: fade-in 0.5s ease-out;
}

.animate-fade-in-delay {
  animation: fade-in 0.7s ease-out;
}

.animate-fade-in-delay-2 {
  animation: fade-in 0.9s ease-out;
}

.animate-grow {
  animation: grow 0.3s ease-out;
}
</style>
