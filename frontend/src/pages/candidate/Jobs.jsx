import { useEffect, useState } from "react";
import { getAllJobs } from "../../services/jobService";
import Navbar from "../../components/layout/Navbar";
import JobCard from "../../components/ui/JobCard";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp",
    location: "Remote",
    type: "Full-time",
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "InnovateX",
    location: "Bangalore",
    type: "Full-time",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "DesignHub",
    location: "Hyderabad",
    type: "Part-time",
  },
];

export default function Jobs() {
  const [jobs, setjob] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await getAllJobs();
        setJobs(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900">Find Your Next Job</h1>

        {/* Search + Filters */}
        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search jobs..."
            className="flex-1 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
          />

          <select className="px-4 py-3 border rounded-xl">
            <option>Location</option>
            <option>Remote</option>
            <option>Hyderabad</option>
            <option>Bangalore</option>
          </select>

          <select className="px-4 py-3 border rounded-xl">
            <option>Job Type</option>
            <option>Full-time</option>
            <option>Part-time</option>
          </select>
        </div>

        {/* Job List */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
}
