<script setup>
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";

const { VITE_USERNAME, VITE_PASSWORD } = import.meta.env;

const router = useRouter();
const webLink = ref("");
const myInput = ref("");
const username = ref("");
const password = ref("");
const errorMessage = ref("");

const focusInput = () => {
  if (myInput.value) {
    myInput.value.focus();
  }
};

const handleSignIn = () => {
  if (username.value === VITE_USERNAME && password.value === VITE_PASSWORD) {
    sessionStorage.setItem("isAccessed", "true");
    router.push("/home");
  } else {
    errorMessage.value = "You do not have access to this domain";
    alert(errorMessage.value);
  }
  (username.value = ""), (password.value = "");
};

const handleCancel = () => {
  errorMessage.value = "You do not have access to this domain";
  alert(errorMessage.value);
};

onMounted(() => {
  webLink.value = window.location.href;
  focusInput();
});
</script>

<template>
  <div class="auth">
    <form class="shadow-md">
      <div>
        <h2 class="text-[var(--a-gray)] font-[600] text-[14px] md:text-[16px]">
          Please Sign in
        </h2>
        <span class="text-[12px] md:text-[14px] italic text-[var(--a-gray)]">{{
          webLink.slice(0, -1)
        }}</span>
      </div>
      <div class="mt-[10px] flex flex-col gap-[5px]">
        <label class="text-[12px] md:text-[14px] leading-[1] text-[var(--a-gray)]"
          >Username:</label
        >
        <input
          type="text"
          class="border border-[var(--a-gray)] rounded p-[5px]"
          ref="myInput"
          v-model="username"
        />
      </div>
      <div class="mt-[10px] flex flex-col gap-[5px]">
        <label class="text-[12px] md:text-[14px] leading-[1] text-[var(--a-gray)]"
          >Password:</label
        >
        <input
          type="password"
          class="border border-[var(--a-gray)] rounded p-[5px]"
          v-model="password"
        />
      </div>
      <div class="flex justify-end gap-[10px] btns">
        <button class="bg-[#67be68] text-white" @click.prevent="handleSignIn">
          Sign in
        </button>
        <button
          class="border border-[#67be68] text-[#67be68]"
          @click.prevent="handleCancel"
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
$mobile: 576px;
$tablet: 768px;
$desktop: 992px;

.auth {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    width: 90%;
    max-width: 300px;
    padding: 20px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: -200px;

    @media screen and (max-width: $mobile) {
      margin: 50px auto auto auto;
    }

    .btns {
      button {
        padding: 5px 10px;
        font-size: 14px;
        border-radius: 5px;

        @media screen and (max-width: $mobile) {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
