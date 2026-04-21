import { Link } from "react-router-dom";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md p-6 hidden md:block">
        <h2 className="text-xl font-bold text-blue-600">JobPortal</h2>

        <nav className="mt-8 space-y-4">
          <Link
            to="/dashboard"
            className="block text-gray-700 hover:text-blue-600"
          >
            Dashboard
          </Link>
          <Link to="/jobs" className="block text-gray-700 hover:text-blue-600">
            Browse Jobs
          </Link>
        </nav>
        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.locatio.href = "/login";
          }}
          className="mt-8 text-red-500 hover:underline"
        >
          Logout
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 p-6">{children}</div>
    </div>
  );
}
