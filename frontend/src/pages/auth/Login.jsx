import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AuthLayout from "../../components/layout/AuthLayout";
import InputField from "../../components/ui/InputField";
import { loginUser } from "../../services/authService";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await loginUser(form);

      localStorage.setItem("token", res.token);

      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Invalid credentials");
    } finally {
      setLoading(false);
    }

    useEffect(() => {
      const token = localStorage.getItem("token");

      if (token) {
        navigate("/dashboard");
      }
    }, []);
  };

  return (
    <AuthLayout>
      <h2 className="text-2xl font-semibold text-gray-800">Welcome Back</h2>
      <p className="text-sm text-gray-500 mt-1">
        Login to continue your journey
      </p>

      <form onSubmit={handleLogin} className="mt-6 space-y-4">
        <InputField
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
        />

        <InputField
          label="Password"
          name="password"
          type="password"
          placeholder="Enter your password"
          value={form.password}
          onChange={handleChange}
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <p className="text-sm text-gray-500 mt-4 text-center">
        Don’t have an account?{" "}
        <Link to="/register" className="text-blue-600 font-medium">
          Sign Up
        </Link>
      </p>
    </AuthLayout>
  );
}