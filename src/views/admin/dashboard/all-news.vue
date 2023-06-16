<template>
  <div style="min-height: 70vh">
    <div class="" v-if="loading">
      <Spinner />
    </div>
    <div class="" v-else>
      <div v-if="news.length === 0" class="mt-[20px]">
        <p class="text-[14px] md:text-[18px] font-[300]">
          No news at the moment. Kindly check back later.
        </p>
      </div>
      <div v-else class="mt-[5px]">
        <div
          class="flex items-center bg-[#f1f1f1] mb-[10px] last:mb-0 p-[10px_20px]"
          v-for="(_news, index) in news"
          :key="index"
        >
          <p class="w-full">{{ _news.title }}</p>
          <IconDelete @handle-delete="handleDelete(_news._id)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import IconDelete from "../../../components/icons/IconDelete.vue";
import Spinner from "../../../components/Spinner.vue";

const news = ref([]);
const loading = ref(true);

const getAllNews = async () => {
  const response = await axios.get(
    "https://afl-server.onrender.com/api/v1/news/dashboard"
  );
  news.value = response.data.msg;

  setTimeout(() => {
    loading.value = false;
  }, 2000);
};

const handleDelete = async (id) => {
  await axios.delete(`https://afl-server.onrender.com/api/v1/news/${id}`);
  getAllNews();
};

getAllNews();
</script>
