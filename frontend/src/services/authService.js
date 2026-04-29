import API from "./api"; // ✅ use shared axios instance

// 🔐 LOGIN
export const loginUser = async (data) => {
  const res = await API.post("/auth/login", data);

  // store JWT token
  localStorage.setItem("token", res.data);

  return res.data;
};

// 📝 REGISTER
export const registerUser = async (data) => {
  const res = await API.post("/auth/register", data);
  return res.data;
};

// 🚪 LOGOUT
export const logoutUser = () => {
  localStorage.removeItem("token");
};

// 👤 GET TOKEN
export const getToken = () => {
  return localStorage.getItem("token");
};