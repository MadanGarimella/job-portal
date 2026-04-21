import API from "./api";

export const getAllJobs = async () => {
  const res = await API.get("/jobs");
  return res.data;
};

export const getJobById = async (id) => {
  const res = await API.get(`/jobs/${id}`);
  return res.data;
};