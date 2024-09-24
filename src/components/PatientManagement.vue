<template>
    <div>
      <h1>Patient Management</h1>
      <PatientList />
      <PatientForm />
    </div>
  </template>
  
  <script>
  import PatientList from './PatientManagement/PatientList.vue';
  import PatientForm from './PatientManagement/PatientForm.vue';
  
  export default {
    components: {
      PatientList,
      PatientForm
    }
  };
  </script>  