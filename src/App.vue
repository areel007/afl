<template>
  <div>
    <SearchResult
      :search-result="searchResult"
      v-if="showSearchResult"
      :searchWord="searchWord"
    />
    <Search
      @close-search="closeSearch"
      :is-search-shown="isSearchShown"
      @search-action="searchAction($event)"
    />
    <AppHeader
      :show-mobile-menu="showMobileMenu"
      :nav-menu="navMenu"
      @open-mobile-menu="openMobileMenu"
      @close-mobile-menu="closeMobileMenu"
      @show-search="showSearch"
    />
    <MobileMenu
      :show-mobile-menu="showMobileMenu"
      @close-step="closeStep"
      :step="step"
      @choose-step-one="chooseStepOne"
      @choose-step-two="chooseStepTwo"
      @choose-step-three="chooseStepThree"
      @choose-step-four="chooseStepFour"
      @choose-step-five="chooseStepFive"
      @choose-step-six="chooseStepSix"
    />
    <router-view />
    <AppFooter :nav-menu="navMenu" />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import MobileMenu from "./components/MobileMenu.vue";
import AppFooter from "./components/AppFooter.vue";
import Search from "./components/Search.vue";
import axios from "axios";
import SearchResult from "./views/search-result.vue";

export default {
  name: "App",
  components: { AppHeader, MobileMenu, AppFooter, Search, SearchResult },
  data() {
    return {
      showMobileMenu: false,
      step: 0,
      navMenu: [
        {
          navName: "About us",
          url: "/about-us",
        },
        {
          navName: "Get Connected",
          url: "/get-connected/homes",
        },
        {
          navName: "Partners",
          url: "/partners",
        },
        {
          navName: "Communication",
          url: "/communication/news",
        },
        {
          navName: "Careers",
          url: "/careers",
        },
      ],
      isSearchShown: false,
      searchResult: [],
      showSearchResult: false,
      searchWord: "",
    };
  },
  methods: {
    openMobileMenu() {
      this.showMobileMenu = true;
      this.step = 0;
    },
    closeMobileMenu() {
      this.showMobileMenu = false;
      this.step = 0;
    },
    closeStep() {
      this.step = 0;
    },
    chooseStepOne() {
      this.step = 1;
    },
    chooseStepTwo() {
      this.step = 2;
    },
    chooseStepThree() {
      this.step = 3;
    },
    chooseStepFour() {
      this.step = 4;
    },
    chooseStepFive() {
      this.step = 5;
    },
    chooseStepSix() {
      this.step = 6;
    },
    showSearch() {
      this.isSearchShown = true;
    },
    closeSearch() {
      this.isSearchShown = false;
    },
    async searchAction(e) {
      if (e.trim().length > 0) {
        this.isSearchShown = false;
        this.showSearchResult = true;
        this.searchWord = e;
        const response = await axios.get("/db/search-DB.json");
        await this.$nextTick();
        this.searchResult = response.data.filter((_res) =>
          _res.name.toLowerCase().includes(e.toLowerCase())
        );
      } else {
        this.searchResult = [];
      }
    },
  },
};
</script>
