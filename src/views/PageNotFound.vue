<template>
  <div class="relative top-[42px] md:top-[92.063px]">
    <div class="w-[85%] xl:w-[1200px] mx-auto py-[50px] md:py-[100px]">
      <div class="flex justify-start items-center md:justify-center">
        <div class="">
          <h1 class="text-[50px] md:text-[100px] font-[700] text-gray-400 leading-[1]">
            404
          </h1>
          <p class="text-[14px] md:text-[16px] text-black mb-[10px]">
            Oops! This page could not be found on this site
          </p>
          <button
            @click="$router.push('/')"
            class="p-[8px_20px] bg-[#67be68] text-white text-[14px]"
          >
            Go to home
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pageNotFound",
};
</script>
