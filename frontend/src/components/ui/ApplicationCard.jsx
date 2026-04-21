export default function ApplicationCard({ job }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold">{job.title}</h3>
        <p className="text-gray-500">{job.company}</p>
      </div>

      <div className="flex items-center gap-4">
        <span
          className={`px-3 py-1 rounded-full text-sm ${
            job.status === "Pending"
              ? "bg-yellow-100 text-yellow-600"
              : job.status === "Accepted"
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
          }`}
        >
          {job.status}
        </span>

        <button className="text-blue-600 hover:underline">
          View
        </button>
      </div>
    </div>
  );
}