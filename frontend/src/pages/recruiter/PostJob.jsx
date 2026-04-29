import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import { createJob } from "../../services/jobService";

export default function PostJob() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    type: "",
    description: "",
    salary: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await createJob(form);

      alert("Job Posted Successfully 🚀");

      navigate("/jobs");
    } catch (err) {
      console.error(err);
      alert("Error posting job");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 py-10">

        <h1 className="text-2xl font-bold text-gray-900">
          Post a New Job
        </h1>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4 bg-white p-6 rounded-xl shadow-sm border">

          <input
            name="title"
            placeholder="Job Title"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          <input
            name="company"
            placeholder="Company Name"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          <input
            name="location"
            placeholder="Location"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          <select
            name="type"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          >
            <option value="">Select Job Type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
          </select>

          <textarea
            name="description"
            placeholder="Job Description"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            rows={4}
            required
          />

          <input
            name="salary"
            placeholder="Salary (e.g., ₹10 LPA)"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            {loading ? "Posting..." : "Post Job"}
          </button>
        </form>
      </div>
    </div>
  );
}