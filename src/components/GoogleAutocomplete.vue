<template>
  <GMapAutocomplete
       placeholder="Your home address, i.e. Plot 5, Banana Island"
       @place_changed="setPlace"
       class="w-full outline-none p-[5px] rounded-[0_0_0_5px] placeholder:text-[14px]"
    >
  </GMapAutocomplete>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
    }
  },
  methods: {
    setPlace() {
    }
  }
}
</script>