<template>
  <div class="relative top-[48px] md:top-[92px]">
    <!--  -->
    <div class="w-full bg-[#f5f5f5] py-[20px] hidden md:block">
      <div class="w-[85%] xl:w-[1200px] mx-auto">
        <div class="flex justify-between items-center">
          <ul class="flex items-center gap-[20px] text-[14px]">
            <li
              class="text-[#383B63] p-[10px] hover:bg-[#6DC06E] hover:text-white cursor-pointer"
              :class="
                $route.path === '/about-us/our-rollout'
                  ? 'bg-[#6CC06D] text-white'
                  : null
              "
            >
              <router-link to="/about-us/our-rollout">Our Rollout</router-link>
            </li>
            <li
              class="text-[#383B63] p-[10px] hover:bg-[#6DC06E] hover:text-white cursor-pointer"
            >
              <router-link to="/about-us/our-infrastructure">Our Infrastructure</router-link>
            </li>
            <li
              class="text-[#383B63] p-[10px] hover:bg-[#6DC06E] hover:text-white cursor-pointer"
            >
              <router-link to="/about-us/our-platform">Our Platform</router-link>
            </li>
            <li
              class="text-[#383B63] p-[10px] hover:bg-[#6DC06E] hover:text-white cursor-pointer"
            >
              <router-link to="/about-us/our-service">Our Service</router-link>
            </li>
            <li
              class="text-[#383B63] p-[10px] hover:bg-[#6DC06E] hover:text-white cursor-pointer"
            >
              <router-link to="/about-us/our-management-team">Our Vision</router-link>
            </li>
            <li
              class="text-[#383B63] p-[10px] hover:bg-[#6DC06E] hover:text-white cursor-pointer"
            >
              <router-link to="/">Our Management Team</router-link>
            </li>
          </ul>
          <button class="p-[10px] bg-[#383B63] text-white text-[14px]">
            Check availability
          </button>
        </div>
      </div>
    </div>

    <!--  -->
    <section class="h-[300px] md:h-[500px] about-us-hero">
      <div
        class="w-full h-full bg-black absolute top-0 left-0 opacity-[.7]"
      ></div>
      <div class="absolute w-full h-full top-0 left-0">
        <div
          class="w-[85%] xl:w-[1200px] h-full flex flex-col justify-center mx-auto gap-[10px] md:gap-[40px]"
        >
          <div class="mb-[10px]">
            <h1
              class="text-white font-[700] uppercase text-[24px] md:text-[40px] lg:text-[80px] leading-[1]"
            >
            FIBRE-OPTIC NETWORK DESIGNED SPECIFICALLY <br class="hidden md:block"> FOR THE DIGITAL ERA
            </h1>
          </div>
        </div>
      </div>
    </section>

    <!--  -->
    <section class="p-[40px_0_40px_0] md:p-[80px_0_80px_0] bg-white">
      <div class="w-[85%] xl:w-[1200px] mx-auto">
        <div class="w-full lg:w-[800px] mx-auto">
          <div>
            <h3
              class="text-[20px] md:text-[30px] leading-[1.2] font-[600] mb-[10px] md:mb-[20px]"
            >
              Our Rollout
            </h3>
            <p class="text-[18px] md:text-[22px] font-[300] text-left mb-[30px]">
              Our company has designed a large open-access, fibre-only network
              in Lagos, covering millions of premises and offering services in
              various locations across our footprint. Our planned rollout will
              extend to over 1.2 million households, businesses, public sector
              sites, and 5G mobile sites.
            </p>
          </div>

          <div class="w-full h-[300px] md:h-[400px] bg-black"></div>
        </div>
      </div>
    </section>

    <!--  -->
    <section class="py-[40px] md:py-[80px] bg-[#c6fcc8]">
      <div class="w-[85%] xl:w-[1000px] mx-auto">
        <h3
          class="text-center font-[600] text-[16px] md:text-[22px] w-full lg:w-[900px] m-[0_auto_10px_auto] md:m-[0_auto_20px_auto]"
        >
          Explore the map and list of locations below to find out where we're
          building
        </h3>
        <div class="w-full">
          <Map />
        </div>
      </div>
    </section>

    <!--  -->
    <section class="py-[50px] md:py-[100px] bg-white">
      <div class="w-[85%] xl:w-[1200px] mx-auto">
        <div
          class="grid grid-cols-1 md:grid-cols-2 items-center gap-[20px] md:gap-[40px]"
        >
          <div>
            <h3
              class="text-black font-[600] text-[20px] md:text-[32px] leading-[1] tracking-tighter mb-[10px]"
            >
              Check my address
            </h3>
            <p class="text-[14px] md:text-[16px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos natus ex impedit voluptas, blanditiis voluptatem?
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-[80%_1fr]">
            <input
              type="text"
              placeholder="Your home address i.e. Ikoyi, Lagos"
              class="bg-transparent placeholder:text-[12px] md:placeholder:text-[14px] placeholder:text-black outline-none border border-gray-300 p-[10px]"
            />
            <button
              class="bg-black text-white text-[12px] md:text-[14px] leading-[1] p-[10px]"
            >
              Check now
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Map from "../../components/Map.vue";
export default {
  name: "Rollout",
  components: { Map },
};
</script>

<style scoped>
.about-us-hero {
  background-image: url(../../assets/images/bg3.jpg);
  object-fit: cover;
  background-position: center;
  background-size: cover;
  position: relative;
}

.text__underline {
  position: relative;
  font-weight: 500;
}

.text__underline:after {
  position: absolute;
  left: 0;
  top: 110%;
  content: "";
  height: 4px;
  width: 40px;
  background: #6cc06d;
}
</style>
