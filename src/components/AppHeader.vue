<template>
  <header class="navbar navbar-expand-lg navbar-dark bg-dark p-3 shadow">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Aditi</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
        <ul class="navbar-nav">
          <!-- Patient Management with Submenu -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="patientDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Patient Management
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/patients/add">Add Patient</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/patients">View Patients</router-link>
              </li>
            </ul>
          </li>

          <!-- Appointment Scheduling with Submenu -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="appointmentDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Appointment Scheduling
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/appointments/create">Creating Appointment</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/appointments/update">Update Appointment</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/appointments/delete">Delete Appointment</router-link>
              </li>
            </ul>
          </li>
        </ul>
        <div>
          <router-link to="/signin" class="btn btn-outline-light btn-sm">Sign In</router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    isLoggedIn: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    logout() {
      this.$emit('logout');
    },
  },
};
</script>

<style scoped>
header {
  background-color: #343a40;
  color: #fff;
}
</style>
