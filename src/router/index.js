import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import PatientList from '@/components/PatientManagement/PatientList.vue';
import PatientForm from '@/components/PatientManagement/PatientForm.vue';
import CreateAppointment from '@/components/Appointment/CreateAppointment.vue';
import UpdateAppointment from '@/components/Appointment/UpdateAppointment.vue';
import DeleteAppointment from '@/components/Appointment/DeleteAppointment.vue';

const routes = [
  { path: '/', component: HomePage }, // Home route
  { path: '/patients', component: PatientList }, // Route for Patient List
  { path: '/patients/add', component: PatientForm }, // Route for Add New Patient Form
  { path: '/appointments/create', component: CreateAppointment }, // Route for Creating Appointment
  { path: '/appointments/update', component: UpdateAppointment }, // Route for Updating Appointment
  { path: '/appointments/delete', component: DeleteAppointment }, // Route for Deleting Appointment
  { path: '/:pathMatch(.*)*', redirect: '/' }, // Catch-all route that redirects to homepage
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
