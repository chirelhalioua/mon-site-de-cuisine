<template>
  <div class="about">
    <header>
      <h1>À propos de notre site</h1>
      <p>Bienvenue sur notre site de cuisine ! Nous vous proposons des recettes simples et rapides à réaliser avec seulement 5 ingrédients. Notre mission est de vous aider à cuisiner des plats délicieux sans avoir à acheter une tonne d'ingrédients. Que vous soyez pressé ou que vous ayez des restrictions alimentaires, nos recettes sont pensées pour vous simplifier la vie en cuisine.</p>
    </header>
    
    <section class="team">
      <h2>Découvrez la créatrice du site</h2>
      <div class="team-member" v-for="member in team" :key="member.name">
        <h3>{{ member.name }}</h3>
        <p>{{ member.role }}</p>
      </div>
    </section>
  </div>
</template>

<script setup>
const team = [
  { name: 'Halioua Chirel', role: 'Développeuse web' },
];
</script>

<style scoped>
/* Importation de la police Playfair Display */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');

/* Style général de la page */

/* En-tête */
header {
  background: #EB881D;  /* Couleur de fond plus douce */
  color: #ffffff;  /* Texte sombre pour un contraste élevé */
  padding: 50px 20px;
  text-align: center;
  margin-bottom: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

header h1 {
  font-family: 'Playfair Display', serif;
  font-size: 3rem;  /* Taille de texte plus grande pour un impact plus fort */
  font-weight: 700;
  margin: 0;
}

header p {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  font-weight: 400;
  margin-top: 15px;
  color: #ffffff;  /* Texte noir pour une lisibilité maximale */
  line-height: 1.6;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

/* Section des membres de l'équipe */
.team {
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
}

.team h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2.2rem;
  color: #000000;
  font-weight: 600;
  margin-bottom: 2rem;
  width: 100%;
  text-align: center;
}

/* Membres de l'équipe */
.team-member {
  width: 300px;
  background-color: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  margin-bottom: 30px;
  overflow: hidden;
}

.team-member:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
  background-color: #f7f7f7;  /* Légère couleur de survol pour un effet subtil */
}

.team-member h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.6rem;
  color: #000000;
  margin-bottom: 15px;
}

.team-member p {
  font-size: 1.1rem;
  color: #000000;  /* Texte noir pour un meilleur contraste */
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;
}

/* Responsive Design */
@media (max-width: 768px) {
  .about {
    padding: 0px;
  }

  header h1 {
    font-size: 2.4rem;
  }

  .team h2 {
    font-size: 1.8rem;
  }

  .team-member {
    padding: 20px;
    width: 80%;
  }
}
</style>
