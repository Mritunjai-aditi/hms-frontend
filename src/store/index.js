import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// Define dummy patient data
const patientsData = [
  { id: 1, name: 'John Doe', age: 30, gender: 'Male', contact: '1234567890', medicalHistory: 'None' },
  { id: 2, name: 'Jane Smith', age: 25, gender: 'Female', contact: '0987654321', medicalHistory: 'Allergy to penicillin' },
  { id: 3, name: 'Michael Johnson', age: 45, gender: 'Male', contact: '5555555555', medicalHistory: 'Diabetes' },
  { id: 4, name: 'Sarah Williams', age: 60, gender: 'Female', contact: '4444444444', medicalHistory: 'Hypertension' },
  { id: 5, name: 'David Brown', age: 35, gender: 'Male', contact: '3333333333', medicalHistory: 'Asthma' },
];

export default new Vuex.Store({
  state: {
    patients: []
  },
  mutations: {
    setPatients(state, patients) {
      state.patients = patients;
    }
  },
  actions: {
    fetchPatients({ commit }) {
      // Use dummy data for now, replace with API call later
      commit('setPatients', patientsData);
    }
  }
});
