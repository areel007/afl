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
                $route.path === '/communication/news' ? 'bg-[#6CC06D] text-white' : null
              "
            >
              <router-link to="/communication/news">News</router-link>
            </li>
            <li
              class="text-[#383B63] p-[10px] hover:bg-[#6DC06E] hover:text-white cursor-pointer"
            >
              <router-link to="/communication/contact-us">Contact us</router-link>
            </li>
          </ul>
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
              News
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
    <section class="py-[50px] md:py-[100px] bg-[#6cc06d]">
      <div class="w-[85%] xl:w-[1200px] mx-auto">
        <SearchFilter @filter-action="filterAction" />

        <div class="" v-if="news === null">
          <Spinner />
        </div>
        <div class="" v-else>
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
            <NewsCard
              v-for="(_news, index) in news"
              :key="index"
              :category="_news.category"
              :title="_news.title"
              :date="_news.createdAt"
              :img-url="_news.imageUrl"
              :id="_news._id"
            />
          </div>

          <!-- <Pagination @get-page="getPage" :step="step" @prev="prev" @next="next" /> -->
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import NewsCard from "../../components/NewsCard.vue";
import Pagination from "../../components/Pagination.vue";
import SearchFilter from "../../components/SearchFilter.vue";
import Spinner from "../../components/Spinner.vue";

const news = ref(null);
const step = ref(0);

const getAllNews = async () => {
  const _news = await axios.get("https://afl-server.onrender.com/api/v1/news");

  news.value = _news.data.msg;
  console.log(news.value);
};

const getPage = async (e) => {
  const response = await axios.get(
    `https://afl-server.onrender.com/api/v1/news?p=${e.target.innerHTML - 1}`
  );

  news.value = response.data.msg;

  step.value = parseInt(e.target.innerHTML - 1);
};

const prev = async () => {
  const st = parseInt(step.value - 1);
  const response = await axios.get(`https://afl-server.onrender.com/api/v1/news?p=${st}`);

  news.value = response.data.msg;

  step.value = st;
};

const next = async () => {
  const st = parseInt(step.value + 1);
  const response = await axios.get(`https://afl-server.onrender.com/api/v1/news?p=${st}`);

  news.value = response.data.msg;

  step.value = st;
};

const filterAction = async (e) => {
  if (e.trim().length > 0) {
    const _news = await axios.get(
      "https://afl-server.onrender.com/api/v1/news/dashboard"
    );

    news.value = _news.data.msg.filter((_res) =>
      _res.title.toLowerCase().includes(e.toLowerCase())
    );
  } else {
    const _news = await axios.get("https://afl-server.onrender.com/api/v1/news");

    getAllNews();
  }
};

onMounted(() => {
  getAllNews();
});
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
