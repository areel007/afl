<template>
  <div class="relative top-[48px] md:top-[92px]">
    <!--  -->
    <div class="w-full bg-[#f5f5f5] py-[20px] hidden lg:block">
      <div class="w-[85%] xl:w-[1200px] mx-auto">
        <div class="flex justify-between items-center">
          <ul class="flex items-center gap-[20px] text-[14px]">
            <li
              class="text-[#383B63] p-[10px] hover:bg-[#6DC06E] hover:text-white cursor-pointer"
            >
              <router-link to="/about-us/our-rollout">Our Rollout</router-link>
            </li>
            <li
              class="text-[#383B63] p-[10px] hover:bg-[#6DC06E] hover:text-white cursor-pointer"
            >
              <router-link to="/about-us/our-infrastructure"
                >Our Infrastructure</router-link
              >
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
            <!-- <li
              class="text-[#383B63] p-[10px] hover:bg-[#6DC06E] hover:text-white cursor-pointer"
            >
              <router-link to="/">Our Vision</router-link>
            </li> -->
            <!-- <li
              class="text-[#383B63] p-[10px] hover:bg-[#6DC06E] hover:text-white cursor-pointer"
            >
              <router-link to="/about-us/our-management-team"
                >Our Management Team</router-link
              >
            </li> -->
          </ul>
          <!-- <button class="p-[10px] bg-[#383B63] text-white text-[14px]">
            Check availability
          </button> -->
        </div>
      </div>
    </div>

    <!--  -->
    <section class="h-[300px] md:h-[500px] about-us-hero">
      <div class="w-full h-full bg-black absolute top-0 left-0 opacity-[.7]"></div>
      <div class="absolute w-full h-full top-0 left-0">
        <div
          class="w-[85%] xl:w-[1200px] h-full flex flex-col justify-center mx-auto gap-[10px] md:gap-[40px]"
        >
          <div class="mb-[10px]">
            <p
              class="text-[14px] md:text-[18px] leading-[1] font-[300] mb-[20px] md:mb-[40px] uppercase text-white text__underline"
            >
              About us
            </p>
            <h1
              class="text-white font-[700] uppercase text-[24px] md:text-[40px] lg:text-[80px] leading-[1]"
            >
              FIBRE-OPTIC NETWORK DESIGNED SPECIFICALLY
              <br class="hidden md:block" />
              FOR THE DIGITAL ERA
            </h1>
          </div>
        </div>
      </div>
    </section>

    <!--  -->
    <section class="py-[50px] md:py-[100px] bg-white">
      <div class="w-[85%] xl:w-[1200px] mx-auto">
        <div class="w-[100%] md:w-[800px] mx-auto mb-[20px] md:mb-[40px]">
          <h1
            class="font-[600] text-[20px] md:text-[28px] leading-[1.3] mb-[15px] md:mb-[20px] text-[#2A2760]"
          >
            In 2018, AFL Networks was established to revolutionise the industry, increase
            consumer options, and unleash communities' digital potential within our
            operating footprint.
          </h1>
          <p class="text-[14px] md:text-[16px]">
            Our mission is to construct a purpose-built aerial fibre-optic network that
            offers seamless and dependable connections for the digital age.
            <br /><br />
            Our intelligent network surpasses expectations with its vast capacity, ease of
            deployment and upgrade, and advanced fibre exchanges.
            <br /><br />
            We're proud to be the largest open-access fibre-only operator in Lagos,
            providing services in most areas across the footprint. However, our focus on
            quality and commitment to getting it right the first time for the benefit of
            people and the planet has made us the network of choice for many residential,
            business, mobile, and public sector locations in Lagos.
          </p>
        </div>

        <!-- Videos -->
        <div class="w-full md:w-[800px] mx-auto h-[250px] md:h-[400px] bg-gray-300">
          <img
            src="../../assets/images/about-intro.jpg"
            alt="afl network"
            class="w-full h-full object-cover"
          />
        </div>
        <!-- <video
          controls
          class="w-full md:w-[800px] mx-auto"
          src="../../assets/videos/production ID_4115236.mp4"
        ></video> -->
      </div>
    </section>

    <!--  -->
    <section class="py-[50px] md:py-[100px] bg-[#f5f5f5]" v-if="!loading">
      <div class="w-[85%] xl:w-[1200px] mx-auto">
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[60px] items-center"
        >
          <div class="w-full h-[250px] md:h-[400px] bg-black">
            <img
              :src="singleNews.imageUrl"
              alt="AFL Networks"
              class="w-full h-full object-cover"
            />
          </div>
          <div>
            <p class="font-[500] text-[14px] md:text-[16px] mb-[10px] md:mb-[20px]">
              News
            </p>
            <h3
              class="text-[16px] md:text-[24px] leading-[1] font-[600] mb-[10px] md:mb-[20px]"
            >
              {{ singleNews.title }}
            </h3>
            <p class="text-[14px] md:text-[16px] mb-[10px] md:mb-[20px]">
              {{ singleNews.subtitle }}
            </p>
            <router-link
              :to="`/communication/news/${singleNews._id}`"
              class="bg-black p-[10px_20px] text-white text-[14px] inline-block"
            >
              Read more
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import PartnersCarousel from "../../components/PartnersCarousel.vue";
import Loading from "../../components/icons/Loading.vue";
export default {
  name: "GetConnected",
  components: { PartnersCarousel, Loading },
  data() {
    return {
      news: [],
      singleNews: {},
      loading: "true",
    };
  },
  methods: {
    async getBlog() {
      const response = await axios.get("https://afl-server.onrender.com/api/v1/news");
      this.news = response.data.msg;
      this.singleNews = this.news[0];
      this.loading = false;
    },
  },

  mounted() {
    this.getBlog();
  },
};
</script>

<style scoped>
.about-us-hero {
  background-image: url(../../assets/images/bg3.webp);
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

@media screen and (max-width: 768px) {
  .reverse {
    grid-row: 1/2;
  }
}
</style>
