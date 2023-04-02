<template>
  <div
    class="mb-[20px] flex p-[10px] bg-white w-full sm:w-[300px] items-center shadow"
  >
    <input
      type="text"
      class="outline-none border-none w-full"
      placeholder="Search title..."
      @input="$emit('filter-action', $event.target.value)"
      @keyup="$emit('search-action', value)"
    />
    <IconSearch />
  </div>
</template>

<script setup>
import IconSearch from "../components/icons/IconSearch.vue";
</script>
