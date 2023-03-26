<template>
  <a href="/" class="w-full flex flex-col bg-white hover:scale-105 transition shadow-md">
    <img :src="imgUrl" alt="afl news" class="">
    <div class="p-[20px]">
      <span class="text-[#6cc06d] text-[14px] md:text-[16px] block mb-[10px]">{{category}}</span>
      <h3 class="font-[600] text-[18px] md:text-[22px] leading-[1.2] mb-[10px]">{{title}}</h3>
      <span class="text-[14px] text-gray-600">{{date}}</span>
    </div>
  </a>
</template>

<script>
  export default {
    name: 'NewsCard',
    props: ['category', 'title', 'date', 'imgUrl']
  }
</script>