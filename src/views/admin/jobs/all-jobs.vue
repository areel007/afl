<template>
  <div style="min-height: 70vh">
    <div class="" v-if="loading">
      <Spinner />
    </div>
    <div class="" v-else>
      <div v-if="jobs.length === 0" class="mt-[20px]">
        <p class="text-[14px] md:text-[18px] font-[300]">
          No vacant position at the moment.
        </p>
      </div>
      <div v-else class="mt-[5px]">
        <div
          class="flex items-center bg-[#f1f1f1] mb-[10px] last:mb-0 p-[10px_20px]"
          v-for="(job, index) in jobs"
          :key="index"
        >
          <p class="w-full">{{ job.jobTitle }}</p>
          <IconDelete @handle-delete="handleDelete(job._id)" />
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

const jobs = ref([]);
const loading = ref(true);

const getAllJobs = async () => {
  const response = await axios.get("https://afl-server.onrender.com/api/v1/jobs");
  jobs.value = response.data.jobs;

  setTimeout(() => {
    loading.value = false;
  }, 2000);
};

const handleDelete = async (id) => {
  await axios.delete(`https://afl-server.onrender.com/api/v1/jobs/${id}`);
  getAllJobs();
};

getAllJobs();
</script>
