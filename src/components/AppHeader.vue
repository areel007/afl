<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

defineProps(["showMobileMenu", "navMenu"]);

// export default {
//   name: "AppHeader",
//   props: ["showMobileMenu", "navMenu"],
// };
</script>

<template>
  <header
    class="w-full absolute z-[1000] top-0 shadow-none"
    :class="$route.path === '/' ? 'bg-transparent' : 'bg-white !shadow-md'"
    v-if="route.path !== '/'"
  >
    <div class="w-[90%] xl:w-[1200px] mx-auto py-[10px] md:py-[20px]">
      <div class="flex justify-between items-center">
        <router-link to="/">
          <!-- <img
            src="../assets/images/logo-afl.png"
            class="w-[100px] md:w-[180px]"
            alt="afl"
            v-if="$route.path === '/'"
          /> -->
          <img
            src="../assets/images/afl-networks-logo.png"
            class="w-[100px] md:w-[180px]"
            alt="afl"
          />
        </router-link>

        <nav class="hidden lg:block text-white">
          <ul class="flex items-center gap-[10px] lg:gap-[20px]">
            <li
              class="text-[14px] font-[400] text-[#2A2760]"
              :class="
                $route.path.includes(_link.url)
                  ? 'text-[#6CC06D] font-[700]'
                  : 'text-[#2A2760]'
              "
              v-for="(_link, index) in navMenu"
              :key="index"
            >
              <a :href="_link.url">{{ _link.navName }}</a>
            </li>
          </ul>
        </nav>

        <div class="flex items-center cursor-pointer relative gap-[10px] lg:gap-[80px]">
          <div class="portal">
            <button
              class="p-[8px_20px] text-white bg-[#2A2760] text-[14px] border border-transparent hidden lg:flex items-center gap-[5px] hover:shadow-xl portal-btn w-full justify-between rounded-full"
            >
              <span>Portals</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>

            <div
              class="absolute top-[0] text-white bg-[#2A2760] shadow-lg p-[20px] text-[14px] portal-dropdown rounded-md z-[10]"
            >
              <a href="/">Client Portal</a>
              <a href="/">Customer Portal</a>
            </div>
          </div>

          <!-- Search -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 md:w-6 h-4 md:h-6 text-white"
            :class="$route.path === '/' ? 'text-white' : '!text-[#2A2760]'"
            @click="$emit('show-search')"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <!--Hamburger -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 md:w-6 h-5 md:h-6 block lg:hidden text-white"
            :class="$route.path === '/' ? 'text-white' : '!text-[#2A2760]'"
            @click="$emit('open-mobile-menu')"
            v-if="!showMobileMenu"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>

          <!-- Cancel -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 md:w-6 h-5 md:h-6 text-white"
            :class="$route.path === '/' ? 'text-white' : '!text-[#2A2760]'"
            v-else
            @click="$emit('close-mobile-menu')"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.portal-dropdown {
  display: none;
  flex-direction: column;
  gap: 20px;
  width: min-content;
  white-space: nowrap;
}
.portal:hover .portal-dropdown {
  display: flex;
}

@media screen and (max-width: 768px) {
  .portal-dropdown {
    display: none !important;
  }
}
</style>
