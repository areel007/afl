<template>
  <div style="min-height: 70vh">
    <div class="py-[50px] md:py-[100px] h-full">
      <div class="flex justify-center items-center h-full">
        <form class="p-[0px] md:p-[40px] w-[85%] md:w-[350px]">
          <h3 class="mb-[20px] text-[18px] md:text-[22px]">Sign in</h3>
          <div class="flex flex-col gap-[10px]">
            <div class="flex flex-col gap-[5px]">
              <div class="text-[13px] italic text-red-500">
                {{ error }}
              </div>
              <input
                type="text"
                v-model.trim="username"
                ref="username"
                placeholder="username"
                class="p-[10px] border border-black bg-transparent rounded placeholder:text-gray-500 placeholder:text-[14px]"
              />
            </div>
            <input
              type="password"
              v-model.trim="password"
              placeholder="password"
              class="p-[10px] border border-black bg-transparent rounded placeholder:text-gray-500 placeholder:text-[14px] mb-[10px]"
            />
            <button
              class="p-[10px] bg-black text-white text-[14px] rounded"
              @click.prevent="handleLogin()"
              v-if="username && password"
            >
              Log in
            </button>
            <button
              class="p-[10px] bg-gray-700 text-white text-[14px] rounded"
              @click.prevent="handleError"
              v-else
            >
              <span>Log in</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      error: "",
      username: "",
      password: "",
      isAuthenticated: false,
      isLoading: false,
    };
  },
  methods: {
    focusInput() {
      this.$refs.username.focus();
    },

    handleError() {
      this.error = "No field can be empty";
    },

    async handleLogin() {
      try {
        const username = this.username;
        const password = this.password;

        const response = await axios.post(
          "https://afl-server.onrender.com/api/v1/auth/login",
          {
            username,
            password,
          }
        );

        if (response.data.msg === "Logged in") {
          this.error = "";
          sessionStorage.setItem("LoggedUser", true);
          this.$router.push("/admin/dashboard");
        } else {
          this.error = "User not found";
        }
      } catch (error) {
        console.log(error);
      }
    },
  },

  mounted() {
    this.focusInput();
  },
};
</script>
