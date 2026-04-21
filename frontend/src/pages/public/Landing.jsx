import { useNavigate } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import JobCard from "../../components/ui/JobCard";

export default function Landing() {
  const navigate = useNavigate();

  const featuredJobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Google",
      location: "Remote",
      type: "Full-time",
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "Amazon",
      location: "Bangalore",
      type: "Full-time",
    },
    {
      id: 3,
      title: "UI Designer",
      company: "Adobe",
      location: "Hyderabad",
      type: "Part-time",
    },
  ];
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold text-gray-900">
          Find Your Dream Job Faster
        </h1>

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          Explore thousands of jobs, apply with ease, and track your career
          growth—all in one place.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => navigate("/register")}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 active:scale-95 transition"
          >
            Get Started
          </button>

          <button
            onClick={() => navigate("/jobs")}
            className="border px-6 py-3 rounded-xl hover:bg-gray-100 transition"
          >
            Browse Jobs
          </button>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-900">
            Featured Jobs
          </h2>

          <a href="/jobs" className="text-blue-600 font-medium hover:underline">
            View All
          </a>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-lg font-semibold">Smart Job Matching</h3>
            <p className="text-gray-500 mt-2">
              Find jobs tailored to your skills and interests.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Easy Applications</h3>
            <p className="text-gray-500 mt-2">
              Apply to jobs with just a few clicks.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Track Progress</h3>
            <p className="text-gray-500 mt-2">
              Monitor your applications in real-time.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold text-blue-600">10K+</h3>
            <p className="text-gray-600 mt-2">Jobs Posted</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-600">5K+</h3>
            <p className="text-gray-600 mt-2">Companies</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-600">20K+</h3>
            <p className="text-gray-600 mt-2">Candidates</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-600">15K+</h3>
            <p className="text-gray-600 mt-2">Placements</p>
          </div>
        </div>
      </section>
    </div>
  );
}
