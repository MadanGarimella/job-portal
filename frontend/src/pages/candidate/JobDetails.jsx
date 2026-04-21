import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react"; // ✅ import added
import Navbar from "../../components/layout/Navbar";
import { getJobById } from "../../services/jobservice";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    location: "Remote",
    type: "Full-time",
    description:
      "We are looking for a skilled frontend developer with experience in React and Tailwind CSS.",
    skills: ["React", "JavaScript", "Tailwind CSS"],
    salary: "₹8-12 LPA",
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "Amazon",
    location: "Bangalore",
    type: "Full-time",
    description:
      "Looking for backend engineers with strong knowledge of Java and Spring Boot.",
    skills: ["Java", "Spring Boot", "MySQL"],
    salary: "₹10-18 LPA",
  },
];

export default function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const job = jobs.find((j) => j.id === Number(id));

  const setJob = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
        const data = await getJobById(id);
        setJob(data);
    };

    fetchJob();
  }, [id]);

  if (!job) {
    return <div className="p-6">Job not found</div>;
  }

  // ✅ Proper handler
  const handleApply = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate(`/apply/${job.id}`);
    }, 800);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="text-blue-600 mb-6 hover:underline"
        >
          ← Back
        </button>

        {/* Job Header */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h1 className="text-3xl font-bold text-gray-900">
            {job.title}
          </h1>

          <p className="text-gray-600 mt-2">{job.company}</p>

          <div className="mt-4 flex gap-3 flex-wrap">
            <span className="bg-gray-100 px-3 py-1 rounded-full">
              {job.location}
            </span>
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
              {job.type}
            </span>
            <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full">
              {job.salary}
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="mt-6 bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Job Description</h2>
          <p className="text-gray-600">{job.description}</p>
        </div>

        {/* Skills */}
        <div className="mt-6 bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Required Skills</h2>

          <div className="flex flex-wrap gap-3">
            {job.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-100 px-4 py-2 rounded-lg text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Apply Section */}
        <div className="mt-6 bg-white p-8 rounded-2xl shadow-md flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">
              Ready to apply?
            </h3>
            <p className="text-gray-500 text-sm">
              Submit your application now.
            </p>
          </div>

          <button
            onClick={handleApply}
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 active:scale-95 transition"
          >
            {loading ? "Processing..." : "Apply Now"}
          </button>
        </div>
      </div>
    </div>
  );
}