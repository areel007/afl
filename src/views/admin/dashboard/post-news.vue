<script setup>
import { ref } from "vue";
import axios from "axios";

import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

import IconUpload from "../../../components/icons/IconUpload.vue";

const selectedFile = ref(null);
const title = ref("");
const content = ref("");
const category = ref("");

const onFileSelected = (event) => {
  selectedFile.value = event.target.files[0];
};

const handleSubmit = async () => {
  const fd = new FormData();

  fd.append("title", title.value);
  fd.append("content", content.value);
  fd.append("category", category.value);
  fd.append("imageUrl", selectedFile.value);
  await axios.post("http://localhost:5000/api/v1/news", fd);

  title.value = "";
  content.value = "";
  category.value = "";
  selectedFile.value = null;
};
</script>

<template>
  <div class="" style="min-height: 70vh">
    <form class="py-[10px]" enctype="multipart/form-data">
      <div class="flex flex-col w-[100%] sm:w-[300px] mb-[20px]">
        <select
          name=""
          class="outline-none border border-gray-500 p-[10px] resize-none"
          v-model="category"
        >
          <option value="">Choose a category</option>
          <option value="AFL Network">AFL Network</option>
          <option value="Metro News">Metro news</option>
          <option value="Community Development">Community development</option>
        </select>
        <span class="text-[12px] italic">News category*</span>
      </div>

      <div class="flex flex-col w-[100%] sm:w-[300px] mb-[20px]">
        <textarea
          class="outline-none border border-gray-500 p-[10px] resize-none"
          v-model="title"
        ></textarea>
        <span class="text-[12px] italic">News headline*</span>
      </div>

      <div class="flex flex-col w-[100%] sm:w-[300px] mb-[20px]">
        <input
          type="file"
          @change="onFileSelected"
          class="outline-none border border-gray-500 p-[10px] resize-none hidden"
          id="news-image"
        />
        <label
          for="news-image"
          class="p-[8px_20px] border border-black cursor-pointer flex items-center justify-center gap-[10px]"
        >
          <span class="text-[14px]">Upload news image*</span>
          <IconUpload />
        </label>
      </div>

      <div class="mb-[20px]">
        <QuillEditor
          v-model:content="content"
          theme="snow"
          toolbar="full"
          content-type="html"
          placeholder="Content here"
        />

      </div>

      <button
        class="bg-black p-[8px_20px] text-white w-[100%] sm:w-[300px] text-[14px]"
        @click.prevent="handleSubmit"
      >
        Submit
      </button>
    </form>
  </div>
</template>
