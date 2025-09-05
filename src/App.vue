<template>
  <div class="app-container">
    <header class="app-header">
      <div class="header-content">
        <h2 class="app-title">Digital tree</h2>
        <div class="language-selector">
          <label for="language-select" class="sr-only">{{ $t('message.welcome') }}</label>
          <select id="language-select" v-model="locale">
            <option value="es">ES</option>
            <option value="en">EN</option>
            <option value="it">IT</option>
          </select>
        </div>
      </div>
    </header>

    <main class="main-content">
      <transition name="fade" mode="out-in">
        <div :key="locale">
          <h1 class="welcome-heading">{{ $t('message.welcome_title') }}</h1>
          <p class="welcome-subtitle">{{ $t('message.welcome_subtitle') }}</p>
          <button class="call-to-action-btn">{{ $t('message.call_to_action') }}</button>
        </div>
      </transition>
    </main>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.app-container {
  font-family: 'Poppins', sans-serif;
  color: #333;
}

.app-header {
  background-color: #2c3e50;
  color: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.app-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.language-selector select {
  background-color: #34495e;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  appearance: none;
  font-family: inherit;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.language-selector select:hover {
  background-color: #465f7c;
}

.main-content {
  padding: 4rem 2rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.welcome-heading {
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.welcome-subtitle {
  font-size: 1.25rem;
  color: #555;
  margin-bottom: 2rem;
}

.call-to-action-btn {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.call-to-action-btn:hover {
  background-color: #2980b9;
  transform: translateY(-2px);
}

/* Transición de desvanecimiento para el contenido principal */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Oculta la etiqueta de manera accesible (solo para lectores de pantalla) */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
</style>