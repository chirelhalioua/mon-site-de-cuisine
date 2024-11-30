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
/* Style général de la page */
/* En-tête */
header {
  background: #f39c12;
  color: white;
  padding: 40px 20px;
  text-align: center;
  margin-bottom: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

header h1 {
  font-family: 'Times New Roman';
  font-size: 2.5rem;
  margin: 0;
}

header p {
  font-family: 'Times New Roman';
  font-size: 1.1rem;
  font-weight: 400;
  margin-top: 10px;
  color: #ecf0f1;
}

/* Section des membres de l'équipe */
.team {
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.team h2 {
  font-family: 'Times New Roman';
  font-size: 2rem;
  color: #2c3e50;
  font-weight: 600;
  margin-bottom: 2rem;
  width: 100%;
  text-align:center;
}

.team-member {
  width: 300px;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px 0;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-bottom:30px;
}

.team-member:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.team-member h3 {
  font-size: 1.5rem;
  color: #34495e;
  margin-bottom: 10px;
}

.team-member p {
  font-size: 1.1rem;
  color: #7f8c8d;
  font-weight: 400;
}

/* Responsive Design */
@media (max-width: 768px) {
  .about {
    padding: 20px;
  }

  h1 {
    font-size: 2rem;
  }

  .team h2 {
    font-size: 1.5rem;
  }

  .team-member {
    padding: 15px;
  }
}
</style>
