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
                $route.path === '/communication/news'
                  ? 'bg-[#6CC06D] text-white'
                  : null
              "
            >
              <router-link to="/communication/news">News</router-link>
            </li>
            <li
              class="text-[#383B63] p-[10px] hover:bg-[#6DC06E] hover:text-white cursor-pointer"
            >
              <router-link to="/communication/contact-us"
                >Contact us</router-link
              >
            </li>
          </ul>
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
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
          <NewsCard
            v-for="(_news, index) in news"
            :key="index"
            :category="_news.category"
            :title="_news.title"
            :date="_news.date"
            :img-url="_news.imgUrl"
          />
        </div>
        <div class="w-full md:w-[400px] mx-auto mt-[20px] md:mt-[40px]">
          <div class="flex justify-center gap-[5px] items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>

            <div
              class="p-[5px] bg-[#6cc06d] w-[30px] h-[30px] text-white flex justify-center items-center cursor-pointer"
            >
              1
            </div>
            <div
              class="p-[5px] bg-black w-[30px] h-[30px] text-white flex justify-center items-center cursor-pointer"
            >
              2
            </div>
            <div
              class="p-[5px] bg-black w-[30px] h-[30px] text-white flex justify-center items-center cursor-pointer"
            >
              3
            </div>
            <div
              class="p-[5px] bg-black w-[30px] h-[30px] text-white flex justify-center items-center cursor-pointer"
            >
              4
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NewsCard from "../../components/NewsCard.vue";
export default {
  name: "AFLBlog",
  components: { NewsCard },
  data() {
    return {
      news: [
        {
          category: "AFL News",
          title:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, velit.",
          date: "21 March 2023",
          imgUrl:
            "https://cdn.cityfibre.com/transforms/s3assets/419441/5b99c_e6599.webp",
        },
        {
          category: "AFL News",
          title: "Sit dolor amet consectetur adipisicing elit. Quaerat, velit.",
          date: "17 March 2023",
          imgUrl:
            "https://cdn.cityfibre.com/transforms/s3assets/419441/5b99c_e6599.webp",
        },
        {
          category: "AFL News",
          title: "Sit dolor amet consectetur adipisicing elit. Quaerat, velit.",
          date: "17 March 2023",
          imgUrl:
            "https://cdn.cityfibre.com/transforms/s3assets/419441/5b99c_e6599.webp",
        },
        {
          category: "AFL News",
          title: "Sit dolor amet consectetur adipisicing elit. Quaerat, velit.",
          date: "17 March 2023",
          imgUrl:
            "https://cdn.cityfibre.com/transforms/s3assets/419441/5b99c_e6599.webp",
        },
        {
          category: "AFL News",
          title: "Sit dolor amet consectetur adipisicing elit. Quaerat, velit.",
          date: "17 March 2023",
          imgUrl:
            "https://cdn.cityfibre.com/transforms/s3assets/419441/5b99c_e6599.webp",
        },
        {
          category: "AFL News",
          title: "Sit dolor amet consectetur adipisicing elit. Quaerat, velit.",
          date: "17 March 2023",
          imgUrl:
            "https://cdn.cityfibre.com/transforms/s3assets/419441/5b99c_e6599.webp",
        },
      ],
    };
  },
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
