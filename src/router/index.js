import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Homes from "../views/get-connected/homes.vue";
import Businesses from "../views/get-connected/businesses.vue";
import Availability from "../views/Availability.vue";
import AboutUs from "../views/about-us/AboutUs.vue";
import Auth from "../views/auth.vue";

const guardToHome = (to, from, next) => {
  let access = false;

  if (sessionStorage.getItem("isAccessed")) {
    access = true;
  } else {
    access = false;
  }

  if (access) {
    next();
  } else {
    next("/");
  }
};

const guardToAccessLogin = (to, from, next) => {
  let access = false;

  if (sessionStorage.getItem("isAccessed")) {
    access = true;
  } else {
    access = false;
  }

  if (access) {
    next("/home");
  } else {
    next();
  }
};

function guardDashboard(to, from, next) {
  let isAuthenticated = false;

  if (localStorage.getItem("LoggedUser")) {
    isAuthenticated = true;
  } else {
    isAuthenticated = false;
  }

  if (isAuthenticated) {
    next();
  } else {
    next("/admin/authentication");
  }
}

function guardLogin(to, from, next) {
  let isAuthenticated = false;

  if (localStorage.getItem("LoggedUser")) {
    isAuthenticated = true;
  } else {
    isAuthenticated = false;
  }

  if (isAuthenticated) {
    next("/admin/dashboard");
  } else {
    next();
  }
}

const routes = [
  {
    path: "/",
    name: "Auth",
    beforeEnter: guardToAccessLogin,
    component: Auth,
    meta: {
      title: "Welcome to AFL Network",
    },
  },
  {
    path: "/home",
    name: "Home",
    beforeEnter: guardToHome,
    component: () => import("../views/Home.vue"),
    meta: {
      title: "Welcome to AFL Network",
    },
  },

  {
    path: "/about-us",
    name: "About us",
    beforeEnter: guardToHome,
    component: AboutUs,
    meta: {
      title: "About Us - AFL Network",
    },
  },

  {
    path: "/about-us/our-rollout",
    name: "Rollout",
    beforeEnter: guardToHome,
    component: () => import("../views/about-us/rollout.vue"),
    meta: {
      title: "About Us - AFL Network",
    },
  },

  {
    path: "/about-us/our-infrastructure",
    name: "Infrastructure",
    beforeEnter: guardToHome,
    component: () => import("../views/about-us/infrastructure.vue"),
    meta: {
      title: "About Us - AFL Network",
    },
  },

  {
    path: "/about-us/our-platform",
    name: "Platform",
    beforeEnter: guardToHome,
    component: () => import("../views/about-us/platform.vue"),
    meta: {
      title: "About Us - AFL Network",
    },
  },

  {
    path: "/about-us/our-service",
    name: "Service",
    beforeEnter: guardToHome,
    component: () => import("../views/about-us/service.vue"),
    meta: {
      title: "About Us - AFL Network",
    },
  },

  {
    path: "/about-us/our-management-team",
    name: "ManagementTeam",
    beforeEnter: guardToHome,
    component: () => import("../views/about-us/management-team.vue"),
    meta: {
      title: "About Us - AFL Network",
    },
  },

  {
    path: "/availability",
    name: "Availability",
    beforeEnter: guardToHome,
    component: Availability,
  },

  {
    path: "/get-connected/homes",
    name: "Homes",
    beforeEnter: guardToHome,
    component: Homes,
    meta: {
      title: "Get Connected - AFL Network",
    },
  },

  {
    path: "/get-connected/businesses",
    name: "Businesses",
    beforeEnter: guardToHome,
    component: Businesses,
    meta: {
      title: "Get Connected - AFL Network",
    },
  },

  {
    path: "/get-connected/landlords",
    name: "Landlords",
    beforeEnter: guardToHome,
    component: () => import("../views/get-connected/landlords.vue"),
    meta: {
      title: "Get Connected - AFL Network",
    },
  },

  {
    path: "/get-connected/developers",
    name: "Developers",
    beforeEnter: guardToHome,
    component: () => import("../views/get-connected/developers.vue"),
    meta: {
      title: "Get Connected - AFL Network",
    },
  },

  {
    path: "/get-connected/public",
    name: "Public",
    beforeEnter: guardToHome,
    component: () => import("../views/get-connected/public.vue"),
    meta: {
      title: "Get Connected - AFL Network",
    },
  },

  {
    path: "/partners",
    name: "Partners",
    beforeEnter: guardToHome,
    component: () => import("../views/partners/partners.vue"),
    meta: {
      title: "Partners - AFL Network",
    },
  },

  {
    path: "/partners/mobile-operators",
    name: "PartnersMobileOperators",
    beforeEnter: guardToHome,
    component: () => import("../views/partners/mobile-operators.vue"),
    meta: {
      title: "Partners - AFL Network",
    },
  },

  {
    path: "/partners/retail-service-providers",
    name: "PartnersRetailServiceProviders",
    beforeEnter: guardToHome,
    component: () => import("../views/partners/retail-service-providers.vue"),
    meta: {
      title: "Partners - AFL Network",
    },
  },

  {
    path: "/partners/public-sector",
    name: "PartnersPublicSector",
    beforeEnter: guardToHome,
    component: () => import("../views/partners/public-sector.vue"),
    meta: {
      title: "Partners - AFL Network",
    },
  },

  {
    path: "/partners/businesses",
    name: "PartnersBusinesses",
    beforeEnter: guardToHome,
    component: () => import("../views/partners/businesses.vue"),
    meta: {
      title: "Partners - AFL Network",
    },
  },

  {
    path: "/communication/news",
    name: "AflNews",
    beforeEnter: guardToHome,
    component: () => import("../views/communication/blog.vue"),
    meta: {
      title: "News - AFL Network",
    },
  },

  {
    path: "/communication/news/:id",
    name: "SingleNews",
    beforeEnter: guardToHome,
    component: () => import("../views/communication/news/singleNews.vue"),
    meta: {
      title: "News - AFL Network",
    },
  },

  {
    path: "/communication/contact-us",
    name: "ContactUs",
    beforeEnter: guardToHome,
    component: () => import("../views/communication/contact-us.vue"),
    meta: {
      title: "Contact us - AFL Network",
    },
  },

  {
    path: "/careers",
    name: "Careers",
    beforeEnter: guardToHome,
    component: () => import("../views/careers/careers.vue"),
    meta: {
      title: "Careers - AFL Network",
    },
  },

  {
    path: "/careers/all-jobs",
    name: "AllJobs",
    beforeEnter: guardToHome,
    component: () => import("../views/careers/all-jobs.vue"),
    meta: {
      title: "Careers - AFL Network",
    },
    children: [
      {
        path: "/careers/network-build",
        component: () => import("../views/careers/network-build.vue"),
      },
    ],
  },

  {
    path: "/careers/job-application",
    name: "JobApplication",
    beforeEnter: guardToHome,
    component: () => import("../views/careers/job-application.vue"),
    meta: {
      title: "Careers - AFL Network",
    },
  },

  {
    path: "/our-solutions",
    name: "OurSolutions",
    beforeEnter: guardToHome,
    component: () => import("../views/our-solutions/our-solutions.vue"),
    meta: {
      title: "Our Solutions - AFL Network",
    },
  },

  {
    path: "/our-solutions/capacity",
    name: "Capacity",
    beforeEnter: guardToHome,
    component: () => import("../views/our-solutions/capacity.vue"),
    meta: {
      title: "Our Solutions - AFL Network",
    },
  },

  {
    path: "/our-solutions/fibre-to-the-home",
    name: "Fibre to the home",
    beforeEnter: guardToHome,
    component: () => import("../views/our-solutions/fibre-to-the-home.vue"),
    meta: {
      title: "Our Solutions - AFL Network",
    },
  },

  {
    path: "/our-solutions/dark-fibre",
    name: "Dark fibre",
    beforeEnter: guardToHome,
    component: () => import("../views/our-solutions/dark-fibre.vue"),
    meta: {
      title: "Our Solutions - AFL Network",
    },
  },

  {
    path: "/our-solutions/co-location",
    name: "Co-Location",
    beforeEnter: guardToHome,
    component: () => import("../views/our-solutions/co-location.vue"),
    meta: {
      title: "Our Solutions - AFL Network",
    },
  },

  {
    path: "/our-solutions/virtual-machines",
    name: "Virtual Machines",
    beforeEnter: guardToHome,
    component: () => import("../views/our-solutions/virtual-machines.vue"),
    meta: {
      title: "Our Solutions - AFL Network",
    },
  },

  {
    path: "/our-solutions/ftth/ftth-delivery",
    name: "Ftth delivery",
    beforeEnter: guardToHome,
    component: () => import("../views/our-solutions/ftth-delivery.vue"),
    meta: {
      title: "Our Solutions - AFL Network",
    },
  },

  {
    path: "/our-solutions/ftth/active-passive-ftth",
    name: "Active passive ftth",
    beforeEnter: guardToHome,
    component: () => import("../views/our-solutions/active-passive-ftth.vue"),
    meta: {
      title: "Our Solutions - AFL Network",
    },
  },


  {
    path: "/search-result",
    name: "SearchResult",
    component: () => import("../views/search-result.vue"),
    meta: {
      title: "Search Result - AFL Network",
    },
  },

  {
    path: "/admin/authentication",
    name: "Login",
    beforeEnter: guardLogin,
    component: () => import("../views/admin/auth/login.vue"),
    meta: {
      title: "Authentication - AFL Network",
    },
  },

  {
    path: "/admin/dashboard",
    name: "Dashboard",
    beforeEnter: guardDashboard,
    component: () => import("../views/admin/dashboard/main-dashboard.vue"),
    meta: {
      title: "Admin - AFL Network",
    },
    children: [
      {
        path: "/admin/dashboard",
        component: () => import("../views/admin/news.vue"),
        children: [
          {
            path: "/admin/dashboard",
            component: () => import("../views/admin/dashboard/all-news.vue"),
          },
          {
            path: "/admin/dashboard/post-news",
            component: () => import("../views/admin/dashboard/post-news.vue"),
          },
        ],
      },
      {
        path: "/admin/dashboard/jobs",
        component: () => import("../views/admin/jobs.vue"),
      },
    ],
  },

  {
    path: "/test",
    name: "Test",
    beforeEnter: guardToHome,
    component: () => import("../views/test.vue"),
    meta: {
      title: "Test - AFL Network",
    },
  },

  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    beforeEnter: guardToHome,
    component: () => import("../views/PageNotFound.vue"),
    meta: {
      title: "404 Not Found - AFL Network",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
