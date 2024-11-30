<template>
  <nav class="navbar">
    <div class="container">
      <!-- Logo -->
      <router-link to="/" class="logo">Recettes en 5 ingrédients</router-link>
      
      <!-- Menu Hamburger pour mobile -->
      <div class="hamburger" @click="toggleMenu" v-if="isMobile">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>

      <!-- Liens de navigation -->
      <ul class="nav-links" :class="{'active': menuActive}">
        <li>
          <router-link to="/" class="nav-link">Accueil</router-link>
        </li>
        <li>
          <router-link to="/recettes" class="nav-link">Recettes</router-link>
        </li>
        <li>
          <router-link to="/about" class="nav-link">À propos</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Variable pour savoir si on est sur un petit écran
const isMobile = ref(false);

// Variable pour contrôler l'état du menu (affiché ou caché)
const menuActive = ref(false);

// Fonction pour basculer l'état du menu hamburger
const toggleMenu = () => {
  menuActive.value = !menuActive.value;
};

// Vérifie la taille de l'écran au démarrage et ajuste isMobile
onMounted(() => {
  isMobile.value = window.innerWidth <= 768;
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth <= 768;
  });
});
</script>

<style scoped>
/* Style général de la navbar */

</style>
