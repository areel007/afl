<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

const content = ref(null);

const getContent = async () => {
  const response = await fetch("http://localhost:5000/api/v1/test");
  const json = await response.json();

  content.value = json.msg;
};

onMounted(getContent);

const setContent = async () => {
  await axios.post("http://localhost:5000/api/v1/test", {
    title: "Delta",
    content: content.value,
  });

  await getContent();
  alert("The content has been updated");
};
</script>

<template>
  <div class="relative top-[100px] py-[100px]">
    <QuillEditor
      v-model:content="content"
      theme="snow"
      toolbar="#custom-toolbar"
      content-type="html"
      placeholder="Content here"
    >
      <template #toolbar>
        <div id="custom-toolbar">
          <select class="ql-size">
            <option value="small"></option>
            <option value=""></option>
            <option value="large"></option>
            <option value="huge"></option>
          </select>

          <select class="ql-header">
            <option :value="1"></option>
            <option :value="2"></option>
            <option :value="3"></option>
            <option :value="4"></option>
            <option :value="5"></option>
            <option :value="6"></option>
            <option value=""></option>
          </select>

          <button class="ql-bold"></button>
          <button class="ql-italic"></button>
          <button class="ql-image"></button>
          <button class="ql-link"></button>
          <button class="ql-image"></button>
          <button class="ql-code"></button>

          <button id="your-button" @click="setContent">Save</button>
        </div>
      </template>
    </QuillEditor>

    <div v-for="(_content, index) in content" :key="index">
      <div v-html="_content.content" />
    </div>
  </div>
</template>
