<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Section des informations -->
      <div class="footer-info">
        <p>&copy; 2024 Mon site de cuisine - Recettes simples avec 5 ingrédients</p>
      </div>

      <!-- Section des liens sociaux -->
      <div class="footer-social">
        <ul class="social-links">
          <li><a href="#" target="_blank" class="social-link"><i class="fab fa-instagram"></i></a></li>
          <li><a href="#" target="_blank" class="social-link"><i class="fab fa-facebook"></i></a></li>
          <li><a href="#" target="_blank" class="social-link"><i class="fab fa-twitter"></i></a></li>
        </ul>
      </div>

      <!-- Section des crédits -->
      <div class="footer-credits">
        <p>Développé avec 💚 par Chirel Halioua</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'footer'
}
</script>

<style scoped>
/* Style du footer */
.footer {
  background-color: #2c3e50;
  color: white;
  padding: 20px 0;
  text-align: center;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 20px;
}

.footer-info,
.footer-credits {
  font-size: 1rem;
}

.footer-social {
  display: flex;
  justify-content: center;
}

.social-links {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 20px;
}

.social-link {
  color: white;
  font-size: 1.5rem;
  text-decoration: none;
}

.social-link:hover {
  color: #f39c12; /* Couleur de survol */
}

.social-link i {
  transition: color 0.3s;
}

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    align-items: center;
  }

  .footer-info,
  .footer-credits {
    margin-bottom: 10px;
  }
}
</style>