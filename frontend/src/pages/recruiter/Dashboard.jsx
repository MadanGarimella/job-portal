import { useNavigate } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";

export default function RecruiterDashboard() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-10">

        <h1 className="text-3xl font-bold text-gray-900">
          Recruiter Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your job postings
        </p>

        {/* ACTIONS */}
        <div className="mt-6">
          <button
            onClick={() => navigate("/recruiter/post-job")}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            + Post New Job
          </button>
        </div>
      </div>
    </div>
  );
}