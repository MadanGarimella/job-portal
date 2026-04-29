import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../../components/layout/Navbar";
import { getJobById } from "../../services/jobService";

export default function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await getJobById(id);
        setJob(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  if (loading) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  if (!job) {
    return <div className="p-10 text-center">Job not found</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-10 grid lg:grid-cols-3 gap-8">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-6">

          {/* HEADER CARD */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            <div className="flex justify-between items-start">

              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {job.title}
                </h1>

                <p className="text-gray-500 mt-1">{job.company}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    📍 {job.location}
                  </span>

                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                    💼 {job.type}
                  </span>

                  {job.salary && (
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                      💰 {job.salary}
                    </span>
                  )}
                </div>
              </div>

              {/* Company Logo Placeholder */}
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-lg font-bold text-gray-600">
                {job.company?.charAt(0)}
              </div>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            <h2 className="text-lg font-semibold mb-3">Job Description</h2>
            <p className="text-gray-600 leading-relaxed">
              {job.description}
            </p>
          </div>

          {/* SKILLS (if available later) */}
          {job.skills && (
            <div className="bg-white p-6 rounded-2xl shadow-sm border">
              <h2 className="text-lg font-semibold mb-3">Required Skills</h2>

              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">

          {/* APPLY CARD */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border sticky top-24">
            <h3 className="text-lg font-semibold">Apply for this job</h3>

            <p className="text-sm text-gray-500 mt-2">
              Submit your application and track status easily.
            </p>

            <button
              onClick={() => navigate(`/apply/${job.id}`)}
              className="mt-5 w-full bg-blue-600 text-white py-3 rounded-lg 
                         hover:bg-blue-700 active:scale-95 transition"
            >
              Apply Now
            </button>

            <button
              onClick={() => navigate(-1)}
              className="mt-3 w-full border py-2 rounded-lg hover:bg-gray-50"
            >
              Go Back
            </button>
          </div>

          {/* EXTRA INFO */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            <h4 className="text-sm font-semibold text-gray-700">
              Job Overview
            </h4>

            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <p>📍 Location: {job.location}</p>
              <p>💼 Type: {job.type}</p>
              {job.salary && <p>💰 Salary: {job.salary}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}