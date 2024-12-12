<template>
  <div class="recipe-detail">
    <h1>{{ recipeTitle }}</h1>
    <p>{{ recipeDescription }}</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'

// Liste des recettes
const recipes = [
  { id: 1, title: "Salade de quinoa", description: "Une salade fraîche avec du quinoa, des légumes et de l'huile d'olive." },
  { id: 2, title: "Tacos au poulet", description: "Des tacos épicés avec du poulet grillé, des légumes croquants et une sauce maison." },
  { id: 3, title: "Pasta tomate-basilic", description: "Des pâtes fraîches avec une sauce tomate simple et du basilic." }
]

// Variables réactives pour afficher le titre et la description
const recipeTitle = ref('')
const recipeDescription = ref('')

// Récupérer l'ID de la route et chercher la recette correspondante
const route = useRoute()

const getRecipeById = (id) => {
  const recipe = recipes.find(r => r.id === id)
  if (recipe) {
    recipeTitle.value = recipe.title
    recipeDescription.value = recipe.description
  } else {
    recipeTitle.value = 'Recette non trouvée'
    recipeDescription.value = 'Aucune description disponible.'
  }
}

// Charger la recette à l'initialisation
onMounted(() => {
  const recipeId = parseInt(route.params.id)
  getRecipeById(recipeId)
})

// Mettre à jour les détails si l'ID de la route change
watch(() => route.params.id, (newId) => {
  getRecipeById(parseInt(newId))
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
