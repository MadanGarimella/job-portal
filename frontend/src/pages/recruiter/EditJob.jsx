import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import { getJobById, updateJob } from "../../services/jobService";

export default function EditJob() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({});

  useEffect(() => {
    const fetch = async () => {
      const res = await getJobById(id);
      setForm(res.data);
    };
    fetch();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateJob(id, form);
    navigate("/recruiter");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold">Edit Job</h1>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4 bg-white p-6 rounded-xl shadow-sm border">
          <input name="title" value={form.title || ""} onChange={handleChange} className="w-full border p-3 rounded" />
          <input name="company" value={form.company || ""} onChange={handleChange} className="w-full border p-3 rounded" />
          <input name="location" value={form.location || ""} onChange={handleChange} className="w-full border p-3 rounded" />
          <input name="type" value={form.type || ""} onChange={handleChange} className="w-full border p-3 rounded" />
          <textarea name="description" value={form.description || ""} onChange={handleChange} className="w-full border p-3 rounded" />
          <input name="salary" value={form.salary || ""} onChange={handleChange} className="w-full border p-3 rounded" />

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
            Update Job
          </button>
        </form>
      </div>
    </div>
  );
}