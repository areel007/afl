<template>
  <div
    class="fixed top-0 left-0 bottom-0 right-0 w-full shadow-lg bg-white z-[10000] overflow-hidden"
  >
    <div class="py-[50px] md:py-[100px] max-h-[100vh] overflow-y-auto">
      <div class="w-[85%] xl:w-[1200px] mx-auto">
        <div class="border-b border-gray-500 flex justify-between items-center">
          <h3
            class="text-[16px] md:text-[22px] font-[600]"
            v-if="searchResult.length > 0"
          >
            Results for
            <span class="text-[#67be68]">"{{ searchWord }}"</span>
          </h3>
          <h3 v-else class="text-[16px] md:text-[22px] font-[600]">
            0 Result for
            <span class="text-[#67be68]">"{{ searchWord }}"</span>
          </h3>

          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              /></svg
          ></a>
        </div>
        <div class="w-[85%] md:w-[500px] py-[20px] md:py-[40px]">
          <div
            class="mb-[20px] md:mb-[40px] last:mb-[0]"
            v-for="(_result, index) in searchResult"
            :key="index"
          >
            <h3 class="text-[18px] md:text-[30px] text-[#2a2760] font-[600]">
              {{ _result.location }}
            </h3>
            <p class="text-[14px] md:text-[16px]">
              {{ _result.name }}...<a :href="_result.path">Read more</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchResult",
  props: ["searchResult", "searchWord"],
};
</script>
