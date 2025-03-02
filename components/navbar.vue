<template>
  <nav class="navbar">
    <div class="container">
      <!-- Titre -->
      <NuxtLink to="/" class="brand">
        Recettes en 5 ingrédients
      </NuxtLink>

      <!-- Barre de recherche -->
      <div class="search-box">
        <input 
          type="text" 
          v-model="searchQuery" 
          placeholder="Rechercher une recette..."
          @input="handleSearch"
        >
      </div>

      <!-- Menu Hamburger -->
      <button class="hamburger" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <!-- Navigation -->
      <ul class="nav-links" :class="{ 'active': isMenuOpen }">
        <li>
          <NuxtLink to="/" @click="closeMenu">Accueil</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/recettes" @click="closeMenu">Recettes</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" @click="closeMenu">À propos</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
const searchQuery = ref('')
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const handleSearch = () => {
  // Logique de recherche ici
  console.log('Recherche:', searchQuery.value)
}
</script>

<style>
.navbar {
  background: #e67e22;
  padding: 15px 20px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  color: white;
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: bold;
}

.search-box {
  flex: 1;
  max-width: 500px;
  margin: 0 20px;
}

.search-box input {
  width: 100%;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  background: rgba(255,255,255,0.2);
  color: white;
}

.search-box input::placeholder {
  color: rgba(255,255,255,0.7);
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 20px;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: white;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;
  transition: background 0.3s;
}

.nav-links a:hover {
  background: rgba(255,255,255,0.1);
}

.hamburger {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background: white;
  margin: 3px 0;
  transition: 0.3s;
}

@media (max-width: 768px) {
  .search-box {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  .nav-links {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background: #e67e22;
    padding: 20px;
    text-align: center;
  }

  .nav-links.active {
    display: flex;
  }

  .nav-links li {
    margin: 10px 0;
  }
}
</style>
