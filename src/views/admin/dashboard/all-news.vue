<template>
  <div>
    <div
      v-if="loading"
      class="flex justify-center items-center h-full"
      style="min-height: 70vh"
    >
      <Loading />
    </div>
    <div v-else class="mt-[5px]" style="min-height: 70vh">
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
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import IconDelete from "../../../components/icons/IconDelete.vue";
import Loading from "../../../components/icons/Loading.vue";

const news = ref(null);
const loading = ref(true);

const getAllNews = async () => {
  const response = await axios.get("https://afl-server.onrender.com/api/v1/news/dashboard");
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

// onMounted( getAllNews )
</script>
