import { useNavigate } from "react-router-dom";

export default function JobCard({ job }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/jobs/${job.id}`)}
      className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg cursor-pointer transition-all duration-200"
    >
      <h3 className="text-xl font-semibold text-gray-800">
        {job.title}
      </h3>

      <p className="text-gray-600 mt-1">{job.company}</p>

      <div className="mt-4 flex flex-wrap gap-2 text-sm">
        <span className="bg-gray-100 px-3 py-1 rounded-full">
          {job.location}
        </span>
        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
          {job.type}
        </span>
      </div>

      <div className="mt-6">
        <button
          onClick={(e) => {
            e.stopPropagation(); // prevent card click
            navigate(`/jobs/${job.id}`);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 active:scale-95 transition"
        >
          View Details
        </button>
      </div>
    </div>
  );
}