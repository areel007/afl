<script>
// import { ref, reactive } from "vue";
// import GoogleAutocomplete from "../components/GoogleAutocomplete.vue";
import PartnersCarousel from "../components/PartnersCarousel.vue";
import Rollout from "./about-us/rollout.vue";
import Carousel from "../components/Carousel.vue";
// import ParticleBackground from "../components/ParticleBackground.vue";

export default {
  name: "Home",
  components: { PartnersCarousel, Rollout, Carousel },
  data() {
    return {
      step: 1,
      regionValue: "",
      searchResult: [],
      searchAreaInput: "",
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

    checkArea() {
      if (this.searchAreaInput) {
        this.$router.push({
          path: "availability",
          query: { selectedAddress: this.searchAreaInput },
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
    <section class="w-full relative hero">
      <Carousel />
      <div
        class="absolute w-full h-full bg-[#2A2760] opacity-[0.6] z-[10] top-0 left-0"
      ></div>
    </section>

    <!-- Hero -->
    <!-- <section class="w-full h-[350px] md:h-[100vh] 2xl:h-[80vh] relative">
      <img src="../assets/images/bg1x.jpg" alt="afl" class="w-full h-full object-cover" />
      <div class="absolute w-full h-full bg-black opacity-[.6] z-[10] top-0 left-0"></div>
      <div class="absolute w-full h-full z-[11] top-0 left-0 pt-[50px] 2xl:pt-[150px]">
        <div class="w-[85%] xl:w-[1200px] h-full mx-auto flex flex-col justify-center">
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
    </section> -->

    <!--  -->
    <section class="p-[50px_0] md:p-[100px_0] bg-white">
      <div class="w-[85%] xl:w-[1200px] mx-auto">
        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-[20px] md:gap-[40px] items-center"
        >
          <div class="w-full h-full">
            <img
              src="../assets/images/deep-fibre-penetration.jpg"
              alt="afl"
              class="object-cover w-full"
            />
          </div>
          <div>
            <h3
              class="text-black font-[600] text-[20px] md:text-[34px] leading-[1.2] mb-[20px]"
            >
              Deep Fibre penetration <br class="hidden md:block" />
              with Carrier Class Services
            </h3>
            <p class="text-[14px] md:text-[16px] mb-[30px]">
              AFL Networks is a modern, future-proof network in Lagos capable of
              delivering metro connectivity that reaches all data centers and landing
              stations at any bandwidth required.
              <br />
              <br />
              The network, with its ultra-low-latency connectivity can support real-time
              transmission of high-quality video including 4K and future quality video
              resolutions (8k, 16k etc). It can deliver support for public and private 5G
              and IoT and also for colocation of edge caching from AFL Networks
              Points-of-Presence.
            </p>
            <a
              href="/about-us/#solution"
              class="bg-[#2A2760] p-[8px_20px] text-white rounded text-[14px] md:text-[16px] font-[300]"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>

    <!--  -->
    <section class="p-[50px_0] md:p-[100px_0] bg-[#dff6df]">
      <div class="w-[85%] xl:w-[1200px] mx-auto">
        <p class="uppercase mb-[20px] text-[14px] md:text-[16px]">Who we are</p>
        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-[20px] md:gap-[40px] items-center"
        >
          <div>
            <h3
              class="text-black font-[600] text-[20px] md:text-[34px] leading-[1.2] mb-[20px]"
            >
              Metro Aerial Fibre Infrastructure-as-a Service Provider
            </h3>
            <p class="text-[14px] md:text-[16px] mb-[30px]">
              Aldreda Fields Ltd (AFL) is licensed by the Nigerian Communications
              Commission (NCC) to provide and operate Open Access Metropolitan Fibre Cable
              Network Services in Nigeria. Our objective is to deepen broadband
              penetration in Lagos through the provision of an Open Access fibre-optic
              network infrastructure.
              <br />
              <br />
              Our goal is to become an enabler to Lagos State Government, existing
              telecommunications companies, and internet service providers (ISPs) by
              providing a future-proof fibre optic infrastructure to transform Lagos state
              into a digital knowledge-based economy.
            </p>
            <a
              href="/about-us"
              class="bg-[#2A2760] p-[8px_20px] text-white rounded text-[14px] md:text-[16px] font-[300]"
            >
              Learn more
            </a>
          </div>

          <div class="w-full h-full">
            <img
              src="../assets/images/metro-aerial-fibre.jpg"
              alt="afl"
              class="object-cover w-full"
            />
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
            Connect to the AFL Networks
          </h1>
          <p class="text-center text-[14px] md:text-[16px] w-[100%] md:w-[700px] mx-auto">
            Working with some of the Nigeria’s leading Telecommunications and ISPs, we’re
            delivering full fibre-optic broadband connectivity directly into many homes
            and businesses.
          </p>
        </div>
        <div class="mt-[20px] md:mt-[50px]">
          <PartnersCarousel />
        </div>
      </div>
    </section>

    <!--  -->
    <section class="py-[50px] md:py-[100px] bg-[#2a2760]">
      <div class="w-[85%] xl:w-[1200px] mx-auto">
        <div
          class="grid grid-cols-1 md:grid-cols-2 items-center gap-[20px] md:gap-[40px]"
        >
          <h3 class="text-white font-[600] text-[20px] md:text-[32px] leading-[1]">
            Check my address on the Network
          </h3>

          <div class="grid grid-cols-[65%_1fr] md:grid-cols-[80%_1fr]">
            <input
              type="text"
              placeholder="Your home address i.e. Ikoyi, Lagos"
              class="bg-transparent placeholder:text-[12px] md:placeholder:text-[14px] placeholder:text-white outline-none border border-white p-[10px] text-white"
              v-model="searchAreaInput"
            />
            <button
              class="bg-black text-white text-[12px] md:text-[14px] leading-[1]"
              @click="checkArea"
            >
              Check now
            </button>
          </div>
        </div>
      </div>
    </section>

    <!--  -->
    <section class="py-[50px] md:py-[100px]">
      <div class="w-[85%] xl:w-[1200px] mx-auto">
        <div class="w-full lg:w-[100%] mx-auto">
          <p class="uppercase mb-[20px] text-[14px] md:text-[16px]">Our network</p>
          <h3
            class="text-black font-[600] text-[20px] md:text-[34px] leading-[1.2] mb-[20px]"
          >
            Revolutionising Broadband Connectivity in Lagos
          </h3>
          <p class="text-[14px] md:text-[16px] w-[100%] lg:w-[800px] mb-[30px]">
            Aldreda Fields Limited (AFL Networks) is deploying a state-of-the-art carrier
            grade open-access aerial Fibre-to-the-X (FTTX) network infrastructure using
            its exclusive right-of-way on EKO Electricity Distribution Company’s (EKEDC)
            electricity distribution poles in Lagos.
          </p>
          <!-- <a
            href="/about-us/our-rollout"
            class="bg-[#2A2760] p-[8px_20px] text-white rounded text-[14px] md:text-[16px] font-[300] inline-block"
          >
            View Roll Out Map
          </a> -->
        </div>
      </div>
    </section>

    <section class="w-full h-[250px] md:h-[550px] bg-gray-100">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126841.26978267955!2d3.2015588435055764!3d6.548218935251483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1684840914625!5m2!1sen!2sng"
        class="w-full h-full"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  </div>
</template>

<style scoped>
.hero {
  height: 80vh;
}

.hide_br {
  display: block;
}

@media screen and (max-width: 1439px) {
  .hero {
    height: 100vh;
  }
}

@media screen and (max-width: 1280px) {
  .hero__text h1 {
    font-size: 70px;
  }
  .hero {
    height: auto;
    padding: 300px 0;
  }
}

@media screen and (max-width: 1144px) {
  .hero__text h1 {
    font-size: 60px;
  }
}

@media screen and (max-width: 981px) {
  .hero__text h1 {
    font-size: 50px;
  }
}

@media screen and (max-width: 817px) {
  .hero__text h1 {
    font-size: 40px;
  }
}

@media screen and (max-width: 654px) {
  .hero__text h1 {
    font-size: 30px;
  }
  .hero {
    height: auto;
    padding: 200px 0;
  }
}

@media screen and (max-width: 490px) {
  .hero__text h1 {
    font-size: 24px;
  }
  .hero {
    height: auto;
    padding: 120px 0;
  }
}

@media screen and (max-width: 392px) {
  .hero__text h1 {
    font-size: 18px;
  }
}

@media screen and (max-width: 920px) {
  .hide_br {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  .reverse {
    grid-row: 1/2;
  }
}

@media screen and (max-width: 400px) {
  .hide_br {
    display: block;
  }
}
</style>
