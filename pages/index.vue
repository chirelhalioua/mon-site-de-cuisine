<template>
  <div class="homepage">
    <!-- Section Héro -->
    <section class="hero">
      <div class="hero-content">
        <h1>Magazine Culinaire Minimaliste</h1>
        <p>Des recettes simples, 5 ingrédients, une explosion de saveurs.</p>
      </div>
    </section>

    <!-- Section Recettes Récentes -->
    <section class="recent-articles">
      <div class="section-content">
        <h2>Recettes Récentes</h2>
        <div class="articles-grid">
          <article v-for="recipe in recipes" :key="recipe.id" class="article">
            <NuxtLink :to="`/recettes/${recipe.id}`" class="article-link">
              <div class="image-container">
                <img :src="recipe.image" :alt="recipe.title" />
              </div>
              <div class="article-details">
                <h3>{{ recipe.title }}</h3>
                <p class="excerpt">{{ recipe.description }}</p>
                <span class="read-more">Lire la suite</span>
              </div>
            </NuxtLink>
          </article>
        </div>
      </div>
    </section>

    <!-- Section Concept -->
    <section class="concept">
      <div class="section-content">
        <h2>Notre Concept</h2>
        <div class="concept-grid">
          <div v-for="step in steps" :key="step.title" class="concept-item">
            <div class="concept-icon">
              <i :class="['fas', step.icon]"></i>
              <span class="concept-number">{{ step.number }}</span>
            </div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const recipes = ref([
  { 
    id: 1, 
    title: 'Salade de quinoa', 
    description: 'Une salade fraîche avec du quinoa et des légumes croquants. Une recette simple et légère pour démarrer la journée.', 
    image: 'https://cdn.pixabay.com/photo/2016/11/13/21/58/quinoa-1822176_1280.jpg' 
  },
  { 
    id: 2, 
    title: 'Tacos au poulet', 
    description: 'Des tacos épicés avec du poulet grillé et une sauce maison. Idéal pour un repas convivial et rapide.', 
    image: 'https://cdn.pixabay.com/photo/2017/12/27/04/28/tortilla-3041938_1280.jpg' 
  }
])

const steps = ref([
  { 
    number: 1,
    icon: 'fa-leaf', 
    title: 'Choisissez vos ingrédients', 
    description: 'Trouvez 5 ingrédients simples pour créer des recettes savoureuses.' 
  },
  { 
    number: 2,
    icon: 'fa-utensils', 
    title: 'Suivez nos recettes', 
    description: 'Des recettes claires, rapides et gourmandes adaptées à vos ingrédients.' 
  },
  { 
    number: 3,
    icon: 'fa-smile', 
    title: 'Régalez-vous', 
    description: 'Savourez des plats délicieux, simples et faits maison.' 
  }
])
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Montserrat:wght@300;400;600&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: all 0.3s ease;
}

body {
  font-family: 'Playfair Display', serif;
  background-color: #fff;
}

/* Homepage */
.homepage {
  width: 100%;
}

/* Section Héro */
.hero {
  background-color: #EF9A14;
  padding: 6rem 2rem;
  text-align: center;
  color: white;
}
.hero-content {
  max-width: 1200px;
  margin: 0 auto;
}
.hero h1 {
  font-size: 4rem;
  font-weight: bold;
  line-height: 1.1;
}
.hero p {
  font-size: 1.2rem;
  font-family: 'Montserrat', sans-serif;
  margin-top: 1rem;
}

/* Section Recettes Récentes */
.recent-articles {
  padding: 4rem 2rem;
  background-color: white;
}
.section-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}
.recent-articles h2 {
  font-size: 2.5rem;
  color: #000000;
  margin-bottom: 3rem;
}
.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
.article {
  cursor: pointer;
  text-align: left;
}
.article-link {
  text-decoration: none;
  color: inherit;
  display: block;
}
.image-container {
  overflow: hidden;
  border-radius: 1.5rem;
}
.image-container img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: transform 0.3s ease;
}
.article-link:hover .image-container img {
  transform: scale(1.05);
}
.article-details {
  padding: 1rem 0;
}
.article h3 {
  font-size: 1.8rem;
  font-weight: bold;
  color: #000000;
  margin: 0.5rem 0;
}
.excerpt {
  font-size: 1rem;
  color: #000000;
  margin: 0.5rem 0;
}
.read-more {
  font-size: 0.9rem;
  color: #EF9A14;
  font-weight: bold;
  text-decoration: underline;
  margin-top: 0.5rem;
  display: inline-block;
}

/* Section Concept - Design Moderne */
.concept {
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #f0f0f0, #ffffff);
}
.concept h2 {
  font-size: 2.8rem;
  color: #000000;
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;
}
.concept h2::after {
  content: '';
  display: block;
  width: 50%;
  height: 4px;
  background: #EF9A14;
  margin: 0.5rem auto 0;
}
.concept-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
}
.concept-item {
  background-color: white;
  padding: 2rem;
  border-radius: 1.5rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  flex: 1 1 300px;
  max-width: 300px;
  text-align: center;
}
.concept-item:hover {
  transform: translateY(-5px);
}
.concept-icon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #EF9A14;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  margin: 0 auto 1rem;
}
.concept-icon i {
  font-size: 1.5rem;
}
.concept-number {
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 0.2rem;
}
.concept-item h3 {
  font-size: 1.6rem;
  font-weight: bold;
  color: #000000;
  margin-bottom: 1rem;
}
.concept-item p {
  font-size: 1rem;
  color: #000000;
  line-height: 1.5;
}
</style>
