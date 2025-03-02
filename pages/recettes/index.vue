<template>
  <div class="home">
    <header class="home-header">
      <h1>Nos Recettes en 5 Ingrédients</h1>
      <p>Découvrez des recettes simples et savoureuses avec seulement 5 ingrédients.</p>
    </header>

    <section class="featured-recipes">
      <h2>Recettes populaires</h2>
      <div class="recipe-list">
        <div v-for="recipe in recipes" :key="recipe.id" class="recipe-item">
          <NuxtLink :to="`/recettes/${recipe.id}`" class="recipe-link">
            <div class="recipe-card">
              <h3>{{ recipe.title }}</h3>
              <p class="recipe-description">{{ recipe.description }}</p>
              <ul class="ingredients-list">
                <li v-for="ingredient in recipe.ingredients" :key="ingredient">
                  <i class="fas fa-check"></i>
                  <span>{{ ingredient }}</span>
                </li>
              </ul>
            </div>
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
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Montserrat:wght@300;400;600&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

/* Global */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: all 0.3s ease;
}
.home {
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f9;
  color: #333;
  min-height: 100vh;
  padding-bottom: 2rem;
}

/* Header */
.home-header {
  background: linear-gradient(135deg, #f39c12, #e67e22);
  color: white;
  padding: 40px 20px;
  text-align: center;
  margin-bottom: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.home-header h1 {
  font-family: 'Times New Roman', serif;
  font-size: 2.5rem;
  margin: 0;
}
.home-header p {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  margin-top: 10px;
  color: #ecf0f1;
}

/* Featured Recipes */
.featured-recipes {
  text-align: center;
  margin-bottom: 50px;
}
.featured-recipes h2 {
  font-family: 'Times New Roman', serif;
  font-size: 2rem;
  color: #000000;
  margin-bottom: 20px;
  font-weight: 600;
}

/* Recipe List */
.recipe-list {
  display: flex;
  justify-content: space-evenly;
  gap: 30px;
  flex-wrap: wrap;
  padding: 0 10px;
}
.recipe-item {
  width: 280px;
  margin: 10px 0;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.recipe-item:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}
.recipe-link {
  color: #000;
  text-decoration: none;
  display: block;
  padding: 20px;
}
.recipe-card h3 {
  font-family: 'Times New Roman', serif;
  font-size: 1.4rem;
  font-weight: bold;
  color: #000000;
  margin-bottom: 15px;
}

.recipe-description {
  font-family: 'Times New Roman', serif;
  font-size: 1rem;
  color: #000000;
  margin-bottom: 20px;
}

/* Ingredients List */
.ingredients-list {
  font-family: 'Times New Roman', serif;
  list-style: none;
  padding: 0;
}
.ingredients-list li {
  display: flex;
  align-items: center;
  font-size: 0.95rem;
  color: #000000;
  margin-bottom: 8px;
}
.ingredients-list li i {
  color: #27ae60;
  margin-right: 8px;
}

/* Responsive */
@media (max-width: 768px) {
  .home-header {
    padding: 30px 15px;
  }
  .home-header h1 {
    font-size: 2rem;
  }
  .home-header p {
    font-size: 1rem;
  }
  .recipe-list {
    flex-direction: column;
    align-items: center;
  }
  .recipe-item {
    width: 90%;
    margin: 20px 0;
  }
  .recipe-card h3 {
    font-size: 1.2rem;
  }
  .recipe-description {
    font-size: 0.9rem;
  }
}
</style>
