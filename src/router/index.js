import { createRouter, createWebHistory } from 'vue-router';
//Importation des pages
import Home from '/src/components/Home.vue';
import Inscription from '/src/components/Inscription.vue';
import Connexion from '/src/components/Connexion.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/inscription', component: Inscription },
    { path: '/connexion', component: Connexion },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;