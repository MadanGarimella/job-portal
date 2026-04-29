import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api",
});

export const getAllJobs = () => API.get("/jobs");

export const getJobById = (id) => API.get(`/jobs/${id}`); // ✅ ADD THIS

export const createJob = (data) => API.post("/jobs", data);

export const deleteJob = (id) => API.delete('/jobs/${id}');

export const updateJob = (id) => API.put('/jobs/${id}', data);