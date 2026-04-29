import { Link } from "react-router-dom";
import { getUserRole } from "../../utils/auth";

export default function Navbar() {
  const role = getUserRole();

  return (
    <nav className="w-full bg-white shadow-sm px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600">
        JobPortal
      </Link>

      <div className="flex gap-6 items-center">

        <Link to="/jobs" className="text-gray-600 hover:text-blue-600">
          Jobs
        </Link>

        {role === "ROLE_RECRUITER" && (
          <Link to="/recruiter" className="text-gray-600 hover:text-blue-600">
            Recruiter
          </Link>
        )}

        {!role && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Sign Up</Link>
          </>
        )}

        {role && (
          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/";
            }}
            className="text-red-500"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}