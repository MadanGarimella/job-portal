import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import { useState } from "react";
import { applyJob } from "../../services/applicationService";

export default function ApplyJob() {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fromData = new formData();
    fromData.append("name", fromData.name);
    fromData.append("email", fromData.email);
    fromData.append("resume", fromData.resume);

    try {
      await applyJob(id, fromData);
      alert("Application Submitted!");
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
    }
    console.log("Application Submitted:", form);

    alert("Application submitted successfully!");

    navigate("/dashboard");
  };

  const [form, setForm] = useState({
    name: "",
    email: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="max-w-2xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold text-gray-900">
          Apply for Job #{id}
        </h1>

        <p className="text-gray-500 mt-1">
          Complete the form below to submit your application
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-6 bg-white p-8 rounded-2xl shadow-md space-y-4"
        >
          <div>
            <label className="text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Upload Resume</label>
            <input
              type="file"
              name="resume"
              required
              onChange={handleChange}
              className="w-full mt-1"
            />

            {form.resume && (
              <p className="text-sm text-gray-500 mt-1">
                Selected: {form.resume.name}
              </p>
            )}
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 active:scale-95 transition">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}
