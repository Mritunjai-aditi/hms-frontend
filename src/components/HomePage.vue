<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <!-- Use the modularized header component -->
    <AppHeader :isLoggedIn="isLoggedIn" @logout="logout" />

    <!-- Main content -->
    <main class="container-fluid px-md-4">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Hospital Overview</h1>
      </div>

      <!-- Hospital Info Section with Carousel -->
      <div class="row mb-4">
        <div class="col-md-12">
          <div class="card shadow-lg">
            <div class="card-body text-center">
              <h2 class="card-title">Welcome to Aditi Hospital</h2>
              <p class="card-text">
                Aditi Hospital is one of the leading healthcare providers in the region. With our state-of-the-art facilities, dedicated medical professionals, and advanced medical technologies, we offer the best care for all our patients.
              </p>

              <!-- Bootstrap Carousel -->
              <div id="hospitalCarousel" class="carousel slide mb-4" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img :src="require('@/assets/img/HMS-home.png')" class="d-block w-100 img-fluid rounded" alt="Hospital Image 1">
                  </div>
                  <!--<div class="carousel-item">
                    <img :src="require('@/assets/img/HMS-home3.png')" class="d-block w-100 img-fluid rounded" alt="Hospital Image 2">
                  </div>
                  <div class="carousel-item">
                    <img :src="require('@/assets/img/doctor-patient.png')" class="d-block w-100 img-fluid rounded" alt="Doctor with Patient">
                  </div>-->
                </div>
                <!--<button class="carousel-control-prev" type="button" data-bs-target="#hospitalCarousel" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#hospitalCarousel" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>-->
              </div>

              <p class="card-text">
                Our services include outpatient consultations, inpatient treatments, surgeries, lab diagnostics, and much more. Our hospital is committed to ensuring the health and well-being of our patients by providing top-notch medical services.
              </p>
              <p class="card-text">
                Visit our hospital today to experience compassionate care and world-class medical services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Use the modularized footer component -->
    <AppFooter />
  </div>
</template>

<script>
// Importing the modularized header and footer components
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      isLoggedIn: true, // Adjust this based on authentication state
    };
  },
  methods: {
    logout() {
      this.isLoggedIn = false;
      // Handle logout logic
    }
  }
};
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.carousel-inner img {
  width: 100%; /* Ensures the image takes the full width of its container */
  height: auto; /* Maintains aspect ratio */
  max-height: 500px; /* Limits the height to prevent it from growing too large */
  object-fit: cover; /* Ensures the image covers the container while maintaining aspect ratio */
}

@media (max-width: 768px) {
  .carousel-inner img {
    max-height: 300px; /* Smaller height for smaller screens */
  }
}

@media (max-width: 576px) {
  .carousel-inner img {
    max-height: 200px; /* Further reduce height for very small screens */
  }
}
</style>
