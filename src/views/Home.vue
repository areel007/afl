<script>
import { ref, reactive } from "vue";
// import GoogleAutocomplete from "../components/GoogleAutocomplete.vue";
import PartnersCarousel from "../components/PartnersCarousel.vue";

export default {
  name: "Home",
  components: { PartnersCarousel },
  data() {
    return {
      step: 1,
      regionValue: "",
      searchResult: [],
    };
  },
  methods: {
    setPlace(e) {
      this.searchResult = e.target.value;
      console.log(this.searchResult);
    },
    checkNow() {
      if (this.searchResult.length > 0) {
        this.$router.push({
          path: "availability",
          query: { selectedAddress: this.searchResult },
        });
      } else {
        alert("Input your address correctly");
      }
    },
  },
};
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="w-full h-[350px] md:h-[100vh] 2xl:h-[80vh] relative">
      <img
        src="../assets/images/bg1x.jpg"
        alt="afl"
        class="w-full h-full object-cover"
      />
      <div
        class="absolute w-full h-full bg-black opacity-[.6] z-[10] top-0 left-0"
      ></div>
      <div
        class="absolute w-full h-full z-[11] top-0 left-0 pt-[50px] 2xl:pt-[150px]"
      >
        <div
          class="w-[85%] xl:w-[1200px] h-full mx-auto flex flex-col justify-center"
        >
          <div class="mb-[50px] 2xl:mb-[150px]">
            <h1
              class="text-white uppercase text-[30px] md:text-[40px] lg:text-[50px] xl:text-[100px] 2xl:text-[120px] font-[700] leading-[.8]"
            >
              Internet <br />
              for <br />institution<br />
              & sme
            </h1>
          </div>

          <div>
            <nav class="flex gap-[5px]">
              <button
                @click="step = 1"
                class="p-[5px_10px] text-[12px] md:text-[14px] bg-[#6CC06D] rounded-tl-md rounded-tr-md text-white"
                :class="step !== 1 ? 'bg-white !text-[#6CC06D]' : null"
              >
                For Home
              </button>
              <button
                @click="step = 2"
                class="p-[5px_10px] text-[12px] md:text-[14px] bg-[#6CC06D] rounded-tl-md rounded-tr-md text-white"
                :class="step !== 2 ? 'bg-white !text-[#6CC06D]' : null"
              >
                For Business
              </button>
            </nav>

            <div class="w-full md:w-[600px] relative">
              <div class="w-full flex flex-col md:flex-row" v-if="step === 1">
                <div
                  class="bg-[#f5f5f5] flex-[2] rounded-bl-0 md:rounded-bl-md rounded-tr-md md:rounded-tr-none"
                >
                  <GMapAutocomplete
                    placeholder="Your home address, i.e. Plot 5, Banana Island"
                    @change="setPlace"
                    class="w-full outline-none p-[10px] rounded-[0_0_0_5px] placeholder:text-[14px]"
                  >
                  </GMapAutocomplete>
                </div>
                <button
                  class="p-[5px_10px] bg-[#6CC06D] text-[14px] text-white rounded-tr-0 md:rounded-tr-md rounded-br-md rounded-bl-md md:rounded-bl-none"
                  @click="checkNow"
                >
                  Check now
                </button>
              </div>
              <div class="w-full flex flex-col md:flex-row" v-if="step === 2">
                <div
                  class="bg-[#f5f5f5] flex-[2] rounded-bl-0 md:rounded-bl-md rounded-tr-md md:rounded-tr-none"
                >
                  <GMapAutocomplete
                    placeholder="Your office address, i.e. Adeola Odeku, VI"
                    @change="setPlace"
                    class="w-full outline-none p-[10px] rounded-[0_0_0_5px] placeholder:text-[14px]"
                  >
                  </GMapAutocomplete>
                </div>
                <button
                  class="p-[5px_10px] bg-[#6CC06D] text-[14px] text-white rounded-tr-0 md:rounded-tr-md rounded-br-md rounded-bl-md md:rounded-bl-none"
                  @click="checkNow"
                >
                  Check now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--  -->
    <section
      class="p-[50px_0_0_0] md:p-[100px_0_0_0] bg-white"
    >
      <div class="w-[85%] xl:w-[1200px] mx-auto">
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[40px] items-center"
        >
          <div class="w-full h-full">
            <img
              src="../assets/images/pexels-pixabay-159304.jpg"
              alt="afl"
              class="object-cover"
            />
          </div>
          <div>
            <h3
              class="text-black font-[600] text-[20px] md:text-[34px] leading-[1] mb-[20px]"
            >
              We're revolutionising broadband
            </h3>
            <p class="text-[14px] md:text-[16px] mb-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
              illum totam enim alias officia, magni sunt porro dolorum amet.
              <br />
              <br />
              temporibus blanditiis asperiores tempore vel veniam, cupiditate
              molestiae hic similique. Necessitatibus consequatur fugiat eum
              exercitationem ullam soluta error amet, quis nam laboriosam ex,
              voluptatum porro enim odio possimus veritatis.
            </p>
            <a href="/get-connected/homes"
              class="bg-black p-[8px_20px] text-white rounded text-[14px] md:text-[16px] font-[300]"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </section>

    <!--  -->
    <section class="py-[50px] md:py-[100px]">
      <div class="w-[85%] xl:w-[1200px] mx-auto">
        <div class="w-full lg:w-[100%] mx-auto">
          <h1
            class="text-center mb-[10px] text-[18px] md:text-[32px] font-[600] leading-[1.2]"
          >
            Connect to the AFL Network
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

    <!--  -->
    <section class="py-[50px] md:py-[100px] bg-[#67be68]">
      <div class="w-[85%] xl:w-[1200px] mx-auto">
        <div
          class="grid grid-cols-1 md:grid-cols-2 items-center gap-[20px] md:gap-[40px]"
        >
          <h3
            class="text-black font-[600] text-[20px] md:text-[32px] leading-[1]"
          >
            We're revolutionising broadband
          </h3>

          <div class="grid grid-cols-[65%_1fr] md:grid-cols-[80%_1fr]">
            <input
              type="text"
              placeholder="Your home address i.e. Ikoyi, Lagos"
              class="bg-transparent placeholder:text-[12px] md:placeholder:text-[14px] placeholder:text-black outline-none border border-black p-[10px]"
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
    <section class="p-[50px_0] md:p-[100px_0]">
      <div
        class="w-[85%] xl:w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[70%_1fr] gap-[20px] md:gap-[40px]"
      >
        <div>
          <p class="text-[14px] md:text-[16px] text-black uppercase mb-[20px]">
            Our Rollout
          </p>
          <h3
            class="text-black font-[600] text-[20px] md:text-[32px] leading-[1.1] mb-[20px]"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ab.
          </h3>
          <p class="text-[14px] md:text-[16px] mb-[20px] md:mb-[40px]">
            We have designed a large open-access, fibre-only network in Lagos, covering millions of premises and offering services in various locations across the state. Our planned rollout will extend to over 1.2 million households, businesses, public sector sites, and 5G mobile sites.
          </p>
          <router-link to="/about-us/our-rollout"
            class="bg-black text-white text-[14px] md:text-[16px] p-[7px_20px] rounded font-[300]"
          >
            View rollout map
          </router-link>
        </div>
      </div>

      <!-- <div class="w-[85%] xl:w-[1200px] mx-auto">
        <div
          class="w-full xl:w-[900px] mt-[20px] md:mt-[40px] grid grid-cols-2 lg:grid-cols-4 gap-[20px] md:gap-[40px]"
        >
          <div class="flex flex-col items-center justify-center">
            <span class="text-[30px] md:text-[50px] uppercase font-[700]"
              >$4bn</span
            >
            <span
              class="text-center uppercase text-[12px] md:text-[16px] leading-[1]"
              >investment programme</span
            >
          </div>

          <div class="flex flex-col items-center justify-center">
            <span class="text-[30px] md:text-[50px] uppercase font-[700]"
              >8m</span
            >
            <span
              class="text-center uppercase text-[12px] md:text-[16px] leading-[1]"
              >home</span
            >
          </div>

          <div class="flex flex-col items-center justify-center">
            <span class="text-[30px] md:text-[50px] uppercase font-[700]"
              >800k</span
            >
            <span
              class="text-center uppercase text-[12px] md:text-[16px] leading-[1]"
              >businesses</span
            >
          </div>

          <div class="flex flex-col items-center justify-center">
            <span class="text-[30px] md:text-[50px] uppercase font-[700]"
              >285</span
            >
            <span
              class="text-center uppercase text-[12px] md:text-[16px] leading-[1]"
              >locations</span
            >
          </div>
        </div>
      </div> -->
    </section>

    <!--  -->
    <section class="py-[50px] md:py-[100px] bg-gray-100">
      <div class="w-[85%] xl:w-[1200px] mx-auto">
        <div
          class="w-full grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[40px] items-center mb-[40px] md:mb-[60px]"
        >
          <div>
            <p
              class="text-[14px] md:text-[16px] text-black mb-[10px] md:mb-[20px]"
            >
              AFL for your home
            </p>
            <h3
              class="text-[18px] md:text-[30px] leading-[1.2] font-[600] mb-[10px] md:mb-[20px]"
            >
              Lorem ipsum dolor sit amet.
            </h3>
            <p class="text-[14px] md:text-[16px] mb-[20px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Temporibus et excepturi nemo? Quae animi architecto numquam ullam,
              consequatur non sunt.
            </p>
            <a href="/get-connected/homes"
              class="bg-black p-[8px_20px] text-white rounded text-[14px] md:text-[16px] font-[300]"
            >
              Get started
            </a>
          </div>
          <div>
            <img
              src="../assets/images/pexels-picjumbocom-196655.jpg"
              alt="afl"
            />
          </div>
        </div>

        <div
          class="w-full grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[40px] items-center"
        >
          <div>
            <img
              src="../assets/images/pexels-picjumbocom-196655.jpg"
              alt="afl"
            />
          </div>
          <div class="reverse">
            <p
              class="text-[14px] md:text-[16px] text-black mb-[10px] md:mb-[20px]"
            >
              AFL for your business
            </p>
            <h3
              class="text-[18px] md:text-[30px] leading-[1.2] font-[600] mb-[10px] md:mb-[20px]"
            >
              Lorem ipsum dolor sit amet.
            </h3>
            <p class="text-[14px] md:text-[16px] mb-[20px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Temporibus et excepturi nemo? Quae animi architecto numquam ullam,
              consequatur non sunt.
            </p>
            <a href="/get-connected/homes"
              class="bg-black p-[8px_20px] text-white rounded text-[14px] md:text-[16px] font-[300]"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </section>

    <!--  -->
    <section class="bg-[#6CC06D] py-[50px] md:py-[100px]">
      <div class="w-[85%] xl:w-[1200px] mx-auto">
        <h3
          class="text-center font-[600] text-[18px] md:text-[30px] mb-[10px] md:mb-[20px] leading-[1.2]"
        >
          More about AFL
        </h3>
        <div class="p-[20px] bg-white">
          <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
            <div
              class="border-r-none md:border-r border-b md:border-b-0 border-black p-[20px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                class="w-[30px] h-[30px] mb-[10px]"
              >
                <path
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223 149.5c48.6-44.3 123-50.8 179.3-11.7c60.8 42.4 78.9 123.2 44.2 186.9L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3L223 149.5zm223.1 298L83.1 161.5c-11 14.4-20.5 28.7-28.4 42.2l339 265.7c18.7-5.5 36.2-13 52.6-21.8zM34.5 268.3c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c3.1 0 6.1-.1 9.2-.2L33.1 247.8c-1.8 6.8-1.3 14 1.4 20.5z"
                />
              </svg>
              <p
                class="uppercase text-[16px] md:text-[18px] font-[600] mb-[10px]"
              >
                Our vision
              </p>
              <p class="text-[12px] md:text-[14px] mb-[10px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quia
                expedita consectetur dolorem ex dolorum!
              </p>
              <NuxtLink to="/" class="underline text-[10px] md:text-[12px]"
                >See our vision</NuxtLink
              >
            </div>

            <div
              class="border-r-none md:border-r border-b md:border-b-0 border-black p-[20px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                class="w-[30px] h-[30px] mb-[10px]"
              >
                <path
                  d="M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L512 316.8V128h-.7l-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48V352h28.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123zM16 128c-8.8 0-16 7.2-16 16V352c0 17.7 14.3 32 32 32H64c17.7 0 32-14.3 32-32V128H16zM48 320a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM544 128V352c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V144c0-8.8-7.2-16-16-16H544zm32 208a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z"
                />
              </svg>
              <p
                class="uppercase text-[16px] md:text-[18px] font-[600] mb-[10px]"
              >
                Our partners
              </p>
              <p class="text-[12px] md:text-[14px] mb-[10px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quia
                expedita consectetur dolorem ex dolorum!
              </p>
              <NuxtLink to="/" class="underline text-[10px] md:text-[12px]"
                >See our partners</NuxtLink
              >
            </div>

            <div
              class="border-r-none md:border-r border-b md:border-b-0 border-black p-[20px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                class="w-[30px] h-[30px] mb-[10px]"
              >
                <path
                  d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z"
                />
              </svg>
              <p
                class="uppercase text-[16px] md:text-[18px] font-[600] mb-[10px]"
              >
                Our team
              </p>
              <p class="text-[12px] md:text-[14px] mb-[10px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quia
                expedita consectetur dolorem ex dolorum!
              </p>
              <NuxtLink to="/" class="underline text-[10px] md:text-[12px]"
                >See our team</NuxtLink
              >
            </div>

            <div class="p-[20px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                class="w-[30px] h-[30px] mb-[10px]"
              >
                <path
                  d="M64 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H128C57.3 32 0 89.3 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                />
              </svg>
              <p
                class="uppercase text-[16px] md:text-[18px] font-[600] mb-[10px]"
              >
                Faqs
              </p>
              <p class="text-[12px] md:text-[14px] mb-[10px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quia
                expedita consectetur dolorem ex dolorum!
              </p>
              <NuxtLink to="/" class="underline text-[10px] md:text-[12px]"
                >See faqs</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@media screen and (max-width: 768px) {
  .reverse {
    grid-row: 1/2;
  }
}
</style>
