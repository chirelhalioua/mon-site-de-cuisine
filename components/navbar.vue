<template>
  <nav class="navbar">
    <div class="container">
      <!-- Logo -->
      <router-link to="/" class="logo">Recettes en 5 ingrédients</router-link>

      <!-- Menu Hamburger pour mobile -->
      <div class="hamburger" @click="toggleMenu" v-if="isMobile" :aria-expanded="menuActive.toString()" aria-label="Menu">
        <div class="bar" :class="{ 'toggle': menuActive }"></div>
        <div class="bar" :class="{ 'toggle': menuActive }"></div>
        <div class="bar" :class="{ 'toggle': menuActive }"></div>
      </div>

      <!-- Liens de navigation -->
      <ul class="nav-links" :class="{ 'active': menuActive }">
        <li>
          <router-link to="/" class="nav-link" @click="closeMenu">Accueil</router-link>
        </li>
        <li>
          <router-link to="/recettes" class="nav-link" @click="closeMenu">Recettes</router-link>
        </li>
        <li>
          <router-link to="/about" class="nav-link" @click="closeMenu">À propos</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

// Variable pour savoir si on est sur un petit écran
const isMobile = ref(false);

// Variable pour contrôler l'état du menu (affiché ou caché)
const menuActive = ref(false);

// Fonction pour basculer l'état du menu hamburger
const toggleMenu = () => {
  menuActive.value = !menuActive.value;
};

// Fonction pour fermer le menu après un clic sur un lien
const closeMenu = () => {
  menuActive.value = false;
};

// Vérifie la taille de l'écran au démarrage et ajuste isMobile
const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768;
};

onMounted(() => {
  checkMobile();
  window.addEventListener('resize', checkMobile);
});

// Nettoyage lors du démontage
onBeforeUnmount(() => {
  window.removeEventListener('resize', checkMobile);
});
</script>

<style scoped>
/* Style général de la navbar */
.navbar {
  background: #e67e22;
  color: white;
  padding: 15px 20px;
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1200px;
}

/* Logo */
.logo {
  font-size: 1.8rem;
  font-weight: bold;
  text-decoration: none;
  color: white;
}

/* Menu de navigation */
.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 0;
  margin: 0;
}

.nav-link {
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  transition: color 0.3s ease;
  padding: 10px 20px;
  border-radius: 5px;
}

.nav-link:hover {
  color: #2c3e50;
  background-color: #ffffff20; /* Un effet léger sur fond */
}

/* Menu Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  z-index: 1001;
}

.bar {
  background: white;
  height: 4px;
  width: 30px;
  margin: 4px 0;
  transition: 0.3s;
}

.bar.toggle {
  transform: rotate(45deg);
  position: relative;
}

.bar.toggle:nth-child(2) {
  opacity: 0;
}

.bar.toggle:nth-child(3) {
  transform: rotate(-45deg);
  position: relative;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .nav-links {
    position: absolute;
    top: 60px;
    right: 0;
    background: #e67e22;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: opacity 0.3s ease, transform 0.3s ease, visibility 0s linear 0.3s;
  }

  .nav-links.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .nav-link {
    padding: 15px 0;
    font-size: 1.4rem;
    text-align: center;
    width: 100%;
  }
}
</style>
