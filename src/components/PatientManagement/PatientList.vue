<!-- src/views/PatientList.vue -->
<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <!-- Use the modularized AppHeader component -->
    <AppHeader :isLoggedIn="isLoggedIn" @logout="handleLogout" />

    <!-- Main Content -->
    <main class="container-fluid py-4">
      <div class="row">
        <div class="col-12">
          <div class="card my-4">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                <h6 class="text-white text-capitalize ps-3">Patient List</h6>
              </div>
            </div>
            <div class="card-body px-0 pb-2">
              <div class="table-responsive p-0">
                <table class="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">ID</th>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Name</th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Age</th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Gender</th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Contact</th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Medical History</th>
                      <th class="text-secondary opacity-7"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(patient, index) in paginatedPatients" :key="patient.id">
                      <td>
                        <div class="d-flex px-2 py-1">
                          <div class="my-auto">
                            <h6 class="mb-0 text-sm">{{ patient.id }}</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">{{ patient.name }}</h6>
                        </div>
                      </td>
                      <td class="align-middle text-center">
                        <span class="text-xs font-weight-bold">{{ patient.age }}</span>
                      </td>
                      <td class="align-middle text-center">
                        <span class="text-xs font-weight-bold">{{ patient.gender }}</span>
                      </td>
                      <td class="align-middle text-center">
                        <span class="text-xs font-weight-bold">{{ patient.contact }}</span>
                      </td>
                      <td class="align-middle text-center">
                        <span class="text-xs font-weight-bold">{{ patient.medicalHistory }}</span>
                      </td>
                      <td class="align-middle">
                        <a
                          href="javascript:;"
                          class="text-secondary font-weight-bold text-xs"
                          @click="editPatient(index)"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- Pagination Controls -->
              <nav aria-label="Page navigation" class="mt-4">
                <ul class="pagination justify-content-center">
                  <li class="page-item" :class="{ disabled: currentPage === 1 }">
                    <button class="page-link" @click="prevPage">Previous</button>
                  </li>
                  <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: currentPage === page }">
                    <button class="page-link" @click="setPage(page)">{{ page }}</button>
                  </li>
                  <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                    <button class="page-link" @click="nextPage">Next</button>
                  </li>
                </ul>
              </nav>

              <!-- Add New Patient Button -->
              <div class="text-center mt-4">
                <router-link to="/patients/add" class="btn btn-primary">Add New Patient</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Use the modularized AppFooter component -->
    <AppFooter />
  </div>
</template>

<script>
// Importing the renamed components
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      patients: [
        { id: 1, name: 'John Doe', age: 30, gender: 'Male', contact: '1234567890', medicalHistory: 'None' },
        { id: 2, name: 'Jane Smith', age: 25, gender: 'Female', contact: '0987654321', medicalHistory: 'Allergy to penicillin' },
        { id: 3, name: 'Michael Johnson', age: 45, gender: 'Male', contact: '5555555555', medicalHistory: 'Diabetes' },
        { id: 4, name: 'Sarah Williams', age: 60, gender: 'Female', contact: '4444444444', medicalHistory: 'Hypertension' },
        { id: 5, name: 'David Brown', age: 35, gender: 'Male', contact: '3333333333', medicalHistory: 'Asthma' }
      ],
      currentPage: 1,
      perPage: 3,
      isLoggedIn: true, // Adjust this based on authentication state
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.patients.length / this.perPage);
    },
    paginatedPatients() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.patients.slice(start, end);
    },
  },
  methods: {
    setPage(page) {
      this.currentPage = page;
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    editPatient(index) {
      alert(`Edit Patient with ID: ${this.patients[index].id}`);
    },
    handleLogout() {
      this.isLoggedIn = false;
      // Handle logout logic
    },
  },
};
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.card {
  border-radius: 12px;
}

.card-header {
  border-radius: 12px 12px 0 0;
}

.table-responsive {
  padding: 1rem;
}
</style>
