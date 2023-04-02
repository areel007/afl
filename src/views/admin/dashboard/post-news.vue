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
        <textarea
          class="outline-none border border-gray-500 p-[10px] resize-none"
          v-model="details"
        ></textarea>
        <span class="text-[12px] italic">News details*</span>
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

      <button
        class="bg-black p-[8px_20px] text-white w-[100%] sm:w-[300px] text-[14px]"
        @click.prevent="handleSubmit"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import IconUpload from "../../../components/icons/IconUpload.vue";

export default {
  name: "post news",
  components: { IconUpload },
  data() {
    return {
      selectedFile: null,
      title: "",
      details: "",
      category: "",
    };
  },

  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },
    async handleSubmit() {
      const fd = new FormData();
      fd.append("imageUrl", this.selectedFile);
      fd.append("title", this.title);
      fd.append("details", this.details);
      fd.append("category", this.category);
      await axios.post("https://afl-server.onrender.com/api/v1/news", fd);

      this.title = "";
      this.details = "";
      this.category = "";
      this.selectedFile = null;
    },
  },
};
</script>
