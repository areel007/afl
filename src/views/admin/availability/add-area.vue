<template>
  <div>
    <h4 class="mb-[20px] text-[20px]">Add new planned area</h4>
    <form>
      <input type="text" placeholder="Name" v-model="name" />
      <input type="text" placeholder="Email" v-model="email" />
      <input type="text" placeholder="Area" v-model="area" required />
      <input type="text" placeholder="Longitude" v-model="longitude" />
      <input type="text" placeholder="Latitude" v-model="latitude" />
      <button @click="handleSubmit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      email: "",
      area: "",
      longitude: "",
      latitude: "",
    };
  },

  methods: {
    async handleSubmit() {
      try {
        const payload = {
          firstname: this.name,
          email: this.email,
          area: this.area,
          longitude: this.longitude,
          latitude: this.latitude,
          isPlanned: true,
        };
        await axios.post("https://afl-server.onrender.com/api/v1/area-register", payload);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
form {
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
input {
  padding: 15px;
  display: block;
  width: 100%;
  border: 1px solid #000;
}
button {
  background: #000;
  padding: 15px;
  color: #fff;
}
</style>
