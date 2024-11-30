<template>
    <div class="layout-container">
      <!-- Inclure la Navbar -->
      <Navbar />
  
      <!-- Contenu de la page -->
      <main class="main-content">
        <NuxtPage />
      </main>
  
      <!-- Inclure le Footer -->
      <Footer />
    </div>
  </template>
  
  <script>
  import Navbar from '~/components/navbar.vue'
  import Footer from '~/components/SiteFooter.vue'
  
  export default {
    components: {
      Navbar,
      Footer
    }
  }
  </script>
  
  <style scoped>
  .layout-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* S'assurer que la page occupe toute la hauteur de l'écran */
  }
  
  .main-content {
    flex-grow: 1; /* Le contenu principal prend l'espace restant */
  }
  
  footer {
    margin-top: auto; /* S'assure que le footer est toujours en bas */
  }
  </style>
  