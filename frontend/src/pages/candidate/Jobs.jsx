import { useEffect, useState } from "react";
import Navbar from "../../components/layout/Navbar";
import JobCard from "../../components/ui/JobCard";
import { getAllJobs } from "../../services/jobService";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");

  const [loading, setLoading] = useState(true);

  // Fetch Jobs
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await getAllJobs();
        setJobs(res.data);
        setFilteredJobs(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Filter Logic
  useEffect(() => {
    let filtered = jobs;

    if (search) {
      filtered = filtered.filter((job) =>
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.company.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (location) {
      filtered = filtered.filter((job) =>
        job.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    if (type) {
      filtered = filtered.filter((job) =>
        job.type.toLowerCase() === type.toLowerCase()
      );
    }

    setFilteredJobs(filtered);
  }, [search, location, type, jobs]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* HEADER */}
        <h1 className="text-3xl font-bold text-gray-900">
          Find Your Next Job
        </h1>

        {/* FILTER BAR */}
        <div className="mt-6 grid gap-4 md:grid-cols-3 bg-white p-4 rounded-xl shadow-sm border">

          {/* Search */}
          <input
            type="text"
            placeholder="🔍 Search jobs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Location */}
          <input
            type="text"
            placeholder="📍 Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Job Type */}
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Types</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
          </select>
        </div>

        {/* RESULTS COUNT */}
        <p className="mt-4 text-sm text-gray-500">
          {filteredJobs.length} jobs found
        </p>

        {/* JOB LIST */}
        {loading ? (
          <p className="mt-10 text-center">Loading...</p>
        ) : filteredJobs.length === 0 ? (
          <p className="mt-10 text-center text-gray-500">
            No jobs match your filters
          </p>
        ) : (
          <div className="mt-6 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}