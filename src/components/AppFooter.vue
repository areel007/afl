<template>
  <footer
    v-if="$route.path !== '/'"
    class="py-[50px] md:py-[100px] bg-black"
    :class="
      $route.path.split('/')[1] !== 'admin' && $route.path !== '/home'
        ? 'relative top-[48px] md:top-[92px]'
        : null
    "
  >
    <div class="w-[90%] xl:w-[1200px] mx-auto mb-[50px]">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[40%_1fr_1fr_1fr] gap-[30px]"
      >
        <router-link to="/">
          <img
            src="../assets/images/afl-networks-logo-reversed.png"
            alt="afl logo"
            class="w-[100px] md:w-[180px]"
          />
        </router-link>
        <div>
          <h3
            class="text-white font-[600] text-[16px] md:text-[18px] mb-[10px] md:mb-[20px]"
          >
            Top links
          </h3>
          <ul>
            <li
              class="text-[14px] text-white mb-[5px] last:mb-0 hover:underline"
              v-for="(_link, index) in navMenu"
              :key="index"
            >
              <router-link :to="_link.url">{{ _link.navName }}</router-link>
            </li>
          </ul>
        </div>

        <div>
          <h3
            class="text-white font-[600] text-[16px] md:text-[18px] mb-[10px] md:mb-[20px]"
          >
            Contact us
          </h3>
          <p class="text-[14px] text-white">
            7 Admirality Way, <br />
            Lekki Phase 1 <br />
            (beside Lennox Mall), <br />
            Lagos
          </p>
        </div>

        <div>
          <div class="text-[14px] text-white flex flex-col gap-[5px]">
            <p class="flex gap-[4px] items-center">
              <IconEnvelope /><span>info@afl.ng</span>
            </p>
            <p class="flex gap-[4px] items-center">
              <IconPhone /><span>+234 908 799 1348</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="text-white text-center leading-[1] text-[14px]">
      &copy; {{ new Date().getFullYear() }} AFL Networks. All rights reserved.
    </div>
  </footer>
</template>

<script>
import IconEnvelope from "./icons/IconEnvelope.vue";
import IconPhone from "./icons/IconPhone.vue";

export default {
  name: "Footer",
  props: ["navMenu"],
  components: { IconEnvelope, IconPhone },
};
</script>
