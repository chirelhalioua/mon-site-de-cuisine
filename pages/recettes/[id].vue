<template>
  <div class="recipe-detail">
    <h1>{{ recipeTitle }}</h1>
    <p>{{ recipeDescription }}</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, watchEffect } from 'vue'

// Utilisation de la route pour récupérer l'ID de la recette
const route = useRoute()

// Données fictives pour les recettes
const recipes = [
  { id: 1, title: "Salade de quinoa", description: "Une salade fraîche avec du quinoa, des légumes et de l'huile d'olive." },
  { id: 2, title: "Tacos au poulet", description: "Des tacos épicés avec du poulet grillé, des légumes croquants et une sauce maison." },
  { id: 3, title: "Pasta tomate-basilic", description: "Des pâtes fraîches avec une sauce tomate simple et du basilic." }
]

// Créez des références réactives pour le titre et la description
const recipeTitle = ref('')
const recipeDescription = ref('')

// Fonction pour rechercher la recette par ID
function getRecipeById(id) {
  const recipe = recipes.find(r => r.id === id)
  if (recipe) {
    recipeTitle.value = recipe.title
    recipeDescription.value = recipe.description
  } else {
    recipeTitle.value = 'Recette non trouvée'
    recipeDescription.value = 'Aucune description disponible.'
  }
}

// Appeler la fonction au montage initial
getRecipeById(parseInt(route.params.id))

// Réagir aux changements d'ID dans l'URL
watchEffect(() => {
  getRecipeById(parseInt(route.params.id))
})
</script>

<style scoped>
.recipe-detail {
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  color: #333;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.recipe-detail h1 {
  font-size: 2rem;
  color: #2c3e50;
}

.recipe-detail p {
  font-size: 1.1rem;
  color: #7f8c8d;
}
</style>
