<template>
  <div class="min-h-screen w-full bg-white font-[Playfair_Display]">
    <!-- Header -->
    <header class="relative py-16 px-6 bg-[#EF9A14]">
      <div class="max-w-[1200px] mx-auto text-center">
        <p class="text-[0.9rem] font-[Montserrat] text-white mb-2 tracking-[0.2em]">CUISINE MINIMALISTE</p>
        <h1 class="text-[3.5rem] max-lg:text-[2.5rem] max-sm:text-[2rem] font-bold text-white leading-[1.1] mb-4">5 ingrédients, 100 saveurs</h1>
        <p class="text-[1.1rem] max-sm:text-[1rem] text-white font-[Montserrat] font-light max-w-[500px] mx-auto">Découvrez des recettes savoureuses et simples avec seulement 5 ingrédients !</p>
      </div>
    </header>

    <!-- Recettes Section -->
    <section class="px-6 py-12 bg-white">
      <div class="max-w-[1200px] mx-auto">
        <h2 class="text-[2.5rem] text-center font-bold text-[#2c3e50] mb-12">Recettes populaires</h2>
        <div class="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6">
          <div v-for="recipe in recipes" 
               :key="recipe.id" 
               class="bg-white border-[1px] border-[#eee]"
               :style="{ transform: recipe.hover ? 'translateY(-8px)' : 'none' }"
               @mouseenter="recipe.hover = true"
               @mouseleave="recipe.hover = false">
            <img :src="'https://placehold.co/400x300'" class="w-full h-[200px] object-cover" />
            <div class="p-6">
              <p class="text-[#EF9A14] font-[Montserrat] text-[0.8rem] tracking-[0.2em] mb-2">RECETTE DU JOUR</p>
              <h3 class="text-[1.5rem] font-bold text-[#2c3e50] mb-2 leading-tight">{{ recipe.title }}</h3>
              <p class="text-[#7f8c8d] text-[0.9rem] mb-4 font-[Montserrat]">{{ recipe.description }}</p>
              <div class="flex items-center justify-between">
                <NuxtLink 
                  :to="`/recettes/${recipe.id}`"
                  class="text-[#2c3e50] font-[Montserrat] text-[0.8rem] tracking-[0.1em] flex items-center group"
                  :style="{ color: recipe.hover ? '#EF9A14' : '#2c3e50' }">
                  <span>LIRE LA RECETTE</span>
                  <svg 
                    class="w-4 h-4 ml-2 transition-transform duration-300"
                    :style="{ transform: recipe.hover ? 'translateX(4px)' : 'none' }"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Concept Section -->
    <section class="px-6 py-12 bg-[#f8f8f8]">
      <div class="max-w-[1200px] mx-auto">
        <div class="text-center mb-10">
          <p class="text-[#EF9A14] font-[Montserrat] text-[0.8rem] tracking-[0.2em] mb-2">NOTRE PHILOSOPHIE</p>
          <h2 class="text-[2.5rem] max-sm:text-[2rem] font-bold text-[#2c3e50]">Le concept</h2>
        </div>
        <div class="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-8">
          <div v-for="(step, index) in steps" 
               :key="index"
               class="bg-white p-6"
               :style="{ transform: step.hover ? 'translateY(-8px)' : 'none' }"
               @mouseenter="step.hover = true"
               @mouseleave="step.hover = false">
            <div class="text-[#EF9A14] font-[Montserrat] font-bold text-[2rem] mb-4">{{ step.title[0] }}</div>
            <h3 class="text-[1.2rem] font-bold mb-3">{{ step.title }}</h3>
            <p class="text-[#666] font-[Montserrat] text-[0.9rem] leading-relaxed">{{ step.description }}</p>
            <div class="w-8 h-[2px] mt-4 transition-all duration-300"
                 :style="{ 
                   backgroundColor: step.hover ? '#EF9A14' : '#2c3e50',
                   width: step.hover ? '32px' : '16px'
                 }">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-[#2c3e50] text-white py-8 px-6">
      <div class="max-w-[1200px] mx-auto text-center">
        <p class="font-[Montserrat] text-[0.8rem] tracking-[0.2em] opacity-80">CUISINEZ SIMPLEMENT</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const recipes = ref([
  {
    id: 1,
    title: 'Salade de quinoa',
    description: 'Une salade fraîche avec du quinoa, des légumes et de l\'huile d\'olive',
    hover: false
  },
  {
    id: 2,
    title: 'Tacos au poulet',
    description: 'Des tacos épicés avec du poulet grillé, des légumes croquants et une sauce maison',
    hover: false
  },
  {
    id: 3,
    title: 'Pasta tomate-basilic',
    description: 'Des pâtes fraîches avec une sauce tomate simple et du basilic',
    hover: false
  }
])

const steps = ref([
  {
    title: '1. Trouvez vos ingrédients',
    description: 'Ouvrez votre frigo ou vos placards et choisissez 5 ingrédients disponibles.',
    hover: false
  },
  {
    title: '2. Suivez nos recettes',
    description: 'Découvrez nos recettes rapides et faciles, adaptées à vos 5 ingrédients.',
    hover: false
  },
  {
    title: '3. Dégustez !',
    description: 'Préparez des plats délicieux, simples et rapides à partager avec vos proches.',
    hover: false
  }
])
</script>

<style>
/* Import des polices */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Montserrat:wght@300;400;600&display=swap');

/* Transitions globales */
* {
  transition: all 0.3s ease;
}

/* Style pour les liens */
a {
  text-decoration: none;
}

/* Animations fluides */
.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style>
