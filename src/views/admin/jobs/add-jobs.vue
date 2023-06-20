<script>
// import { ref } from "vue";
import axios from "axios";

import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

export default {
  name: "add job",
  components: {
    QuillEditor,
  },
  data() {
    return {
      jobTitle: "",
      jobContent: "",
      jobObjective: "",
      location: "",
    };
  },
  methods: {
    async handleSubmit() {
      await axios.post("https://afl-server.onrender.com/api/v1/jobs", {
        jobTitle: this.jobTitle,
        jobObjective: this.jobObjective,
        jobContent: this.jobContent,
        location: this.location,
      });

      this.jobTitle = "";
      this.jobObjective = "";
      this.jobContent = "";
      this.location = "";
    },
  },
};

// let jobTitle = ref("");
// let content = ref("");
// let jobObjective = ref("");
// let location = ref("");

// const handleSubmit = async () => {
//   // const fd = new FormData();

//   // fd.append("jobTitle", jobTitle.value);
//   // fd.append("jobObjective", jobObjective.value);
//   // fd.append("jobContent", content.value);
//   // fd.append("location", location.value);

//   await axios.post("http://localhost:5000/api/v1/jobs", {
//     jobTitle: "jobTitle.value",
//     jobObjective: "jobObjective.value",
//     jobContent: "content.value",
//     location: "location.value",
//   });

//   jobTitle.value = "";
//   content.value = "";
//   jobObjective.value = "";
//   location = "";
// };
</script>

<template>
  <div class="" style="min-height: 70vh">
    <form class="py-[10px]" enctype="multipart/form-data">
      <div class="flex flex-col w-[100%] sm:w-[300px] mb-[20px]">
        <textarea
          class="outline-none border border-gray-500 p-[10px] resize-none"
          v-model="jobTitle"
        ></textarea>
        <span class="text-[12px] italic">Job Title*</span>
      </div>

      <div class="flex flex-col w-[100%] sm:w-[300px] mb-[20px]">
        <textarea
          class="outline-none border border-gray-500 p-[10px] resize-none"
          v-model="jobObjective"
        ></textarea>
        <span class="text-[12px] italic">Job Objective*</span>
      </div>

      <div class="flex flex-col w-[100%] sm:w-[300px] mb-[20px]">
        <textarea
          class="outline-none border border-gray-500 p-[10px] resize-none"
          v-model="location"
        ></textarea>
        <span class="text-[12px] italic">Location*</span>
      </div>

      <div class="mb-[20px]">
        <QuillEditor
          v-model:content="jobContent"
          theme="snow"
          toolbar="full"
          content-type="html"
          placeholder="Job content"
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
