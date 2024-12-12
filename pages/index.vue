<template>
  <div class="home">
    <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    </head>
    
    <!-- Header -->
    <header>
      <h1>5 ingrédients, 100 saveurs</h1>
      <p>Découvrez des recettes savoureuses et simples avec seulement 5 ingrédients !</p>
    </header>

    <!-- Recettes populaires -->
    <section class="featured-recipes">
      <h2>Recettes populaires</h2>
      <div class="recipe-list">
        <div class="recipe-item" v-for="recipe in recipes" :key="recipe.id">
          <h3>{{ recipe.title }}</h3>
          <p>{{ recipe.description }}</p>
          <NuxtLink :to="`/recettes/${recipe.id}`">{{ recipe.title }}</NuxtLink>        
        </div>
      </div>
    </section>

    <!-- Concept -->
    <section class="concept">
      <h2>Le concept</h2>
      <div class="concept-steps">
        <div class="step">
          <h3>1. Trouvez vos ingrédients</h3>
          <p>Ouvrez votre frigo ou vos placards et choisissez 5 ingrédients disponibles.</p>
        </div>
        <div class="step">
          <h3>2. Suivez nos recettes</h3>
          <p>Découvrez nos recettes rapides et faciles, adaptées à vos 5 ingrédients.</p>
        </div>
        <div class="step">
          <h3>3. Dégustez !</h3>
          <p>Préparez des plats délicieux, simples et rapides à partager avec vos proches.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Simuler des recettes avec des données fictives
const recipes = ref([
  {
    id: 1,
    title: "Salade de quinoa",
    description: "Une salade fraîche avec du quinoa, des légumes et de l'huile d'olive.",
  },
  {
    id: 2,
    title: "Tacos au poulet",
    description: "Des tacos épicés avec du poulet grillé, des légumes croquants et une sauce maison.",
  },
  {
    id: 3,
    title: "Pasta tomate-basilic",
    description: "Des pâtes fraîches avec une sauce tomate simple et du basilic.",
  },
]);
</script>

<style scoped>
/* Style général */
.home {
  font-family: "Arial", sans-serif;
  background-color: #f4f4f9;
  color: #333;
  margin: 0;
  padding: 0;
}

/* Header */
header {
  background-image: url('/mon-site-de-cuisine/images/header.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 60vh;
  color: white;
  padding: 40px 20px;
  text-align: center;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

/* Recettes populaires */
.featured-recipes {
  text-align: center;
  margin-bottom: 50px;
}

.featured-recipes h2 {
  font-family: 'Times New Roman';
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 20px;
  font-weight: 600;
}

.recipe-list {
  display: flex;
  justify-content: space-evenly;
  gap: 30px;
  flex-wrap: wrap;
  padding: 0 10px;
}

.recipe-item {
  background-color: white;
  padding: 20px;
  width: 280px;
  margin: 10px 0;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: left;
}

.recipe-item:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.recipe-item h3 {
  font-size: 1.4rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 15px;
}

.recipe-item p {
  font-size: 1rem;
  color: #7f8c8d;
  margin-bottom: 20px;
}

.recipe-link {
  font-family: 'Times New Roman';
  color: #000;
  font-weight: bold;
  text-decoration: none;
}

.recipe-link:hover {
  text-decoration: none;
}

/* Section Concept */
.concept {
  background-color: #fff;
  padding: 40px 20px;
  text-align: center;
  margin: 40px 0;
  border-radius: 10px;
}

.concept h2 {
  font-family: 'Times New Roman';
  font-size: 2rem;
  color: #2c3e50;
  font-weight: bold;
  margin-bottom: 30px;
}

.concept-steps {
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
  gap: 20px;
  flex-wrap: wrap;
}

.step {
  background-color: #f9f9f9;
  padding: 20px;
  flex: 1;
  max-width: 280px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.step:hover {
  background-color : #EF9A14;
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.step-icon {
  width: 60px;
  height: 60px;
  margin-bottom: 20px;
}


.step h3 {
  font-size: 1.3rem;
  color: #2c3e50;
  margin-bottom: 15px;
  font-weight: bold;
}

.step p {
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
}

/* Responsive Design */
@media (max-width: 768px) {
  header {
    height: 40vh;
    padding: 20px 15px;
  }

  header h1 {
    font-size: 2rem;
  }

  header p {
    font-size: 1rem;
  }

  .recipe-list {
    flex-direction: column;
    align-items: center;
  }

  .concept-steps {
    flex-direction: column;
    align-items: center;
  }

  .step {
    max-width: 90%;
  }
}
</style>
