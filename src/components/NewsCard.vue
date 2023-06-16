<template>
  <router-link
    :to="`/communication/news/${id}`"
    class="w-full flex flex-col bg-white hover:scale-105 transition shadow-md"
  >
    <img :src="imgUrl" alt="afl news" class="h-[300px] w-full object-cover" />
    <div class="p-[20px]">
      <span class="text-[#6cc06d] text-[14px] md:text-[16px] block mb-[10px]">{{
        category
      }}</span>
      <h3 class="font-[600] text-[18px] md:text-[22px] leading-[1.2] mb-[10px]">
        {{ title }}
      </h3>
      <span class="text-[14px] text-gray-600">{{ this.formatedDate }}</span>
    </div>
  </router-link>
</template>

<script>
import moment from "moment";
export default {
  name: "NewsCard",
  props: ["category", "title", "date", "imgUrl", 'id'],

  data() {
    return {
      formatedDate: "",
      year: "",
      month: "",
      day: "",
      months: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    };
  },
  methods: {
    formatDate() {
      this.year = this.date.split("-")[0];
      this.month = parseInt(this.date.split("-")[1]) - 1;
      this.day = this.date.split("-")[2].split("T")[0];
      this.formatedDate = `${this.months[this.month]} ${this.formatDay()}, ${
        this.year
      }`;
    },
    formatDay() {
      if (this.day.split("")[0] === "0") {
        return this.day = this.day.split("")[1];
      } else {
        return this.day;
      }
    },
  },

  mounted() {
    this.formatDate();
  },
};
</script>
