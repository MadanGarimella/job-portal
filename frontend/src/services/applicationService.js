import API from "./api";

export const applyJob = async (id, formData) => {
  const res = await API.post(`/applications/apply/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
};