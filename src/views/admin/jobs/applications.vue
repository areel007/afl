<template>
  <div style="min-height: 70vh">
    <div class="" v-if="loading">
      <Spinner />
    </div>
    <div class="" v-else>
      <div v-if="applications.length === 0" class="mt-[20px]">
        <p class="text-[14px] md:text-[18px] font-[300]">
          No vacant position at the moment.
        </p>
      </div>
      <div v-else class="mt-[5px]">
        <div class="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_auto] p-[10px_20px]">
          <p>Name</p>
          <p>Position</p>
          <p>DOB</p>
          <p>Lagos</p>
          <p>Resume URL</p>
        </div>
        <div
          class="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_auto] bg-[#f1f1f1] mb-[10px] last:mb-0 p-[10px_20px]"
          v-for="(application, index) in applications"
          :key="index"
        >
          <p class="cursor-pointer capitalize" @click="$router.push('')">
            {{ application.firstname }} {{ application.lastname }}
          </p>
          <p class="font-[600]">{{ application.position }}</p>
          <p class="flex-1">
            {{ application.dayOfBirth }}-{{ application.monthOfBirth }}-{{
              application.yearOfBirth
            }}
          </p>
          <p class="flex-1">{{ application.state }}</p>
          <a
            :href="application.resumeUrl"
            target="_blank"
            class="flex-1 cursor-pointer underline italic text-[#2A2760]"
          >
            {{ application.resumeUrl }}
          </a>
          <IconDelete @handle-delete="handleDelete(application._id)" />
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

const applications = ref([]);
const loading = ref(true);

const getApplications = async () => {
  const response = await axios.get("https://afl-server.onrender.com/api/v1/application");
  applications.value = response.data.applications;

  setTimeout(() => {
    loading.value = false;
  }, 2000);
};

const handleDelete = async (id) => {
  await axios.delete(`https://afl-server.onrender.com/api/v1/application/${id}`);
  getApplications();
};

getApplications();
</script>
