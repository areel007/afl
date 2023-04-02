import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Homes from "../views/get-connected/homes.vue";
import Businesses from "../views/get-connected/businesses.vue";
import Availability from "../views/Availability.vue";
import AboutUs from "../views/about-us/AboutUs.vue";

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
    name: "Home",
    component: Home,
    meta: {
      title: "Welcome to AFL Network",
    },
  },

  {
    path: "/about-us",
    name: "About us",
    component: AboutUs,
    meta: {
      title: "About Us - AFL Network",
    },
  },

  {
    path: "/about-us/our-rollout",
    name: "Rollout",
    component: () => import("../views/about-us/rollout.vue"),
    meta: {
      title: "About Us - AFL Network",
    },
  },

  {
    path: "/about-us/our-infrastructure",
    name: "Infrastructure",
    component: () => import("../views/about-us/infrastructure.vue"),
    meta: {
      title: "About Us - AFL Network",
    },
  },

  {
    path: "/about-us/our-platform",
    name: "Platform",
    component: () => import("../views/about-us/platform.vue"),
    meta: {
      title: "About Us - AFL Network",
    },
  },

  {
    path: "/about-us/our-service",
    name: "Service",
    component: () => import("../views/about-us/service.vue"),
    meta: {
      title: "About Us - AFL Network",
    },
  },

  {
    path: "/about-us/our-management-team",
    name: "ManagementTeam",
    component: () => import("../views/about-us/management-team.vue"),
    meta: {
      title: "About Us - AFL Network",
    },
  },

  {
    path: "/availability",
    name: "Availability",
    component: Availability,
  },

  {
    path: "/get-connected/homes",
    name: "Homes",
    component: Homes,
    meta: {
      title: "Get Connected - AFL Network",
    },
  },

  {
    path: "/get-connected/businesses",
    name: "Businesses",
    component: Businesses,
    meta: {
      title: "Get Connected - AFL Network",
    },
  },

  {
    path: "/get-connected/landlords",
    name: "Landlords",
    component: () => import("../views/get-connected/landlords.vue"),
    meta: {
      title: "Get Connected - AFL Network",
    },
  },

  {
    path: "/get-connected/developers",
    name: "Developers",
    component: () => import("../views/get-connected/developers.vue"),
    meta: {
      title: "Get Connected - AFL Network",
    },
  },

  {
    path: "/get-connected/public",
    name: "Public",
    component: () => import("../views/get-connected/public.vue"),
    meta: {
      title: "Get Connected - AFL Network",
    },
  },

  {
    path: "/partners",
    name: "Partners",
    component: () => import("../views/partners/partners.vue"),
    meta: {
      title: "Partners - AFL Network",
    },
  },

  {
    path: "/partners/mobile-operators",
    name: "PartnersMobileOperators",
    component: () => import("../views/partners/mobile-operators.vue"),
    meta: {
      title: "Partners - AFL Network",
    },
  },

  {
    path: "/partners/retail-service-providers",
    name: "PartnersRetailServiceProviders",
    component: () => import("../views/partners/retail-service-providers.vue"),
    meta: {
      title: "Partners - AFL Network",
    },
  },

  {
    path: "/partners/public-sector",
    name: "PartnersPublicSector",
    component: () => import("../views/partners/public-sector.vue"),
    meta: {
      title: "Partners - AFL Network",
    },
  },

  {
    path: "/partners/businesses",
    name: "PartnersBusinesses",
    component: () => import("../views/partners/businesses.vue"),
    meta: {
      title: "Partners - AFL Network",
    },
  },

  {
    path: "/communication/news",
    name: "AflNews",
    component: () => import("../views/communication/blog.vue"),
    meta: {
      title: "News - AFL Network",
    },
  },

  {
    path: "/communication/contact-us",
    name: "ContactUs",
    component: () => import("../views/communication/contact-us.vue"),
    meta: {
      title: "Contact us - AFL Network",
    },
  },

  {
    path: "/careers",
    name: "Careers",
    component: () => import("../views/careers/careers.vue"),
    meta: {
      title: "Careers - AFL Network",
    },
  },

  {
    path: "/careers/all-jobs",
    name: "AllJobs",
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
    component: () => import("../views/careers/job-application.vue"),
    meta: {
      title: "Careers - AFL Network",
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
    component: () => import("../views/test.vue"),
  },

  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
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
