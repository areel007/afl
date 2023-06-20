<template>
  <div class="relative top-[48px] md:top-[92px]" style="min-height: 70vh">
    <div class="w-[85%] xl:w-[1200px] mx-auto">
      <div class="py-[50px] md:py-[100px]">
        <div v-if="news.title === undefined">
          <Spinner />
        </div>
        <div class="w-[100%] sm:w-[800px]" v-else>
          <span class="text-[14px] mb-[10px] block">{{ news.category }}</span>
          <h3
            class="uppercase font-[600] text-[20px] md:text-[34px] leading-[1] mb-[10px]"
          >
            {{ news.title }}
          </h3>
          <div class="mb-[20px]">
            <div class=""></div>
            <span class="text-[14px]">{{ news.createdAt }}</span>
          </div>
          <img
            :src="news.imageUrl"
            alt="afl network"
            class="w-[100%] sm:w-[600px] h-[250px] object-cover mb-[40px]"
          />

          <div
            v-html="news.content"
            class="text-[14px] sm:text-[16px] leading-[1.5]"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Spinner from "../../../components/Spinner.vue";

export default {
  name: "singleNews",
  components: { Spinner },

  data() {
    return {
      news: {},
    };
  },

  async created() {
    const news = await axios.get(
      `https://afl-server.onrender.com/api/v1/news/${this.$route.params.id}`
    );

    this.news = news.data.msg;
  },
};
</script>
