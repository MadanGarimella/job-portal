import { Routes, Route } from "react-router-dom";
import Landing from "../pages/public/Landing";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import CandidateDashboard from "../pages/candidate/Dashboard";
import Jobs from "../pages/candidate/Jobs";
import JobDetails from "../pages/candidate/JobDetails";
import ApplyJob from "../pages/candidate/ApplyJob";
import ProtectedRoute from "./ProtectedRoute";

// ✅ FIXED imports
import RecruiterDashboard from "../pages/recruiter/Dashboard";
import PostJob from "../pages/recruiter/PostJob";
import ManageJobs from "../pages/recruiter/ManageJobs";
import EditJob from "../pages/recruiter/EditJob";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Landing />} />

      {/* Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Candidate */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <CandidateDashboard />
          </ProtectedRoute>
        }
      />

      <Route path="/jobs" element={<Jobs />} />
      <Route path="/jobs/:id" element={<JobDetails />} />

      {/* ✅ Recruiter */}
      <Route
        path="/recruiter"
        element={
          <ProtectedRoute role="ROLE_RECRUITER">
            <RecruiterDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/recruiter/post-job"
        element={
          <ProtectedRoute role="ROLE_RECRUITER">
            <PostJob />
          </ProtectedRoute>
        }
      />
      <Route path="/recuiter/manage" element={<ManageJobs />} />
      <Route path="/recuiter/edit/:id" element={<EditJob />} />

      {/* Apply */}
      <Route
        path="/apply/:id"
        element={
          <ProtectedRoute>
            <ApplyJob />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
