<template>
  <div class="layout-container">
    <!-- Navbar -->
    <nav class="navbar">
      <div class="navbar-content">
        <h2 class="logo">
          <NuxtLink to="/">Cuisine Minimaliste</NuxtLink>
        </h2>
        <ul class="nav-links">
          <li><NuxtLink to="/">Accueil</NuxtLink></li>
          <li><NuxtLink to="/recettes">Recettes</NuxtLink></li>
          <li><NuxtLink to="/about">À propos</NuxtLink></li>
        </ul>
      </div>
    </nav>

    <!-- Contenu de la page -->
    <div class="page-content">
      <slot />
    </div>

    <!-- Footer -->
    <footer class="footer">
      <p>© 2025 Cuisine Minimaliste. Tous droits réservés.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout"
}
</script>

<style scoped>
.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Navbar */
.navbar {
  background-color: #2C3E50;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}
.navbar-content {
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo a {
  font-size: 1.8rem;
  text-decoration: none;
  color: white;
}
.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}
.nav-links li a {
  text-decoration: none;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
}
.nav-links li a:hover {
  opacity: 0.8;
}

/* Page Content */
.page-content {
  flex: 1;
}

/* Footer */
.footer {
  background-color: #2B3D4E;
  color: white;
  text-align: center;
  padding: 2rem;
}
</style>
