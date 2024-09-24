<!-- src/components/Footer.vue -->
<template>
    <footer class="bg-dark text-white text-center py-3 mt-auto">
      <p>&copy; 2024 ABC Hospital. All rights reserved.</p>
      <nav>
        <router-link to="/privacy-policy" class="text-white">Privacy Policy</router-link> |
        <router-link to="/terms" class="text-white">Terms of Service</router-link> |
        <router-link to="/contact" class="text-white">Contact Us</router-link>
      </nav>
    </footer>
  </template>
  
  <style scoped>
  footer {
    background-color: #343a40;
    color: #ffffff;
  }
  
  footer nav a {
    color: #ffffff;
    margin: 0 10px;
  }
  
  footer nav a:hover {
    text-decoration: underline;
  }
  </style>
  