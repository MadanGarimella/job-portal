import { Link } from "react-router-dom";
import AuthLayout from "../../components/layout/AuthLayout";
import InputField from "../../components/ui/InputField";

export default function Register() {
  return (
    <AuthLayout>
      <h2 className="text-2xl font-semibold text-gray-800">
        Create Account
      </h2>
      <p className="text-sm text-gray-500 mt-1">
        Start your job journey today
      </p>

      <form className="mt-6 space-y-4">
        <InputField label="Full Name" placeholder="Enter your name" />
        <InputField label="Email" type="email" placeholder="Enter your email" />
        <InputField label="Password" type="password" placeholder="Create password" />

        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Register
        </button>
      </form>

      <p className="text-sm text-gray-500 mt-4 text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-600 font-medium">
          Login
        </Link>
      </p>
    </AuthLayout>
  );
}