<template>
  <section
    class="w-full h-[auto] fixed bg-[#2A2760] z-[10000] p-[10px] md:p-[30px]"
    v-if="isSearchShown"
  >
    <div class="w-full h-full">
      <div
        class="flex relative md:absolute right-0 md:right-[20px] top-0 md:top-[20px] cursor-pointer mb-[10px] md:mb-0"
        @click="$emit('close-search')"
      >
        <span class="text-white text-[12px] md:text-[14px]">Close</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5 text-white"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>

      <div class="flex justify-center items-center w-full h-full">
        <div class="bg-white w-[100%] lg:w-[600px] grid grid-cols-[1fr_40px] shadow-lg">
          <input
            type="text"
            placeholder="Search..."
            v-model="searchInputValue"
            class="outline-none p-[10px]"
          />
          <button
            class="bg-[#000] flex justify-center items-center"
            @click="searchAction"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Search",
  props: ["isSearchShown"],
  data() {
    return {
      searchInputValue: "",
    };
  },
  methods: {
    searchAction() {
      this.$emit("search-action", this.searchInputValue);
      this.searchInputValue = "";
    },
  },
};
</script>
