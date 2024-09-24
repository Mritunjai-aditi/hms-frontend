import axios from 'axios';

const API_URL = 'http://localhost:8000';  // Replace with actual backend URL

export function getPatients() {
  return axios.get(`${API_URL}/patients`);
}

export function addPatient(patientData) {
  return axios.post(`${API_URL}/patients`, patientData);
}
