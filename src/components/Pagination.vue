<template>
  <div class="w-full md:w-[400px] mx-auto mt-[20px] md:mt-[40px]">
    <div class="flex justify-center gap-[5px] items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-5 h-5 cursor-pointer"
        :class="step < 1 ? 'hidden' : 'block'"
        @click="$emit('prev')"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>

      <div
        class="p-[5px] bg-[#6cc06d] w-[30px] h-[30px] text-white flex justify-center items-center cursor-pointer"
        :class="step === index ? 'bg-black text-white' : null"
        v-for="(page, index) in lastPage"
        :key="index"
        @click="$emit('get-page', $event)"
      >
        {{ page }}
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-5 h-5 cursor-pointer"
        :class="step + 1 === lastPage ? 'hidden' : 'block'"
        @click="$emit('next')"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "pagination",
  props: ["step"],
  data() {
    return {
      resourcesLength: [],
      newsPerPage: 1,
      selectedPage: 1,
      page: null,
      lastPage: null,
    };
  },
  methods: {
    getResources() {
      axios
        .get("http://localhost:5000/api/v1/news")
        .then((res) => {
          this.resourcesLength = res.data.resourceLength;
          this.newsPerPage = res.data.newsPerPage;
          this.page = res.data.page;
          this.lastPage = Math.ceil(this.resourcesLength / this.newsPerPage);
        })
        .catch((err) => console.log(err));
    },
  },

  mounted() {
    this.getResources();
  },
};
</script>
