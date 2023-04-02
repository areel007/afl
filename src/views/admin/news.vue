<template>
  <div class="py-[20px]">
    <div class="w-full xl:w-[1200px] mx-auto">
      <div class="">
        <nav class="flex items-center gap-[20px] bg-black p-[10px_20px] text-white text-[14px]">
          <router-link to="/admin/dashboard">All news</router-link>
          <router-link to="/admin/dashboard/post-news">Add news</router-link>
        </nav>

        <router-view></router-view>
      </div>
    </div>
  </div>
</template>