<template>
  <div class="home">
    <header>
      <h1>Nos Recettes en 5 Ingrédients</h1>
      <p>Découvrez des recettes simples et savoureuses avec seulement 5 ingrédients.</p>
    </header>

    <section class="featured-recipes">
      <h2>Recettes populaires</h2>
      <div class="recipe-list">
        <div v-for="recipe in recipes" :key="recipe.id" class="recipe-item">
          <NuxtLink :to="`/recettes/${recipe.id}`" class="recipe-link">
            <h3>{{ recipe.title }}</h3>
            <p>{{ recipe.description }}</p>
            <ul class="ingredients-list">
              <li v-for="ingredient in recipe.ingredients" :key="ingredient">{{ ingredient }}</li>
            </ul>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const recipes = [
  {
    id: 1,
    title: "Salade de quinoa",
    description: "Une salade fraîche avec du quinoa, des légumes et de l'huile d'olive.",
    ingredients: ["Quinoa", "Tomates", "Concombre", "Huile d'olive", "Citron"],
    instructions: "Cuire le quinoa, couper les légumes, mélanger avec l'huile d'olive et le citron."
  },
  {
    id: 2,
    title: "Tacos au poulet",
    description: "Des tacos épicés avec du poulet grillé, des légumes croquants et une sauce maison.",
    ingredients: ["Poulet", "Tortillas", "Avocat", "Laitue", "Tomates"],
    instructions: "Griller le poulet. Monter les tacos avec les ingrédients frais et la sauce maison."
  },
  {
    id: 3,
    title: "Pasta tomate-basilic",
    description: "Des pâtes fraîches avec une sauce tomate simple et du basilic.",
    ingredients: ["Pâtes", "Tomates", "Basilic", "Ail", "Huile d'olive"],
    instructions: "Faire cuire les pâtes. Préparer la sauce tomate avec l'ail et le basilic, et mélanger."
  }
]
</script>

<style scoped>
/* Style général de la page */
/* Style général de la page */
.home {
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f9;
  color: #333;
  margin: 0;
  padding: 0;
  min-height: 100vh; /* S'assurer que la page occupe toute la hauteur de l'écran */
  display: flex;
  flex-direction: column;
}

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

/* Section des recettes populaires */
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

/* Liste des recettes */
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
  color: #000;
  font-weight: bold;
  text-decoration: none;
}

.recipe-link:hover {
  text-decoration: none;
}

/* Styles pour mobile */
@media (max-width: 768px) {
  header {
    padding: 30px 15px;
  }

  header h1 {
    font-size: 2rem; /* Réduction de la taille du titre sur petits écrans */
  }

  header p {
    font-size: 1rem; /* Réduction de la taille du texte sous-titre */
  }

  .featured-recipes h2 {
    font-size: 1.5rem;
  }

  .recipe-list {
    flex-direction: column;
    align-items: center;
  }

  .recipe-item {
    width: 90%; /* Les items de la recette prennent 90% de la largeur de l'écran */
    margin: 20px 0; /* Ajouter un peu d'espace entre les recettes */
  }

  .recipe-item h3 {
    font-size: 1.2rem; /* Réduction de la taille du titre dans les items */
  }

  .recipe-item p {
    font-size: 0.9rem; /* Réduction de la taille de la description */
  }
}
</style>
