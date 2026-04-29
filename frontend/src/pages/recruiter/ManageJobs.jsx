import { useEffect, useState } from "react";
import Navbar from "../../components/layout/Navbar";
import { getAllJobs, deleteJob } from "../../services/jobService";
import { useNavigate } from "react-router-dom";

export default function ManageJobs() {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  const fetchJobs = async () => {
    const res = await getAllJobs();
    setJobs(res.data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleDelete = async (id) => {
    await deleteJob(id);
    fetchJobs(); // refresh
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Manage Jobs</h1>

          <button
            onClick={() => navigate("/recruiter/post-job")}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            + New Job
          </button>
        </div>

        <div className="mt-6 space-y-4">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white p-4 rounded-xl shadow-sm border flex justify-between items-center"
            >
              <div>
                <h3 className="font-semibold">{job.title}</h3>
                <p className="text-sm text-gray-500">{job.company}</p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => navigate(`/recruiter/edit/${job.id}`)}
                  className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(job.id)}
                  className="px-3 py-1 bg-red-100 text-red-600 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}