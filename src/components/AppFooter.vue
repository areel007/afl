<template>
  <footer
    class="py-[50px] md:py-[100px] bg-black"
    :class="$route.path !== '/' ? 'relative top-[48px] md:top-[92px]' : null"
  >
    <div class="w-[90%] xl:w-[1200px] mx-auto">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[40%_1fr_1fr_1fr] gap-[30px]"
      >
        <router-link to="/">
          <img
            src="../assets/images/logo-afl.png"
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
            AFL Limited Lagos:
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quam
            sapien, pretium nec lacus quis, pellentesque ultricies diam.
          </p>
        </div>

        <div>
          <p class="text-[14px] text-white">
            AFL Limited Lagos:
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quam
            sapien, pretium nec lacus quis, pellentesque ultricies diam.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: ["navMenu"],
};
</script>
