<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <!-- Import the modularized header component -->
    <AppHeader :isLoggedIn="isLoggedIn" @logout="logout" />

    <!-- Main Content -->
    <main class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card shadow-lg">
            <div class="card-header bg-primary text-white text-center">
              <h2>Add New Patient</h2>
            </div>
            <div class="card-body">
              <form @submit.prevent="submitForm">
                <div class="row mb-3">
                  <div class="col-md-6">
                    <label for="name" class="form-label">Patient Name</label>
                    <input
                      v-model="name"
                      type="text"
                      id="name"
                      class="form-control"
                      placeholder="Enter patient name"
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="age" class="form-label">Age</label>
                    <input
                      v-model="age"
                      type="number"
                      id="age"
                      class="form-control"
                      placeholder="Enter patient age"
                      required
                    />
                  </div>
                </div>

                <div class="row mb-3">
                  <div class="col-md-6">
                    <label for="gender" class="form-label">Gender</label>
                    <select v-model="gender" id="gender" class="form-select" required>
                      <option value="" disabled>Select gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div class="col-md-6">
                    <label for="contact" class="form-label">Contact Number</label>
                    <input
                      v-model="contact"
                      type="text"
                      id="contact"
                      class="form-control"
                      placeholder="Enter contact number"
                      required
                    />
                  </div>
                </div>

                <div class="mb-3">
                  <label for="medicalHistory" class="form-label">Medical History</label>
                  <textarea
                    v-model="medicalHistory"
                    id="medicalHistory"
                    class="form-control"
                    rows="3"
                    placeholder="Enter medical history"
                    required
                  ></textarea>
                </div>

                <div class="text-center">
                  <button type="submit" class="btn btn-success btn-lg">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Import the modularized footer component -->
    <AppFooter />
  </div>
</template>

<script>
// Import the modularized header and footer components
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      name: '',
      age: null,
      gender: '',
      contact: '',
      medicalHistory: '',
      isLoggedIn: true, // Adjust based on authentication state
    };
  },
  methods: {
    submitForm() {
      console.log('Form submitted:', {
        name: this.name,
        age: this.age,
        gender: this.gender,
        contact: this.contact,
        medicalHistory: this.medicalHistory
      });
      this.resetForm();
    },
    resetForm() {
      this.name = '';
      this.age = null;
      this.gender = '';
      this.contact = '';
      this.medicalHistory = '';
    },
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

/* Styling for form container */
.container {
  max-width: 800px;
}

/* Card and form styling */
.card {
  border-radius: 12px;
}

.card-header {
  border-radius: 12px 12px 0 0;
}
</style>
