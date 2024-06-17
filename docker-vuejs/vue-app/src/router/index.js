import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: () => import("@/views/InicioView.vue"),
    meta: { title: "Início" },
  },
  {
    path: "/sobre",
    name: "Sobre",
    component: () => import("@/views/SobreView.vue"),
    meta: { title: "Sobre" },
  },
  {
    path: "/acao",
    name: "Acao",
    component: () => import("@/views/AcaoView.vue"),
    meta: { title: "Gênero Ação" },
  },
  {
    path: "/aventura",
    name: "Aventura",
    component: () => import("@/views/AventuraView.vue"),
    meta: { title: "Gênero Aventura" },
  },
  {
    path: "/comedia",
    name: "Comedia",
    component: () => import("@/views/ComediaView.vue"),
    meta: { title: "Gênero Comédia" },
  },
  {
    path: "/fantasia",
    name: "Fantasia",
    component: () => import("@/views/FantasiaView.vue"),
    meta: { title: "Gênero Fantasia" },
  },
  {
    path: "/romance",
    name: "Romance",
    component: () => import("@/views/RomanceView.vue"),
    meta: { title: "Gênero Romance" },
  },

  {
    path: "/favoritos",
    name: "Favoritos",
    component: () => import("@/views/FavoritosView.vue"),
    meta: { title: "Favoritos" },
  },
  {
    path:"/Detalhes/:inputId",
    name: "Detalhes",
    component:() => import("@/views/Detalhes.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Vue"; // Define o título da aba com base na meta.title
  next();
});

export default router;
