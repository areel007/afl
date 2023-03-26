<template>
  <div class="relative top-[48px] md:top-[92px]">
    <div class="w-full bg-[#f5f5f5] py-[20px] hidden lg:block">
      <div class="w-[85%] xl:w-[1200px] mx-auto">
        <div class="flex justify-between items-center">
          <ul class="flex items-center gap-[5px] xl:gap-[20px] text-[14px]">
            <li
              class="text-[#383B63] p-[10px] hover:bg-[#6DC06E] hover:text-white cursor-pointer"
              :class="
                $route.path === '/get-connected/homes'
                  ? 'bg-[#6CC06D] text-white'
                  : null
              "
            >
              <router-link to="/get-connected/homes" class="">Residential Properties</router-link>
            </li>
            <li
              class="text-[#383B63] p-[10px] hover:bg-[#6DC06E] hover:text-white cursor-pointer"
            >
              <router-link to="/get-connected/businesses"
                >Commercial Properties</router-link
              >
            </li>
            <li
              class="text-[#383B63] p-[10px] hover:bg-[#6DC06E] hover:text-white cursor-pointer"
            >
              <router-link to="/get-connected/landlords">Landlord & Estate Managers</router-link>
            </li>
            <li
              class="text-[#383B63] p-[10px] hover:bg-[#6DC06E] hover:text-white cursor-pointer"
            >
              <router-link to="/get-connected/developers"
                >Property Developers</router-link
              >
            </li>
            <li
              class="text-[#383B63] p-[10px] hover:bg-[#6DC06E] hover:text-white cursor-pointer"
            >
              <router-link to="/get-connected/public">Public Sectors</router-link>
            </li>
          </ul>
          <button class="p-[10px] bg-[#383B63] text-white text-[14px]">
            Check availability
          </button>
        </div>
      </div>
    </div>

    <!--  -->
    <section class="h-[300px] md:h-[500px] get-connected-hero">
      <div
        class="w-full h-full bg-black absolute top-0 left-0 opacity-[.7]"
      ></div>
      <div class="absolute w-full h-full top-0 left-0">
        <div
          class="w-[85%] xl:w-[1200px] h-full flex flex-col justify-center mx-auto gap-[10px] md:gap-[40px]"
        >
          <div class="mb-[10px]">
            <h1
              class="text-white font-[700] uppercase text-[24px] md:text-[40px] lg:text-[80px] leading-[1] w-full md:w-[70%] mb-[10px]"
            >
              Enabling open access metro fibre broadband
            </h1>
            <p
              class="text-[14px] md:text-[16px] text-white leading-[1] font-[300]"
            >
              Enter your address to find out how you can get connected
            </p>
          </div>
          <div
            class="w-[100%] md:w-[700px] grid grid-cols-1 sm:grid-cols-[80%_1fr] items-start"
          >
            <input
              type="text"
              class="p-[7px_10px] outline-none"
              placeholder="Your home address, i.e. Ikoyi"
            />
            <button class="p-[7px_10px] bg-[#6CC06D] text-white">
              Check now
            </button>
          </div>
        </div>
      </div>
    </section>

    <!--  -->
    <section
      class="py-[50px] md:py-[100px] bg-white"
    >
      <div class="w-[85%] xl:w-[1200px] mx-auto">
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[100px] items-start"
        >
          <div>
            <h3
              class="text-[20px] md:text-[30px] leading-[1.2] font-[600] mb-[20px]"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </h3>
            <p class="text-[14px] md:text-[16px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
              nisi sint quidem omnis voluptas animi libero labore nemo
              recusandae id officiis, quisquam, unde ea eveniet minus sunt earum
              dolorem officia! <br /><br />
              Adipisicing elit. Beatae nisi sint quidem omnis voluptas animi
              libero labore nemo recusandae id officiis, quisquam, unde ea
              eveniet minus sunt earum dolorem officia!
            </p>
          </div>

          <div class="w-full h-[300px] md:h-[400px] bg-gray-100"></div>
        </div>
      </div>
    </section>

    <!--  -->
    <section class="py-[50px] md:py-[100px] bg-gradient-to-br from-[#6CC06D] to-blue-400">
      <div class="w-[85%] xl:w-[1200px] mx-auto">
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[100px] items-start"
        >
          <div class="w-full h-[300px] md:h-[400px] bg-gray-100"></div>

          <div class="reverse">
            <h3
              class="text-[20px] md:text-[30px] leading-[1.2] font-[600] mb-[20px]"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </h3>
            <p class="text-[14px] md:text-[16px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
              nisi sint quidem omnis voluptas animi libero labore nemo
              recusandae id officiis, quisquam, unde ea eveniet minus sunt earum
              dolorem officia! <br /><br />
              Adipisicing elit. Beatae nisi sint quidem omnis voluptas animi
              libero labore nemo recusandae id officiis, quisquam, unde ea
              eveniet minus sunt earum dolorem officia!
            </p>
          </div>
        </div>
      </div>
    </section>

    <!--  -->
    <section class="py-[50px] md:py-[100px] bg-[#f5f5f5]">
      <div class="w-[85%] xl:w-[1200px] mx-auto">
        <div
          class="grid grid-cols-1 md:grid-cols-2 items-center gap-[20px] md:gap-[40px]"
        >
          <div>
            <h3
              class="text-black font-[600] text-[20px] md:text-[32px] leading-[1.2] mb-[10px] md:mb-[20px]"
            >
              Check my address
            </h3>
            <p class="text-[14px] md:text-[16px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos natus ex impedit voluptas, blanditiis voluptatem?
            </p>
          </div>

          <div class="grid grid-cols-[65%_1fr] md:grid-cols-[80%_1fr]">
            <input
              type="text"
              placeholder="Your home address i.e. Ikoyi, Lagos"
              class="bg-transparent placeholder:text-[12px] md:placeholder:text-[14px] placeholder:text-black outline-none border border-gray-300 p-[10px]"
            />
            <button
              class="bg-black text-white text-[12px] md:text-[14px] leading-[1]"
            >
              Check now
            </button>
          </div>
        </div>
      </div>
    </section>

    <!--  -->
    <section class="py-[50px] md:py-[100px] bg-white">
      <div class="w-[85%] xl:w-[1200px] mx-auto">
        <div class="w-full lg:w-[100%] mx-auto">
          <h1
            class="text-center mb-[10px] text-[18px] md:text-[32px] font-[600] leading-[1.2]"
          >
            A range of providers to choose
          </h1>
          <p
            class="text-center text-[14px] md:text-[16px] w-[100%] md:w-[700px] mx-auto"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
            quidem inventore officia, quam ducimus labore culpa nihil ipsa magni
            in.
          </p>
        </div>
        <div class="mt-[20px] md:mt-[50px]">
          <PartnersCarousel />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PartnersCarousel from "../../components/PartnersCarousel.vue";
export default {
  name: "Homes",
  components: { PartnersCarousel },
  
};
</script>

<style scoped>
.get-connected-hero {
  background-image: url(../../assets/images/bg3.jpg);
  object-fit: cover;
  background-position: center;
  background-size: cover;
  position: relative;
}

@media screen and (max-width: 768px) {
  .reverse {
    grid-row: 1/2;
  }
}
</style>
