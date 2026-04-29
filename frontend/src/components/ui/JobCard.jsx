import { useNavigate } from "react-router-dom";

export default function JobCard({ job }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 
                    hover:shadow-lg hover:-translate-y-1 transition duration-300">

      {/* Top Section */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {job.title}
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            {job.company}
          </p>
        </div>

        {/* Placeholder Logo */}
        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-sm font-bold text-gray-600">
          {job.company?.charAt(0)}
        </div>
      </div>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">
          📍 {job.location}
        </span>

        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs">
          💼 {job.type}
        </span>

        {job.salary && (
          <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs">
            💰 {job.salary}
          </span>
        )}
      </div>

      {/* Divider */}
      <div className="my-4 border-t"></div>

      {/* Action */}
      <button
        onClick={() => navigate(`/jobs/${job.id}`)}
        className="w-full bg-blue-600 text-white py-2 rounded-lg 
                   hover:bg-blue-700 active:scale-95 transition"
      >
        View Details →
      </button>
    </div>
  );
}