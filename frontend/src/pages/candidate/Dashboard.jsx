import DashboardLayout from "../../components/layout/DashboardLayout";
import ApplicationCard from "../../components/ui/ApplicationCard";

const appliedJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    status: "Pending",
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "Amazon",
    status: "Accepted",
  },
  {
    id: 3,
    title: "UI Designer",
    company: "Adobe",
    status: "Rejected",
  },
];

export default function Dashboard() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold text-gray-900">
        My Applications
      </h1>

      <p className="text-gray-500 mt-1">
        Track your job applications and status
      </p>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold">3</h3>
          <p className="text-gray-500 text-sm">Total Applications</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-green-600">1</h3>
          <p className="text-gray-500 text-sm">Accepted</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-yellow-600">1</h3>
          <p className="text-gray-500 text-sm">Pending</p>
        </div>
      </div>

      {/* Applications List */}
      <div className="mt-8 space-y-4">
        {appliedJobs.map((job) => (
          <ApplicationCard key={job.id} job={job} />
        ))}
      </div>
    </DashboardLayout>
  );
}