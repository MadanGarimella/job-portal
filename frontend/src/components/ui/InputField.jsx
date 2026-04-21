export default function InputField({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>

      <input
        name={name}              // ✅ important
        type={type}
        placeholder={placeholder}
        value={value}            // ✅ controlled input
        onChange={onChange}      // ✅ state binding
        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}