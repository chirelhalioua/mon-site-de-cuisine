<template>
  <div class="recipe-container">
    <div class="recipe-detail">
      <h1>{{ recipeTitle }}</h1>

      <img v-if="recipeImage" :src="recipeImage" :alt="recipeTitle" class="recipe-image"/>

      <p class="description">{{ recipeDescription }}</p>

      <div v-if="recipeIngredients.length">
        <h2>Ingrédients (5 max) :</h2>
        <ul class="ingredients-list">
          <li v-for="ingredient in recipeIngredients" :key="ingredient">
            <i class="fas fa-check"></i>
            <span>{{ ingredient }}</span>
          </li>
        </ul>
      </div>

      <div v-if="recipeInstructions.length">
        <h2>Préparation :</h2>
        <ol class="instructions-list">
          <li v-for="(step, index) in recipeInstructions" :key="index">
            <strong>Étape {{ index + 1 }} :</strong> {{ step }}
          </li>
        </ol>
      </div>
    </div>

    <!-- Bloc des autres recettes à droite -->
    <aside class="other-recipes">
      <h2>Autres recettes</h2>
      <ul>
        <li v-for="recipe in recipes" :key="recipe.id">
          <NuxtLink :to="`/recettes/${recipe.id}`">{{ recipe.title }}</NuxtLink>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted, watch } from 'vue'

const recipes = [
  { 
    id: 1, 
    title: "Salade de quinoa", 
    description: "Une salade fraîche et rapide avec du quinoa et des légumes.",
    image: "https://cdn.pixabay.com/photo/2016/11/13/21/58/quinoa-1822176_1280.jpg",
    ingredients: ["Quinoa", "Tomates", "Concombre", "Huile d'olive", "Citron"],
    instructions: [
      "Faire cuire le quinoa et le laisser refroidir.",
      "Couper les tomates et le concombre en petits dés.",
      "Mélanger le quinoa avec les légumes.",
      "Ajouter l'huile d'olive et le citron.",
      "Servir frais."
    ]
  },
  { 
    id: 2, 
    title: "Tacos au poulet", 
    description: "Des tacos épicés et savoureux, ultra simples à réaliser.",
    image: "https://cdn.pixabay.com/photo/2017/12/27/04/28/tortilla-3041938_1280.jpg",
    ingredients: ["Poulet", "Tortillas", "Avocat", "Laitue", "Tomates"],
    instructions: [
      "Assaisonner et griller le poulet.",
      "Couper la laitue, les tomates et l'avocat.",
      "Réchauffer les tortillas.",
      "Garnir avec le poulet et les légumes.",
      "Servir immédiatement."
    ]
  },
  { 
    id: 3, 
    title: "Pasta tomate-basilic", 
    description: "Des pâtes savoureuses avec une sauce tomate maison.",
    image: "https://cdn.pixabay.com/photo/2018/07/18/19/12/pasta-3547078_1280.jpg",
    ingredients: ["Pâtes", "Tomates", "Basilic", "Ail", "Huile d'olive"],
    instructions: [
      "Cuire les pâtes al dente.",
      "Faire revenir l'ail dans l'huile.",
      "Ajouter les tomates et laisser mijoter.",
      "Incorporer le basilic et assaisonner.",
      "Mélanger avec les pâtes et servir."
    ]
  }
]

const recipeTitle = ref('')
const recipeDescription = ref('')
const recipeImage = ref('')
const recipeIngredients = ref([])
const recipeInstructions = ref([])

const route = useRoute()

const getRecipeById = (id) => {
  const recipe = recipes.find(r => r.id === id)
  if (recipe) {
    recipeTitle.value = recipe.title
    recipeDescription.value = recipe.description
    recipeImage.value = recipe.image
    recipeIngredients.value = recipe.ingredients
    recipeInstructions.value = recipe.instructions
  } else {
    recipeTitle.value = 'Recette non trouvée'
    recipeDescription.value = 'Aucune description disponible.'
    recipeImage.value = ''
    recipeIngredients.value = []
    recipeInstructions.value = []
  }
}

onMounted(() => {
  const recipeId = parseInt(route.params.id)
  getRecipeById(recipeId)
})

watch(() => route.params.id, (newId) => {
  getRecipeById(parseInt(newId))
})
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

.recipe-container {
  display: flex;
  max-width: 1100px;
  margin: 40px auto;
  gap: 30px;
  justify-content: space-between;
}

.recipe-detail {
  font-family: "Times New Roman", serif;
  background-color: #fdf6e3;
  color: #333;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  width: 70%;
  text-align: center;
}

h1 {
  font-size: 2.8rem;
  color: #2c3e50;
  margin-bottom: 30px;
}

.recipe-image {
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 30px;
}

.description {
  font-size: 1.3rem;
  font-style: italic;
  color: #7f8c8d;
  margin-bottom: 30px;
}

/* Augmenter l'espace entre les sous-titres */
h2 {
  font-size: 1.8rem;
  color: #e67e22;
  margin-top: 50px;
  margin-bottom: 20px;
}

.ingredients-list, .instructions-list {
  text-align: left;
  max-width: 700px;
  margin: 0 auto;
  list-style: none;
  padding: 0;
}

.ingredients-list li, .instructions-list li {
  font-size: 1.1rem;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
}

.ingredients-list li i {
  color: #27ae60;
  margin-right: 10px;
}

.instructions-list li {
  display: block;
  margin-bottom: 12px;
}

/* Bloc des autres recettes à droite */
.other-recipes {
  width: 25%;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  align-self: flex-start;
}

.other-recipes h2 {
  font-size: 1.5rem;
  color: #d35400;
  margin-bottom: 15px;
}

.other-recipes ul {
  list-style: none;
  padding: 0;
}

.other-recipes li {
  margin: 10px 0;
  font-size: 1.1rem;
}

.other-recipes a {
  text-decoration: none;
  color: #e67e22;
  font-weight: bold;
}

.other-recipes a:hover {
  text-decoration: underline;
}

/* Responsive */
@media (max-width: 768px) {
  .recipe-container {
    flex-direction: column;
    align-items: center;
  }

  .recipe-detail, .other-recipes {
    width: 90%;
  }

  .other-recipes {
    margin-top: 20px;
    text-align: center;
  }
}
</style>
